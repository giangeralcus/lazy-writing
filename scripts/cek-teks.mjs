#!/usr/bin/env node
// Cek mekanis untuk Gerbang Kirim lazy-writing. Tanpa dependensi, Node 18+.
// Pakai: node scripts/cek-teks.mjs [--strict] <file...>        ("-" untuk stdin)
//        git diff -U0 -- <file> | node scripts/cek-teks.mjs --diff -
// Exit: 0 bersih atau hanya PERINGATAN, 1 ada GAGAL (atau PERINGATAN dengan --strict),
//       2 salah pakai atau ada file yang tidak bisa dibaca.
// Blok kode (``` atau ~~~, dan indentasi 4 spasi) serta `inline code` dilewati. Daerah di antara
// baris <!-- cek-teks: off --> dan <!-- cek-teks: on --> hanya dicek untuk GAGAL (em dash, en dash).

import { readFileSync, realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const BANTUAN = `Pakai:
  node cek-teks.mjs [--strict] <file...>     cek file utuh ("-" untuk stdin)
  node cek-teks.mjs [--strict] --diff <diff...>
                                             cek hanya baris yang ditambah di unified diff,
                                             misalnya: git diff -U0 -- README.md | node cek-teks.mjs --diff -
Opsi:
  --strict   PERINGATAN juga dihitung gagal
  -h, --help tampilkan bantuan ini`;

const EM_DASH = '—';
const APOS = "['’]";

// Daftar sengaja pendek: hanya frasa yang hampir selalu slop, supaya temuan bisa dipercaya.
const PERINGATAN = [
  { aturan: 'LW-29', pesan: 'pembuka klise', pola: /\b(di era (digital|modern|yang serba)|di zaman sekarang ini|seiring (dengan )?(perkembangan|berjalannya waktu)|(tidak|tak) (dapat|bisa) di[pm]ungkiri|seperti yang kita ketahui)/i },
  { aturan: 'LW-29', pesan: 'frasa terlarang', pola: /\bhiruk[ -]pikuk\b/i },
  { aturan: 'LW-29', pesan: 'pengumuman (signposting)', pola: new RegExp(`\\b(mari kita (menyelami|bahas|eksplorasi|mulai)|penting untuk (dicatat|dipahami|diketahui)|let${APOS}?s dive|it${APOS}?s worth noting|it is important to note|without further ado|in the realm of|in today${APOS}?s (world|fast-paced|digital|landscape|era|age))`, 'i') },
  { aturan: 'LW-18', pesan: 'penutup chatbot', pola: new RegExp(`\\b(semoga (artikel ini |tulisan ini |penjelasan ini )?(bermanfaat|membantu)|demikian(lah)? (artikel|informasi|penjelasan)|jangan ragu untuk|tunggu apa lagi|ada pertanyaan lain|i hope this helps|hope this helps|let me know if you have any questions|don${APOS}?t hesitate to|feel free to reach out)`, 'i') },
  { aturan: 'LW-25', pesan: 'buzzword', pola: /\b(delve|tapestry|testament to|game[- ]changer|seamless(ly)?|cutting[- ]edge|revolutioni[sz]\w*|revolusioner|ai[- ]powered|next[- ]generation)\b/i },
  { aturan: 'LW-28', pesan: 'negative parallelism', pola: new RegExp(`\\b(bukan (hanya|sekadar|cuma)\\b.{1,80}?(,\\s*(ini|itu)\\b|\\b(tetapi|tapi|melainkan)\\b)|it${APOS}?s not (just |only )?about\\b.{1,80}\\bit${APOS}?s\\b|it${APOS}?s not (just|only)\\b.{1,80}\\bit${APOS}?s\\b|not (just|only)\\b.{1,80}\\bbut\\b)`, 'i') },
  { aturan: 'LW-28', pesan: 'ekor tack-on', pola: /,\s+(menciptakan|menjadikan(nya)?|menandakan|menunjukkan bahwa|highlighting|underscoring|emphasizing|showcasing|cementing|revolutionizing)\b/i },
  { aturan: 'LW-16', pesan: 'emoji di heading atau bullet', pola: /^(#{1,6}\s.*(\p{Emoji_Presentation}|\p{Extended_Pictographic}️)|\s*([-*+]|\d+\.)\s+(\p{Emoji_Presentation}|\p{Extended_Pictographic}️))/u },
  { aturan: 'LW-07', pesan: 'placeholder masih ada', pola: /\[(data asli|real data|link|nama|todo|tbd|contoh)\b[^\]]*\](?!\()/i },
];

const PENANDA_OFF = /^\s*<!--\s*cek-teks:\s*off\s*-->\s*$/i;
const PENANDA_ON = /^\s*<!--\s*cek-teks:\s*on\s*-->\s*$/i;
const PAGAR = /^\s*(`{3,}|~{3,})/;
const BARIS_PEMISAH_TABEL = /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/;
const ITEM_DAFTAR = /^\s*([-*+]|\d+[.)])\s/;

function buangKodeInline(baris) {
  return baris.replace(/`[^`]*`/g, (m) => ' '.repeat(m.length));
}

// Dua tanda hubung atau en dash berspasi sebagai sisipan. Dilewati kalau berada di antara
// sel tabel, atau kalau token sesudahnya flag, path, atau URL (misalnya "npm run x -- --flag").
function cekTandaSambung(baris) {
  const hasil = [];
  for (const [pola, pesan] of [[/(\S)\s--\s(\S+)/g, 'dua tanda hubung sebagai em dash'], [/(\S)\s–\s(\S+)/g, 'en dash sebagai sisipan']]) {
    for (const m of baris.matchAll(pola)) {
      if (m[1] === '|' || /^(-|\||http|\/)/.test(m[2])) continue;
      hasil.push({ kolom: m.index + 2, pesan });
    }
  }
  return hasil;
}

export function cekTeks(teks) {
  const temuan = [];
  let pagar = null; // { karakter, panjang, baris }
  let kodeIndentasi = false;
  let mati = false;
  let sebelumnyaKosong = true;
  let dalamDaftar = false;

  teks.replace(/^﻿/, '').split(/\r?\n/).forEach((asli, i) => {
    const nomor = i + 1;
    const kosong = asli.trim() === '';

    if (pagar) {
      const m = asli.match(PAGAR);
      if (m && m[1][0] === pagar.karakter && m[1].length >= pagar.panjang && asli.slice(m[0].length).trim() === '') pagar = null;
      return;
    }
    const buka = asli.match(PAGAR);
    if (buka) {
      pagar = { karakter: buka[1][0], panjang: buka[1].length, baris: nomor };
      sebelumnyaKosong = false;
      return;
    }

    const indentasi = /^( {4}|\t)/.test(asli);
    if (kodeIndentasi && (indentasi || kosong)) return;
    kodeIndentasi = false;
    if (indentasi && sebelumnyaKosong && !dalamDaftar) {
      kodeIndentasi = true;
      return;
    }
    if (!kosong) dalamDaftar = ITEM_DAFTAR.test(asli) || (dalamDaftar && /^\s/.test(asli));
    sebelumnyaKosong = kosong;

    if (PENANDA_OFF.test(asli)) { mati = true; return; }
    if (PENANDA_ON.test(asli)) { mati = false; return; }

    const baris = buangKodeInline(asli);
    const kutipan = asli.trim();

    let kolom = baris.indexOf(EM_DASH);
    while (kolom !== -1) {
      temuan.push({ baris: nomor, kolom: kolom + 1, tingkat: 'GAGAL', aturan: 'LW-05', pesan: 'em dash', kutipan });
      kolom = baris.indexOf(EM_DASH, kolom + 1);
    }
    if (!BARIS_PEMISAH_TABEL.test(baris)) {
      for (const t of cekTandaSambung(baris)) {
        temuan.push({ baris: nomor, kolom: t.kolom, tingkat: 'GAGAL', aturan: 'LW-05', pesan: t.pesan, kutipan });
      }
    }

    if (mati) return;
    for (const p of PERINGATAN) {
      const m = baris.match(p.pola);
      if (m) {
        temuan.push({ baris: nomor, kolom: m.index + 1, tingkat: 'PERINGATAN', aturan: p.aturan, pesan: `${p.pesan}: "${m[0].trim()}"`, kutipan });
      }
    }
  });

  if (pagar) {
    temuan.push({ baris: pagar.baris, kolom: 1, tingkat: 'PERINGATAN', aturan: 'format', pesan: 'blok kode tidak ditutup; sisa file tidak dicek', kutipan: '' });
  }
  return temuan;
}

// Ambil baris yang ditambah dari unified diff: { path: Map(nomorBarisBaru -> teks) }.
export function barisTambahan(diff) {
  const hasil = new Map();
  let path = null;
  let nomor = 0;
  for (const baris of diff.split(/\r?\n/)) {
    if (baris.startsWith('+++ ')) {
      const nama = baris.slice(4).replace(/\t.*$/, '').trim();
      path = nama === '/dev/null' ? null : nama.replace(/^b\//, '');
      if (path && !hasil.has(path)) hasil.set(path, new Map());
      continue;
    }
    if (baris.startsWith('--- ') || baris.startsWith('diff ') || baris.startsWith('index ')) continue;
    const hunk = baris.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/);
    if (hunk) { nomor = Number(hunk[1]); continue; }
    if (!path) continue;
    if (baris.startsWith('+')) { hasil.get(path).set(nomor, baris.slice(1)); nomor++; }
    else if (baris.startsWith(' ')) nomor++;
  }
  return hasil;
}

const UTF8 = new TextDecoder('utf-8', { fatal: true });

export function bacaTeks(buf) {
  if (buf[0] === 0xff && buf[1] === 0xfe) return new TextDecoder('utf-16le').decode(buf.subarray(2));
  if (buf[0] === 0xfe && buf[1] === 0xff) return new TextDecoder('utf-16be').decode(buf.subarray(2));
  if (buf.includes(0)) throw new Error('bukan UTF-8 (ada byte NUL)');
  let teks;
  try {
    teks = UTF8.decode(buf);
  } catch {
    throw new Error('bukan UTF-8');
  }
  if (teks.includes('�')) throw new Error('bukan UTF-8 (ada karakter pengganti U+FFFD)');
  return teks.replace(/^﻿/, '');
}

function main(argv) {
  if (argv.includes('-h') || argv.includes('--help')) {
    console.log(BANTUAN);
    return 0;
  }
  const strict = argv.includes('--strict');
  const modeDiff = argv.includes('--diff');
  const tidakDikenal = argv.filter((a) => a.startsWith('-') && a !== '-' && !['--strict', '--diff'].includes(a));
  if (tidakDikenal.length > 0) {
    console.error(`Opsi tidak dikenal: ${tidakDikenal.join(', ')}\n\n${BANTUAN}`);
    return 2;
  }
  const sumber = argv.filter((a) => a === '-' || !a.startsWith('-'));
  if (sumber.length === 0) {
    console.error(BANTUAN);
    return 2;
  }

  let gagal = 0;
  let peringatan = 0;
  let rusak = 0;
  let jumlahFile = 0;
  const lapor = (nama, t) => {
    if (t.tingkat === 'GAGAL') gagal++; else peringatan++;
    console.log(`${nama}:${t.baris}:${t.kolom}  ${t.tingkat}  ${t.aturan}  ${t.pesan}  | ${t.kutipan.slice(0, 100)}`);
  };
  const baca = (nama) => {
    try {
      return bacaTeks(readFileSync(nama === '-' ? 0 : nama));
    } catch (err) {
      console.error(`${nama}: tidak bisa dibaca (${err.code ?? err.message})`);
      rusak++;
      return null;
    }
  };

  for (const s of sumber) {
    const teks = baca(s);
    if (teks === null) continue;
    if (!modeDiff) {
      jumlahFile++;
      cekTeks(teks).forEach((t) => lapor(s, t));
      continue;
    }
    for (const [path, tambahan] of barisTambahan(teks)) {
      if (tambahan.size === 0) continue;
      jumlahFile++;
      let utuh = null;
      try {
        utuh = bacaTeks(readFileSync(path));
      } catch {
        // File tidak ada di disk: cek baris tambahannya saja, tanpa konteks blok kode.
      }
      if (utuh !== null) {
        cekTeks(utuh).filter((t) => tambahan.has(t.baris)).forEach((t) => lapor(path, t));
      } else {
        const nomor = [...tambahan.keys()];
        cekTeks([...tambahan.values()].join('\n')).forEach((t) => lapor(path, { ...t, baris: nomor[t.baris - 1] ?? t.baris }));
      }
    }
  }

  console.log(`cek-teks: ${gagal} GAGAL, ${peringatan} PERINGATAN di ${jumlahFile} file${modeDiff ? ' (hanya baris yang ditambah)' : ''}`);
  if (rusak > 0) return 2;
  if (gagal > 0) return 1;
  if (strict && peringatan > 0) return 1;
  return 0;
}

function dipanggilLangsung() {
  if (!process.argv[1]) return false;
  try {
    return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));
  } catch {
    return false;
  }
}

if (dipanggilLangsung()) {
  process.exitCode = main(process.argv.slice(2));
}

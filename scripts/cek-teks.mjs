#!/usr/bin/env node
// Cek mekanis untuk Gerbang Kirim lazy-writing. Tanpa dependensi, Node 18+.
// Pakai: node scripts/cek-teks.mjs [--strict] <file...>   (pakai "-" untuk stdin)
// Exit: 0 bersih atau hanya PERINGATAN, 1 ada GAGAL (atau PERINGATAN dengan --strict), 2 salah pakai.
// Kode di dalam ``` atau ~~~ dan `inline code` dilewati. Daerah di antara
// <!-- cek-teks: off --> dan <!-- cek-teks: on --> hanya dicek untuk GAGAL (em dash).

import { readFileSync, realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const EM_DASH = '—';

// Daftar sengaja pendek: hanya frasa yang hampir selalu slop, supaya temuan bisa dipercaya.
const PERINGATAN = [
  { aturan: 'LW-29', pesan: 'pembuka klise', pola: /\b(di era (digital|modern|yang serba)|di zaman sekarang ini|seiring (dengan )?(perkembangan|berjalannya waktu)|tidak dapat dipungkiri|tak (dapat|bisa) (di)?pungkiri|seperti yang kita ketahui)/i },
  { aturan: 'LW-29', pesan: 'frasa terlarang', pola: /\bhiruk[ -]pikuk\b/i },
  { aturan: 'LW-29', pesan: 'pengumuman (signposting)', pola: /\b(mari kita (menyelami|bahas|eksplorasi|mulai)|penting untuk (dicatat|dipahami|diketahui)|let'?s dive|it'?s worth noting|it is important to note|without further ado|in today'?s)/i },
  { aturan: 'LW-18', pesan: 'penutup chatbot', pola: /\b(semoga (artikel ini |tulisan ini |penjelasan ini )?(bermanfaat|membantu)|demikian(lah)? (artikel|informasi|penjelasan)|jangan ragu untuk|tunggu apa lagi|ada pertanyaan lain|i hope this helps|hope this helps|let me know if you have any questions|don'?t hesitate to|feel free to reach out)/i },
  { aturan: 'LW-25', pesan: 'buzzword', pola: /\b(delve|tapestry|testament to|game[- ]changer|seamless(ly)?|cutting[- ]edge|revolutioni[sz]\w*|revolusioner|ai[- ]powered|next[- ]generation)\b/i },
  { aturan: 'LW-28', pesan: 'negative parallelism', pola: /\b(bukan (hanya|sekadar|cuma)\b.{1,80}\b(tetapi|tapi|melainkan)\b|not (just|only)\b.{1,80}\bbut\b)/i },
  { aturan: 'LW-28', pesan: 'ekor tack-on', pola: /,\s+(menciptakan|menjadikannya|menandakan)\b/i },
  { aturan: 'LW-16', pesan: 'emoji di heading atau bullet', pola: /^(#{1,6}\s.*\p{Extended_Pictographic}|\s*([-*+]|\d+\.)\s+\p{Extended_Pictographic})/u },
  { aturan: 'LW-07', pesan: 'placeholder masih ada', pola: /\[(DATA ASLI|REAL DATA|LINK|NAMA|TODO)\]/ },
];

function buangKodeInline(baris) {
  return baris.replace(/`[^`]*`/g, (m) => ' '.repeat(m.length));
}

export function cekTeks(teks) {
  const temuan = [];
  let dalamKode = false;
  let mati = false;
  const semuaBaris = teks.split(/\r?\n/);

  semuaBaris.forEach((asli, i) => {
    const nomor = i + 1;
    if (/^\s*(```|~~~)/.test(asli)) {
      dalamKode = !dalamKode;
      return;
    }
    if (dalamKode) return;
    if (/<!--\s*cek-teks:\s*off\s*-->/i.test(asli)) { mati = true; return; }
    if (/<!--\s*cek-teks:\s*on\s*-->/i.test(asli)) { mati = false; return; }

    const baris = buangKodeInline(asli);

    let kolom = baris.indexOf(EM_DASH);
    while (kolom !== -1) {
      temuan.push({ baris: nomor, kolom: kolom + 1, tingkat: 'GAGAL', aturan: 'LW-05', pesan: 'em dash', kutipan: asli.trim() });
      kolom = baris.indexOf(EM_DASH, kolom + 1);
    }
    const dobel = baris.search(/\S\s--\s\S/);
    if (dobel !== -1) {
      temuan.push({ baris: nomor, kolom: dobel + 2, tingkat: 'GAGAL', aturan: 'LW-05', pesan: 'dua tanda hubung sebagai em dash', kutipan: asli.trim() });
    }

    if (mati) return;
    for (const p of PERINGATAN) {
      const m = baris.match(p.pola);
      if (m) {
        temuan.push({ baris: nomor, kolom: m.index + 1, tingkat: 'PERINGATAN', aturan: p.aturan, pesan: `${p.pesan}: "${m[0].trim()}"`, kutipan: asli.trim() });
      }
    }
  });
  return temuan;
}

function main(argv) {
  const strict = argv.includes('--strict');
  const files = argv.filter((a) => a !== '--strict');
  if (files.length === 0) {
    console.error('Pakai: node scripts/cek-teks.mjs [--strict] <file...>');
    return 2;
  }

  let gagal = 0;
  let peringatan = 0;
  for (const file of files) {
    let teks;
    try {
      teks = readFileSync(file === '-' ? 0 : file, 'utf8');
    } catch (err) {
      console.error(`${file}: tidak bisa dibaca (${err.code ?? err.message})`);
      return 2;
    }
    for (const t of cekTeks(teks)) {
      if (t.tingkat === 'GAGAL') gagal++; else peringatan++;
      console.log(`${file}:${t.baris}:${t.kolom}  ${t.tingkat}  ${t.aturan}  ${t.pesan}  | ${t.kutipan.slice(0, 100)}`);
    }
  }
  console.log(`cek-teks: ${gagal} GAGAL, ${peringatan} PERINGATAN di ${files.length} file`);
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

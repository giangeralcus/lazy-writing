// Jalankan dari root repo: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { barisTambahan, bacaTeks, cekTeks } from '../scripts/cek-teks.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const script = join(root, 'scripts', 'cek-teks.mjs');
const EM = '—';
const EN = '–';

const jalankan = (args, input, cwd) =>
  spawnSync(process.execPath, [script, ...args], { input, encoding: 'utf8', cwd });
const aturan = (teks) => cekTeks(teks).map((t) => `${t.tingkat} ${t.aturan}`);

test('teks bersih: tanpa temuan', () => {
  assert.deepEqual(cekTeks('PR #26 sudah di-merge. Situs live berubah setelah Hostinger memasang versi baru.'), []);
});

test('em dash di prosa: GAGAL LW-05', () => {
  const t = cekTeks(`Situsnya cepat ${EM} dan aman.`);
  assert.equal(t.length, 1);
  assert.equal(t[0].tingkat, 'GAGAL');
  assert.equal(t[0].aturan, 'LW-05');
});

test('en dash berspasi: GAGAL; rentang tanpa spasi lolos', () => {
  assert.deepEqual(aturan(`Situsnya cepat ${EN} dan aman.`), ['GAGAL LW-05']);
  assert.deepEqual(cekTeks(`Buka 9${EN}17 setiap hari.`), []);
});

test('dua tanda hubung berspasi: GAGAL, kecuali flag, URL, path, dan tabel', () => {
  assert.deepEqual(aturan('Situsnya cepat -- dan aman.'), ['GAGAL LW-05']);
  assert.deepEqual(cekTeks('Pakai --strict untuk CI.'), []);
  assert.deepEqual(cekTeks('Jalankan npm run smoke -- https://gpindo.com dulu.'), []);
  assert.deepEqual(cekTeks('Jalankan git diff -- /tmp/a sekali.'), []);
  assert.deepEqual(cekTeks('Jalankan npm test -- --watch sekali.'), []);
  assert.deepEqual(cekTeks('| a | b |\n|---|---|\n| x | -- |'), []);
});

test('blok kode, kode indentasi, dan kode inline dilewati', () => {
  assert.deepEqual(cekTeks(`\`\`\`\nx ${EM} y\n\`\`\`\nTeks biasa.`), []);
  assert.deepEqual(cekTeks(`Karakter \`${EM}\` dilarang.`), []);
  assert.deepEqual(cekTeks(`Contoh:\n\n    x ${EM} y\n\nTeks biasa.`), []);
});

test('pagar kode ditutup oleh karakter dan panjang yang sama', () => {
  // ``` di dalam blok ```` tidak menutup blok, jadi em dash sesudahnya tetap di dalam kode.
  assert.deepEqual(cekTeks(`\`\`\`\`\n\`\`\`\nx ${EM} y\n\`\`\`\`\nTeks biasa.`), []);
  // ~~~ tidak menutup blok yang dibuka dengan ```.
  assert.deepEqual(cekTeks(`\`\`\`\n~~~\nx ${EM} y\n\`\`\``), []);
});

test('blok kode yang tidak ditutup: PERINGATAN', () => {
  const t = cekTeks(`Teks.\n\`\`\`\nx ${EM} y`);
  assert.deepEqual(t.map((x) => [x.baris, x.tingkat, x.aturan]), [[2, 'PERINGATAN', 'format']]);
});

test('paragraf lanjutan daftar yang diindentasi tetap dicek', () => {
  assert.deepEqual(aturan(`- Item satu\n\n    lanjutan ${EM} item.`), ['GAGAL LW-05']);
});

test('daerah off: PERINGATAN mati, em dash tetap GAGAL', () => {
  const t = cekTeks(`<!-- cek-teks: off -->\nSemoga membantu!\nA ${EM} B\n<!-- cek-teks: on -->\nSemoga membantu!`);
  assert.deepEqual(t.map((x) => [x.baris, x.tingkat, x.aturan]), [
    [3, 'GAGAL', 'LW-05'],
    [5, 'PERINGATAN', 'LW-18'],
  ]);
});

test('penanda off hanya berlaku kalau satu baris penuh', () => {
  assert.deepEqual(aturan('Tulis `<!-- cek-teks: off -->` di baris sendiri.\nSemoga membantu!'), ['PERINGATAN LW-18']);
  assert.deepEqual(aturan('Lihat <!-- cek-teks: off --> di sini.\nSemoga membantu!'), ['PERINGATAN LW-18']);
});

test('frasa klise Indonesia dan English: PERINGATAN', () => {
  const kasus = [
    ['Di era digital yang serba cepat ini, kita butuh tracking.', 'LW-29'],
    ['Tak bisa dimungkiri, biaya naik.', 'LW-29'],
    ['Suasana hiruk-pikuk pelabuhan.', 'LW-29'],
    ['Suasana hiruk pikuk pelabuhan.', 'LW-29'],
    ['Mari kita bahas lebih dalam.', 'LW-29'],
    ["Let's dive into caching.", 'LW-29'],
    ['Let’s dive into caching.', 'LW-29'],
    ["In today's fast-paced world, speed matters.", 'LW-29'],
    ['In the realm of logistics, timing matters.', 'LW-29'],
    ['Semoga bermanfaat!', 'LW-18'],
    ['I hope this helps.', 'LW-18'],
    ['Please don’t hesitate to ask.', 'LW-18'],
    ['Pengalaman yang seamless untuk pelanggan.', 'LW-25'],
    ['Ini bukan sekadar dashboard, tetapi pusat kendali.', 'LW-28'],
    ['Ini bukan sekadar dashboard, ini pusat kendali.', 'LW-28'],
    ["It's not just a dashboard, it's a control tower.", 'LW-28'],
    ["It's not about speed, it's about trust.", 'LW-28'],
    ['Perusahaan meluncurkan aplikasi, menciptakan revolusi.', 'LW-28'],
    ['Data naik 20 persen, menunjukkan bahwa strategi berhasil.', 'LW-28'],
    ['The team shipped it, highlighting their focus.', 'LW-28'],
    ['## 🚀 Peluncuran', 'LW-16'],
    ['- ✅ Selesai', 'LW-16'],
    ['- ✔️ Selesai', 'LW-16'],
    ['Dipakai oleh [DATA ASLI] pelanggan.', 'LW-07'],
    ['Lihat [TBD] untuk detail.', 'LW-07'],
    ['Pembaca: [contoh: pemilik project]', 'LW-07'],
  ];
  for (const [teks, a] of kasus) {
    const t = cekTeks(teks);
    assert.ok(t.some((x) => x.tingkat === 'PERINGATAN' && x.aturan === a), `${a} tidak tertangkap: ${teks}`);
  }
});

test('kata biasa tidak salah tangkap', () => {
  for (const teks of [
    'Kontainer reefer menjaga suhu.',
    'Kata era tetap boleh dipakai di kalimat biasa.',
    'Bukan hanya itu yang berubah.',
    'Emoji 🙂 di tengah kalimat chat santai.',
    "In today's meeting we merged PR #26.",
    '## Hak cipta © 2026',
    '- Merek dagang ™ tetap ditulis.',
    'Lihat [link ke HANDOVER](HANDOVER.md).',
    '[Nama file](README.md) ada di root.',
  ]) {
    assert.deepEqual(cekTeks(teks), [], teks);
  }
});

test('encoding: BOM dibuang, UTF-16LE dibaca, byte rusak ditolak', () => {
  assert.equal(bacaTeks(Buffer.from('﻿Halo', 'utf8')), 'Halo');
  assert.equal(bacaTeks(Buffer.concat([Buffer.from([0xff, 0xfe]), Buffer.from('Halo', 'utf16le')])), 'Halo');
  assert.throws(() => bacaTeks(Buffer.from([0x48, 0x00, 0x69])), /bukan UTF-8/);
  assert.throws(() => bacaTeks(Buffer.from([0x48, 0xc3, 0x28])), /bukan UTF-8/);
});

test('diff: hanya baris tambahan yang diambil, dengan nomor baris baru', () => {
  const diff = [
    'diff --git a/x.md b/x.md',
    '--- a/x.md',
    '+++ b/x.md',
    '@@ -3,0 +4,2 @@',
    `+baris ${EM} baru`,
    '+baris kedua',
    '@@ -10 +12 @@',
    '-lama',
    '+ganti',
  ].join('\n');
  const t = barisTambahan(diff);
  assert.deepEqual([...t.get('x.md').entries()], [[4, `baris ${EM} baru`], [5, 'baris kedua'], [12, 'ganti']]);
});

test('CLI --diff: em dash lama tidak dihitung, em dash baru dihitung, kode di file utuh dilewati', () => {
  const dir = mkdtempSync(join(tmpdir(), 'cek-teks-'));
  writeFileSync(join(dir, 'doc.md'), `Lama ${EM} dari pemilik.\n\`\`\`\nkode ${EM} baru\n\`\`\`\nBaru ${EM} dari agent.\n`);
  const diff = ['--- a/doc.md', '+++ b/doc.md', '@@ -1,0 +2,4 @@', '+```', `+kode ${EM} baru`, '+```', `+Baru ${EM} dari agent.`].join('\n');
  const hasil = jalankan(['--diff', '-'], diff, dir);
  assert.equal(hasil.status, 1, hasil.stdout);
  assert.match(hasil.stdout, /doc\.md:5:/);
  assert.doesNotMatch(hasil.stdout, /doc\.md:[13]:/);
});

test('CLI: kode exit dan opsi', () => {
  assert.equal(jalankan(['-'], `A ${EM} B`).status, 1);
  assert.equal(jalankan(['-'], 'Semoga membantu!').status, 0);
  assert.equal(jalankan(['--strict', '-'], 'Semoga membantu!').status, 1);
  assert.equal(jalankan(['-'], 'Teks bersih.').status, 0);
  assert.equal(jalankan([], '').status, 2);
  assert.equal(jalankan(['--strik', '-'], 'Teks.').status, 2);
  const bantuan = jalankan(['--help']);
  assert.equal(bantuan.status, 0);
  assert.match(bantuan.stdout, /--diff/);
});

test('CLI: file yang tidak bisa dibaca dilewati, file lain tetap dicek, exit 2', () => {
  const dir = mkdtempSync(join(tmpdir(), 'cek-teks-'));
  writeFileSync(join(dir, 'ada.md'), `A ${EM} B\n`);
  const hasil = jalankan([join(dir, 'tidak-ada.md'), join(dir, 'ada.md')]);
  assert.equal(hasil.status, 2);
  assert.match(hasil.stdout, /ada\.md:1:/);
});

test('template WRITING.md: contoh dalam kurung siku ditandai sebagai placeholder', () => {
  const t = cekTeks(readFileSync(join(root, 'templates', 'WRITING.md'), 'utf8'));
  assert.ok(t.some((x) => x.aturan === 'LW-07'));
  assert.ok(!t.some((x) => x.tingkat === 'GAGAL'));
});

test('file skill ini sendiri lolos: 0 GAGAL, 0 PERINGATAN', () => {
  const files = [
    'SKILL.md', 'README.md', 'CHANGELOG.md',
    ...readdirSync(join(root, 'references')).map((f) => join('references', f)),
  ];
  const hasil = jalankan(['--strict', ...files.map((f) => join(root, f))]);
  assert.equal(hasil.status, 0, hasil.stdout);
});

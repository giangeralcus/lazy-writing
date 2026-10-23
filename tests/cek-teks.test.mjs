// Jalankan dari root repo: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { cekTeks } from '../scripts/cek-teks.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const script = join(root, 'scripts', 'cek-teks.mjs');
const EM = '—';

const jalankan = (args, input) =>
  spawnSync(process.execPath, [script, ...args], { input, encoding: 'utf8' });

test('teks bersih: tanpa temuan', () => {
  assert.deepEqual(cekTeks('PR #26 sudah di-merge. Situs live berubah setelah Hostinger memasang versi baru.'), []);
});

test('em dash di prosa: GAGAL LW-05', () => {
  const t = cekTeks(`Situsnya cepat ${EM} dan aman.`);
  assert.equal(t.length, 1);
  assert.equal(t[0].tingkat, 'GAGAL');
  assert.equal(t[0].aturan, 'LW-05');
});

test('dua tanda hubung berspasi: GAGAL LW-05, flag CLI tidak', () => {
  assert.equal(cekTeks('Situsnya cepat -- dan aman.')[0].aturan, 'LW-05');
  assert.deepEqual(cekTeks('Pakai --strict untuk CI.'), []);
  assert.deepEqual(cekTeks('| a | b |\n|---|---|'), []);
});

test('em dash di dalam blok kode dan kode inline dilewati', () => {
  assert.deepEqual(cekTeks(`\`\`\`\nx ${EM} y\n\`\`\`\nTeks biasa.`), []);
  assert.deepEqual(cekTeks(`Karakter \`${EM}\` dilarang.`), []);
});

test('daerah off: PERINGATAN mati, em dash tetap GAGAL', () => {
  const t = cekTeks(`<!-- cek-teks: off -->\nSemoga membantu!\nA ${EM} B\n<!-- cek-teks: on -->\nSemoga membantu!`);
  assert.deepEqual(t.map((x) => [x.baris, x.tingkat, x.aturan]), [
    [3, 'GAGAL', 'LW-05'],
    [5, 'PERINGATAN', 'LW-18'],
  ]);
});

test('frasa klise Indonesia dan English: PERINGATAN', () => {
  const kasus = [
    ['Di era digital yang serba cepat ini, kita butuh tracking.', 'LW-29'],
    ['Suasana hiruk pikuk pelabuhan.', 'LW-29'],
    ['Mari kita bahas lebih dalam.', 'LW-29'],
    ["Let's dive into caching.", 'LW-29'],
    ['Semoga bermanfaat!', 'LW-18'],
    ['I hope this helps.', 'LW-18'],
    ['Pengalaman yang seamless untuk pelanggan.', 'LW-25'],
    ['Ini bukan sekadar dashboard, tetapi pusat kendali.', 'LW-28'],
    ['Perusahaan meluncurkan aplikasi, menciptakan revolusi.', 'LW-28'],
    ['## 🚀 Peluncuran', 'LW-16'],
    ['- ✅ Selesai', 'LW-16'],
    ['Dipakai oleh [DATA ASLI] pelanggan.', 'LW-07'],
  ];
  for (const [teks, aturan] of kasus) {
    const t = cekTeks(teks);
    assert.ok(t.some((x) => x.tingkat === 'PERINGATAN' && x.aturan === aturan), `${aturan} tidak tertangkap: ${teks}`);
  }
});

test('kata biasa tidak salah tangkap', () => {
  for (const teks of [
    'Kontainer reefer menjaga suhu.',
    'Kata era tetap boleh dipakai di kalimat biasa.',
    'Bukan hanya itu yang berubah.',
    'Emoji 🙂 di tengah kalimat chat santai.',
  ]) {
    assert.deepEqual(cekTeks(teks), [], teks);
  }
});

test('CLI: exit 1 kalau ada GAGAL, 0 kalau hanya PERINGATAN, 1 dengan --strict', () => {
  assert.equal(jalankan(['-'], `A ${EM} B`).status, 1);
  assert.equal(jalankan(['-'], 'Semoga membantu!').status, 0);
  assert.equal(jalankan(['--strict', '-'], 'Semoga membantu!').status, 1);
  assert.equal(jalankan(['-'], 'Teks bersih.').status, 0);
  assert.equal(jalankan([], '').status, 2);
});

test('file skill ini sendiri lolos: 0 GAGAL, 0 PERINGATAN', () => {
  const files = [
    'SKILL.md', 'README.md', 'CHANGELOG.md',
    join('templates', 'WRITING.md'),
    ...readdirSync(join(root, 'references')).map((f) => join('references', f)),
  ];
  const hasil = jalankan(['--strict', ...files.map((f) => join(root, f))]);
  assert.equal(hasil.status, 0, hasil.stdout);
});

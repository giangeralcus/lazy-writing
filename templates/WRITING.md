# WRITING.md - [contoh: nama project]

Arah tulisan untuk siapa pun, orang atau agent, yang menulis teks di project ini: chat, laporan, deskripsi PR, commit, README, copy situs. Baca sebelum menulis. Aturan saringannya ada di skill lazy-writing; file ini memberi arahnya.

Teks dalam kurung siku adalah contoh: ganti dengan fakta project ini, atau hapus barisnya. cek-teks menandai kurung siku yang tertinggal.

Kalau project sudah punya DESIGN.md, jangan buat file ini. Tambahkan satu bagian `## Writing` di DESIGN.md yang berisi tabel "Siapa yang baca" dan "Kamus project" di bawah. Copy publik tetap mengikuti bagian pembaca, Brand/Tone, dan larangan yang sudah ada di DESIGN.md; jangan salin bagian lain.

## Siapa yang baca

| Jenis teks | Pembaca | Bahasa dan register |
|---|---|---|
| Chat, laporan, minta keputusan | [contoh: pemilik project, paham freight forwarding, sedang belajar teknis] | [contoh: Indonesia santai, gw/lu] |
| Deskripsi PR | [contoh: pemilik dan reviewer] | [contoh: English, lugas] |
| Commit, komentar kode | [contoh: developer berikutnya] | [contoh: English, conventional commits] |
| README, docs | [contoh: orang yang baru pertama membuka repo] | [contoh: English, lugas] |
| Copy publik | [contoh: importir dan eksportir yang mencari forwarder] | [contoh: English, profesional, tanpa jargon internal] |

Yang sudah dia tahu (tidak perlu diberi arti lagi): [contoh: FCL, LCL, B/L, ETD, PIB, PR, merge]

Setelah membaca, dia harus bisa: [contoh: memutuskan merge atau tidak tanpa membuka kode]

Di mana dia membaca: [contoh: chat di HP, di sela kerja]

## Kamus project

Istilah resmi project ini. Fungsinya seperti token warna di DESIGN.md: satu nama tetap untuk satu benda (LW-24), dan satu arti siap tempel (LW-02).

| Istilah yang dipakai | Artinya di project ini | Jangan pakai |
|---|---|---|
| [contoh: Story] | [contoh: halaman utama `/`] | [contoh: beranda, home, landing] |

Analogi yang sudah disepakati dan berhasil untuk pembaca ini (tambahan atau pengganti kamus-analogi lazy-writing): [contoh: mirror = gudang kedua]

## Keputusan yang wajib diberi alasan satu baris

Dicatat di PR atau catatan serah terima:

- Setiap angka: sumbernya (catatan internal dengan tanggal, atau sumber publik dan link).
- Analogi baru yang belum ada di kamus.
- Tabel, heading, atau emoji di teks yang biasanya tanpa itu.
- Istilah baru yang masuk kamus project.

## Yang tidak boleh ada di teks project ini

- [contoh: angka tanpa sumber dan tanggal]
- [contoh: testimoni, logo partner, atau nama pelanggan tanpa izin tertulis]
- [contoh: link source code repo (kebijakan pemilik)]
- [contoh: CTA umum seperti "Get Started" dan "Learn More"]

## Cek sebelum "selesai"

- Gerbang Kirim lazy-writing lolos (lihat SKILL.md). Hasilnya tidak dicetak di teks yang dikirim.
- Untuk file yang diubah: `git diff -U0 -- <file> | node <folder skill lazy-writing>/scripts/cek-teks.mjs --diff -` dengan 0 GAGAL.
- [contoh: dibaca di layar HP kalau teksnya tayang di situs]
- Cek mekanis yang benar-benar dijalankan ditulis di bagian bukti PR sebagai perintah dan hasilnya.

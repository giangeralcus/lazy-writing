# WRITING.md - [nama project]

Arah tulisan untuk siapa pun, orang atau agent, yang menulis teks di project ini: chat, docs, README, deskripsi PR, copy situs. Baca sebelum menulis. Aturan saringannya ada di skill lazy-writing; file ini memberi arahnya. Kalau project sudah punya `DESIGN.md`, bagian-bagian di bawah boleh ditempel sebagai satu bagian "Writing" di sana.

Isi setiap bagian dengan fakta project ini. Baris dalam kurung siku adalah contoh; hapus kalau tidak cocok.

## Siapa yang baca

- Pembaca utama: [contoh: pemilik project, paham bisnis freight forwarding, sedang belajar teknis]
- Yang sudah mereka tahu: [contoh: istilah logistik (FCL, B/L, ETD); belum biasa dengan istilah Git]
- Setelah baca, mereka harus bisa: [contoh: memutuskan merge atau tidak, tanpa membuka kode]
- Di mana mereka baca: [contoh: chat di HP, di sela kerja]

## Suara dan register

- Bahasa: [contoh: Indonesia santai untuk chat; English untuk PR dan commit di repo ini]
- Sapaan: [contoh: gw/lu; jangan pakai "Bapak" atau "Pak"]
- Nada: [contoh: langsung, jujur soal risiko, tanpa basa-basi]

## Kamus project

Istilah resmi project ini. Fungsinya seperti token warna di DESIGN.md: satu nama tetap untuk satu benda (LW-24), dan satu arti siap tempel (LW-02).

| Istilah yang dipakai | Artinya di project ini | Jangan pakai |
|---|---|---|
| [contoh: Story] | [halaman utama `/`] | [beranda, home, landing] |

Analogi yang sudah disepakati untuk pembaca ini: [contoh: pakai kamus-analogi lazy-writing; tambahan di bawah]

## Keputusan yang wajib diberi alasan satu baris

Dicatat di PR atau catatan serah terima:

- Setiap angka: sumbernya (catatan internal dengan tanggal, atau sumber publik dan link).
- Analogi baru yang belum ada di kamus.
- Tabel, heading, atau emoji di teks yang biasanya tanpa itu.
- Istilah baru yang masuk kamus project.

## Tidak ada di teks ini

- [contoh: angka tanpa sumber dan tanggal]
- [contoh: testimoni, logo partner, atau nama pelanggan tanpa izin tertulis]
- [contoh: link source code repo (kebijakan pemilik)]
- [contoh: CTA umum seperti "Get Started" dan "Learn More"]

## Cek sebelum "selesai"

- Gerbang Kirim lazy-writing (8 pertanyaan) dengan jawaban "tidak" semua.
- `node <folder skill lazy-writing>/scripts/cek-teks.mjs <file>` dengan 0 GAGAL untuk file teks yang diubah.
- [contoh: dibaca di layar HP kalau teksnya tayang di situs]
- Laporan PASS/FAIL dengan bukti di PR atau catatan serah terima untuk teks panjang atau publik.

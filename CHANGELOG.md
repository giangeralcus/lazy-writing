# Changelog

## 2.0.0 (2026-10-23)

Tujuan baru dari pemilik: tulisan harus membuat pembaca mengerti lebih baik dan lebih cepat, bukan hanya bebas slop.

- Tujuan skill berubah dari "nol dekorasi" menjadi "pembaca paham dan tahu langkah berikutnya". Test Lazy sekarang diukur terhadap pembaca tertentu: arti istilah yang belum dikenal pembaca dianggap sinyal, bukan dekorasi.
- Pembaca ditentukan per jenis teks: chat dan laporan ke pemilik, deskripsi PR, commit dan komentar kode, README dan docs, copy publik. Profil pemilik hanya berlaku untuk teks yang dia baca langsung. Commit dan PR kembali mengikuti bahasa dan format riwayat repo.
- Tiga mode: Tulis, Belajar, dan Audit. Mode Belajar (satu konsep, sekitar tiga istilah baru, satu analogi dengan batasnya, satu cek paham) hanya dipakai kalau pemilik minta penjelasan atau konsep baru jadi syarat keputusannya. Laporan dan PR tidak diberi analogi atau cek paham.
- Aturan diberi nomor LW-01 sampai LW-29 dalam tiga tingkat yang diadaptasi dari antislop: Wajib, Boleh dengan alasan, Konsistensi. Nomor aturan antislop asalnya dicantumkan.
- Aturan paham cepat baru: jawaban dulu (LW-01), istilah diberi arti saat pertama muncul (LW-02), fakta dipisah dari dugaan termasuk kesimpulan sendiri (LW-04), langkah berikutnya spesifik dengan siapa dan apa yang dilihat dulu (LW-06), analogi dengan batasnya dan satu gambaran per pesan (LW-10), cek paham yang spesifik (LW-18), tempat plain-text tanpa markdown (LW-19), sedikit istilah baru per pesan (LW-23), satu benda satu nama (LW-24), angka diberi pembanding dan artinya (LW-26).
- Em dash sekarang nol di teks yang ditulis atau diubah agent (LW-05, dari antislop R-02), termasuk en dash berspasi. Em dash lama di teks pemilik bukan kegagalan. Versi 1 mengizinkan satu per paragraf, dan SKILL.md versi 1 sendiri berisi 6 em dash.
- Bullet dipakai untuk langkah, checklist, pilihan, dan perbandingan, mengikuti profil pemilik. Versi 1 menulis "kalimat lebih baik daripada bullet" untuk semua kasus.
- Arah per project lewat `templates/WRITING.md`, atau bagian `## Writing` di DESIGN.md yang sudah ada. Copy publik tanpa arah tertulis diberi label "draft without direction" (label yang sudah dipakai di CLAUDE.md gpindo) di PR atau catatan serah terima, tidak di dalam copy-nya (antislop R-37).
- Gerbang Kirim (Delivery Gate): sepuluh pertanyaan sebelum kirim, termasuk satu untuk buzzword dan pola AI. Chat dicek dalam hati dan tidak dicetak. File dan PR mendapat satu baris hasil yang hanya menyebut cek yang benar-benar dijalankan, tanpa rubrik penilaian diri.
- Mode Audit dipindah ke `references/audit.md`, dengan tingkat temuan menurut akibatnya buat pembaca.
- Referensi baru: `pola-paham-cepat.md`, `kamus-analogi.md` (dengan rangkaian analogi per bidang dan baris untuk mirror, aktivasi, rollback, workflow, Nginx, SSH, DNS record, prompt injection, dan lainnya), `pola-ai.md`, `audit.md`.
- `scripts/cek-teks.mjs` dan tesnya: em dash dan en dash, frasa klise, placeholder, emoji di heading, mode `--diff` untuk baris yang ditambah saja, deteksi encoding, dan blok kode yang tidak ditutup.
- Perbaikan kecil: salah ketik versi 1 ("efort", "Sekalikerumunan"), em dash di semua file referensi diganti, deskripsi paper Russell et al. dibetulkan, "dimana" dan "dikarenakan" dicatat sebagai salah eja dan tidak baku.

Uji pada draf pertama versi 2: lima tugas tulis nyata (jelaskan merge dan deploy, laporan PR #26, minta keputusan, deskripsi PR, jelaskan context window) ditulis dengan versi 1 dan draf itu, lalu dinilai buta oleh juri terpisah. Draf versi 2 menang 4 dari 5. Versi 1 menang di deskripsi PR karena draf versi 2 mencetak rubrik penilaian diri dengan hasil cek yang tidak dijalankan. Perbaikan dari uji itu (aturan cetak gerbang, dugaan ditandai, satu gambaran analogi per pesan, satu konsep sebelum cek paham) masuk ke rilis ini dan belum diuji ulang.

## 1.0.0 (2026-09-17)

Versi pertama: aturan inti anti-slop bahasa Inggris dan Indonesia, Test Lazy, kalibrasi gaya pemilik, daftar kata terlarang, dikompilasi dari 11 sumber publik.

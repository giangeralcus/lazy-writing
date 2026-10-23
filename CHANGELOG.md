# Changelog

## 2.0.0 (2026-10-23)

Tujuan baru dari pemilik: tulisan harus membuat pembaca mengerti lebih baik dan lebih cepat, bukan hanya bebas slop.

- Tujuan skill berubah dari "nol dekorasi" menjadi "pembaca paham dan tahu langkah berikutnya". Test Lazy sekarang diukur terhadap pembaca tertentu: definisi istilah yang belum dikenal pembaca dianggap sinyal, bukan dekorasi.
- Aturan diberi nomor LW-01 sampai LW-29 dalam tiga tingkat dari antislop: Gerbang Mutlak, Gerbang Alasan, Kunci Kualitas. Nomor aturan antislop asalnya dicantumkan.
- Aturan paham cepat baru: jawaban dulu (LW-01), istilah dijelaskan saat pertama muncul (LW-02), fakta dipisah dari dugaan (LW-04), langkah berikutnya spesifik (LW-06), analogi dengan batasnya (LW-10), pertanyaan penutup hanya cek paham atau keputusan (LW-18), satu langkah satu konsep (LW-23), satu benda satu nama (LW-24), angka diberi pembanding (LW-26).
- Em dash sekarang nol (LW-05, dari antislop R-02). Versi 1 mengizinkan satu per paragraf, dan SKILL.md versi 1 sendiri berisi 6 em dash.
- Bullet dipakai untuk langkah, checklist, pilihan, dan perbandingan, mengikuti profil pemilik. Versi 1 menulis "kalimat lebih baik daripada bullet" untuk semua kasus.
- Arah per project lewat `templates/WRITING.md`, mengikuti struktur DESIGN.md gpindo. Copy publik tanpa DESIGN.md atau WRITING.md diberi label "draft tanpa arah" (antislop R-37).
- Gerbang Kirim: delapan pertanyaan sebelum kirim. Teks pendek dicek dalam hati; teks panjang atau publik mendapat laporan PASS/FAIL dengan bukti di PR atau catatan serah terima.
- Mode Audit untuk teks orang lain: temuan bernomor dengan nomor aturan, tidak ada yang diubah sebelum pemilik memilih nomor.
- Referensi baru: `pola-paham-cepat.md`, `kamus-analogi.md`, `pola-ai.md`.
- `scripts/cek-teks.mjs` dan tesnya.
- Perbaikan kecil: salah ketik versi 1 ("efort", "Sekalikerumunan"), em dash di semua file referensi diganti.

## 1.0.0 (2026-09-17)

Versi pertama: aturan inti anti-slop EN dan ID, Test Lazy, kalibrasi gaya pemilik, daftar kata terlarang, dikompilasi dari 11 sumber publik.

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
- Gerbang Kirim (Delivery Gate): sepuluh pertanyaan sebelum kirim, termasuk satu untuk buzzword dan pola AI. Gerbang dijalankan dalam hati dan tidak dicetak di chat, laporan, PR, docs, atau copy, karena juri membaca baris "Delivery Gate: pass" sebagai penilaian diri. Cek mekanis yang benar-benar dijalankan ditulis di bagian bukti sebagai perintah dan hasilnya. Nomor aturan (`LW-xx`) juga tidak muncul di teks untuk orang.
- Mode Audit dipindah ke `references/audit.md`, dengan urutan temuan menurut akibatnya buat pembaca. Hasil audit untuk pemilik: satu kalimat jawaban, temuan bernomor dalam kata biasa tanpa kode aturan atau label tingkat, tanpa usulan tulis ulang sebelum dia memilih nomor, dan tanda kecil sisanya di satu baris.
- Saat pemilik masih bingung: jawab tebakannya dulu, pakai gambaran dia kalau cocok, ganti gambaran kalau justru itu yang menyesatkan, lalu jelaskan mekanismenya tanpa istilah baru. Cek paham berupa pertanyaan terbuka yang menyuruh dia memakai idenya di kasus baru.
- Pesan chat ke pemilik muat sekitar satu layar HP (kira-kira 150 kata). Di Mode Belajar yang dibuang konsep kedua, bukan penjelasan konsep inti.
- Analogi Git sampai deploy memakai satu alur freight: draft B/L, ACC, B/L final, lalu pengiriman barang. Juri di dua putaran menilai analogi kantor (arsip, portal) kurang mengena.
- Akibat yang disimpulkan dari kode atau aturan (apa yang terjadi kalau tombol diklik, kapan situs berubah) disebut sumbernya ("dari kodenya") atau ditulis "seharusnya"; hal yang sudah dicek tidak diberi "kemungkinan" (LW-04).
- Laporan hasil kerja: yang berubah dan yang sengaja tidak diubah satu baris masing-masing, bukti jadi bagian sendiri dengan satu cek per baris, dan satu peringatan ditulis sekali saja.
- Referensi baru: `pola-paham-cepat.md`, `kamus-analogi.md` (dengan rangkaian analogi per bidang dan baris untuk mirror, aktivasi, rollback, workflow, Nginx, SSH, DNS record, prompt injection, dan lainnya), `pola-ai.md`, `audit.md`.
- `scripts/cek-teks.mjs` dan tesnya: em dash dan en dash, frasa klise, placeholder, emoji di heading, mode `--diff` untuk baris yang ditambah saja, deteksi encoding, dan blok kode yang tidak ditutup.
- Perbaikan kecil: salah ketik versi 1 ("efort", "Sekalikerumunan"), em dash di semua file referensi diganti, deskripsi paper Russell et al. dibetulkan, "dimana" dan "dikarenakan" dicatat sebagai salah eja dan tidak baku.

Uji buta: tugas tulis nyata ditulis oleh agent terpisah dengan versi 1 dan versi 2, lalu dinilai juri yang tidak tahu versinya.

- Putaran 1 (draf pertama, 5 tugas): versi 2 menang 4 dari 5. Versi 1 menang di deskripsi PR karena draf mencetak rubrik penilaian diri dengan hasil cek yang tidak dijalankan.
- Putaran 2 (revisi pertama, 9 tugas): versi 2 menang 7 dari 9. Versi 1 menang di audit caption dan di balasan saat pemilik masih bingung.
- Putaran 3 (revisi kedua, 9 tugas): menang 8 dari 9 lawan versi 1, dan deskripsi PR menang di ketiga juri akurasi. Lawan revisi pertama hanya 5 banding 4, karena revisi kedua terlalu padat di laporan status, mengajar konsep, pesan WhatsApp ke tim, dan balasan saat masih bingung.
- Putaran 4 sampai 6 (hanya tugas yang kalah; putaran 5 dan 6 memakai dua sampel per tugas dengan urutan A/B dibalik): mengajar konsep dan balasan saat masih bingung menang 2 dari 2 lawan revisi pertama, balasan saat masih bingung seri 1 banding 1 lawan versi 1, audit caption menang lawan versi 1 dan revisi kedua, laporan status seri 1 banding 1 lawan revisi pertama dan menang 2 dari 2 lawan versi 1, dan deskripsi PR tetap menang.

Batas uji: setiap putusan dari satu juri, jadi selisih tipis bisa kebetulan. Tugas merge dan deploy, laporan status, dan deskripsi PR memakai kasus PR #26 yang sama dengan contoh di `pola-paham-cepat.md`, jadi sebagian ikut mengukur apakah penulis meniru contohnya. Pesan WhatsApp ke tim tidak diuji ulang setelah putaran 3.

## 1.0.0 (2026-09-17)

Versi pertama: aturan inti anti-slop bahasa Inggris dan Indonesia, Test Lazy, kalibrasi gaya pemilik, daftar kata terlarang, dikompilasi dari 11 sumber publik.

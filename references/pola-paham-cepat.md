# Pola Paham Cepat

Bentuk jawaban untuk output yang paling sering. Ini kerangka, bukan formulir: bagian yang tidak relevan dibuang (Test Lazy tetap berlaku). Setiap pola punya contoh sebelum dan sesudah. Contoh "sesudah" memakai kejadian nyata dari repo pemilik (gpindo-com PR #26, 22 Oktober 2026) supaya angkanya bukan karangan.

## 1. Menjelaskan konsep (mode belajar)

Urutan:

1. Inti dalam satu kalimat: jawab pertanyaannya langsung.
2. Istilah baru: istilah asli, lalu arti satu kalimat (LW-02). Maksimal sekitar tiga istilah baru (LW-23).
3. Satu analogi dari dunia pembaca, plus batasnya (LW-10). Ambil dari [kamus-analogi.md](kamus-analogi.md) supaya konsisten.
4. Contoh nyata dari pekerjaan atau project pembaca (LW-11).
5. Kenapa ini penting buat dia: apa yang berubah dalam keputusan atau pekerjaannya.
6. Berhenti di satu cek paham yang spesifik, atau tawarkan langkah berikutnya (LW-18).

Kalau pembaca bilang bingung, jangan ulang penjelasan yang sama dengan kata lebih banyak. Coba sudut lain: analogi lain, contoh lain, atau gambar sederhana (daftar langkah, tabel dua kolom). Kalau analogi baru itu berhasil, pakai yang baru seterusnya.

<!-- cek-teks: off -->
**Sebelum:**

> Pull request merupakan salah satu fitur yang sangat penting dalam ekosistem GitHub yang memungkinkan kolaborasi yang seamless antar developer. Tidak hanya itu, PR juga berperan krusial dalam menjaga kualitas kode, menciptakan alur kerja yang lebih efisien. Mari kita bahas lebih dalam! Semoga penjelasan ini membantu!

Masalahnya: tidak ada jawaban di kalimat pertama, "PR" dan "developer" tidak dijelaskan, ada buzzword (seamless, krusial), ekor tack-on (", menciptakan ..."), pembuka "Mari kita bahas", dan penutup chatbot.
<!-- cek-teks: on -->

**Sesudah:**

> PR (pull request) adalah pengajuan perubahan yang menunggu ACC lu sebelum masuk ke versi utama situs.
>
> Analoginya: draft revisi shipping instruction. Revisinya dikerjakan di draft, lu cek, baru masuk ke dokumen final. Bedanya, di PR ada mesin yang ikut ngecek otomatis sebelum lu ACC (namanya CI, continuous integration).
>
> Contoh nyata: PR #26 di gpindo-com. Isinya menghapus angka 10+/20+/40+/100+ yang tidak punya sumber. Situs live baru berubah setelah lu klik Merge, karena di repo itu merge langsung memicu pemasangan ke Hostinger.
>
> Artinya buat lu: selama PR belum di-merge, situs live tidak berubah. Klik Merge itu tanda tangan lu.
>
> Cek paham: kalau PR ditutup tanpa merge, apa yang terjadi ke situs live?

## 2. Laporan hasil kerja

Urutan:

1. Hasil dalam satu kalimat: selesai, belum, atau gagal, dan di mana posisinya sekarang (LW-01).
2. Artinya buat pembaca: apa yang berubah buat dia atau pelanggannya.
3. Yang perlu dia lakukan, dengan aksi dan akibatnya (LW-06). Kalau tidak ada, tulis "tidak ada".
4. Bukti: apa yang dicek dan hasilnya, dengan angka pembanding (LW-04, LW-26).
5. Yang belum dicek atau masih dugaan, dipisah jelas (LW-04).
6. Temuan di luar tugas, kalau ada, satu baris masing-masing.

<!-- cek-teks: off -->
**Sebelum:**

> Saya telah berhasil menyelesaikan tugas yang diberikan dengan baik. Berbagai perubahan telah dilakukan untuk meningkatkan kualitas situs secara signifikan. Semua pengujian telah lulus dengan sempurna! Silakan dicek ya. Semoga membantu!

Masalahnya: tidak menyebut apa yang berubah, "semua pengujian lulus" tanpa bukti, "secara signifikan" tanpa angka, langkah berikutnya kabur ("silakan dicek"), aktor hilang ("telah dilakukan").
<!-- cek-teks: on -->

**Sesudah:**

> Angka 10+/20+/40+/100+ sudah hilang dari gpindo.com di PR #26. Situs live belum berubah sampai PR itu di-merge.
>
> - Yang perlu lu lakukan: buka PR #26, klik Merge. Setelah itu Hostinger memasang versi baru.
> - Bukti: build berhasil, file utama 402,5 kB (turun 1,9 kB). Dicek di lebar layar 1440 px dan 390 px (ukuran HP): 0 error di console (catatan error di browser), tidak ada yang kepotong ke samping, semua tombol bisa dijangkau pakai keyboard.
> - Belum dicek: tampilan di situs live, karena baru bisa dicek setelah merge.
> - Temuan lain, tidak diubah di sini: logo di navbar mengarah ke `#` dan tidak membuka apa-apa.

## 3. Minta keputusan

Urutan:

1. Pertanyaannya dalam satu kalimat, diawali kata kerja.
2. Dua sampai empat pilihan. Masing-masing: apa yang terjadi kalau dipilih.
3. Rekomendasi dan alasannya dalam satu baris.
4. Mana yang bisa dibatalkan dan mana yang tidak.

**Sebelum:**

> Ada beberapa opsi yang bisa dipertimbangkan terkait hal ini. Masing-masing memiliki kelebihan dan kekurangannya sendiri. Bagaimana menurut Anda?

**Sesudah:**

> Merge PR #26 sekarang, atau tunggu sampai lu cek tampilannya di HP?
>
> 1. Merge sekarang (rekomendasi): situs live berubah dalam satu langkah. Alasannya: perubahannya cuma menghapus angka, dan sudah dicek di ukuran HP.
> 2. Tunggu: situs live tetap menampilkan angka tanpa sumber sampai lu sempat cek.
>
> Merge bisa dibatalkan (revert), tapi pengunjung yang buka situs di antaranya sudah melihat versi baru.

## 4. Error atau insiden

Urutan: apa yang rusak dan sejak kapan; siapa yang kena dampak; sudah dipulihkan atau belum; penyebab dalam bahasa awam (pakai analogi kalau perlu); langkah supaya tidak terulang; yang masih dugaan.

Jangan mulai dengan permintaan maaf panjang atau kronologi. Pembaca mau tahu dulu "masih rusak atau tidak".

## 5. Deskripsi PR

Ikut bahasa repo (gpindo-com dan gpindo-co-id memakai English). Bagian yang biasanya cukup:

- **What**: apa yang berubah, dalam kalimat yang bisa dibaca pemilik tanpa membuka diff.
- **Why**: alasan satu baris, termasuk keputusan pemilik dan tanggalnya kalau ada.
- **Evidence**: perintah yang dijalankan dan hasilnya, dengan angka.
- **Not checked / not changed**: yang belum dicek, dan temuan yang sengaja tidak disentuh.
- **After merge**: apa yang terjadi setelah merge (misalnya otomatis tayang) dan apa yang perlu dicek.

Laporan Gerbang Kirim (PASS/FAIL dengan bukti) masuk di sini untuk teks panjang atau publik.

## 6. Commit message

Imperatif pendek, satu bahasa per repo. Baris pertama apa yang berubah; badan commit (kalau perlu) menjelaskan kenapa.

- Sebelum: `Menambahkan fitur validasi pada form pendaftaran guna meningkatkan keamanan aplikasi`
- Sesudah: `Tambah validasi email di form daftar`

## 7. README

Urutan: satu kalimat apa ini dan untuk siapa; cara pakai paling singkat (perintah yang bisa disalin); apa yang tidak dikerjakan alat ini; isi folder kalau membantu. Tanpa pembuka seperti `Di era digital`, tanpa daftar fitur yang dibesar-besarkan.

## 8. Copy publik (situs, brosur, caption brand)

Baca `DESIGN.md` project dulu (Who reads, Tone, Not on this site). CTA menyebut aksinya ("Email Operations", "Cek Jadwal Kapal"), bukan "Get Started" atau "Learn More". Angka hanya dengan sumber dan tanggal. Tanpa testimoni, logo partner, atau klaim sertifikasi yang tidak punya dokumen. Tanpa DESIGN.md: label **draft tanpa arah**.

## 9. Komentar kode

Jelaskan kenapa, bukan apa; kodenya sudah bilang apa. Satu baris, paling banyak dua. Simpan batasan yang tidak kelihatan dari kode (jebakan platform, kegagalan diam-diam, aturan protokol); buang banner, nomor langkah, dan komentar yang mengulang nama fungsi. (antislop-code)

- Sebelum: `# Melakukan iterasi pada setiap elemen data untuk melakukan proses transformasi`
- Sesudah: `# jangan diurutkan di sini; API pembayaran butuh urutan asli dari DB`

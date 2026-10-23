# Pola Paham Cepat

Bentuk jawaban untuk output yang paling sering. Ini kerangka, bukan formulir: bagian yang tidak relevan dibuang (Test Lazy tetap berlaku). Setiap pola punya contoh sebelum dan sesudah. Contoh "sesudah" memakai kejadian nyata dari repo pemilik, gpindo-com PR #26 (22 Oktober 2026), dengan angka dari HANDOVER repo itu. Contohnya ditulis seolah PR #26 belum di-merge, seperti saat laporan aslinya dibuat.

## 1. Menjelaskan konsep (Mode Belajar)

Urutan:

1. Inti dalam satu kalimat: jawab pertanyaannya langsung.
2. Istilah baru: istilah asli, lalu arti satu kalimat (LW-02). Maksimal sekitar tiga istilah baru (LW-23).
3. Satu analogi dari dunia pembaca, plus batasnya (LW-10). Ambil dari [kamus-analogi.md](kamus-analogi.md) supaya konsisten, dan ambil dari satu rangkaian saja.
4. Contoh nyata dari pekerjaan atau project pembaca (LW-11).
5. Artinya buat dia: apa yang berubah dalam keputusan atau pekerjaannya.
6. Berhenti di satu cek paham yang spesifik (LW-18).

Kalau pertanyaannya menyentuh beberapa konsep, jawab intinya dalam satu atau dua kalimat, ajarkan konsep pertama saja, lalu cek paham. Konsep berikutnya menunggu jawaban dia.

Kalau dia terlihat bingung (jawaban cek paham meleset, bertanya ulang hal yang sama, atau bilang bingung), jangan ulang penjelasan yang sama dengan kata lebih banyak. Ganti analogi atau contohnya, atau pakai bentuk lain (daftar langkah, tabel dua kolom). Analogi baru yang berhasil dipakai terus selama percakapan itu.

<!-- cek-teks: off -->
Sebelum:

> Pull request merupakan salah satu fitur yang sangat penting dalam ekosistem GitHub yang memungkinkan kolaborasi yang seamless antar developer. Tidak hanya itu, PR juga berperan krusial dalam menjaga kualitas kode, menciptakan alur kerja yang lebih efisien. Mari kita bahas lebih dalam! Semoga penjelasan ini membantu!

Masalahnya: tidak ada jawaban di kalimat pertama, "PR" dan "developer" tidak dijelaskan, ada buzzword (seamless, krusial), ekor tack-on (", menciptakan ..."), pembuka "Mari kita bahas", dan penutup chatbot.
<!-- cek-teks: on -->

Sesudah:

> PR (pull request) adalah pengajuan perubahan kode yang menunggu ACC lu sebelum masuk ke versi resmi situs.
>
> Analoginya: pengajuan revisi yang menunggu ACC atasan, lengkap dengan catatan apa yang berubah dan kenapa. Tombol ACC-nya di GitHub namanya Merge: begitu diklik, revisinya masuk ke versi resmi. Bedanya dengan kantor: di sebagian repo, ACC ini langsung mengubah situs live.
>
> Contoh nyata: PR #26 di gpindo-com menghapus angka 10+/20+/40+/100+ yang tidak punya sumber. Di repo itu, merge langsung memicu deploy, yaitu pemasangan versi baru ke Hostinger.
>
> Artinya buat lu: selama PR #26 belum di-merge, gpindo.com tidak berubah.
>
> Cek paham: kalau PR #26 ditutup tanpa merge, gpindo.com masih menampilkan angka 10+ atau tidak?

Istilah barunya tiga (PR, merge, deploy), analoginya satu rangkaian (pengajuan dan ACC), dan pesannya berhenti di satu pertanyaan yang jawabannya bisa dicek.

## 2. Laporan hasil kerja

Urutan:

1. Hasil dalam satu kalimat: selesai, belum, atau gagal, dan di mana posisinya sekarang (LW-01).
2. Artinya buat pembaca: apa yang berubah buat dia atau pelanggannya.
3. Yang perlu dia lakukan, dengan aksi, apa yang dilihat dulu, dan akibatnya (LW-06). Kalau tidak ada, tulis "tidak ada".
4. Bukti: apa yang dicek dan hasilnya, dengan angka pembanding (LW-04, LW-26).
5. Yang belum dicek atau masih dugaan, dipisah jelas (LW-04).
6. Temuan di luar tugas, kalau ada, satu baris masing-masing.

Jargon diganti akibatnya, dan detail teknis cukup di bagian bukti (LW-23).

<!-- cek-teks: off -->
Sebelum:

> Saya telah berhasil menyelesaikan tugas yang diberikan dengan baik. Berbagai perubahan telah dilakukan untuk meningkatkan kualitas situs secara signifikan. Semua pengujian telah lulus dengan sempurna! Silakan dicek ya. Semoga membantu!

Masalahnya: tidak menyebut apa yang berubah, "semua pengujian lulus" tanpa bukti, "secara signifikan" tanpa angka, langkah berikutnya kabur ("silakan dicek"), aktor hilang ("telah dilakukan").
<!-- cek-teks: on -->

Sesudah:

> PR #26 menghapus angka 10+/20+/40+/100+ dari kode gpindo-com. Situs live gpindo.com masih menampilkannya sampai PR itu di-merge.
>
> - Yang perlu lu lakukan: buka PR #26, lihat daftar perubahannya di tab Files changed, lalu klik Merge kalau setuju. Hostinger memasang versi baru setelah merge, dan gw cek situs live sesudahnya.
> - Bukti: build berhasil; file JavaScript utama 402,5 kB, turun 1,9 kB, jadi halaman sedikit lebih ringan. Dicek di lebar layar 1440 px dan 390 px (ukuran HP): 0 error di console (catatan error di browser yang tidak dilihat pengunjung), halaman tidak bisa digeser ke samping, dan semua tombol bisa dijangkau pakai keyboard.
> - Belum dicek: tampilan di situs live, karena baru bisa dicek setelah merge.
> - Temuan lain, tidak diubah di sini: logo di navbar mengarah ke `#` dan tidak membuka apa-apa. Kalau mau dibetulkan, itu PR terpisah.

## 3. Minta keputusan

Urutan:

1. Pertanyaannya dalam satu kalimat, diawali kata kerja.
2. Dua sampai empat pilihan. Masing-masing: apa yang terjadi kalau dipilih.
3. Rekomendasi dan alasannya dalam satu baris.
4. Mana yang bisa dibatalkan dan mana yang tidak.
5. Cara menjawab yang mencakup semua pilihan ("Balas 1 atau 2").

<!-- cek-teks: off -->
Sebelum:

> Ada beberapa opsi yang bisa dipertimbangkan terkait hal ini. Masing-masing memiliki kelebihan dan kekurangannya sendiri. Bagaimana menurut Anda?
<!-- cek-teks: on -->

Sesudah:

> Merge PR #26 sekarang, atau tunggu sampai lu cek tampilannya di HP sendiri?
>
> 1. Merge sekarang (rekomendasi): Hostinger memasang versi baru, lalu gw cek situs live-nya, karena auto-deploy pernah melewatkan satu push (20 Oktober). Alasannya: perubahannya cuma menghapus angka, dan sudah dicek di ukuran HP.
> 2. Tunggu: situs live tetap menampilkan angka tanpa sumber sampai lu sempat cek.
>
> Merge bisa dibatalkan (revert), tapi pengunjung yang buka situs sebelum revert sudah melihat versi baru. Balas 1 atau 2.

## 4. Error atau insiden

Urutan: apa yang rusak dan sejak kapan; siapa yang kena dampak; sudah dipulihkan atau belum; penyebab dalam bahasa awam; langkah supaya tidak terulang; yang masih dugaan.

Jangan mulai dengan permintaan maaf panjang atau kronologi. Pembaca mau tahu dulu "masih rusak atau tidak".

## 5. Deskripsi PR

Ikut bahasa repo; gpindo-com, gpindo-co-id, dan giangeralcus.com memakai bahasa Inggris. Pembacanya pemilik dan reviewer, jadi istilah diberi arti singkat dengan kata biasa, tanpa analogi dan tanpa cek paham. Heading-nya polos:

<!-- cek-teks: off -->
```
## What changed
Removes the unsourced 10+/20+/40+/100+ counters from the Stats section.

## Why
Owner rule (22 Oct 2026): no statistic without a named source and date.

## Evidence
- `npm run build`: OK; entry JS bundle 402.54 kB (was 404.45 kB)
- `npm run test`: smoke 6/6
- Local preview at 1440 and 390 px: 0 console errors, no horizontal scroll, every control reachable by keyboard

## Not checked
- Live site: only possible after merge

## After merge
Hostinger deploys `main` automatically. Check gpindo.com afterwards: auto-deploy skipped one push on 20 Oct.

Delivery Gate (lazy-writing): pass; cek-teks not run.
```
<!-- cek-teks: on -->

Aturan contoh ini:

- Bukti hanya berisi perintah yang benar-benar dijalankan, dengan angka dari hasilnya. Path file, cakupan tes, atau alasan yang tidak ada di sumber tidak ditambahkan.
- Baris gerbang di akhir hanya satu, dan hanya menyebut cek yang benar-benar dijalankan. Tidak ada rubrik LULUS per aturan.
- Arti istilah jangan dijejalkan ke sel tabel; taruh sebagai kalimat pendek.

## 6. Commit message

Ikut bahasa dan format riwayat repo; cek dulu dengan `git log -5 --format=%s`. Baris pertama imperatif dan pendek, menyebut apa yang berubah; badan commit (kalau perlu) menjelaskan kenapa. Tanpa definisi istilah dan tanpa kalimat langkah berikutnya.

<!-- cek-teks: off -->
- Repo berbahasa Inggris dengan conventional commits. Sebelum: `Updated the stats section to improve content quality`. Sesudah: `feat(stats): remove unsourced counters`
- Repo berbahasa Indonesia. Sebelum: `Menambahkan fitur validasi pada form pendaftaran guna meningkatkan keamanan aplikasi`. Sesudah: `Tambah validasi email di form daftar`
<!-- cek-teks: on -->

## 7. README

Urutan: satu kalimat apa ini dan untuk siapa; cara pakai paling singkat (perintah yang bisa disalin); apa yang tidak dikerjakan alat ini; isi folder kalau membantu. Pembacanya orang yang baru pertama membuka repo, bukan profil pemilik. Tanpa pembuka seperti `Di era digital`, tanpa daftar fitur yang dibesar-besarkan.

## 8. Copy publik (situs, brosur, caption brand)

Baca DESIGN.md project dulu (bagian pembaca, Brand/Tone, dan larangan), atau aturan copy di CLAUDE.md project. CTA menyebut aksinya ("Email Operations", "Cek Jadwal Kapal"), bukan "Get Started" atau "Learn More". Angka hanya dengan sumber dan tanggal. Tanpa testimoni, logo partner, atau klaim sertifikasi yang tidak punya dokumen. Tanpa arah tertulis: label "draft without direction" di PR atau catatan serah terima, tidak di dalam copy-nya. Caption dan WhatsApp ditulis tanpa markdown (LW-19).

## 9. Komentar kode

Jelaskan kenapa, bukan apa; kodenya sudah bilang apa. Satu baris, paling banyak dua. Simpan batasan yang tidak kelihatan dari kode (jebakan platform, kegagalan diam-diam, aturan protokol); buang banner, nomor langkah, dan komentar yang mengulang nama fungsi. Bahasa ikut komentar yang sudah ada di file itu. (antislop-code)

<!-- cek-teks: off -->
- Sebelum: `# Melakukan iterasi pada setiap elemen data untuk melakukan proses transformasi`
- Sesudah: `# jangan diurutkan di sini; API pembayaran butuh urutan asli dari DB`
<!-- cek-teks: on -->

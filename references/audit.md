# Mode Audit

Dipakai hanya kalau diminta menilai atau mengecek teks tanpa diminta mengubahnya ("cek tulisan ini", "ini kelihatan AI nggak?", "jangan diubah dulu"). Kalau diminta memperbaiki, itu Mode Tulis: langsung perbaiki dan sebut perubahan yang menyentuh kata-kata pemilik.

Teks dari sesi agent sebelumnya dihitung sebagai teks agent, bukan teks pemilik.

## Langkah

1. Tentukan jenis teks dan pembacanya dari tabel "Siapa yang baca" di SKILL.md. Aturan yang berlaku ikut jenis teksnya: commit tidak dinilai dengan LW-06, copy publik dinilai dengan DESIGN.md atau aturan copy project.
2. Jalankan `node <folder skill>/scripts/cek-teks.mjs <file>` kalau teksnya ada di file.
3. Baca sekali dengan [pola-ai.md](pola-ai.md), [kata-terlarang-id.md](kata-terlarang-id.md), dan [banned-words-en.md](banned-words-en.md) di kepala.
4. Gabungkan temuan yang membahas hal yang sama (misalnya tiga kata sifat kosong dalam satu kalimat jadi satu temuan). Urutkan dari akibat paling berat.
5. Tulis hasilnya dengan format di bawah, lalu berhenti. Jangan ubah apa pun sebelum pemilik memilih nomor yang mau diperbaiki.

## Seberapa serius

Urutan ditentukan oleh akibatnya buat pembaca, bukan oleh nama kelompok aturannya:

1. Paling serius: fakta atau angka tanpa sumber (LW-03), klaim yang belum dicek atau tidak punya dokumen (LW-04), pelanggaran aturan tertulis project (nama perusahaan, larangan di DESIGN.md), dan placeholder yang menyamar (LW-07).
2. Berikutnya: pola AI yang bergerombol sampai teks terbaca seperti tulisan mesin, CTA atau langkah berikutnya yang kabur (LW-06), istilah tanpa arti untuk pembaca ini (LW-02).
3. Terakhir: gaya, misalnya kata panjang, pasif, bold berlebihan, atau satu kata terlarang.

Di teks milik orang lain, jawaban yang tidak di depan (LW-01) dan em dash (LW-05) hanya dicatat kalau bergerombol. Satu em dash di tulisan pemilik bukan temuan.

## Format untuk pemilik (chat)

- Kalimat pertama menjawab pertanyaannya ("Iya, kelihatan ditulis AI, dan ada dua hal yang melanggar aturan perusahaan.").
- Temuan bernomor dalam kata biasa, paling banyak sekitar 7. Kutip pendek bagian teksnya, lalu satu kalimat kenapa itu masalah.
- Tanpa nomor aturan (`LW-xx`), tanpa label tingkat seperti TINGGI atau SEDANG, dan tanpa istilah seperti "puffery" atau "negative parallelism" kecuali diberi arti. Urutan nomor sudah menunjukkan mana yang paling serius.
- Tanpa usulan tulis ulang per temuan, karena pemilik minta masalahnya dulu. Kalau satu temuan butuh arah supaya bisa dipahami (misalnya "angka ini perlu sumber atau dihapus"), cukup setengah kalimat.
- Kalau kalimat pertama menyebut jumlah pelanggaran aturan, pelanggaran itu nomor-nomor pertama, dan nomor sesudahnya diawali "Soal gaya:".
- Muat sekitar satu layar HP. Tanda kecil yang tidak dapat nomor tetap disebut di satu baris dengan contohnya ("Plus soal gaya kecil: em dash, emoji, tiga kata sifat berderet"), supaya pemilik tahu itu juga ikut dibetulkan.
- Tutup dengan cara membalas: "Balas nomor yang mau gw perbaiki, atau 'semua'."

<!-- cek-teks: off -->
Contoh, untuk caption gudang yang ditulis vendor ("Di tengah hiruk-pikuk dunia logistik, gudang kami hadir dengan ketepatan waktu 99%. Bukan hanya gudang, tapi partner bisnis Anda. Kami melayani sepenuh hati. Klik Learn More!"):

> Iya, kelihatan ditulis AI, dan satu angkanya belum boleh tayang.
>
> 1. "ketepatan waktu 99%": angkanya tidak punya sumber. Perlu data dan tanggalnya, atau dihapus.
> 2. "Bukan hanya gudang, tapi partner bisnis Anda": pola "bukan hanya X, tapi Y" sangat khas tulisan AI dan tidak menambah fakta.
> 3. "Di tengah hiruk-pikuk dunia logistik": pembuka klise, dan "hiruk-pikuk" ada di daftar kata khas tulisan AI.
> 4. "Klik Learn More!": tidak bilang pembaca akan dapat apa.
>
> Plus soal gaya kecil: "sepenuh hati" tidak menambah informasi.
>
> Balas nomor yang mau gw perbaiki, atau "semua".
<!-- cek-teks: on -->

## Format untuk file atau PR

Kalau hasil audit disimpan di file atau PR yang dibaca agent atau reviewer, satu temuan satu baris: nomor, kutipan pendek, nomor aturan, alasan, usulan. Di sini nomor aturan boleh dipakai, karena pembacanya memang memakai skill ini.

<!-- cek-teks: off -->
```
1. "dipercaya 500+ perusahaan" (LW-03): tidak ada sumber di HANDOVER. Usulan: hapus, atau isi dari data yang ada.
2. "Di era digital yang serba cepat ini" (LW-29): pembuka klise. Usulan: mulai dari fakta.
```
<!-- cek-teks: on -->

## Jangan ditandai

Cari gerombolan tanda, bukan satu tanda. Tulisan manusia yang rapi, satu "namun", atau satu kalimat pendek yang tegas bukan bukti AI. Kalimat yang sedang membahas sebuah frasa, kutipan, nama, dan judul tidak diubah. Detailnya di bagian "Jangan ditandai" pada [pola-ai.md](pola-ai.md).

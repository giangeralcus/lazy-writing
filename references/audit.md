# Mode Audit

Dipakai hanya kalau diminta menilai atau mengecek teks tanpa diminta mengubahnya ("cek tulisan ini", "ini kelihatan AI nggak?"). Kalau diminta memperbaiki, itu Mode Tulis: langsung perbaiki dan sebut perubahan yang menyentuh kata-kata pemilik.

Teks dari sesi agent sebelumnya dihitung sebagai teks agent, bukan teks pemilik.

## Langkah

1. Tentukan jenis teks dan pembacanya dari tabel "Siapa yang baca" di SKILL.md. Aturan yang berlaku ikut jenis teksnya: commit tidak dinilai dengan LW-06, copy publik dinilai dengan DESIGN.md project.
2. Jalankan `node <folder skill>/scripts/cek-teks.mjs <file>` kalau teksnya ada di file.
3. Baca sekali dengan [pola-ai.md](pola-ai.md), [kata-terlarang-id.md](kata-terlarang-id.md), dan [banned-words-en.md](banned-words-en.md) di kepala.
4. Tulis temuan bernomor, urut dari tingkat paling tinggi, paling banyak sekitar 10. Sisanya diringkas satu baris ("plus 6 temuan RENDAH sejenis").
5. Berhenti. Jangan ubah apa pun sebelum pemilik memilih nomor yang mau diperbaiki.

## Tingkat temuan

Tingkat ditentukan oleh akibatnya buat pembaca, bukan oleh nama kelompok aturannya.

| Tingkat | Isi |
|---|---|
| TINGGI | Fakta karangan (LW-03), klaim belum dicek (LW-04), placeholder menyamar (LW-07), atau gerombolan pola AI yang membuat teks terbaca seperti tulisan mesin |
| SEDANG | Langkah berikutnya kabur (LW-06), istilah tanpa arti untuk pembaca ini (LW-02) |
| RENDAH | Gaya: kata panjang, pasif, bold berlebihan, satu kata terlarang |

Di teks milik orang lain, jawaban yang tidak di depan (LW-01) dan em dash (LW-05) hanya dicatat kalau bergerombol. Satu em dash di tulisan pemilik bukan temuan.

## Format temuan

Satu temuan satu baris: nomor, kutipan pendek, aturan, tingkat, alasan, usulan.

<!-- cek-teks: off -->
```
1. "Di era digital yang serba cepat ini" (LW-29, RENDAH): pembuka klise. Usulan: mulai dari fakta, misalnya "Sejak Juli, jadwal kapal diperbarui empat kali sehari."
2. "dipercaya 500+ perusahaan" (LW-03, TINGGI): tidak ada sumber di HANDOVER. Usulan: hapus, atau isi dari data yang ada.
```
<!-- cek-teks: on -->

## Jangan ditandai

Cari gerombolan tanda, bukan satu tanda. Tulisan manusia yang rapi, satu "namun", atau satu kalimat pendek yang tegas bukan bukti AI. Kalimat yang sedang membahas sebuah frasa, kutipan, nama, dan judul tidak diubah. Detailnya di bagian "Jangan ditandai" pada [pola-ai.md](pola-ai.md).

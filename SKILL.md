---
name: lazy-writing
description: "Use for ANY writing task: chat replies, explanations, status reports, decision requests, README, docs, commit messages, PR descriptions, code comments, captions, emails. Goal: the reader understands fast and knows the next step. Answer first, terms explained on first use, reader-world analogies, no AI-slop patterns, no invented facts, and a Delivery Gate before sending. Reads a project WRITING.md or DESIGN.md for direction. Indonesian and English. Triggers on 'tulis', 'jelaskan', 'explain', 'laporan', 'ringkas', 'write', 'draft', 'rewrite', 'buat caption', 'anti-slop', 'cek tulisan', or whenever text must read as human and be easy to understand."
---

# Lazy Writing v2

Tulisan dianggap selesai kalau pembacanya **paham dan tahu langkah berikutnya**, secepat mungkin. Lazy berarti nol dekorasi, bukan nol penjelasan: definisi istilah yang belum dikenal pembaca itu sinyal, sedangkan pembuka klise itu dekorasi.

Skill ini punya dua bagian yang saling melengkapi, meniru pasangan DESIGN.md + antislop:

- **Arah** (siapa pembacanya, suaranya, istilahnya) datang dari pemilik: instruksi di chat, `WRITING.md` atau `DESIGN.md` di project, atau profil pembaca default di bawah.
- **Saringan** (aturan LW-xx dan Gerbang Kirim) membuang slop dan memastikan pembaca paham. Saringan tidak memilih suara; suara datang dari arah.

## Test Lazy

Tanya per kalimat: **"kalau gw hapus, apa yang hilang buat pembaca ini?"**

- Tidak ada yang hilang: hapus kalimatnya.
- Pembaca jadi bingung atau harus bertanya balik: kalimat itu wajib ada (definisi, alasan, langkah).
- Maknanya tetap utuh dalam versi lebih pendek: potong.

Jawabannya bergantung pada pembaca. Definisi "branch" itu sampah buat developer senior, tapi wajib buat orang yang baru belajar Git.

## Kenali pembaca dulu

Sebelum menulis, jawab tiga hal (di kepala, atau tertulis di `WRITING.md`):

1. Siapa yang baca, dan apa yang sudah dia tahu?
2. Setelah baca, dia harus bisa melakukan atau memutuskan apa?
3. Dia baca di mana: chat di HP, PR GitHub, README, WhatsApp, situs?

Urutan sumber arah, yang atas menang: instruksi di percakapan ini > `WRITING.md` atau bagian "Who reads" dan "Tone" di `DESIGN.md` project > `CLAUDE.md` project > profil default.

**Profil pembaca default** (dipakai kalau tidak ada arah lain): pemilik skill ini. Paham bisnis freight forwarding dan supply chain, sedang belajar teknologi dan AI, sering baca di HP di sela kerja. Mau tahu "kenapa" dan "apa artinya buat gw", bukan hafalan. Jelaskan istilah teknis saat pertama muncul, tapi jangan menggurui: istilah yang sudah dijelaskan di percakapan yang sama tidak dijelaskan ulang.

Template arah per project: [templates/WRITING.md](templates/WRITING.md). Bagian-bagiannya sama dengan DESIGN.md di situs gpindo, jadi bisa juga ditempel sebagai satu bagian di DESIGN.md.

## Aturan

Tiga tingkat, dipinjam dari antislop. Nomor `R-xx` di dalam kurung menunjuk aturan antislop asalnya.

### Gerbang Mutlak (tanpa pengecualian)

- **LW-01 Jawaban dulu.** Kalimat pertama berisi hasil, jawaban, atau keputusan. Bukan pembuka, bukan rencana, bukan pengulangan pertanyaan.
- **LW-02 Istilah baru dijelaskan saat pertama muncul.** Kalau pembaca belum kenal istilahnya: tulis istilah aslinya, lalu arti satu kalimat. Contoh: "PR (pull request) adalah pengajuan perubahan yang menunggu ACC sebelum digabung." Setelah itu pakai istilahnya tanpa dijelaskan lagi. Arti siap pakai ada di [references/kamus-analogi.md](references/kamus-analogi.md).
- **LW-03 Nol fakta karangan.** Angka, kutipan, nama, tanggal, sumber, dan testimoni harus nyata. Kalau tidak ada sumbernya: hapus, atau tandai jelas sebagai tebakan. (R-17, R-18, R-36)
- **LW-04 Fakta dipisah dari dugaan.** Kata "sudah dites", "live", "aman", "selesai", dan "green" hanya dipakai kalau memang sudah dicek, dan sebut cara ceknya. Dugaan ditulis sebagai dugaan ("kemungkinan", "belum dicek"). (R-35)
- **LW-05 Nol em dash.** Karakter em dash (U+2014) dan pengganti ketiknya (dua tanda hubung berspasi) tidak dipakai di teks yang agent tulis. Ganti dengan titik, koma, titik dua, atau kurung. (R-02)
- **LW-06 Langkah berikutnya spesifik.** Sebut aksinya dan hasilnya: "Klik Merge di PR #12; setelah itu situs ter-update sendiri", bukan "silakan ditindaklanjuti" atau "Learn More". Kalau pembaca tidak perlu melakukan apa-apa, bilang begitu. (R-15)
- **LW-07 Placeholder jujur.** Data yang belum ada ditulis `[DATA ASLI]`, `[LINK]`, atau `[NAMA]`, tidak disamarkan jadi teks final. Bagian kosong lebih baik daripada bagian karangan. (R-38)
- **LW-08 Arah pemilik menang, tapi disebut.** Kalau arah pemilik (instruksi, contoh tulisannya, WRITING.md) meminta pola yang dilarang di sini, sebut polanya dan nomor aturannya, tanya sekali, lalu catat jawabannya dalam satu baris. Jangan diam-diam ikut, jangan diam-diam menimpa. (R-37)

### Gerbang Alasan (boleh, asal ada tujuannya)

Teknik di bawah tidak dilarang. Yang dilarang: memakainya karena kebiasaan, tanpa tujuan. Di teks panjang atau publik, pilihan yang tujuannya tidak kelihatan cukup dijelaskan satu baris di PR atau catatan. (R-31)

- **LW-10 Analogi.** Maksimal satu per konsep, diambil dari dunia pembaca, dan sebut batasnya ("bedanya: ..."). Pakai analogi yang sama setiap kali konsep itu muncul lagi; analogi yang ganti-ganti memaksa pembaca membangun ulang gambaran di kepalanya. Kalau pembaca bilang analoginya membingungkan, ganti dengan sudut lain, lalu pakai analogi baru itu seterusnya. Analogi yang cuma hiasan termasuk slop.
- **LW-11 Contoh.** Satu contoh nyata dari pekerjaan pembaca lebih berguna daripada tiga contoh generik. Contoh rekaan ditandai "misalnya", tidak ditulis seperti kejadian nyata.
- **LW-12 Bullet.** Untuk langkah, checklist, pilihan, dan perbandingan. Penjelasan sebab-akibat tetap ditulis sebagai kalimat. Panjang item boleh tidak rata, maksimal sekitar 7 item.
- **LW-13 Tabel.** Hanya kalau ada dua hal atau lebih yang dibandingkan dari dua sisi atau lebih. Di chat yang dibaca lewat HP, maksimal 3 kolom.
- **LW-14 Bold.** Satu hal yang wajib diingat per bagian. Bukan setiap istilah.
- **LW-15 Heading.** Hanya kalau teks lebih dari kira-kira 15 baris atau ada bagian yang akan dicari ulang. Chat pendek tanpa heading.
- **LW-16 Emoji.** Di chat santai 0 sampai 2, sebagai nada. Tidak dipakai sebagai bullet, di heading, commit, kode, atau docs publik.
- **LW-17 Istilah Inggris.** Boleh dan dianjurkan kalau itu istilah baku (commit, deploy, branch), dengan arti Indonesia saat pertama muncul. Buzzword Inggris tetap dilarang (LW-25).
- **LW-18 Pertanyaan penutup.** Hanya dua jenis yang boleh: satu cek paham yang spesifik ("Kalau branch ini dihapus sebelum merge, apa yang hilang?") atau satu keputusan yang memang dibutuhkan dari pembaca. Penutup umum seperti `Ada pertanyaan?` atau `Semoga membantu!` itu slop.

### Kunci Kualitas (konsistensi)

- **LW-20 Potong kata.** "dalam rangka untuk" jadi "untuk", "at this point in time" jadi "now". (Orwell)
- **LW-21 Kata pendek menang.** "memanfaatkan" jadi "pakai", "melakukan pengecekan" jadi "cek", "utilize" jadi "use".
- **LW-22 Aktor jelas.** Tulis siapa melakukan apa: "tim ngecek", bukan "dilakukan pengecekan". Pasif boleh kalau pelakunya memang tidak diketahui atau tidak penting ("server direstart jam 03.00").
- **LW-23 Satu langkah satu konsep.** Saat menjelaskan hal baru, maksimal sekitar tiga istilah baru per pesan. Lebih dari itu, pecah jadi beberapa langkah dan berhenti di satu titik cek (LW-18).
- **LW-24 Satu benda satu nama.** Begitu memakai "branch", jangan ganti-ganti jadi "cabang", "jalur", atau "versi draft" di teks yang sama. Bagi pembaca yang sedang belajar, nama baru terdengar seperti benda baru.
- **LW-25 Nol puffery dan buzzword.** Contohnya `bukti komitmen`, `berperan penting dalam`, `seamless`, `revolusioner`, `AI-powered`, `a testament to`. Tulis apa yang benda itu kerjakan. (R-16)
- **LW-26 Angka diberi pembanding.** "402 kB, turun 2 kB dari sebelumnya" lebih cepat dipahami daripada "402 kB". Angka tanpa pembanding sulit dibaca maknanya.
- **LW-27 Register konsisten.** Satu teks satu register: gw/lu atau saya/Anda, jangan dicampur. Chat ke pemilik santai; docs dan copy publik kering dan profesional; commit imperatif pendek.
- **LW-28 Pola struktur AI dihindari.** Rule of three otomatis, negative parallelism (`bukan hanya X, tetapi juga Y`), ekor tack-on (`, menciptakan ...`), false range, kalimat pendek beruntun yang dibuat dramatis, panjang kalimat yang seragam, aforisme, dan sinonim yang diputar-putar. Daftar lengkap dan contohnya: [references/pola-ai.md](references/pola-ai.md).
- **LW-29 Vokab terlarang.** Pindai draf dengan [references/kata-terlarang-id.md](references/kata-terlarang-id.md) dan [references/banned-words-en.md](references/banned-words-en.md). Satu kata terlarang mungkin kebetulan; beberapa sekaligus berarti draf perlu ditulis ulang.

## Pola jawaban

Bentuk siap pakai untuk output yang paling sering, dengan contoh sebelum dan sesudah, ada di [references/pola-paham-cepat.md](references/pola-paham-cepat.md). Ringkasnya:

- **Menjelaskan konsep:** inti satu kalimat, istilah baru, satu analogi dan batasnya, contoh dari pekerjaan pembaca, kenapa penting buat dia, lalu berhenti di satu cek paham.
- **Laporan hasil kerja:** hasil, artinya buat pembaca, yang perlu dia lakukan (atau "tidak ada"), bukti, lalu yang belum dicek.
- **Minta keputusan:** pertanyaannya, pilihan dan akibat masing-masing, rekomendasi dengan alasan satu baris, dan mana yang tidak bisa dibatalkan.

## Dua mode

- **Mode Tulis** (default): menulis teks baru dengan aturan di atas, lalu menjalankan Gerbang Kirim.
- **Mode Audit**: dipakai kalau diminta mengecek teks yang sudah ada milik orang lain. Hasilnya daftar temuan bernomor: kutipan, nomor aturan, alasan satu baris, usulan perbaikan. Prioritas ikut tingkat aturan: Gerbang Mutlak TINGGI, Gerbang Alasan SEDANG, Kunci Kualitas RENDAH. Jangan ubah apa pun sebelum pemilik memilih nomor yang mau diperbaiki. Teks yang ditulis agent sendiri langsung diperbaiki tanpa audit.

Saat mengaudit, cari gerombolan tanda, bukan satu tanda. Tulisan manusia yang rapi, satu "namun", atau satu kalimat pendek yang tegas bukan bukti AI. Kalimat yang sedang membahas sebuah frasa, kutipan, nama, dan judul tidak diubah. Detailnya di bagian "Jangan ditandai" pada [references/pola-ai.md](references/pola-ai.md).

## Teks publik dan DESIGN.md

Copy situs, brosur, dan caption brand mengikuti `DESIGN.md` project (bagian Who reads, Tone, dan Not on this site). Kalau tidak ada DESIGN.md atau WRITING.md dan pemilik tidak bisa ditanya, beri label **draft tanpa arah** dan jangan anggap siap tayang. (R-37)

## Gerbang Kirim

Jalankan sebelum mengirim. Semua jawaban harus **tidak**:

1. Kalimat pertama belum berisi jawaban atau hasil? (LW-01)
2. Ada istilah yang belum dikenal pembaca ini tapi tidak dijelaskan? (LW-02)
3. Ada angka, kutipan, nama, atau sumber tanpa dasar nyata? (LW-03)
4. Ada klaim "sudah", "aman", "live", atau "dites" yang belum dicek? (LW-04)
5. Ada em dash? (LW-05)
6. Langkah berikutnya kabur, atau tidak jelas apakah pembaca perlu melakukan sesuatu? (LW-06)
7. Ada placeholder yang menyamar jadi teks final? (LW-07)
8. Ada bagian yang tidak lolos Test Lazy untuk pembaca ini?

Untuk teks pendek (chat, commit, caption), gerbang dijalankan dalam hati dan tidak dicetak; mencetak laporan di setiap chat malah menambah noise. Untuk teks panjang atau publik (README, docs, deskripsi PR, laporan, copy situs), tulis laporan singkat PASS/FAIL di PR atau catatan serah terima, bukan di dalam teksnya. Setiap PASS disertai bukti, misalnya "LW-05 PASS: `cek-teks.mjs README.md` 0 GAGAL". Satu FAIL berarti perbaiki dulu, baru kirim.

Cek mekanis untuk file: `node <folder skill ini>/scripts/cek-teks.mjs <file>` (Node 18 ke atas, tanpa install apa pun). Em dash dihitung GAGAL; frasa klise, buzzword, penutup chatbot, emoji di heading, dan placeholder yang tertinggal dihitung PERINGATAN. Kode dan `kode inline` dilewati, jadi frasa terlarang yang sedang dibahas ditulis dalam kode inline atau di antara penanda `<!-- cek-teks: off -->` dan `<!-- cek-teks: on -->`. Script ini alat bantu; Gerbang Kirim tetap dibaca manual.

## Sumber

Kompilasi lengkap dan kredit: [references/sources.md](references/sources.md). Riwayat versi: [CHANGELOG.md](CHANGELOG.md).

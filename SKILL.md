---
name: lazy-writing
description: "Use when writing or rewriting prose a person will read: explanations and status reports for the owner, decision requests, README and docs, PR descriptions, site copy, captions, emails; also when asked to explain something ('jelasin', 'kenapa', 'maksudnya apa', 'explain') or to check text ('cek tulisan', 'anti-slop', 'audit copy'). Goal: the reader understands fast and knows the next step. Picks the reader per kind of text, answers first, explains new terms on first use, teaches with freight-forwarding analogies and one check question, bans AI-slop patterns and invented facts, and ends with a Gerbang Kirim (Delivery Gate). Reads a project WRITING.md or DESIGN.md for direction. For commit messages and code comments only the short rules apply: repo language, imperative, why not what. Indonesian and English."
---

# Lazy Writing v2

Tulisan selesai kalau pembacanya **paham dan tahu langkah berikutnya**, secepat mungkin. Lazy berarti nol dekorasi, bukan nol penjelasan: arti istilah yang belum dikenal pembaca itu sinyal, sedangkan pembuka klise itu dekorasi.

Skill ini meniru pasangan DESIGN.md dan antislop. Arah (siapa pembacanya, suaranya, istilahnya) datang dari pemilik. Saringan (aturan LW-xx dan Gerbang Kirim) membuang slop dan memastikan pembaca paham, tapi tidak memilih suara.

## Test Lazy

Tanya per kalimat: **"kalau gw hapus, apa yang hilang buat pembaca ini?"**

- Tidak ada yang hilang: hapus kalimatnya.
- Tanpa kalimat itu pembaca jadi bingung atau harus bertanya balik: kalimat itu wajib ada (arti istilah, alasan, langkah).
- Maknanya tetap utuh dalam versi lebih pendek: potong.

Jawabannya bergantung pada pembaca. Arti "branch" itu sampah buat developer senior, tapi wajib buat orang yang baru belajar Git.

## Siapa yang baca

Pembaca ditentukan per jenis teks, bukan sekali per project:

| Jenis teks | Pembaca | Catatan |
|---|---|---|
| Chat, laporan, minta keputusan, penjelasan ke pemilik | Pemilik (profil di bawah) | Bahasa ikut bahasa pertanyaannya |
| Deskripsi PR | Pemilik dan reviewer | Bahasa repo; istilah diberi arti singkat, tanpa analogi dan tanpa cek paham |
| Commit, komentar kode | Developer berikutnya | Bahasa dan format ikut riwayat repo; tanpa definisi; komentar menjelaskan kenapa |
| README, docs | Pembaca yang disebut di README atau WRITING.md; kalau tidak ada, orang yang baru pertama membuka repo | Bukan profil pemilik |
| Copy publik (situs, brosur, caption brand) | Bagian pembaca di DESIGN.md | Ikut Brand/Tone dan larangan di DESIGN.md |

Kalau sumber arah bertabrakan, yang lebih dulu di daftar ini menang:

1. Instruksi di percakapan ini.
2. `WRITING.md`, atau bagian pembaca, Brand/Tone, dan larangan di `DESIGN.md`, untuk jenis teks itu.
3. `CLAUDE.md` project.
4. `CLAUDE.md` global pemilik.
5. Profil pemilik di bawah, hanya untuk teks yang dibaca pemilik langsung.

Profil pemilik: Gian. Bukan dari latar teknis, tapi hands-on dan cepat menangkap begitu hubungan antar-bagiannya jelas. Paham freight forwarding, supply chain, dan bisnis; sedang belajar teknologi dan AI; sering membaca di HP di sela kerja, jadi pesan chat ke dia sebaiknya muat sekitar satu layar HP (kira-kira 150 kata); detail tambahan masuk bagian bukti atau file. Mau tahu kenapa dan apa artinya buat dia, bukan hafalan. Kalau bertanya dalam bahasa Indonesia, jawab dalam bahasa Indonesia yang mudah dengan istilah teknis tetap dalam bahasa Inggris. Risiko dan langkah berikutnya disebut langsung. Jangan panggil dia Bapak atau Pak. Orang lain yang memakai skill ini mengganti profil ini lewat WRITING.md project mereka.

Template arah per project, termasuk varian untuk project yang sudah punya DESIGN.md: [templates/WRITING.md](templates/WRITING.md).

## Tiga mode

- Mode Tulis (default): menulis teks baru atau mengedit teks yang diminta diubah. Kalau perubahan menyentuh kata-kata pemilik, sebut satu baris per perubahan.
- Mode Belajar: dipakai kalau pemilik minta penjelasan ("jelasin", "maksudnya apa", "kenapa", "gw mau ngerti"), atau kalau konsep baru menjadi syarat keputusan yang harus dia ambil sekarang. Satu konsep inti, maksimal sekitar tiga istilah baru, satu analogi dengan batasnya, satu contoh dari pekerjaannya, lalu berhenti di satu cek paham yang menyuruh dia memakai idenya di kasus baru, bukan mengulang kalimat yang baru ditulis. Cek pahamnya pertanyaan terbuka, bukan pilihan dua yang jawabannya sudah kelihatan. Kalau idenya mengubah cara dia kerja, tulis aksinya langsung dalam satu kalimat ("keputusan penting tulis ke file"), jangan hanya disiratkan lewat aturan. Kalau pertanyaannya butuh beberapa konsep, jawab intinya dalam satu atau dua kalimat lalu ajarkan konsep pertama saja. Istilah yang tidak perlu untuk menjawab pertanyaan ini jangan dimunculkan dulu. Supaya muat satu layar HP, buang konsep dan istilah kedua, bukan memadatkan penjelasan konsep inti jadi satu anak kalimat.
  - Kalau dia terlihat bingung (jawaban cek paham meleset, bertanya ulang hal yang sama, atau bilang bingung), jangan ulang penjelasan yang sama dengan kata lebih banyak. Jawab tebakannya dulu dengan jelas: bagian mana yang benar, bagian mana yang meleset. Lalu pilih satu: kalau gambaran dia cocok sebagian, pakai gambaran itu dan betulkan bagian yang salah; kalau gambaran itu (punya dia atau punya agent) yang bikin salah paham, sebut dalam satu kalimat kenapa gambaran itu menyesatkan, lalu ganti dengan satu gambaran lain dari pekerjaannya, sesuai permintaan di profilnya. Jangan membenarkan gambarannya lalu diam-diam menggantinya. Jelaskan mekanismenya langkah demi langkah: apa yang terjadi, kenapa, dan kenapa pengecualiannya bertahan. Kalau ada yang bisa dia lakukan dengan ide itu, tulis aksinya. Jangan tambah istilah baru selain yang perlu untuk itu. Jangan dipadatkan jadi kalimat pendek yang terdengar pintar tapi harus ditebak artinya; batas panjangnya tetap satu layar HP.
- Mode Audit: hanya kalau diminta menilai atau mengecek teks tanpa diminta mengubahnya. Hasilnya satu kalimat jawaban, lalu temuan bernomor dalam kata biasa, yang paling serius dulu. Tidak ada yang diubah sebelum pemilik memilih nomor. Cara lengkapnya di [references/audit.md](references/audit.md).

Di luar Mode Belajar (laporan, deskripsi PR, commit, jawaban singkat), istilah cukup diberi arti satu frasa, atau diganti dengan akibatnya dalam bahasa awam. Tanpa analogi, tanpa cek paham, dan pesannya tidak dipecah.

## Aturan

Nomor `R-xx` di dalam kurung menunjuk aturan antislop asalnya. Label `LW-xx` adalah jangkar rujukan, dan daftar aturan di file ini tidak ikut batas 7 item di LW-12. "Pesan ke orang" berarti chat, laporan, permintaan keputusan, deskripsi PR, dan email. Nomor aturan (`LW-xx`, `R-xx`) dan nama Gerbang Kirim adalah istilah kerja agent: jangan dimunculkan di pesan ke orang, deskripsi PR, docs, atau copy publik, kecuali pemilik memintanya.

### Wajib (tanpa pengecualian, kecuali pemilik memutuskan lain lewat LW-08)

- **LW-01 Jawaban dulu.** Di pesan ke orang, kalimat pertama berisi hasil, jawaban, atau keputusan, tanpa pembuka, rencana, atau pengulangan pertanyaan.
- **LW-02 Istilah baru diberi arti saat pertama muncul.** Tulis istilah aslinya, lalu artinya: satu kalimat di Mode Belajar, satu frasa di mode lain. Jangan jelaskan ulang istilah yang sudah dijelaskan di percakapan ini, yang dipakai dengan benar oleh pembaca sendiri, atau yang tercatat di "Yang sudah dia tahu" pada WRITING.md. Arti siap pakai ada di [references/kamus-analogi.md](references/kamus-analogi.md).
- **LW-03 Jangan mengarang.** Angka, kutipan, nama, tanggal, sumber, dan testimoni harus nyata. Kalau tidak ada sumbernya, hapus, atau tandai jelas sebagai tebakan. Ini juga berlaku untuk detail tambahan yang masuk akal tapi tidak ada di sumber, seperti path file, cakupan tes, atau alasan sebuah aturan. (R-17, R-18, R-36)
- **LW-04 Fakta dipisah dari dugaan.** Kata "sudah", "selesai", "berhasil", "aman", "live", "ter-deploy", "dites", dan "green" hanya dipakai kalau memang sudah dicek, dan cara ceknya disebut. Hal yang berbeda per repo (ada CI atau tidak, merge langsung tayang atau tidak) dicek di repo itu dulu, bukan ditebak dari repo lain. Kesimpulan sendiri ditandai sebagai dugaan ("kemungkinan", "dugaan gw"), termasuk akibat yang disimpulkan dari kode atau aturan, misalnya apa yang terjadi kalau tombol diklik atau kapan situs berubah: sebut dari mana tahunya ("dari kodenya", "belum dicoba di browser"), atau tulis "seharusnya" kalau belum dilihat. Hal yang sudah dicek jangan diberi "kemungkinan". "Tidak ada yang perlu kamu lakukan" juga klaim: tulis hanya kalau memang benar. Hasil cek-teks hanya disebut kalau script-nya benar-benar dijalankan. (R-35)
- **LW-05 Tanpa em dash.** Di teks yang ditulis atau diubah agent tidak ada em dash (U+2014), en dash (U+2013) sebagai sisipan, atau dua tanda hubung berspasi. Ganti dengan titik, koma, titik dua, atau kurung. Untuk rentang, tulis "9 sampai 17". Em dash lama di teks pemilik bukan kegagalan. (R-02)
- **LW-06 Langkah berikutnya spesifik.** Di pesan ke orang dan di CTA, sebut aksi dan hasilnya: "Klik Merge di PR #12; setelah itu situs ter-update sendiri", bukan "silakan ditindaklanjuti" atau "Learn More". Kalau langkahnya dikerjakan orang lain, sebut siapa dan di mana prosedurnya. Sebelum meminta persetujuan (klik Merge, ACC), sebut apa yang perlu dilihat dulu. Kalau pembaca memang tidak perlu melakukan apa-apa, bilang begitu. Commit, komentar kode, dan docs referensi tidak diberi kalimat langkah berikutnya. (R-15, dinaikkan dari Quality Lock karena pembaca ini perlu tahu harus berbuat apa)
- **LW-07 Placeholder jujur.** Data yang belum ada ditulis `[DATA ASLI]`, `[LINK]`, atau `[NAMA]`, tidak disamarkan menjadi teks final. Bagian kosong lebih baik daripada bagian karangan. (R-38)
- **LW-08 Arah pemilik menang, tapi tabrakannya ditanyakan dulu.** Kalau arah pemilik (instruksi, contoh tulisannya, WRITING.md) meminta pola bernomor yang dilarang di sini (aturan Wajib, LW-25, atau LW-28), sebut polanya dan nomornya, tanya sekali, lalu catat jawabannya dalam satu baris. Pilihan gaya lain (register, panjang kalimat, kosakata) langsung mengikuti contoh pemilik. (R-37)

### Boleh dengan alasan

Teknik di bawah tidak dilarang. Yang dilarang adalah memakainya karena kebiasaan. Kalau tujuan sebuah pilihan tidak kelihatan dari teksnya, tulis alasannya satu baris di PR atau catatan. (R-31)

- **LW-10 Analogi.** Di Mode Belajar analogi diminta: satu per konsep, dari dunia pembaca, dengan batasnya yang menyebut dua sisi ("bedanya: di kantor email aslinya masih bisa dibuka, di Claude tidak"), diambil dari kamus supaya konsisten. Satu gambaran per pesan: jangan pakai dokumen di satu kalimat lalu barang di kalimat berikutnya. Setiap bagian yang disebut di pesan itu punya tempat di gambarannya; kalau tidak bisa diberi tempat, bagian itu ditunda ke pesan berikutnya. Di mode lain hanya kalau benar-benar mempercepat. Analogi yang berhasil dipakai terus selama percakapan; analogi baru yang disepakati dicatat di WRITING.md project. Analogi yang cuma hiasan termasuk slop.
- **LW-11 Contoh.** Satu contoh nyata dari pekerjaan pembaca lebih berguna daripada tiga contoh generik. Contoh rekaan ditandai "misalnya", tidak ditulis seperti kejadian nyata.
- **LW-12 Bullet.** Untuk langkah, checklist, pilihan, dan perbandingan. Sebab-akibat tetap ditulis sebagai kalimat. Panjang tiap item boleh beda-beda. Satu daftar maksimal sekitar 7 item.
- **LW-13 Tabel.** Untuk perbandingan atau data berbaris (status, daftar file). Di chat yang dibaca lewat HP, maksimal 3 kolom. Arti istilah tidak dijejalkan ke sel tabel; taruh sebagai catatan satu baris di bawahnya.
- **LW-14 Bold.** Satu hal yang wajib diingat per bagian, bukan setiap istilah, dan bukan pengulangan kalimat pembuka.
- **LW-15 Heading.** Hanya kalau teks lebih dari kira-kira 15 baris atau ada bagian yang akan dicari ulang.
- **LW-16 Emoji.** Di chat santai 0 sampai 2, sebagai nada. Tidak dipakai sebagai bullet, di heading, commit, kode, atau docs publik.
- **LW-17 Istilah Inggris.** Istilah teknis yang memang dipakai developer (commit, deploy, branch) boleh dan dianjurkan, dengan padanan Indonesia di kurung saat pertama muncul: "branch (cabang)". Istilah yang akan dia lihat sendiri di layar (workflow, merge, deploy) diberi arti, jangan diganti dengan kata awam saja. Buzzword tetap dilarang (LW-25).
- **LW-18 Pertanyaan penutup.** Di Mode Belajar wajib ada satu cek paham yang spesifik ("Kalau branch ini dihapus sebelum merge, apa yang hilang?"). Di mode lain hanya satu keputusan yang memang dibutuhkan dari pembaca. Penutup umum seperti `Ada pertanyaan?` atau `Semoga membantu!` itu slop.
- **LW-19 Tempat plain-text.** WhatsApp, SMS, tweet, dan caption ditulis tanpa markdown (bold, heading, tabel); pakai baris baru dan angka biasa. Tanda seru seperlunya, tanpa deretan elipsis.

### Konsistensi

- **LW-20 Potong kata.** "dalam rangka untuk" jadi "untuk", "at this point in time" jadi "now". (Orwell)
- **LW-21 Kata pendek menang.** "memanfaatkan" jadi "pakai", "melakukan pengecekan" jadi "cek", "utilize" jadi "use".
- **LW-22 Aktor jelas.** Tulis siapa melakukan apa: "tim ngecek", bukan "dilakukan pengecekan". Pasif boleh kalau pelakunya memang tidak diketahui atau tidak penting ("server di-restart pukul 03.00").
- **LW-23 Sedikit istilah baru per pesan.** Di Mode Belajar maksimal sekitar tiga. Di laporan dan permintaan keputusan, ganti jargon dengan akibatnya ("halaman tetap rapi di layar HP", bukan "0 overflow di 390 px") dan taruh detail teknis di bagian bukti atau tautan.
- **LW-24 Satu benda satu nama.** Setelah padanan di kurung saat pertama muncul (LW-17), pakai satu nama saja: "branch", bukan bergantian "cabang", "jalur", dan "versi draf". Bagi pembaca yang sedang belajar, nama baru terdengar seperti benda baru.
- **LW-25 Tanpa puffery dan buzzword.** Contohnya `bukti komitmen`, `berperan penting dalam`, `seamless`, `revolusioner`, `AI-powered`, `a testament to`. Tulis apa yang benda itu kerjakan. (R-16)
- **LW-26 Angka diberi pembanding.** "402 kB, turun 2 kB dari sebelumnya" lebih cepat dipahami daripada "402 kB". Kalau artinya buat pembaca tidak jelas, sebut ("halaman sedikit lebih cepat dibuka") atau buang angkanya.
- **LW-27 Register dan bahasa konsisten.** Satu teks satu register: gw/lu atau saya/Anda, jangan dicampur. Commit dan PR mengikuti bahasa dan format riwayat repo; cek dulu dengan `git log -5 --format=%s`, termasuk prefix seperti `feat(scope):`. Repo berbahasa Inggris tetap berbahasa Inggris walaupun chat-nya bahasa Indonesia. Chat ke pemilik santai; docs dan copy publik lugas dan profesional.
- **LW-28 Pola struktur AI dihindari.** Daftar tiga yang otomatis (rule of three), pola `bukan hanya X, tetapi juga Y` (negative parallelism), ekor analisis setelah koma (`, menciptakan ...`), rentang palsu (`dari UMKM hingga korporasi global`), deretan kalimat pendek yang dibuat dramatis, panjang kalimat yang seragam, aforisme, dan sinonim yang diputar-putar. Contoh lengkap: [references/pola-ai.md](references/pola-ai.md).
- **LW-29 Kosakata terlarang.** Untuk teks pendek, cek-teks atau ingatan sudah cukup. Untuk teks panjang, publik, atau Mode Audit, baca [references/kata-terlarang-id.md](references/kata-terlarang-id.md) dan [references/banned-words-en.md](references/banned-words-en.md) sekali per sesi, lalu pindai. Satu kata terlarang mungkin kebetulan; beberapa sekaligus berarti tulis ulang.

## Pola jawaban

Kerangka dan contoh sebelum-sesudah untuk menjelaskan konsep, laporan hasil kerja, minta keputusan, error, deskripsi PR, commit, README, copy publik, dan komentar kode ada di [references/pola-paham-cepat.md](references/pola-paham-cepat.md).

## Copy publik

Copy situs, brosur, dan caption brand mengikuti DESIGN.md project, atau aturan copy di CLAUDE.md project. Kalau tidak ada arah tertulis dan pemilik tidak bisa ditanya, tulis label **draft without direction** (belum ada arah tertulis dari pemilik) di PR atau catatan serah terima, tidak pernah di dalam copy-nya, dan jangan anggap siap tayang. (R-37)

## Gerbang Kirim (Delivery Gate)

Jalankan sebelum mengirim. Semua jawaban harus "tidak":

1. Pesan ke orang: ada pembuka, rencana, atau pengulangan pertanyaan sebelum jawabannya? (LW-01)
2. Ada istilah yang belum dikenal pembaca ini tapi tidak diberi arti, atau nomor aturan internal (`LW-xx`) di teks untuk pembaca? (LW-02)
3. Ada angka, kutipan, nama, sumber, atau detail tambahan (path, cakupan) tanpa dasar nyata? (LW-03)
4. Ada "sudah", "selesai", "aman", "live", "ter-deploy", atau "dites" yang belum dicek, atau dugaan sendiri yang ditulis seperti fakta? (LW-04)
5. Ada em dash, en dash sebagai sisipan, atau dua tanda hubung berspasi di teks yang ditulis agent? (LW-05)
6. Pesan ke orang: langkah berikutnya kabur, atau tidak jelas apakah pembaca perlu berbuat sesuatu? (LW-06)
7. Ada placeholder yang menyamar jadi teks final? (LW-07)
8. Ada buzzword, pola struktur AI, atau beberapa kata terlarang sekaligus? Baca draf sekali sambil bertanya: apa yang bikin ini kelihatan ditulis AI? (LW-25, LW-28, LW-29)
9. Mode Belajar: lebih dari satu konsep inti, lebih dari sekitar tiga istilah baru, atau tidak berhenti di satu cek paham? (LW-23, LW-18)
10. Ada bagian yang tidak lolos Test Lazy untuk pembaca ini, atau pesan chat ke pemilik yang lebih panjang dari satu layar HP tanpa alasan?

Cara melaporkannya:

- Gerbang dijalankan dalam hati dan tidak dicetak di teks yang dikirim: chat, laporan, deskripsi PR, docs, atau copy. Baris seperti "Delivery Gate: pass" di akhir PR dibaca reviewer sebagai penilaian diri, bukan bukti.
- Cek mekanis yang benar-benar dijalankan boleh masuk bagian bukti, ditulis sebagai perintah dan hasilnya, misalnya "`cek-teks --diff`: 0 GAGAL di baris yang diubah". Cek yang tidak dijalankan tidak disebut sama sekali.
- Kalau project meminta catatan gerbang (misalnya di HANDOVER), tulis satu baris di sana, hanya untuk cek yang dijalankan.
- Satu butir gagal di teks yang ditulis atau diubah agent berarti perbaiki dulu, baru kirim.

Cek mekanis dengan `node <folder skill ini>/scripts/cek-teks.mjs <file>` (Node 18 ke atas, tanpa install). Draf commit atau PR bisa dikirim lewat stdin dengan `-`. Untuk file yang sudah ada, cek hanya baris yang diubah: `git diff -U0 -- <file> | node <folder skill ini>/scripts/cek-teks.mjs --diff -`. Cara pakai lengkap ada di [README.md](README.md).

## Sumber

Kompilasi dan kredit: [references/sources.md](references/sources.md). Riwayat versi: [CHANGELOG.md](CHANGELOG.md).

# Kamus Analogi

Arti satu kalimat dan analogi siap pakai untuk istilah teknis yang sering muncul di kerjaan pemilik (GitHub, situs, server, AI). Analoginya diambil dari freight forwarding dan supply chain, dunia yang sudah dikuasai pembaca default.

Cara pakai:

- Kolom **Arti** dipakai untuk LW-02: tempel saat istilah pertama kali muncul.
- Kolom **Analogi** dipakai hanya kalau konsepnya baru dan analogi memang membantu (LW-10). Satu analogi per konsep.
- Kolom **Batas** wajib ikut disebut kalau analoginya dipakai. Batas mencegah pembaca menarik kesimpulan yang salah dari analogi.
- Pakai analogi yang sama setiap kali (LW-10, LW-24). Kalau pembaca bilang analogi di sini membingungkan, ganti, lalu perbarui baris ini supaya sesi berikutnya ikut memakai yang baru.

## Git dan GitHub

| Istilah | Arti | Analogi | Batas |
|---|---|---|---|
| repository (repo) | Folder proyek yang menyimpan semua file beserta riwayat semua perubahannya. | Ordner job file satu shipment yang menyimpan semua dokumen dan semua revisinya. | Repo bisa disalin utuh ke banyak komputer sekaligus, dan semua salinan bisa saling sinkron. |
| commit | Satu titik simpan perubahan, lengkap dengan catatan apa yang diubah. | Revisi dokumen yang diberi nomor dan catatan, misalnya "rev 3: ganti consignee". | Commit menyimpan keadaan seluruh proyek saat itu, bukan satu dokumen saja. |
| branch | Jalur kerja terpisah untuk mengubah sesuatu tanpa mengganggu versi utama. | Draft revisi shipping instruction: diubah-ubah di draft, dokumen final tidak tersentuh sampai disetujui. | Banyak branch bisa dikerjakan bersamaan oleh orang atau agent yang berbeda. |
| main (atau master) | Branch utama yang dianggap versi resmi. | Dokumen final yang sudah dikirim ke pelanggan. | Di beberapa repo pemilik, perubahan di main langsung tayang ke situs live. |
| pull request (PR) | Pengajuan untuk menggabungkan perubahan dari sebuah branch ke main, tempat perubahan itu direview. | Pengajuan revisi yang menunggu ACC atasan, lengkap dengan catatan apa yang berubah dan kenapa. | Di PR, mesin (CI) ikut memeriksa otomatis, bukan hanya manusia. |
| merge | Menggabungkan perubahan dari branch ke main. | Revisi di-ACC dan dimasukkan ke dokumen final. | Bisa dibatalkan (revert), tapi kalau main langsung tayang, pengunjung sempat melihat versi barunya. |
| diff | Daftar baris yang ditambah, dihapus, atau diubah. | Track changes di Word. | Diff hanya menunjukkan perubahan, bukan apakah perubahannya benar. |
| merge conflict | Dua perubahan menyentuh baris yang sama, dan Git tidak bisa memilih sendiri mana yang dipakai. | Dua staf merevisi kolom consignee yang sama dengan isi berbeda; harus ada yang memutuskan. | Konflik tidak berarti ada yang rusak; artinya perlu keputusan manusia. |
| push / pull | Push mengirim commit dari komputer ke GitHub; pull mengambil commit terbaru dari GitHub. | Upload dan download dokumen ke server arsip bersama kantor. | Push ke main di repo tertentu sama dengan menayangkan perubahan. |
| clone | Membuat salinan lengkap sebuah repo di komputer lain. | Fotokopi seluruh ordner job file, termasuk semua revisi lamanya. | Salinan itu tidak otomatis ter-update; perlu pull. |
| review | Pemeriksaan perubahan oleh orang lain sebelum di-merge. | Pengecekan dokumen oleh supervisor sebelum dikirim. | Reviewer bisa minta perubahan; PR bisa bolak-balik beberapa kali. |
| revert / rollback | Kembali ke versi sebelum perubahan tertentu. | Membatalkan revisi dan memakai lagi dokumen versi lama. | Revert sendiri adalah perubahan baru yang tercatat, bukan menghapus riwayat. |

## Kualitas dan pemeriksaan

| Istilah | Arti | Analogi | Batas |
|---|---|---|---|
| CI (continuous integration) / checks | Pemeriksaan otomatis yang berjalan setiap ada perubahan. | Jalur merah dan hijau bea cukai: setiap kiriman diperiksa sistem; merah harus diperiksa dulu sebelum lolos. | CI hanya memeriksa hal yang sudah dibuatkan tesnya. Lolos CI tidak berarti bebas masalah. |
| test | Program kecil yang memastikan sebuah fitur masih bekerja seperti seharusnya. | Checklist inspeksi kontainer sebelum stuffing. | Tes hanya membuktikan hal yang dites. |
| smoke test | Tes cepat untuk hal paling dasar: apakah sistemnya menyala dan halaman utama terbuka. | Cek mesin reefer menyala sebelum muat. | Tidak memeriksa suhu sepanjang perjalanan; masalah yang lebih dalam bisa lolos. |
| lint | Pemeriksa tata tulis dan pola kode yang berisiko. | Cek kelengkapan dokumen (tanda tangan, cap, kolom wajib) sebelum diajukan. | Lint tidak memeriksa apakah programnya melakukan hal yang benar. |
| build | Proses mengubah kode sumber menjadi file jadi yang siap dipasang. | Packing: barang disusun jadi kemasan siap kirim. | Build yang berhasil belum berarti tampilannya benar. |
| console error | Pesan error yang dicatat browser saat halaman dibuka, tidak kelihatan oleh pengunjung biasa. | Lampu peringatan di panel reefer yang tidak terlihat dari luar kontainer. | Tidak semua console error terasa oleh pengunjung, tapi sering jadi tanda ada yang rusak. |
| regression | Fitur yang dulu bekerja jadi rusak gara-gara perubahan baru. | Perbaikan jadwal satu rute malah mengacaukan jadwal rute lain. | Tes otomatis dibuat terutama untuk menangkap ini. |
| kontras WCAG AA | Standar keterbacaan teks terhadap latarnya: minimal 4,5:1 untuk teks biasa dan 3:1 untuk teks besar. | Tulisan marking di karton: hitam di atas kuning terbaca dari jauh, abu-abu di atas cokelat tidak. | Angka rasio diukur alat, bukan dikira-kira dengan mata. |

## Situs dan server

| Istilah | Arti | Analogi | Batas |
|---|---|---|---|
| domain | Nama alamat situs, misalnya giangeralcus.com. | Nama perusahaan di papan nama kantor. | Domain disewa per tahun; kalau lupa diperpanjang, alamatnya bisa hilang. |
| DNS | Sistem yang menerjemahkan nama domain menjadi alamat server berupa angka (IP). | Nama pelabuhan "Tanjung Priok" diterjemahkan ke kode UN/LOCODE IDTPP supaya sistem tahu tujuannya. | Perubahan DNS butuh waktu untuk menyebar ke seluruh internet. |
| server / VPS | Komputer yang menyala terus untuk melayani pengunjung. VPS adalah server virtual yang disewa. | Gudang yang buka 24 jam. VPS seperti menyewa satu ruang di gudang bersama, dengan kunci sendiri. | Server perlu dirawat (update, backup); kalau mati, situsnya ikut mati. |
| hosting | Layanan tempat menaruh situs supaya bisa dibuka orang. | Sewa gudang plus jasa pengelolanya. | Ada hosting yang hanya menaruh file, ada yang juga menjalankan program. |
| deploy | Memasang hasil build ke server supaya versi baru bisa dibuka pengunjung. | Barang dikirim dan diterima di gudang tujuan; sejak itu pelanggan bisa mengambilnya. | Deploy bisa otomatis setelah merge; sebelum klik Merge, pastikan tahu apakah repo itu begitu. |
| static site / static export | Situs yang isinya sudah jadi berupa file, tanpa program yang berjalan di server untuk tiap pengunjung. | Brosur cetak: semua isi sudah dicetak, bukan customer service yang menjawab langsung. | Halaman statis tetap bisa interaktif di browser (tombol, animasi); yang tidak ada adalah pemrosesan di server. |
| CDN (misalnya Cloudflare) | Jaringan server di banyak kota yang menyimpan salinan situs dekat pengunjung. | Hub regional yang menyimpan stok dekat pelanggan, jadi tidak setiap order diambil dari gudang pusat. | Kalau stok di hub belum diganti, pengunjung bisa dapat versi lama. |
| cache | Salinan sementara yang disimpan supaya bisa diambil lebih cepat. | Stok buffer di gudang transit. | Cache yang basi menampilkan versi lama sampai dibersihkan atau kedaluwarsa. |
| HTTPS / SSL | Koneksi terenkripsi antara browser dan situs. | Kontainer bersegel: isi tidak bisa diintip atau diubah di jalan, dan segelnya menunjukkan pengirim yang sah. | Segel tidak menjamin isinya benar atau aman, hanya bahwa tidak diutak-atik di jalan. |
| CSP (Content Security Policy) | Aturan dari situs yang memberi tahu browser sumber mana saja yang boleh dimuat. | Daftar vendor resmi di gerbang gudang: truk dari vendor yang tidak terdaftar ditolak masuk. | CSP yang terlalu ketat bisa memblokir fitur situs sendiri. |
| redirect | Alamat lama otomatis diarahkan ke alamat baru. | Surat ke alamat kantor lama diteruskan ke kantor baru. | Redirect yang salah bisa membuat pengunjung berputar-putar atau sampai ke halaman yang salah. |
| API | Pintu standar supaya satu program bisa meminta data atau aksi dari program lain. | Loket dengan formulir standar: isi formulir sesuai format, loket membalas dengan format yang sudah ditentukan. | API bisa berubah atau mati dari pihak penyedianya. |
| frontend / backend | Frontend adalah bagian yang dilihat dan diklik pengguna; backend adalah bagian di belakang layar yang memproses dan menyimpan data. | Front office (counter, customer service) dan back office (operasional, dokumen, akuntansi). | Situs statis hampir semuanya frontend. |
| database | Tempat menyimpan data terstruktur dalam tabel. | Spreadsheet master shipment dengan kolom yang sudah ditetapkan. | Database melayani banyak pengguna sekaligus dan menjaga datanya tetap konsisten, hal yang sulit dilakukan spreadsheet. |
| credential / secret | Kunci akses (password, token API) yang tidak boleh tersebar. | PIN gembok kontainer: tidak ditulis di dokumen yang dibagikan ke semua pihak. | Secret yang bocor harus diganti, tidak cukup dihapus dari dokumen. |

## AI dan agent

| Istilah | Arti | Analogi | Batas |
|---|---|---|---|
| model | Program AI yang membaca teks dan menghasilkan jawaban, misalnya Claude atau GPT. | Tenaga ahli yang dikontrak: beda ahli, beda keahlian dan tarif. | Model tidak punya ingatan sendiri di luar yang diberikan di percakapan atau file. |
| token | Satuan potongan teks yang dihitung model; satu kata bisa jadi beberapa token. | Satuan tarif seperti CBM atau kg: biaya dan kapasitas dihitung per token. | Jumlah token per kata berbeda antarbahasa dan antarmodel. |
| context window | Batas jumlah token yang bisa dipegang model dalam satu percakapan. | Kapasitas kontainer: muatan yang melebihi kapasitas harus diringkas atau dibongkar sebagian. | Yang diringkas bisa kehilangan detail, seperti manifest ringkas yang tidak memuat semua item. |
| prompt | Instruksi yang diberikan ke model. | Shipping instruction: makin lengkap dan jelas, makin kecil risiko salah kirim. | Prompt yang jelas tidak menjamin jawabannya benar; tetap perlu dicek. |
| agent | AI yang tidak cuma menjawab, tapi juga menjalankan langkah: membaca file, menjalankan perintah, membuka PR. | Forwarder yang memegang surat kuasa: mengurus dokumen atas nama klien, dalam batas kuasanya. | Agent bisa salah langkah; karena itu langkah yang tidak bisa dibatalkan perlu ACC pemilik. |
| subagent | Agent yang ditugasi agent lain untuk mengerjakan satu bagian. | Subkon trucking yang dipakai forwarder untuk satu leg perjalanan. | Hasil subagent tetap harus dicek oleh agent utama. |
| skill | Paket instruksi untuk satu jenis tugas yang dibaca agent saat tugasnya cocok. | SOP per jenis pekerjaan (SOP ekspor FCL, SOP dangerous goods): dibuka saat kerjaannya cocok. | Skill hanya dibaca kalau deskripsinya cocok dengan tugas; skill yang tidak terpanggil tidak berpengaruh. |
| MCP / connector | Colokan standar yang menghubungkan AI ke aplikasi lain, misalnya GitHub atau Gmail. | Integrasi EDI dengan pelayaran: format pertukaran data yang disepakati kedua pihak. | Connector hanya bisa melakukan apa yang diizinkan aksesnya. |
| hallucination | Model menulis sesuatu yang terdengar yakin tapi tidak benar atau tidak ada sumbernya. | Staf baru yang menebak nomor kontainer lalu menulisnya seolah pasti. | Penangkalnya minta sumber dan cek ulang, bukan sekadar bertanya "yakin?". |
| compact | Meringkas percakapan panjang supaya muat lagi di context window. | Membuat manifest ringkas dari muatan yang terlalu banyak. | Detail yang tidak ikut diringkas hilang dari ingatan sesi berikutnya. |

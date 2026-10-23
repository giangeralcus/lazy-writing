# Pola Tulisan AI

Pola struktur dan nada yang membuat teks gampang dikenali sebagai tulisan AI, dengan contoh Indonesia dan English. Sebagian besar diambil dari antislop-copywriting (miqdadbadjuber/anti-slop) dan Wikipedia *Signs of AI writing*; padanan Indonesia dari repo anti-slop Indonesia di [sources.md](sources.md).

Setiap pola: ciri, kenapa terbaca AI, contoh sebelum dan sesudah. Yang dicari selalu **gerombolan**, bukan satu tanda (lihat "Jangan ditandai" di bawah).

<!-- cek-teks: off -->
## Struktur kalimat

### Ekor tack-on (LW-28)

- Ciri: kalimat selesai, lalu diberi ekor analitis setelah koma. ", menciptakan ...", ", menjadikannya ...", ", menandakan ...", ", revolutionizing ...", ", highlighting ...".
- Kenapa AI: ekornya terdengar seperti analisis tapi tidak membawa fakta baru. Ini tanda paling mudah dikenali di dua bahasa.
- Sebelum: "Perusahaan meluncurkan aplikasi tracking, menciptakan revolusi dalam cara pelanggan memantau kiriman."
- Sesudah: "Perusahaan meluncurkan aplikasi tracking. Pelanggan bisa melihat posisi kontainer tanpa menelepon CS."

### Rule of three otomatis (LW-28)

- Ciri: setiap daftar berisi tiga hal, tiga kata sifat, tiga klausa, terus-menerus.
- Kenapa AI: daftar asli berisi sebanyak yang dibutuhkan isinya. Trio yang dipaksakan adalah ritme, bukan isi.
- Sebelum: "Layanan kami cepat, aman, dan terpercaya."
- Sesudah: sebut satu hal yang bisa dicek. "Kami mengurus dokumen PIB untuk impor FCL dan LCL."

### Negative parallelism (LW-28)

- Ciri: "bukan hanya X, tetapi juga Y", "It's not just X, it's Y", "bukan sekadar ... melainkan ...", dan ekor penegas seperti "tanpa ribet", "no guessing".
- Kenapa AI: rumus untuk terdengar tegas, dipakai entah penegasannya pantas atau tidak.
- Sebelum: "Ini bukan sekadar dashboard, ini pusat kendali bisnis lu."
- Sesudah: "Dashboard ini menampilkan status semua shipment yang sedang jalan."

### False range (LW-28)

- Ciri: "dari X sampai Y" tanpa skala nyata. "Dari UMKM hingga korporasi global", "from first click to final invoice".
- Sesudah: sebut yang benar-benar dicakup. "Mengurus dokumen ekspor dan impor untuk pengiriman FCL dan LCL."

### Drama kalimat pendek (LW-28)

- Ciri: deretan fragmen pendek untuk efek. "Tanpa template. Tanpa default. Tanpa batas."
- Kenapa AI: satu kalimat pendek untuk penekanan itu wajar; deretan kalimat pendek terdengar direkayasa.
- Sesudah: "Aturan lama tidak berlaku lagi, jadi setiap halaman dirancang dari nol."

### Panjang kalimat seragam (LW-28)

- Ciri: tiga kalimat atau lebih berturut-turut dengan panjang hampir sama.
- Sesudah: campur kalimat pendek dan panjang sesuai isi.

### Aforisme (LW-28)

- Ciri: "X adalah bahasa dari Y", "Kepercayaan adalah mata uang bisnis", "Efisiensi jadi jebakan ketika ...".
- Kenapa AI: terdengar dalam tapi tidak menyatakan apa-apa yang bisa dicek.
- Sesudah: nyatakan klaimnya langsung. "Pelanggan lebih percaya kalau status shipment di-update tanpa diminta."

### Sinonim diputar-putar (LW-24)

- Ciri: satu benda diberi nama berbeda di setiap kalimat untuk menghindari pengulangan. "branch ... cabang ... jalur kerja ... versi draft".
- Kenapa buruk: pembaca yang sedang belajar mengira itu empat benda berbeda.
- Sesudah: pakai satu nama yang paling jelas, ulangi kalau perlu.

### Aktor hilang (LW-22)

- Ciri: pasif tanpa pelaku. "Keputusan telah diambil untuk ...", "Halaman harga telah diperbarui", "Dilakukan pengecekan".
- Sesudah: "Gian memutuskan ...", "Gw memperbarui halaman harga".
- Boleh: pelakunya tidak diketahui atau memang bukan inti ("server direstart jam 03.00").

### Benda mati yang berpikir (LW-22)

- Ciri: benda abstrak diberi kata kerja yang butuh pikiran. "Data memberi tahu kita", "dashboard memahami kebutuhan tim", "sistem memutuskan".
- Sesudah: "Dashboard menampilkan tiga angka yang tim cek setiap pagi."
- Boleh: kata kerja produk biasa ("laporan menunjukkan", "form mengirim").

## Nada

### Puffery dan inflasi signifikansi (LW-25)

- Ciri: "menandai babak baru", "bukti nyata komitmen", "berperan penting dalam", "a testament to", "pivotal moment", "the future of X".
- Sesudah: tulis apa yang benda itu kerjakan, dengan bukti kalau ada.

### Klaim kosong dan atribusi samar (LW-03)

- Ciri: "dipercaya ribuan pelanggan", "terdepan di industri", "para ahli mengatakan", "banyak orang melaporkan".
- Sesudah: sebut nama atau angka nyata dengan sumber. Kalau tidak ada, hapus klaimnya.

### Mengisi celah dengan tebakan (LW-03, LW-04)

- Ciri: "Meski detailnya terbatas, perusahaan ini kemungkinan didirikan tahun 1990-an."
- Sesudah: "Tahun berdirinya tidak ada di sumber yang gw punya." Atau hapus kalimatnya.

### Pembuka pura-pura jujur

- Ciri: "Jujur aja?", "Honestly?", "Here's the thing", "Real talk", sebagai jeda dramatis sebelum hal biasa.
- Sesudah: langsung katakan halnya.

### Pengumuman (signposting)

- Ciri: "Mari kita bahas", "Berikut yang perlu lu tahu", "Let's dive in", "Artikel ini akan membahas".
- Sesudah: langsung bahas. Pembuka adalah jawabannya (LW-01).

### Nada otoritas palsu

- Ciri: "pada intinya", "yang sebenarnya penting adalah", "at its core", "the real question is".
- Sesudah: nyatakan poinnya tanpa upacara.

### Penutup chatbot dan penutup positif umum (LW-18)

- Ciri: "Semoga membantu!", "Jangan ragu untuk bertanya", "Let me know if you have any questions", "Masa depan terlihat cerah", "Exciting times ahead".
- Sesudah: berhenti di fakta terakhir, atau satu cek paham atau keputusan yang spesifik.

### Ragu bertumpuk

- Ciri: "mungkin bisa saja berpotensi", "could potentially possibly".
- Sesudah: satu kata ragu cukup. "Ini mungkin penyebabnya."

## Format

### Em dash (LW-05)

- Ciri: karakter em dash (U+2014) sebagai sisipan atau penyambung, juga dua tanda hubung berspasi yang dipakai dengan cara sama.
- Ganti, kira-kira berurutan: titik (kalimat baru), koma (sisipan pendek), titik dua (penjelasan), kurung (sisipan sungguhan), atau susun ulang kalimatnya.
- Catatan: banyak editor manusia memakai em dash. Di teks orang lain, em dash sendirian bukan bukti AI. Di teks yang agent tulis, LW-05 tetap berlaku penuh.

### Bold di mana-mana (LW-14)

- Ciri: setiap istilah penting dibold. Penekanan di mana-mana sama dengan tidak ada penekanan.

### Tanda kutip berlebihan

- Ciri: kata biasa diberi tanda kutip untuk jarak atau penekanan. Solusi "kami" yang "mudah" untuk "bisnis" lu.
- Boleh: kutipan sumber nyata, dialog, judul, dan frasa yang sedang dibahas.

### Bullet berlabel (inline-header list)

- Ciri: "- **Performa:** Waktu muat lebih cepat." Labelnya mengulang isi item.
- Sesudah: satu kalimat, atau bullet tanpa label.

### Huruf kapital untuk teriak

- Ciri: klausa atau kalimat ditulis KAPITAL SEMUA di tengah paragraf untuk penekanan.
- Sesudah: tulis penekanannya di dalam kalimat ("Kalau tidak dibalas hari ini, pelanggan pindah ke vendor lain.").

### Emoji sebagai format (LW-16)

- Ciri: emoji di depan heading atau bullet (roket, lampu, centang hijau) dan tumpukan hashtag.

<!-- cek-teks: on -->
## Jangan ditandai

Penulis manusia bisa kena beberapa pola di atas tanpa bantuan AI. Sebelum mengubah teks orang lain, pastikan yang ditandai benar-benar gerombolan. Hal berikut **bukan** bukti AI kalau berdiri sendiri:

- Tata bahasa rapi dan gaya konsisten.
- Campuran register santai dan formal; ini sering tanda manusia.
- Teks yang kering tanpa tanda-tanda khusus AI. Kering belum tentu AI.
- Kosakata formal yang tepat. AI berlebihan memakai kata tertentu, bukan semua kata formal.
- Satu kata transisi ("namun", "selain itu"). Baru jadi tanda kalau menumpuk.
- Satu em dash, atau tanda kutip melengkung (banyak aplikasi mengubahnya otomatis).
- Satu kalimat pendek untuk penekanan.
- Klaim tanpa sumber di teks orang lain. Sebagian besar internet tidak bersumber; ini masalah kebenaran (LW-03), bukan bukti AI.
- Frasa di dalam kutipan, judul, nama, atau contoh yang sedang dibahas.

## Tanda tulisan manusia (pertahankan)

Kalau ketemu ini, condong untuk membiarkan teksnya:

- Detail spesifik yang sulit dikarang: alamat nyata, nomor B/L, kutipan yang aneh.
- Perasaan campur atau ketegangan yang tidak diselesaikan ("mostly oke, tapi ada yang ganjel").
- Rujukan yang terikat waktu dan komunitas tertentu.
- Panjang kalimat yang bervariasi.
- Sisipan dan koreksi diri yang tulus.

Kalau pemilik memberi contoh tulisannya sendiri, cocokkan dengan contoh itu sebelum menulis ulang: panjang kalimat, kosakata, tanda baca, kebiasaan. Contoh tulisan pemilik mengalahkan aturan gaya di skill ini, kecuali aturan Gerbang Mutlak; tabrakan dengan Gerbang Mutlak ditanyakan lewat LW-08.

# Sumber Lazy-Writing

<!-- cek-teks: off -->
Aturan di skill ini dikompilasi dari sumber terbuka berikut. Versi 1 diambil 17 September 2026; tambahan versi 2 diambil 23 Oktober 2026.

## Riset dan rujukan klasik

- Wikipedia: Signs of AI writing (WP:AIVOCAB): daftar tanda tulisan AI, kosakata per era GPT-4/4o/5, puffery, negative parallelism, rule of three, em dash, emoji sebagai format. https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- Russell et al., ACL 2025 (arXiv 2501.15654), "People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text": pembaca yang sering memakai ChatGPT bisa mengenali tulisan AI, antara lain dari kosakata seperti delve dan tapestry. https://arxiv.org/abs/2501.15654
- Kobak et al., Science Advances 2025: "excess vocabulary" LLM (dikutip repo nusantara dan bahasa-skills).
- George Orwell, "Politics and the English Language" (1946): enam aturan, antara lain potong kata, kata pendek, kalimat aktif, tanpa klise, tanpa jargon. https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/
- Buffer, analisis 52 juta post: emoji sebagai bullet, tumpukan hashtag, struktur template.

## antislop dan DESIGN.md (tambahan versi 2)

- miqdadbadjuber/anti-slop (MIT, dibaca di commit c93d08c, 23 Oktober 2026): `antislop.md` (38 aturan R-01 sampai R-38 dalam tiga tingkat: Hard Gate, Purpose-Gate, Quality Locks; Delivery Gate PASS/FAIL), `skills/antislop-copywriting/SKILL.md` (pola nada, ritme, kejujuran, markdown; daftar "What NOT to flag"; kalibrasi suara), `skills/antislop-code/SKILL.md` (komentar kode). https://github.com/miqdadbadjuber/anti-slop
  - Yang diambil ke lazy-writing: tiga tingkat aturan (jadi Wajib, Boleh dengan alasan, Konsistensi), Delivery Gate (jadi Gerbang Kirim), mode tulis dan audit, protokol arah pemilik (R-37 jadi LW-08), aturan teks R-02, R-15, R-16, R-17, R-18, R-31, R-35, R-36, R-38, dan katalog pola di `pola-ai.md`.
  - Yang tidak diambil: aturan visual dan UI (warna, ikon, layout, kontras, tiga dial liveliness) karena skill ini untuk teks; pertanyaan mode di setiap sesi; paket `antislop-ai` (keputusan pemilik 22 Oktober 2026: dobel dengan skill yang sudah ada).
- DESIGN.md gpindo-com dan gpindo-co-id (repo pribadi pemilik, 22 Oktober 2026): struktur arah per project (Who reads, Brand dan Tone, token yang live, keputusan yang wajib diberi alasan satu baris, Not on this site, Checks before done), dan label "draft without direction" dari CLAUDE.md kedua repo itu. Struktur ini dipakai untuk `templates/WRITING.md`. Contoh kerja nyata: gpindo-com PR #26 (angka tanpa sumber dihapus, bukan ditulis ulang), dipakai di `pola-paham-cepat.md`.
- Profil interaksi pemilik (catatan pribadi, diperbarui 21 Oktober 2026): hasil dulu, bullet untuk langkah dan perbandingan, fakta dipisah dari dugaan, jangan menyebut "dites" atau "selesai" sebelum dicek, jangan menggurui.

## Skill anti-slop sejawat (GitHub, publik)

- jalaalrd/anti-ai-slop-writing: kata, frasa, dan pembuka terlarang EN, plus kata pertama khas tiap model. https://github.com/jalaalrd/anti-ai-slop-writing
- alvinindra/bahasa-skills: `frasa-terlarang.md` (pembuka, transisi, penutup klise Indonesia, "hiruk pikuk", EYD V). https://github.com/alvinindra/bahasa-skills
- ardha27/humanizer-id: `cringe_patterns.md` (over-gaul, campur register, buzzword EN, angka TTS). https://github.com/ardha27/humanizer-id
- adenaufal/anti-slop-nusantara: `structural-core.md` (participial tack-on, false range; baseline 30 ribu paragraf bahasa daerah). https://github.com/adenaufal/anti-slop-nusantara
- konten-studio/jekardah-writer: rubrik audit (hook spesifik, kepadatan slop, risiko faktual). https://github.com/konten-studio/jekardah-writer
- Nutlope/hallmark (rujukan lintas bidang): 57 gerbang slop-test untuk desain UI. https://github.com/Nutlope/hallmark

## Kontribusi lazy-writing (di luar sumber di atas)

- Test Lazy: "kalau gw hapus kalimat ini, apa yang hilang?", di versi 2 diukur terhadap pembaca tertentu.
- Kalibrasi gaya pemilik: chat santai (gw/lu), docs publik lugas, commit imperatif pendek.
- Padanan tack-on Indonesia: ", menciptakan/menjadikannya/menandakan …".
- Versi 2: pembaca per jenis teks, Mode Belajar, aturan paham cepat (jawaban dulu, istilah diberi arti saat pertama muncul, sedikit istilah baru per pesan, satu benda satu nama, cek paham yang spesifik), kamus analogi dari dunia freight forwarding, pola jawaban per jenis output, template WRITING.md, dan `scripts/cek-teks.mjs`.
<!-- cek-teks: on -->

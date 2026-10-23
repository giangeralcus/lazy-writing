# lazy-writing

Skill menulis versi Gian untuk Claude Code dan agent lain: teks yang cepat dipahami pembacanya dan tidak terbaca seperti tulisan AI. Lazy bukan asal-asalan. Lazy berarti nol dekorasi, tapi penjelasan yang dibutuhkan pembaca tetap ditulis.

Versi 2 mengambil dua hal dari antislop dan DESIGN.md:

- Arah dulu. Pembaca ditentukan per jenis teks (chat ke pemilik, PR, commit, README, copy publik), dan arahnya bisa ditulis per project di `WRITING.md` atau di bagian `## Writing` pada DESIGN.md.
- Gerbang Kirim (Delivery Gate). Sepuluh pertanyaan yang semuanya harus dijawab "tidak" sebelum teks dikirim, plus `cek-teks.mjs` untuk cek mekanis.

Profil pembaca bawaan di SKILL.md adalah profil Gian. Kalau kamu memasang skill ini untuk dirimu sendiri, ganti profil itu lewat `WRITING.md` project-mu.

## Isi

```
SKILL.md                      # pembaca per jenis teks, tiga mode, aturan LW-01 sampai LW-29, Gerbang Kirim
templates/WRITING.md          # arah tulisan per project (format DESIGN.md)
references/
  pola-paham-cepat.md         # bentuk jawaban: jelaskan konsep, laporan, minta keputusan, PR, commit, README
  kamus-analogi.md            # istilah teknis: arti satu kalimat, analogi freight forwarding, dan batasnya
  audit.md                    # Mode Audit: langkah, tingkat temuan, format
  pola-ai.md                  # pola struktur dan nada AI, plus yang tidak boleh ditandai
  kata-terlarang-id.md        # frasa slop bahasa Indonesia
  banned-words-en.md          # kata dan frasa slop bahasa Inggris
  sources.md                  # sumber dan kredit
scripts/cek-teks.mjs          # cek em dash, en dash, frasa klise, placeholder (Node 18+, tanpa dependensi)
tests/cek-teks.test.mjs       # tes untuk cek-teks dan cek mandiri file skill ini
CHANGELOG.md
```

## Pasang

Claude Code, untuk semua project:

```
cp -r lazy-writing ~/.claude/skills/
```

Per project: `cp -r lazy-writing <repo>/.claude/skills/`. Codex: `cp -r lazy-writing <repo>/.codex/skills/`.

## Cek tulisan

```
node scripts/cek-teks.mjs README.md docs/*.md
node scripts/cek-teks.mjs --strict draf.md               # PERINGATAN juga dihitung gagal
git diff -U0 -- HANDOVER.md | node scripts/cek-teks.mjs --diff -
                                                         # hanya baris yang ditambah
node --test                                              # tes skill ini sendiri
```

PowerShell tidak memperluas `*.md` untuk program lain, jadi daftar file-nya dibuat dulu:

```
node scripts/cek-teks.mjs (Get-ChildItem docs\*.md).FullName
```

Em dash, en dash berspasi, dan dua tanda hubung berspasi dihitung GAGAL (exit 1). Frasa klise, buzzword, penutup chatbot, emoji di heading, dan placeholder yang tertinggal dihitung PERINGATAN. Blok kode dan kode inline dilewati. Untuk file lama yang sudah berisi em dash dari pemilik, pakai `--diff` supaya hanya baris baru yang dicek.

## Test Lazy

Tanya per kalimat: kalau kalimat ini dihapus, apa yang hilang buat pembaca ini? Kalau tidak ada yang hilang, hapus. Kalau pembaca jadi bingung atau harus bertanya balik, kalimat itu wajib ada. Kalau maknanya tetap utuh dalam versi lebih pendek, potong.

MIT.

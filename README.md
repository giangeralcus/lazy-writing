# lazy-writing

Skill menulis versi giang untuk Claude Code dan agent lain: teks yang cepat dipahami pembacanya dan tidak terbaca seperti tulisan AI. Lazy bukan asal-asalan; lazy berarti nol dekorasi, tapi penjelasan yang dibutuhkan pembaca tetap ditulis.

Versi 2 menambahkan dua hal dari antislop dan DESIGN.md:

- **Arah dulu.** Tulisan dimulai dari siapa pembacanya dan apa yang harus bisa dia lakukan setelah membaca. Arahnya bisa ditulis per project di `WRITING.md`, mengikuti format DESIGN.md.
- **Gerbang sebelum kirim.** Delapan pertanyaan yang semuanya harus dijawab "tidak", plus `cek-teks.mjs` untuk cek mekanis.

## Isi

```
SKILL.md                      # aturan LW-01 sampai LW-29, Test Lazy, dua mode, Gerbang Kirim
templates/WRITING.md          # arah tulisan per project (format DESIGN.md)
references/
  pola-paham-cepat.md         # bentuk jawaban: jelaskan konsep, laporan, minta keputusan, PR, commit, README
  kamus-analogi.md            # istilah teknis: arti satu kalimat + analogi freight forwarding + batasnya
  pola-ai.md                  # pola struktur dan nada AI, plus yang tidak boleh ditandai
  kata-terlarang-id.md        # frasa slop Indonesia
  banned-words-en.md          # kata dan frasa slop English
  sources.md                  # sumber dan kredit
scripts/cek-teks.mjs          # cek em dash, frasa klise, penutup chatbot (Node 18+, tanpa dependensi)
tests/cek-teks.test.mjs       # tes untuk cek-teks
CHANGELOG.md
```

## Pasang

Claude Code:

```
cp -r lazy-writing ~/.claude/skills/
```

atau per project: `cp -r lazy-writing <repo>/.claude/skills/`

Codex: `cp -r lazy-writing <repo>/.codex/skills/`

## Cek tulisan

```
node scripts/cek-teks.mjs README.md docs/*.md
node scripts/cek-teks.mjs --strict draft.md      # peringatan juga dihitung gagal
node --test                                      # tes skill ini sendiri
```

Em dash dihitung GAGAL (exit 1). Frasa klise, buzzword, penutup chatbot, emoji di heading, dan placeholder yang tertinggal dihitung PERINGATAN. Kode dan kode inline dilewati.

## Test Lazy

Tanya per kalimat: *kalau gw hapus, apa yang hilang buat pembaca ini?* Jawabannya "tidak ada": hapus. Pembaca jadi bingung: kalimat itu wajib ada.

MIT.

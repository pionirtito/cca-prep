# CCA-F Prep

Lična priprema za sertifikat **Anthropic Claude Certified Architect – Foundations (CCA-F)**.
Baza pitanja + index pojmova + statički sajt sa pregledom i quiz modom.

## Pokretanje lokalno
Sajt učitava JSON preko `fetch`, pa NE radi otvaranjem `index.html` duplim klikom
(browser blokira lokalni fetch). Pokreni mini server iz root-a repo-a:

```bash
python3 -m http.server 8000
```

Pa otvori `http://localhost:8000` u browseru.

## Struktura
- `data/domain1.json … domain5.json` — pitanja po domenima
- `data/glossary.json` — index pojmova (povezan sa pitanjima dvosmerno)
- `data/patterns.json` — obrasci/pouke koje pokrivaju više pitanja
- `data/larionov.json` — community vodič (Larionov), dvojezični blokovi za „Larionov" tab
- `docs/guide_en.md`, `docs/guide_sr.md` — community vodič: EN original + SR prevod (generisani)
- `index.html`, `style.css`, `app.js` — sajt (bez build koraka)
- `CLAUDE.md` — instrukcije za Claude Code (kako dodaje pitanja)
- `.claude/commands/add-question.md` — slash komanda `/add-question`

## Funkcije sajta
- **Pregled** — sva pitanja, pretraga, filter po domenu i statusu (tačno/netačno/neobrađeno)
- **Quiz** — vežbaj sva pitanja, samo netačna, samo neobrađena, ili po domenu
- **Pojmovi** — index sa EN+SR definicijama; klik na pojam vodi do pitanja gde se javlja
- **Obrasci** — mentalni modeli/pouke koje pokrivaju više pitanja
- **Vodič** — zvanični exam guide, dvojezično (Oba/EN/SR)
- **Larionov** — community vodič (Paul Larionov); EN podrazumevano, klik EN/SR menja jezik, hover nad pasusom pokazuje drugi jezik

## Deploy na Netlify
Pošto je sve statičko, ima dva načina:

### A) Najbrže — drag & drop
1. Idi na app.netlify.com → Sites → "Add new site" → "Deploy manually"
2. Prevuci ceo folder repo-a u prozor. Gotovo.
3. Mana: svaki put kad dodaš pitanja, prevlačiš ponovo.

### B) Preporučeno — povezan repo (auto-deploy na svaki push)
1. Napravi repo na GitHub-u (prazan).
2. Lokalno: `git init && git add . && git commit -m "init" && git branch -M main`
3. `git remote add origin <URL_TVOG_REPO> && git push -u origin main`
4. Netlify → "Add new site" → "Import from Git" → izaberi repo.
5. Build command: ostavi prazno. Publish directory: `.` (već je u `netlify.toml`).
6. Od sada svaki `git push` automatski ažurira sajt.

## Radni tok za učenje
1. Pokreni quiz na CertSafari-ju, uzmi pitanje.
2. Pošalji ga Claude-u (chat), pitaj nejasnoće, pokušaj odgovor.
3. Claude potvrdi tačno/netačno i da objašnjenje na srpskom.
4. U Claude Code-u: `/add-question` + nalepiš pitanje → upisuje u JSON, ažurira glossary.
5. `git push` → sajt se osveži. Periodično vežbaj „Samo netačna".

# CCA-F Prep — instrukcije za Claude Code

Ovo je lični repo za pripremu sertifikata **Anthropic Claude Certified Architect – Foundations (CCA-F)**.
Sadrži bazu pitanja (JSON), index pojmova i statički sajt. Tvoj posao kao Claude Code je da
pomažeš u unosu i obradi pitanja, održavaš konzistentnost podataka i ažuriraš index pojmova.

## Jezik
Korisnik je sa srpskog govornog područja. Polje `explanation` ostavljaj na engleskom
(zvanični tekst), a `claude_notes` piši na srpskom — to su objašnjenja nejasnoća.
Glossary ima i `en` i `sr` polje za svaki pojam.

## Struktura repo-a
```
data/
  domain1.json ... domain5.json   # pitanja, po jedan niz po domenu
  glossary.json                   # index pojmova, dvosmerno povezan sa pitanjima
  patterns.json                   # obrasci/pouke po pod-domenu, povezani sa pitanjima
index.html / style.css / app.js   # staticki sajt (cita data/ direktno)
CLAUDE.md                         # ovaj fajl
.claude/commands/add-question.md  # slash komanda za unos pitanja
```

## Šema pitanja (OBAVEZNO poštuj tačno)
```json
{
  "id": "d{DOMEN}-q{BROJ}",        // npr "d1-q014"; broj je zero-padded na 3 cifre
  "domain": 1,                      // 1-5
  "subdomain": "1.3",              // iz exam guide-a, ako je poznat; inace ""
  "question": "tekst pitanja",
  "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
  "correct": "B",                   // slovo tacnog odgovora; "" ako jos nije poznat
  "my_answer": "C",                 // sta je korisnik odgovorio; "" ako nije odgovorio
  "status": "wrong",               // "correct" | "wrong" | "unseen"
  "explanations": {                 // objasnjenje PO SVAKOJ opciji (EN, sa sajta)
    "A": "Incorrect. ...",
    "B": "Correct. ...",
    "C": "Incorrect. ...",
    "D": "Incorrect. ..."
  },
  "claude_notes": "objasnjenje nejasnoca (SR)",
  "glossary_refs": ["stop_reason"], // pojmovi koje pitanje dodiruje
  "pattern_refs": ["intercept-before-not-after"], // obrasci koje ilustruje
  "tags": ["agentic-loop"]
}
```

### Pravila za `status`
- `unseen` — pitanje uneto ali korisnik jos nije odgovorio
- `correct` — `my_answer === correct`
- `wrong` — `my_answer !== correct`
Uvek izracunaj `status` iz `my_answer` i `correct`, ne pogadjaj.

## Domeni (za određivanje `domain` i prefiksa `id`)
1. Agentic Architecture & Orchestration
2. Tool Design & MCP Integration
3. Claude Code Configuration & Workflows
4. Prompt Engineering & Structured Output
5. Context Management & Reliability

## Tutorski tok (interakcija pitanje-po-pitanje)
Ovo je PRIMARNI način rada: korisnik uči obrasce, ne pamti pitanja. Prvo učimo, pa tek onda
pišemo u bazu. Za svako pitanje pratiti ovu petlju:

1. Korisnik šalje pitanje + sve opcije (tekst ili screenshot).
2. **Pre tačnog odgovora:** ukratko objasniti pojmove koji bi mogli biti nejasni — na srpskom,
   sa analogijom ako pomaže. Zatim pitati da li je jasno ili želi odmah da odgovori.
   **Ne otkrivati tačan odgovor pre nego što korisnik kaže svoj.**
3. Korisnik kaže svoj odgovor (A/B/C/D) → potvrditi da li je tačno ili ne.
4. Razložiti SVE opcije: zašto je tačna tačna i zašto svaka pogrešna pada. Na srpskom, jasno,
   sa fokusom na zamke. Ovo je najvažniji deo.
5. Korisnik šalje zvanični response sa sajta → uporediti sa onim što smo izveli.
6. **Tek onda** upis u bazu — vidi „Radni tok kada korisnik doda pitanje".

### Pravila tutorskog toka
- Nikad ne upisuj pitanje pre nego što prođu koraci 2–5 (prvo učimo, pa pišemo).
- Objašnjenja idu na srpskom; `explanations` tekst ostaje na engleskom (zvanični).
- Posle upisa: kratak rezime šta je dodato (koji `id`, koji novi pojmovi/obrasci).
- Ne predlaži `git push` samoinicijativno — korisnik sam grupiše commit-e.

## Radni tok kada korisnik doda pitanje
1. Odredi domen iz sadržaja pitanja (ili pitaj ako nije jasno).
2. **Provera duplikata:** pre dodavanja, pretraži SVE domene da li isto pitanje već postoji
   (uporedi po tekstu `question`, ne samo po id-u — kvizovi ponavljaju pitanja).
   - Ako duplikat POSTOJI: NE dodaj ga ponovo. Samo, ako korisnik traži pojašnjenje,
     ažuriraj `claude_notes` postojećeg i/ili dopuni `glossary.json`.
   - Ako NE postoji: dodeli sledeći slobodan `id` u tom domenu i dodaj na kraj niza.
3. Popuni sva polja po šemi. Izračunaj `status`.
4. **Ažuriraj glossary:** za svaki pojam u `glossary_refs`:
   - Ako pojam već postoji u `glossary.json`: dodaj `id` pitanja u njegov niz `seen_in` (bez duplikata).
   - Ako ne postoji: kreiraj novi unos sa `term`, `en`, `sr`, `domain`, `seen_in`.
5. Validiraj da je JSON ispravan pre nego što sačuvaš (npr. `python3 -c "import json; json.load(open('data/domain1.json'))"`).

## Obrasci (patterns.json)
Pored pojmova, vodimo i sloj POUKA/OBRAZACA u `data/patterns.json` — mentalni modeli koji
pokrivaju vise pitanja (npr. „deterministicko = hook, ne prompt"). Svaki obrazac ima `id`,
`title`, `domain`, `lesson_sr`, `lesson_en`, `seen_in` (lista id-jeva pitanja).
Pitanja se vezuju za obrasce preko polja `pattern_refs`.
Kada dodajes pitanje koje ilustruje postojeci obrazac: dodaj id pitanja u `seen_in` tog obrasca
i dodaj `id` obrasca u `pattern_refs` pitanja. Ako uocis NOVI ponavljajuci obrazac, kreiraj ga.

## Pravila konzistentnosti
- Nikad ne menjaj postojeći `id`.
- `glossary_refs` u pitanju i `seen_in` u glossary-ju moraju biti uzajamno usklađeni.
- Drži pitanja sortirana po `id` unutar svakog domena.
- Ne uvodi nova polja u šemu bez da korisnik to traži.
- JSON mora biti validan posle svake izmene — proveri pre commit-a.

## Šta NE radi
- Ne diraj `index.html`, `style.css`, `app.js` osim ako korisnik izričito traži izmenu sajta.
- Ne briši pitanja bez izričite potvrde.
- Ne menjaj `explanation` (zvanični tekst) na svoju ruku — to je referenca.

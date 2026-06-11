export const meta = {
  name: 'larionov-revise',
  description: 'Redaktura srpskog prevoda Larionov vodiča — prirodniji jezik + ujednačena terminologija',
  phases: [
    { title: 'Revise', detail: 'jedan agent po poglavlju → fajl sa izmenjenim SR jedinicama' },
    { title: 'QA', detail: 'provera dijakritika, tokena i markera po čanku' },
  ],
}

const FILE = 'data/larionov.json'
const OUT = 'docs/.revise'

// [startIdx, endIdx] — apsolutni indeksi u blocks nizu, granice prate h1/h2 strukturu
const CHUNKS = [
  [0, 38, 'Front matter: uvod, kandidat, format, domeni, linkovi'],
  [39, 77, 'Chapter 1: Claude API'],
  [78, 113, 'Chapter 2: Tools and tool_use'],
  [114, 162, 'Chapter 3: Claude Agent SDK'],
  [163, 202, 'Chapter 4: MCP'],
  [203, 316, 'Chapter 5: Claude Code'],
  [317, 384, 'Chapter 6: Prompt Engineering'],
  [385, 429, 'Chapter 7: Message Batches API + Ch8'],
  [430, 460, 'Chapter 9: Escalation and HITL'],
  [461, 501, 'Chapter 10: Error Handling + Ch11'],
  [502, 528, 'Chapter 12: Provenance + Ch13'],
  [529, 597, 'PART II + Domain 1'],
  [598, 650, 'Domain 2'],
  [651, 715, 'Domain 3'],
  [716, 779, 'Domain 4'],
  [780, 847, 'Domain 5'],
  [848, 944, 'Worked examples Q1-12'],
  [945, 1044, 'Practice Test Q1-12'],
  [1045, 1149, 'Practice Test Q13-25'],
  [1150, 1254, 'Practice Test Q26-38'],
  [1255, 1359, 'Practice Test Q39-51'],
  [1360, 1463, 'Practice Test Q52-64'],
  [1464, 1559, 'Practice Test Q65-76'],
  [1560, 1596, 'Practical Exercises'],
  [1597, 1625, 'Appendix + Out-of-Scope + Recommendations'],
]

const pad = (n) => (n < 10 ? '0' + n : '' + n)

const STYLE = `
STILSKI LIST (kanonske odluke — ujednači NA OVO):
- Registar: tehnički srpski kakvim govore domaći inženjeri — anglicizmi za ustaljene tehničke
  pojmove, srpski gde je prirodan. Ekavica. Pravilne dijakritike ć č ž š đ svuda.
- pipeline (NE "cevovod"); "CI pipeline", "istraživački pipeline-ovi"
- drift (NE "odlutavanje"); npr. "ranjiv na drift", "drift ponašanja"
- pull request, hook, prompt, few-shot, fallback, framework — ostaju engleski
- "agent za sintezu" (NE "sintezički agent"); "podagent" ostaje
- "ekstrakcija" za data extraction (NE "izvlačenje" u tehničkom smislu)
- "analiza osnovnog uzroka" za root-cause analysis (NE "analiza korena uzroka");
  ALI "koren projekta" za repo root OSTAJE kako jeste
- "pretraga veba" / "agent za pretragu veba" OSTAJE (već dominantan oblik)
- "radni tok" za workflow u prozi OSTAJE
- Crta u srpskom tekstu MORA imati razmake: "tekst — tekst", nikad "tekst—tekst"
  (u "sr" poljima; navodnici „ " kakvi već jesu)

REDAKTURA (glavni posao, ne samo terminologija):
- Popravi krute, doslovne konstrukcije da zvuče prirodno na srpskom, npr.
  "sintezičkom agentu često treba da verifikuje" → "agent za sintezu često mora da verifikuje".
- Prirodan red reči, prirodna rekcija glagola, bez anglosrpske sintakse ("Vaša procena pokazuje
  da je 85% ovih verifikacija jednostavna provera" — srediti kongruenciju).
- NE prepričavaj i NE skraćuj sadržaj: značenje i tehnička preciznost moraju ostati 1:1 sa "en".
- Ako je blok već dobar — NE diraj ga i NE vraćaj ga.

STROGO ZABRANJENO:
- Menjati "en" polja, "type", redosled ili broj blokova.
- Dirati code blokove, tehničke tokene/identifikatore (stop_reason, tool_use, tool_choice,
  allowedTools, PreToolUse, PostToolUse, isError, custom_id, fork_session, AgentDefinition,
  end_turn, max_tokens, CLAUDE.md, @path, Read/Write/Edit/Bash/Grep/Glob/Task...), putanje,
  URL-ove, i literalni marker **[CORRECT]**.
- Pomerati ili gubiti inline markdown markere (**bold**, \`code\`, [text](url)) — ostaju
  na semantički istim mestima u "sr".
`

phase('Revise')
const results = await pipeline(
  CHUNKS.map((c, i) => ({ start: c[0], end: c[1], label: c[2], idx: i + 1 })),

  // Stage A: redigiraj čank i upiši fajl sa izmenama
  (c) => agent(
    `Ti si redaktor srpskog prevoda studijskog vodiča za CCA-F ispit (sajt za pripremu).
Prevod je tehnički korektan ali mestimično doslovan/krut — tvoj posao je da ga učiniš
prirodnim srpskim, uz ujednačenu terminologiju.

Izvuci svoj opseg blokova ovom komandom (Bash):
  python3 -c "import json; d=json.load(open('${FILE}')); print(json.dumps([{'i':i,'b':b} for i,b in enumerate(d['blocks'][${c.start}:${c.end + 1}], start=${c.start})], ensure_ascii=False, indent=1))"

Opseg pokriva: "${c.label}".

${STYLE}

Koraci:
1. Pročitaj sve blokove svog opsega. Za svaki blok sa "sr" poljem (i svaku ćeliju tabele
   čije se "sr" razlikuje od "en") proceni da li SR treba redakturu po stilskom listu.
2. Upiši u ${OUT}/edits-${pad(c.idx)}.json validan JSON oblika:
   {"chunk": ${c.idx}, "edits": [{"idx": <apsolutni indeks bloka>, "sr": "<nov, redigovan SR tekst>"}, ...],
    "tableEdits": [{"idx": <indeks table bloka>, "row": <r>, "col": <c>, "sr": "<nov SR>"}, ...]}
   Vraćaj SAMO jedinice koje si stvarno izmenio. Ako nema izmena, upiši prazne nizove.
   UTF-8, prava ć č ž š đ slova.
3. Vrati status.`,
    {
      label: `rev:${pad(c.idx)}`,
      phase: 'Revise',
      schema: {
        type: 'object',
        additionalProperties: false,
        required: ['written', 'path', 'editCount', 'tableEditCount'],
        properties: {
          written: { type: 'boolean' },
          path: { type: 'string' },
          editCount: { type: 'integer' },
          tableEditCount: { type: 'integer' },
        },
      },
    }
  ).then((r) => (r == null ? null : { ...r, ...c })),

  // Stage B: QA fajla sa izmenama, popravka u mestu
  (a) => a == null ? null : agent(
    `Proveravaš redakturu srpskog prevoda za CCA-F prep sajt.

Pročitaj ${a.path} — JSON {"chunk","edits","tableEdits"} gde svaka stavka nosi "idx" i nov "sr"
tekst. Original (i "en" izvor) je u ${FILE}: za svaki "idx" uporedi nov "sr" sa
d['blocks'][idx] (Bash + python3 po potrebi).

Proveri i POPRAVI u mestu (prepiši ${a.path} ispravljenom verzijom):
- Dijakritike ć č ž š đ potpune i ispravne u svakom novom "sr".
- Nov "sr" je semantički veran "en" originalu — ništa ispušteno ni dodato.
- Nijedan tehnički token/identifikator/putanja/URL nije preveden ni iskvaren; marker
  **[CORRECT]** netaknut; inline markeri (**bold**, \`code\`, [text](url)) prisutni kao u "en".
- Crta u SR tekstu sa razmacima ("tekst — tekst"); terminologija: pipeline (ne cevovod),
  drift (ne odlutavanje), "agent za sintezu" (ne "sintezički"), "ekstrakcija" (ne "izvlačenje"
  u tehničkom smislu), "analiza osnovnog uzroka".
- "idx" indeksi su u opsegu ${a.start}-${a.end} i pokazuju na blokove odgovarajućeg tipa.

Vrati status.`,
    {
      label: `qa:${pad(a.idx)}`,
      phase: 'QA',
      schema: {
        type: 'object',
        additionalProperties: false,
        required: ['path', 'editCount', 'fixesApplied'],
        properties: {
          path: { type: 'string' },
          editCount: { type: 'integer' },
          fixesApplied: { type: 'integer' },
        },
      },
    }
  )
)

const ok = results.filter(Boolean)
log(`Gotovo: ${ok.length}/${CHUNKS.length} čankova, ${ok.reduce((s, r) => s + (r.editCount || 0), 0)} izmena`)
return ok

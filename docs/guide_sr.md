<!-- Srpski prevod. Izvor: Paul Larionov, https://github.com/paullarionov/claude-certified-architect
     Bez navedene licence u izvornom repou — lično učenje, uz atribuciju autoru.
     Generisano iz data/larionov.json; original na engleskom: docs/guide_en.md -->

# Claude Certified Architect — Foundations sertifikacija

## Vodič za učenje (zasnovan na zvaničnom vodiču za ispit)

## Uvod

Sertifikacija **Claude Certified Architect — Foundations** potvrđuje da specijalista može da donosi utemeljene odluke o kompromisima pri implementaciji stvarnih rešenja zasnovanih na Claude-u. Ispit proverava temeljno znanje o Claude Code, Claude Agent SDK, Claude API i Model Context Protocol (MCP) — ključnim tehnologijama za izgradnju produkcionih aplikacija sa Claude-om.

Pitanja na ispitu zasnovana su na realističnim industrijskim scenarijima: izgradnja agentskih sistema za korisničku podršku, projektovanje istraživačkih pipeline-ova sa više agenata, integracija Claude Code-a u CI/CD, kreiranje alata za produktivnost programera i ekstrakcija strukturisanih podataka iz nestrukturisanih dokumenata.

## Ciljni kandidat

Idealan kandidat je **arhitekta rešenja** koji projektuje i isporučuje produkcione aplikacije sa Claude-om. Treba da imate najmanje 6 meseci praktičnog iskustva sa:

- **Claude Agent SDK** — orkestracija više agenata, delegiranje podagentima, integracija alata, hook-ovi životnog ciklusa
- **Claude Code** — CLAUDE.md, MCP serveri, Agent Skills, režim planiranja
- **Model Context Protocol (MCP)** — alati i resursi za integraciju sa bekendom
- **Prompt engineering** — JSON šeme, few-shot primeri, šabloni za ekstrakciju podataka
- **Kontekstni prozori** — rad sa dugačkim dokumentima, prosleđivanje konteksta između više agenata
- **CI/CD pipeline-ovi** — automatizovani pregled koda, generisanje testova
- **Eskalacija i pouzdanost** — rukovanje greškama, human-in-the-loop
## Format ispita

| Parametar | Vrednost |
|---|---|
| Tip pitanja | Višestruki izbor (1 tačan od 4) |
| Bodovanje | skala 100–1000, prag za prolaz **720** |
| Kazna za pogađanje | Nema (odgovorite na svako pitanje!) |
| Scenariji | 4 od 8 mogućih (nasumično izabrani) |

## Sadržaj ispita: 5 domena

| Domen | Težina |
|---|---|
| 1. Arhitektura agenata i orkestracija | **27%** |
| 2. Dizajn alata i MCP integracija | **18%** |
| 3. Konfiguracija i radni tokovi Claude Code-a | **20%** |
| 4. Prompt engineering i strukturisani izlaz | **20%** |
| 5. Upravljanje kontekstom i pouzdanost | **15%** |

## Scenariji na ispitu

### Scenario 1: Agent za korisničku podršku

Gradite agenta koji obrađuje povraćaje robe, sporove oko naplate i probleme sa nalogom koristeći Claude Agent SDK. Agent koristi MCP alate (`get_customer`, `lookup_order`, `process_refund`, `escalate_to_human`). Cilj je 80%+ rešavanja pri prvom kontaktu uz odgovarajuću eskalaciju.

### Scenario 2: Generisanje koda pomoću Claude Code-a

Koristite Claude Code za ubrzanje razvoja: generisanje koda, refaktorisanje, debagovanje, dokumentaciju. Treba da ga integrišete sa prilagođenim slash komandama i CLAUDE.md konfiguracijom, kao i da razumete kada koristiti režim planiranja.

### Scenario 3: Istraživački sistem sa više agenata

Agent koordinator delegira zadatke specijalizovanim podagentima: istraživanje veba, analiza dokumenata, sinteza i generisanje izveštaja. Sistem mora da proizvodi potpune izveštaje sa citatima.

### Scenario 4: Alati za produktivnost programera

Agent pomaže inženjerima da istraže nepoznate baze koda, generišu boilerplate kod i automatizuju rutinske zadatke. Koriste se ugrađeni alati (Read, Write, Bash, Grep, Glob) i MCP serveri.

### Scenario 5: Claude Code za kontinuiranu integraciju

Integrišite Claude Code u CI/CD pipeline za automatizovane preglede koda, generisanje testova i povratne informacije na pull request-ove. Promptovi moraju biti osmišljeni tako da svedu lažno pozitivne rezultate na minimum.

### Scenario 6: Ekstrakcija strukturisanih podataka

Sistem ekstrahuje informacije iz nestrukturisanih dokumenata, validira izlaz pomoću JSON šema i održava visoku tačnost. Mora ispravno da obrađuje granične slučajeve.

### Scenario 7: Arhitektonski obrasci konverzacione veštačke inteligencije

Projektujete konverzacione sisteme sa više rundi koji pokrivaju upravljanje kontekstnim prozorom, postojanost instrukcija kroz runde, strategije memorije, dizajn alata za bezbedno izvršavanje i obradu dvosmislenih ili konfliktnih korisničkih unosa.

### Scenario 8: Agentski alati veštačke inteligencije *(sadržaj nedostaje — pomozite nam da ga popunimo!)*

Ovaj scenario su prijavili kandidati na ispitu, ali još nije obrađen u ovom vodiču. Ako ste naišli na pitanja iz ovog scenarija na pravom ispitu, podelite ih u [GitHub Issues](https://github.com/paullarionov/claude-certified-architect/issues) kako bismo mogli da dodamo potpunu pokrivenost. Vaš doprinos će pomoći svima koji se pripremaju za ispit.

# Zvanična dokumentacija

| Resurs | URL |
|---|---|
| **Claude API — Messages** | https://platform.claude.com/docs/en/api/messages |
| **Claude API — Tool Use** | https://platform.claude.com/docs/en/build-with-claude/tool-use |
| **Claude API — Message Batches** | https://platform.claude.com/docs/en/build-with-claude/message-batches |
| **Claude Agent SDK — pregled** | https://platform.claude.com/docs/en/agent-sdk/overview |
| **Claude Agent SDK — Hooks** | https://platform.claude.com/docs/en/agent-sdk/hooks |
| **Claude Agent SDK — Subagents** | https://platform.claude.com/docs/en/agent-sdk/subagents |
| **Claude Agent SDK — Sessions** | https://platform.claude.com/docs/en/agent-sdk/sessions |
| **Model Context Protocol (MCP)** | https://modelcontextprotocol.io/ |
| **MCP — Tools** | https://modelcontextprotocol.io/docs/concepts/tools |
| **MCP — Resources** | https://modelcontextprotocol.io/docs/concepts/resources |
| **MCP — Servers** | https://modelcontextprotocol.io/docs/concepts/servers |
| **Claude Code — dokumentacija** | https://code.claude.com/docs/en/overview |
| **Claude Code — CLAUDE.md i memorija** | https://code.claude.com/docs/en/memory |
| **Claude Code — Skills (uključujući slash komande)** | https://code.claude.com/docs/en/skills |
| **Claude Code — Hooks** | https://code.claude.com/docs/en/hooks |
| **Claude Code — Sub-agents** | https://code.claude.com/docs/en/sub-agents |
| **Claude Code — MCP integracija** | https://code.claude.com/docs/en/mcp |
| **Claude Code — GitHub Actions CI/CD** | https://code.claude.com/docs/en/github-actions |
| **Claude Code — GitLab CI/CD** | https://code.claude.com/docs/en/gitlab-ci-cd |
| **Claude Code — Headless (neinteraktivni režim)** | https://code.claude.com/docs/en/headless |
| **Prompt Engineering Guide** | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview |
| **Extended Thinking** | https://platform.claude.com/docs/en/build-with-claude/extended-thinking |
| **Anthropic Cookbook (primeri koda)** | https://github.com/anthropics/anthropic-cookbook |

# DEO I: TEORIJSKE OSNOVE

Ovaj deo pokriva svu teoriju koja vam je potrebna da uspešno položite ispit. Materijal je organizovan po tehnologijama i konceptima, a ne po ispitnim domenima — to vam pomaže da izgradite dublje razumevanje svake teme.

# Poglavlje 1: Claude API — Osnove interakcije sa modelom

> Dokumentacija: [Messages API](https://platform.claude.com/docs/en/api/messages) | [Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)

## 1.1 Struktura API zahteva

Claude API funkcioniše po modelu zahtev–odgovor. Svaki zahtev ka Claude Messages API-ju uključuje:

```json
{
  "model": "claude-sonnet-4-6",
  "max_tokens": 1024,
  "system": "You are a helpful assistant.",
  "messages": [
    {"role": "user", "content": "Hi!"},
    {"role": "assistant", "content": "Hello!"},
    {"role": "user", "content": "How are you?"}
  ],
  "tools": [...],
  "tool_choice": {"type": "auto"}
}
```

**Ključna polja:**

- `model` — izbor modela (`claude-opus-4-6`, `claude-sonnet-4-6`, `claude-haiku-4-5`)
- `max_tokens` — maksimalan broj tokena u odgovoru
- `system` — sistemski prompt (definiše ponašanje modela)
- `messages` — istorija konverzacije (**morate poslati celu istoriju** da biste održali koherentnost)
- `tools` — definicije dostupnih alata
- `tool_choice` — strategija izbora alata
## 1.2 Uloge poruka

Niz `messages` koristi tri uloge:

- `user` — korisničke poruke
- `assistant` — odgovori modela (uključuju se pri slanju istorije)
- `tool` — rezultati poziva alata (uloga se ne postavlja eksplicitno; ovo se pojavljuje kao `tool_result` blok sadržaja)
**Kritično važno:** pri svakom API zahtevu morate poslati **celu istoriju konverzacije**. Model ne čuva stanje između zahteva — svaki poziv je nezavisan.

## 1.3 Polje `stop_reason` u odgovoru

Odgovor Claude API-ja uključuje `stop_reason`, koji pokazuje zašto je model prestao da generiše:

| Vrednost | Opis | Akcija |
|---|---|---|
| `"end_turn"` | Model je završio svoj odgovor | Prikaži rezultat korisniku |
| `"tool_use"` | Model želi da pozove alat | Izvrši alat i vrati rezultat |
| `"max_tokens"` | Dostignut je limit tokena | Odgovor je skraćen; možda ćete morati da povećate limit |
| `"stop_sequence"` | Model je naišao na zaustavnu sekvencu | Obradi prema logici svoje aplikacije |

Za agentske sisteme, `"tool_use"` i `"end_turn"` su najvažniji — oni upravljaju agentskom petljom.

## 1.4 Sistemski prompt

Sistemski prompt je posebna instrukcija koja definiše kontekst i pravila ponašanja. On:

- Nije deo niza `messages`; prosleđuje se odvojeno u polju `system`
- Ima prioritet nad korisničkim porukama
- Učitava se jednom i važi tokom cele konverzacije
- Koristi se za definisanje uloge, ograničenja i formata izlaza
**Važno za ispit:** formulacija sistemskog prompta može stvoriti neželjene asocijacije sa alatima. Na primer, instrukcija poput „uvek verifikuj korisnika“ može navesti model da preterano koristi `get_customer`, čak i kada to nije neophodno.

## 1.5 Kontekstni prozor

Kontekstni prozor je ukupna količina teksta (u tokenima) koju model može da obradi odjednom. On uključuje:

- Sistemski prompt
- Celu istoriju poruka
- Definicije alata
- Rezultate alata
**Ključni problemi kontekstnog prozora:**

1. **Efekat gubljenja u sredini (lost-in-the-middle):** modeli pouzdano obrađuju informacije na početku i kraju dugog unosa, ali mogu propustiti detalje u sredini. Ublažavanje: postavite ključne informacije blizu početka ili kraja.
2. **Nagomilavanje rezultata alata:** svaki poziv alata dodaje izlaz u kontekst. Ako alat vraća 40+ polja, a samo 5 je bitno, onda se većina konteksta troši uzalud.
3. **Progresivno sažimanje:** pri kompresovanju istorije, numeričke vrednosti, procenti i datumi se često gube i postaju neodređeni („otprilike“, „grubo“, „nekoliko“).
# Poglavlje 2: Alati i `tool_use`

> Dokumentacija: [Tool Use](https://platform.claude.com/docs/en/build-with-claude/tool-use)

## 2.1 Šta je `tool_use`

`tool_use` je mehanizam koji omogućava Claude-u da poziva eksterne funkcije. Model ne izvršava kod direktno — on generiše strukturiran zahtev za poziv alata; vaš kod ga izvršava i vraća rezultat.

## 2.2 Definicija alata

Svaki alat se definiše pomoću JSON šeme:

```json
{
  "name": "get_customer",
  "description": "Finds a customer by email or ID. Returns the customer profile, including name, email, order history, and account status. Use this tool BEFORE lookup_order to verify the customer's identity. Accepts an email (format: user@domain.com) or a numeric customer_id.",
  "input_schema": {
    "type": "object",
    "properties": {
      "email": {"type": "string", "description": "Customer email"},
      "customer_id": {"type": "integer", "description": "Numeric customer ID"}
    },
    "required": []
  }
}
```

**Kritično važni aspekti opisa alata:**

1. **Opis je primarni mehanizam za izbor.** LLM bira alate na osnovu njihovih opisa. Minimalni opisi („Dobavlja informacije o klijentu”) dovode do grešaka kada se alati preklapaju.
2. **U opis uključite:**
- Šta alat radi i šta vraća
- Formate ulaza i primere vrednosti
- Granične slučajeve i ograničenja
- Kada koristiti ovaj alat naspram sličnih alternativa
1. **Izbegavajte** identične ili preklapajuće opise među alatima. Ako `analyze_content` i `analyze_document` imaju gotovo identične opise, model će ih pomešati.
2. **Ugrađeni alati naspram MCP alata:** agenti mogu davati prednost ugrađenim alatima (Read, Grep) u odnosu na MCP alate sa sličnom funkcionalnošću. Da biste to sprečili, ojačajte opise MCP alata — istaknite konkretne prednosti, jedinstvene podatke ili kontekst koji ugrađeni alati ne mogu da pruže.
## 2.3 Parametar `tool_choice`

`tool_choice` kontroliše kako model bira alate:

| Vrednost | Ponašanje | Kada koristiti |
|---|---|---|
| `{"type": "auto"}` | Model odlučuje da li će pozvati alat ili odgovoriti tekstom | Podrazumevano za većinu slučajeva |
| `{"type": "any"}` | Model **mora** da pozove neki alat | Kada vam je potreban zagarantovan strukturiran izlaz |
| `{"type": "tool", "name": "extract_metadata"}` | Model **mora** da pozove određeni alat | Kada vam je potreban forsiran prvi korak / redosled izvršavanja |

**Važni scenariji:**

- `tool_choice: "any"` + više alata za ekstrakciju → model bira najbolji, ali i dalje dobijate strukturiran izlaz
- Forsiran izbor → kada morate da garantujete određenu prvu akciju (npr. `extract_metadata` pre obogaćivanja)
## 2.4 JSON šeme za strukturiran izlaz

Korišćenje `tool_use` sa JSON šemama je **najpouzdaniji** način da se od Claude-a dobije strukturiran izlaz. Ovaj pristup:

- Garantuje sintaksno ispravan JSON (bez nedostajućih zagrada, bez zareza na kraju)
- Nameće obaveznu strukturu (obavezna polja su prisutna)
- **Ne** garantuje semantičku ispravnost (vrednosti i dalje mogu biti pogrešne)
**Dizajn šeme — ključni principi:**

```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "enum": ["bug", "feature", "docs", "unclear", "other"]
    },
    "category_detail": {
      "type": ["string", "null"],
      "description": "Details if category = 'other' or 'unclear'"
    },
    "severity": {
      "type": "string",
      "enum": ["critical", "high", "medium", "low"]
    },
    "confidence": {
      "type": "number",
      "minimum": 0,
      "maximum": 1
    },
    "optional_field": {
      "type": ["string", "null"],
      "description": "Null if the information was not found in the source"
    }
  },
  "required": ["category", "severity"]
}
```

**Pravila za dizajn šeme:**

1. **Obavezna naspram opcionih:** označavajte polja kao obavezna samo ako je informacija uvek dostupna. Obavezna polja teraju model da izmišlja vrednosti kada podaci nedostaju.
2. **Nullable polja:** koristite `"type": ["string", "null"]` za informacije koje mogu izostati. Model može da vrati `null` umesto da halucinira.
3. **Enumi sa `"other"`:** dodajte `"other"` + string sa detaljima da ne biste izgubili podatke izvan svojih unapred definisanih kategorija.
4. **Enum `"unclear"`:** za slučajeve u kojima model ne može pouzdano da izabere kategoriju — pošteno `"unclear"` je bolje od pogrešne kategorije.
## 2.5 Sintaksne naspram semantičkih grešaka

| Tip greške | Primer | Ublažavanje |
|---|---|---|
| **Sintaksna** | Neispravan JSON, pogrešan tip polja | `tool_use` sa JSON šemom (eliminiše) |
| **Semantička** | Zbirovi se ne poklapaju, vrednost u pogrešnom polju, halucinacija | Provere validacije, ponovni pokušaj uz povratnu informaciju, samokorekcija |

# Poglavlje 3: Claude Agent SDK — izgradnja agentskih sistema

> Dokumentacija: [Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview) | [Hooks](https://platform.claude.com/docs/en/agent-sdk/hooks) | [Subagents](https://platform.claude.com/docs/en/agent-sdk/subagents) | [Sessions](https://platform.claude.com/docs/en/agent-sdk/sessions)

## 3.1 Šta je agentska petlja

Agentska petlja je osnovni obrazac za autonomno izvršavanje zadataka. Model ne samo da odgovara — on izvodi niz akcija:

```text
1. Send a request to Claude with tools
2. Receive a response
3. Check stop_reason:
   - "tool_use" -> execute the tool, append the result to history, go back to step 1
   - "end_turn" -> the task is complete, show the result to the user
4. Repeat until completion
```

**Ovo je pristup vođen modelom:** Claude na osnovu konteksta i prethodnih rezultata alata odlučuje koji će alat sledeći pozvati. To se razlikuje od čvrsto kodiranih stabala odlučivanja, gde je redosled akcija fiksan.

**Antiobrasci (izbegavaj):**

- Parsiranje teksta asistenta da bi se detektovalo dovršenje („Task completed“)
- Korišćenje proizvoljnog ograničenja iteracija (npr. `max_iterations=5`) kao primarnog uslova zaustavljanja
- Provera da li je asistent proizveo tekstualni sadržaj kao signal dovršenja
**Ispravan pristup:** jedini pouzdan signal dovršenja je `stop_reason == "end_turn"`.

## 3.2 Konfiguracija `AgentDefinition`

`AgentDefinition` je objekat konfiguracije agenta u Claude Agent SDK-u:

```python
agent = AgentDefinition(
    name="customer_support",
    description="Handles customer requests for returns and order issues",
    system_prompt="You are a customer support agent...",
    allowed_tools=["get_customer", "lookup_order", "process_refund", "escalate_to_human"],
    # For a coordinator:
    # allowed_tools=["Task", "get_customer", ...]
)
```

**Ključni parametri:**

- `name` / `description` — identifikacija i opis agenta
- `system_prompt` — sistemski prompt sa instrukcijama
- `allowed_tools` — lista dozvoljenih alata (princip najmanje privilegije)
## 3.3 Hub-and-Spoke: koordinator i podagenti

Višeagentska arhitektura se obično gradi kao hub-and-spoke topologija:

```text
         Coordinator
        /     |      \
   Subagent1  Subagent2  Subagent3
    (search)   (analysis)   (synthesis)
```

**Koordinator je odgovoran za:**

- Razlaganje zadatka na podzadatke
- Odlučivanje koji su podagenti potrebni (dinamička selekcija)
- Delegiranje posla podagentima
- Agregiranje i validaciju rezultata
- Rukovanje greškama i ponovnim pokušajima
- Saopštavanje rezultata korisniku
**Kritičan princip: podagenti imaju izolovan kontekst.**

- Podagenti **ne** nasleđuju automatski istoriju konverzacije koordinatora
- Sav potreban kontekst mora biti **eksplicitno prosleđen** u promptu podagenta
- Podagenti ne dele memoriju između poziva
- Sva komunikacija teče kroz koordinatora (radi osmotrivosti i kontrole grešaka)
## 3.4 Alat `Task` za pokretanje podagenata

Podagenti se pokreću preko alata `Task`:

```python
# The coordinator's allowedTools must include "Task"
coordinator_agent = AgentDefinition(
    allowed_tools=["Task", "get_customer"]
)
```

**Eksplicitno prosleđivanje konteksta je obavezno:**

```text
# Bad: the subagent has no context
Task: "Analyze the document"

# Good: full context in the prompt
Task: "Analyze the following document.
Document: [full document text]
Prior search results: [web search results]
Output format requirements: [schema]"
```

**Paralelno pokretanje:** koordinator može pozvati više `Task`-ova u jednom odgovoru — podagenti se izvršavaju paralelno:

```text
# One coordinator response contains:
Task 1: "Search for articles about X"
Task 2: "Analyze document Y"
Task 3: "Search for articles about Z"
# All three run concurrently
```

## 3.5 Hook-ovi u Agent SDK-u

Hook-ovi omogućavaju presretanje i transformaciju na određenim tačkama u životnom ciklusu agenta.

**PostToolUse** presreće rezultat alata pre nego što se prosledi modelu:

```python
# Example: normalize date formats from different MCP tools
@hook("PostToolUse")
def normalize_dates(tool_result):
    # Convert Unix timestamp -> ISO 8601
    # Convert "Mar 5, 2025" -> "2025-03-05"
    return normalized_result
```

**Hook za presretanje odlaznih poziva** blokira akcije koje krše politiku:

```python
# Example: block refunds above $500
@hook("PreToolUse")
def enforce_refund_limit(tool_call):
    if tool_call.name == "process_refund" and tool_call.args.amount > 500:
        return redirect_to_escalation(tool_call)
```

**Ključna razlika: hook-ovi naspram instrukcija u promptu**

| Atribut | Hook-ovi | Instrukcije u promptu |
|---|---|---|
| Garancija | **Deterministički** (100%) | **Probabilistički** (>90%, ne 100%) |
| Kada koristiti | Kritična poslovna pravila, finansijske operacije, usklađenost | Opšte preference, preporuke, formatiranje |
| Primer | Blokiraj povraćaje > $500 | „Pokušaj da rešiš pre eskalacije“ |

**Pravilo:** kada otkaz ima finansijske, pravne ili bezbednosne posledice — koristi hook-ove, ne promptove.

# Poglavlje 4: Model Context Protocol (MCP)

> Dokumentacija: [MCP](https://modelcontextprotocol.io/) | [Tools](https://modelcontextprotocol.io/docs/concepts/tools) | [Resources](https://modelcontextprotocol.io/docs/concepts/resources) | [Servers](https://modelcontextprotocol.io/docs/concepts/servers)

## 4.1 Šta je MCP

Model Context Protocol (MCP) je otvoreni protokol za povezivanje eksternih sistema sa Claude-om. MCP definiše tri primarna tipa resursa:

1. **Tools** — funkcije koje agent može da pozove kako bi izvršio akcije (CRUD operacije, API pozivi, izvršavanje komandi)
2. **Resources** — podaci koje agent može da čita radi konteksta (dokumentacija, šeme baza podataka, katalozi sadržaja)
3. **Prompts** — unapred definisani šabloni promptova za uobičajene zadatke
## 4.2 MCP serveri

MCP server je proces koji implementira MCP protokol i pruža alate/resurse. Kada se povežete na MCP server:

- Svi alati se otkrivaju automatski
- Alati sa svih povezanih servera dostupni su odjednom
- Opisi alata određuju kako će ih model koristiti
## 4.3 Konfigurisanje MCP servera

**Konfiguracija na nivou projekta (`.mcp.json`)** — za timsku upotrebu:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "jira": {
      "command": "npx",
      "args": ["-y", "mcp-server-jira"],
      "env": {
        "JIRA_TOKEN": "${JIRA_TOKEN}"
      }
    }
  }
}
```

**Ključne tačke:**

- `.mcp.json` se čuva u korenu projekta i njime se upravlja preko sistema za kontrolu verzija
- Promenljive okruženja (`${GITHUB_TOKEN}`) se koriste za tajne — sami tokeni se ne komituju
- Dostupno svim saradnicima na projektu
**Korisnička konfiguracija (`~/.claude.json`)** — za lične/eksperimentalne servere:

- Čuva se u korisnikovom home direktorijumu
- Ne deli se preko sistema za kontrolu verzija
- Pogodno za lične eksperimente i testiranje
**Biranje servera:**

- Za standardne integracije (Jira, GitHub, Slack), prednost dajte postojećim MCP serverima iz zajednice
- Sopstvene servere gradite samo za jedinstvene radne tokove specifične za tim
## 4.4 Zastavica `isError` u MCP-u

Kada MCP alat naiđe na grešku, u odgovoru koristi `isError: true`. To signalizira agentu da poziv nije uspeo.

**Strukturirana greška (dobro):**

```json
{
  "isError": true,
  "content": {
    "errorCategory": "transient",
    "isRetryable": true,
    "message": "The service is temporarily unavailable. Timeout while calling the orders API.",
    "attempted_query": "order_id=12345",
    "partial_results": null
  }
}
```

**Generička greška (anti-obrazac):**

```json
{
  "isError": true,
  "content": "Operation failed"
}
```

Generička greška ne daje agentu nikakvu informaciju za donošenje odluke — da li da pokuša ponovo, promeni upit ili eskalira?

## 4.5 MCP resursi

Resursi su podaci koje agent može da zatraži kako bi dobio kontekst bez preduzimanja akcija:

- Katalozi sadržaja (npr. lista svih projektnih zadataka, hijerarhijska navigacija)
- Šeme baza podataka (razumevanje strukture podataka)
- Dokumentacija (API reference, interni vodiči)
- Sažeci problema/zadataka
**Prednost resursa:** agent ne mora da pravi istraživačke pozive alata da bi razumeo koji podaci postoje. Resurs odmah pruža „mapu“.

# Poglavlje 5: Claude Code — konfiguracija i radni tokovi

> Dokumentacija: [Claude Code](https://code.claude.com/docs/en/overview) | [Memory / CLAUDE.md](https://code.claude.com/docs/en/memory) | [Skills](https://code.claude.com/docs/en/skills) | [MCP](https://code.claude.com/docs/en/mcp) | [Hooks](https://code.claude.com/docs/en/hooks) | [Sub-agents](https://code.claude.com/docs/en/sub-agents) | [GitHub Actions](https://code.claude.com/docs/en/github-actions) | [Headless](https://code.claude.com/docs/en/headless)

## 5.1 Hijerarhija CLAUDE.md

CLAUDE.md je fajl (ili fajlovi) sa instrukcijama za Claude Code. Postoji troslojna hijerarhija:

```text
1. User-level: ~/.claude/CLAUDE.md
   - Applies only to that user
   - NOT shared via VCS
   - Personal preferences and working style

2. Project-level: .claude/CLAUDE.md or a root CLAUDE.md
   - Applies to all project contributors
   - Managed via VCS
   - Coding standards, testing standards, architectural decisions

3. Directory-level: CLAUDE.md in subdirectories
   - Applies when working with files in that directory
   - Conventions specific to that part of the codebase
```

**Česta greška:** novi član tima ne dobija projektne instrukcije jer su one stavljene u `~/.claude/CLAUDE.md` (korisnički nivo) umesto u `.claude/CLAUDE.md` (projektni nivo).

## 5.2 `@path` sintaksa (uvoz fajlova)

CLAUDE.md može da referencira spoljne fajlove pomoću `@path`, čime konfiguracija postaje modularna:

```text
# Project CLAUDE.md

Coding standards are described in @./standards/coding-style.md
Test requirements are in @./standards/testing-requirements.md
Project overview is in @README.md and dependencies are in @package.json
```

**Pravila za `@path`:**

- Stavi `@` neposredno ispred putanje fajla (bez razmaka)
- Podržane su i relativne i apsolutne putanje
- Relativne putanje se razrešavaju u odnosu na fajl koji sadrži uvoz
- Maksimalna dubina ugnežđenja uvoza je 5
Time se izbegava dupliranje i svaki paket može da uključi samo relevantne standarde.

## 5.3 Direktorijum `.claude/rules/`

`.claude/rules/` je alternativa monolitnom CLAUDE.md, koja se koristi za organizovanje pravila po temama:

```text
.claude/rules/
  testing.md          -- testing conventions
  api-conventions.md  -- API conventions
  deployment.md       -- deployment rules
  react-patterns.md   -- React patterns
```

**Ključna mogućnost: YAML frontmatter sa `paths` za uslovno učitavanje:**

```yaml
---
paths: ["src/api/**/*"]
---

For API files, use async/await with explicit error handling.
Each endpoint must return a standard response wrapper.
```

```yaml
---
paths: ["**/*.test.tsx", "**/*.test.ts"]
---

Tests must use describe/it blocks.
Use data factories instead of hardcoding.
Do not mock the database—use a test database.
```

**Kako radi:**

- Pravilo se učitava **samo** kada Claude Code menja fajl koji odgovara `paths` obrascu
- Ovo štedi kontekst i tokene — irelevantna pravila se ne učitavaju
- Glob obrasci omogućavaju primenu konvencija po tipu fajla bez obzira na lokaciju (idealno za testove razbacane po kodu)
**Kada koristiti `.claude/rules/` sa `paths` naspram CLAUDE.md na nivou direktorijuma:**

- `.claude/rules/` sa `paths` — kada se konvencije odnose na fajlove razbacane po mnogim direktorijumima (testovi, migracije)
- CLAUDE.md na nivou direktorijuma — kada su konvencije vezane za određeni direktorijum i nisu potrebne drugde
## 5.4 Prilagođene slash komande i veštine (Skills)

> **Napomena:** u trenutnoj verziji Claude Code-a, prilagođene komande (`.claude/commands/`) objedinjene su sa veštinama (`.claude/skills/`). Oba formata kreiraju `/name` komande. Exam guide referencira `.claude/commands/` — taj format je i dalje podržan.

Slash komande su prompt šabloni za višekratnu upotrebu koji se pozivaju preko `/name`:

**`.claude/commands/` format (nasleđeni, podržan):**

```text
.claude/commands/
  review.md        -- /review -- standard code review
  test-gen.md      -- /test-gen -- test generation
```

**`.claude/skills/` format (aktuelni):**

```text
.claude/skills/
  review/SKILL.md  -- /review -- with frontmatter configuration
  test-gen/SKILL.md
```

**Projektne komande** (`.claude/commands/` ili `.claude/skills/`):

- Čuvaju se u VCS-u i dostupne su svima pri kloniranju repozitorijuma
- Obezbeđuju konzistentne radne tokove u celom timu
**Korisničke komande** (`~/.claude/commands/` ili `~/.claude/skills/`):

- Lične komande koje se ne dele preko VCS-a
- Za individualne radne tokove
## 5.5 Veštine (Skills) — `.claude/skills/`

Veštine su napredne komande koje se konfigurišu preko SKILL.md frontmatter-a:

```yaml
---
context: fork
allowed-tools: ["Read", "Grep", "Glob"]
argument-hint: "Path to the directory to analyze"
---

Analyze the code structure in the specified directory.
Output a report on dependencies and architectural patterns.
```

**Frontmatter parametri:**

| Parametar | Opis |
|---|---|
| `context: fork` | Pokreće veštinu u izolovanom podagentu. Opširan izlaz ne zagađuje glavnu sesiju |
| `allowed-tools` | Ograničava koji su alati dostupni (bezbednost — npr. veština ne može da briše fajlove ako to nije dozvoljeno) |
| `argument-hint` | Nagoveštaj koji traži argument kada se pozove bez parametara |

**Kada koristiti veštinu naspram CLAUDE.md:**

- **Veština** — poziv na zahtev za konkretan zadatak (pregled, analiza, generisanje)
- **CLAUDE.md** — uvek učitani opšti standardi i konvencije
**Lične veštine (`~/.claude/skills/`):**

- Kreiraj lične varijante pod drugim imenima da ne bi uticao na kolege iz tima
## 5.6 Planski režim naspram direktnog izvršavanja

**Planski režim:**

- Model samo istražuje i planira; ne pravi izmene
- Koristi Read, Grep, Glob da istraži kod
- Proizvodi plan implementacije koji korisnik odobrava
- Bezbedno istraživanje bez sporednih efekata
**Kada koristiti planski režim:**

- Velike izmene (desetine fajlova)
- Više pristupa koji dolaze u obzir (mikroservisi: kako definisati granice?)
- Arhitektonske odluke (koji framework? kakva struktura?)
- Nepoznat kod (moraš da razumeš pre nego što menjaš)
- Migracije biblioteka koje pogađaju 45+ fajlova
**Kada koristiti direktno izvršavanje:**

- Ispravke u jednom fajlu sa jasnim stack trace-om
- Dodavanje jedne provere validacije
- Dobro shvaćene, nedvosmislene izmene
**Kombinovani pristup:**

1. Planski režim za istraživanje i dizajn
2. Korisnik odobrava plan
3. Direktno izvršavanje radi implementacije odobrenog plana
**Explore podagent** — specijalizovan podagent za istraživanje koda:

- Izoluje opširan izlaz od glavnog konteksta
- Vraća samo rezime
- Sprečava iscrpljivanje prozora konteksta u višefaznim zadacima
## 5.7 Komanda `/compact`

`/compact` je ugrađena komanda za kompresiju konteksta:

- Sumira prethodnu istoriju kako bi oslobodila prozor konteksta
- Koristi se u dugim istraživačkim sesijama kada se kontekst napuni opširnim izlazom alata
- Rizik: tačne numeričke vrednosti, datumi i specifični detalji mogu se izgubiti tokom sumiranja
## 5.8 Komanda `/memory`

`/memory` je ugrađena komanda za upravljanje memorijom između sesija:

- Otvara fajl `CLAUDE.md` za izmenu, što omogućava da sačuvaš beleške, preferencije i kontekst
- Informacije se zadržavaju kroz sesije i automatski se učitavaju pri pokretanju
- Korisno za čuvanje projektnih konvencija, korisničkih preferencija, često korišćenih komandi i trenutnog konteksta rada
- Alternativa ponovnom objašnjavanju istih instrukcija u svakoj sesiji
## 5.9 Claude Code CLI za CI/CD

**Zastavica `-p` (ili `--print`):**

```bash
claude -p "Analyze this pull request for security issues"
```

- Neinteraktivni režim: obradi prompt, ispiše na stdout, izađe
- Ne čeka korisnički unos
- Jedini ispravan način da se Claude pokrene u CI/CD pipeline-ovima
**Strukturirani izlaz za CI:**

```bash
claude -p "Review this PR" --output-format json --json-schema '{"type":"object",...}'
```

- `--output-format json` — izlaz u JSON formatu
- `--json-schema` — validacija izlaza u odnosu na šemu
- Rezultat se može parsirati kako bi se automatski postavili inline komentari na PR
**Izolacija konteksta sesije:**
Ista Claude sesija koja je generisala kod često je manje efikasna u njegovom pregledu (model zadržava kontekst svog rezonovanja i manje je sklon da preispita sopstvene odluke). Za pregled koristi nezavisnu instancu.

**Sprečavanje dupliranih komentara:**
Kada radiš ponovni pregled posle novih commit-ova, uključi rezultate prethodnog pregleda u kontekst i uputi Claude da prijavi samo nove ili nerešene probleme.

## 5.10 `fork_session` i upravljanje sesijama

**`--resume <session-name>`** nastavlja imenovanu sesiju:

```bash
claude --resume investigation-auth-bug
```

- Nastavlja prethodni razgovor sa sačuvanim kontekstom
- Korisno za duga istraživanja koja se protežu kroz više sesija
- Rizik: ako su se fajlovi promenili od prethodne sesije, rezultati alata mogu biti zastareli
**`fork_session`** kreira nezavisnu granu iz deljenog konteksta:

```text
Codebase investigation
         |
    fork_session
    /           \
Approach A:      Approach B:
Redux            Context API
```

- Obe grane nasleđuju kontekst do tačke grananja
- Nakon toga se razilaze nezavisno
- Korisno za poređenje pristupa ili testiranje strategija
**Kada započeti novu sesiju umesto nastavljanja:**

- Rezultati alata su zastareli (fajlovi su se promenili)
- Prošlo je mnogo vremena i kontekst je degradirao
- Bolje je krenuti iznova sa „Evo kratkog rezimea onoga što smo pronašli: ..." nego nastaviti sa starim podacima alata
# Poglavlje 6: Inženjering promptova — napredne tehnike

> Dokumentacija: [Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) | [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)

## 6.1 Few-shot prompting

Few-shot prompting je uključivanje 2–4 primera ulaza/izlaza u prompt radi demonstracije očekivanog ponašanja.

**Zašto je few-shot efikasniji od tekstualnih opisa:**

- Nejasna instrukcija poput „budi precizniji“ može se tumačiti na mnogo načina
- Primer nedvosmisleno pokazuje očekivani format i logiku odlučivanja
- Model generalizuje obrazac na nove slučajeve (ne ponavlja prosto primere)
**Tipovi few-shot primera i kada ih koristiti:**

1. **Primeri za dvosmislene scenarije:**
```text
Request: "My order is broken"
Action: Call get_customer -> lookup_order -> check status.
Rationale: “broken” may mean a damaged item; you need order details.

Request: "Get me a manager"
Action: Immediately call escalate_to_human.
Rationale: The customer explicitly requests a human. Do not attempt to solve autonomously.
```

1. **Primeri za formatiranje izlaza:**
```text
Finding example:
{
  "location": "src/auth/login.ts:42",
  "issue": "SQL injection in the username parameter",
  "severity": "critical",
  "suggested_fix": "Use a parameterized query"
}
```

1. **Primeri za razdvajanje prihvatljivog od problematičnog koda:**
```text
// Acceptable (do not flag):
const items = data.filter(x => x.active);

// Problem (flag):
const items = data.filter(x => x.active == true); // Use strict equality ===
```

1. **Primeri za ekstrakciju iz različitih formata dokumenata:**
```text
Document with inline citations:
"As shown in the study (Smith, 2023), the rate is 42%."
-> {"value": "42%", "source": "Smith, 2023", "type": "inline_citation"}

Document with bibliography references:
"The rate is 42%. [1]"
-> {"value": "42%", "source": "reference_1", "type": "bibliography"}
```

1. **Primeri za neformalne mere:**
```text
Text: "about two handfuls of rice"
-> {"amount": "~100g", "original_text": "two handfuls", "precision": "approximate"}

Text: "a pinch of salt"
-> {"amount": "~1g", "original_text": "a pinch", "precision": "approximate"}
```

Few-shot je posebno efikasan za ekstrakciju neformalnih i nestandardnih mernih jedinica koje su previše raznolike za instrukcije zasnovane isključivo na pravilima.

**Pravila normalizacije formata u promptovima:**

Kada koristiš stroge JSON šeme za strukturirani izlaz, dodaj pravila normalizacije u prompt:

```text
Normalization:
- Dates: always ISO 8601 (YYYY-MM-DD); "yesterday" -> compute an absolute date
- Currency: numeric amount + currency code; "five bucks" -> {"amount": 5, "currency": "USD"}
- Percentages: decimal fraction; "half" -> 0.5
```

Ovo sprečava semantičke greške gde je JSON sintaksno validan ali su vrednosti nedosledne.

## 6.2 Eksplicitni kriterijumi naspram nejasnih instrukcija

**Loše (nejasno):**

```text
Check code comments for accuracy.
Be conservative—report only high-confidence findings.
```

**Dobro (eksplicitni kriterijumi):**

```text
Flag a comment as problematic ONLY if:
1. The comment describes behavior that CONTRADICTS the actual code behavior
2. The comment references a non-existent function or variable
3. A TODO/FIXME comment refers to a bug that has already been fixed in code

Do NOT flag:
- Comments that are merely stylistically outdated
- Comments with minor wording inaccuracies
- Missing comments (that is a separate category)
```

**Definiši kriterijume ozbiljnosti uz primere:**

```text
CRITICAL: Runtime failure for users
  Example: NullPointerException while processing a payment

HIGH: Security vulnerability
  Example: SQL injection, XSS, missing authorization checks

MEDIUM: Logic bug without immediate impact
  Example: Wrong sorting, off-by-one error

LOW: Code quality
  Example: Duplication, suboptimal algorithm for small data
```

## 6.3 Prompt chaining (ulančavanje promptova)

Prompt chaining razlaže složen zadatak na niz fokusiranih koraka:

```text
Step 1: Analyze auth.ts (local issues only)
       -> Output: list of issues in auth.ts

Step 2: Analyze database.ts (local issues only)
       -> Output: list of issues in database.ts

Step 3: Integration pass (cross-file dependencies)
       -> Output: issues at module boundaries
```

**Zašto je ovo važno:**

- Izbegava **razblaživanje pažnje** (attention dilution) — kada model primi previše fajlova odjednom, može da propusti bagove u nekim fajlovima, dok o drugima daje površne komentare
- Obezbeđuje dosledan kvalitet analize po fajlu
- Omogućava odvojenu analizu interakcija između fajlova
**Kada koristiti prompt chaining naspram dinamičke dekompozicije:**

- **Prompt chaining** — predvidivi, ponovljivi zadaci (code review, migracije fajlova)
- **Dinamička dekompozicija** — otvorena istraživanja gde podzadaci postaju jasni tek tokom izvršavanja
## 6.4 Obrazac „intervju“

Pre implementacije rešenja, Claude postavlja pitanja za pojašnjenje:

```text
Claude: "Before implementing caching for the API, a few questions:
1. Which cache invalidation strategy do you prefer—TTL or event-based?
2. Is stale data acceptable when the cache is unavailable?
3. Should caching be per-user or global?
4. What is the expected data volume to cache?"
```

**Kada je ovo korisno:**

- Nepoznat domen (fintech, zdravstvo, pravni sistemi)
- Zadaci sa neočiglednim posledicama (strategije keširanja, načini otkazivanja)
- Više održivih pristupa gde najbolji izbor zavisi od konteksta
## 6.5 Validacija i retry-with-feedback (ponovni pokušaj uz povratnu informaciju)

Kada ekstrahovani podaci ne prođu validaciju:

```text
Step 1: Extract data from the document
Step 2: Validate (Pydantic, JSON Schema, business rules)
Step 3: If there's an error—retry with context:
  - The original document
  - The previous (incorrect) extraction
  - The specific error: "Field 'total' = 150, but sum(line_items) = 145. Re-check values."
```

**Kada će ponovni pokušaj biti efikasan:**

- Greške formata (datum u pogrešnom formatu)
- Strukturne greške (polje postavljeno na pogrešno mesto)
- Aritmetičke nedoslednosti (model može ponovo da proveri)
**Kada ponovni pokušaj NEĆE pomoći:**

- Informacija ne postoji u izvornom dokumentu
- Potreban kontekst je eksterni (podatak je u drugom dokumentu koji nije priložen)
**Pydantic kao alat za validaciju:**

Pydantic je Python biblioteka za validaciju podataka po šemi. Za ispit je ključno sledeće:

- **Strukturna validacija:** tipovi, obaveznost i enum ograničenja proveravaju se u kodu nakon prijema JSON-a od Claude-a
- **Semantička validacija:** prilagođeni validatori sprovode poslovnu logiku (zbir stavki jednak ukupnom iznosu; start_date < end_date)
- **Petlje validacije i ponovnog pokušaja:** kada Pydantic validacija ne uspe, sastavi poruku o grešci i ponovo pošalji prompt Claude-u sa kontekstom greške
- **Generisanje JSON šeme:** Pydantic modeli mogu da generišu JSON šemu za `tool_use`, pružajući jedinstveni izvor istine
## 6.6 Samoispravljanje (self-correction)

Obrazac za otkrivanje internih protivrečnosti:

```json
{
  "stated_total": "$150.00",
  "calculated_total": "$145.00",
  "conflict_detected": true,
  "line_items": [
    {"name": "Widget A", "price": 75.00},
    {"name": "Widget B", "price": 70.00}
  ]
}
```

Model ekstrahuje i navedenu i izračunatu vrednost — ako se razlikuju, `conflict_detected` ti omogućava da obradiš neslaganje.

# Poglavlje 7: Message Batches API

> Dokumentacija: [Message Batches](https://platform.claude.com/docs/en/build-with-claude/message-batches)

## 7.1 Pregled

Message Batches API vam omogućava da pošaljete grupe zahteva na asinhronu obradu:

| Atribut | Vrednost |
|---|---|
| Ušteda | **50%** u odnosu na sinhrone pozive |
| Prozor obrade | Do **24 sata** (bez SLA garancije za latenciju) |
| Multi-turn pozivanje alata | **Nije podržano** (jedan zahtev = jedan odgovor) |
| Korelacija | polje `custom_id` za povezivanje zahteva i odgovora |

## 7.2 Kada koristiti Batch API, a kada sinhroni API

| Zadatak | API | Zašto |
|---|---|---|
| Provera PR-a pre spajanja | **Sinhroni** | Programer čeka; 24 sata je neprihvatljivo |
| Noćni izveštaj o tehničkom dugu | **Batch** | Rezultat je potreban do jutra; ušteda 50% |
| Nedeljna bezbednosna revizija | **Batch** | Nije hitno; ušteda 50% |
| Interaktivni pregled koda | **Sinhroni** | Potreban je trenutni odgovor |
| Obrada 10.000 dokumenata | **Batch** | Masovna obrada; ušteda je značajna |

## 7.3 Korišćenje `custom_id`

```json
{
  "custom_id": "doc-invoice-2024-001",
  "params": {
    "model": "claude-sonnet-4-6",
    "max_tokens": 1024,
    "messages": [{"role": "user", "content": "Extract data from: ..."}]
  }
}
```

`custom_id` vam omogućava da:

- povežete rezultat sa originalnim dokumentom
- u slučaju neuspeha, ponovo pošaljete samo dokumente koji nisu uspeli
- izbegnete ponovnu obradu uspešnih dokumenata
## 7.4 Rukovanje neuspesima u grupama

1. Pošaljete grupu od 100 dokumenata
2. 95 uspeva; 5 ne uspeva (prekoračen limit konteksta)
3. Identifikujete neuspehe pomoću `custom_id`
4. Izmenite strategiju (npr. podelite duge dokumente na delove)
5. Ponovo pošaljete samo 5 dokumenata koji nisu uspeli
## 7.5 Planiranje SLA

Ako vam je rezultat potreban za 30 sati, a obrada kroz Batch API može da traje do 24 sata:

- Prozor za slanje: 30 - 24 = **6 sati**
- Grupe se moraju poslati najkasnije 24 sata pre roka
- Za česta slanja, podelite na prozore od 4 sata
## 8.1 Fiksni pipeline-ovi (Prompt Chaining)

Svaki korak je definisan unapred:

```text
Document -> Metadata extraction -> Data extraction -> Validation -> Enrichment -> Final output
```

**Kada koristiti:**

- Struktura zadatka je predvidljiva (recenzije uvek prate isti šablon)
- Svi koraci su poznati unapred
- Potrebne su vam stabilnost i ponovljivost
## 8.2 Dinamička adaptivna dekompozicija

Podzadaci se generišu na osnovu međurezultata:

```text
1. "Add tests for a legacy codebase"
2. -> First: map the structure (Glob, Grep)
3. -> Found: 3 modules with no tests, 2 with partial coverage
4. -> Prioritize: start with the payments module (high risk)
5. -> During work: discovered a dependency on an external API
6. -> Adapt: add a mock for the external API before writing tests
```

**Kada koristiti:**

- Otvoreni istraživački zadaci
- Kada pun obim nije poznat unapred
- Kada svaki korak zavisi od rezultata prethodnog koraka
## 8.3 Višeprolazni pregled koda (Multi-pass)

Za pull request-ove sa 10+ fajlova:

```text
Pass 1 (per-file): Analyze auth.ts -> list local issues
Pass 1 (per-file): Analyze database.ts -> list local issues
Pass 1 (per-file): Analyze routes.ts -> list local issues
...
Pass 2 (integration): Analyze relationships between files
  -> Cross-file issues: inconsistent types, circular dependencies
```

**Zašto je jedan prolaz preko 14 fajlova loš:**

- Razblaživanje pažnje: duboka analiza za neke fajlove, površna za druge
- Nedosledni komentari: obrazac se označi kao problem u jednom fajlu, a odobri u drugom
- Propušteni bagovi: očigledne greške se preskaču zbog kognitivnog preopterećenja
# Poglavlje 9: Eskalacija i čovek u petlji (human-in-the-loop)

## 9.1 Kada eskalirati ka čoveku

**Okidači za eskalaciju (jasna pravila):**

| Situacija | Akcija |
|---|---|
| Klijent izričito traži „dajte mi menadžera” | Eskaliraj odmah; ne pokušavaj da rešiš |
| Politika ne pokriva zahtev | Eskaliraj (npr. izjednačavanje cene sa konkurencijom kada politika o tome ćuti) |
| Agent ne može da napreduje | Eskaliraj posle razumnog broja pokušaja |
| Finansijska operacija iznad praga | Eskaliraj (po mogućstvu sprovedeno preko hook-a, a ne prompta) |
| Više poklapanja pri pretrazi klijenta | Traži dodatne identifikatore; ne pogađaj |

**Šta NIJE pouzdan okidač:**

| Nepouzdana metoda | Zašto ne uspeva |
|---|---|
| Analiza sentimenta | Raspoloženje klijenta ne korelira sa složenošću slučaja |
| Samoprocenjena pouzdanost modela (1–10) | Model može samouvereno da greši; kalibracija je loša |
| Automatski klasifikator | Prekomplikovano (overengineering); može zahtevati podatke za obuku koje nemaš |

## 9.2 Obrasci eskalacije

**Trenutna eskalacija:**

```text
Customer: "I want to speak to a manager"
Agent: [immediately calls escalate_to_human]
NOT: "I can help with your issue, let me..."
```

**Eskalacija posle pokušaja rešavanja:**

```text
Customer: "My refrigerator broke two days after purchase"
Agent: [checks the order, offers a warranty replacement]
If the customer is not satisfied -> escalate
```

**Nijansirana eskalacija (priznaj → reši → eskaliraj na ponovljeni zahtev):**

```text
Customer: "This is outrageous, I'm very unhappy with the quality!"
Agent: [acknowledges frustration] "I understand your frustration."
       [offers resolution] "I can offer a replacement or a refund."
Customer: "No, I want to talk to someone!"
Agent: [customer insists again -> immediate escalation]
```

Ključni princip: prvo priznaj emociju, zatim predloži konkretno rešenje, i eskaliraj tek ako klijent ponovi želju za čovekom. Ne eskaliraj na prvi izraz nezadovoljstva (to nije isto što i traženje menadžera).

**Eskalacija zbog rupe u politici:**

```text
Customer: "Competitor X has this item 30% cheaper—give me a discount"
Policy: covers price adjustments only on your own site
Agent: [escalates — policy does not cover competitor price matching]
```

## 9.3 Protokoli strukturirane primopredaje (handoff)

Pri eskalaciji, agent treba da prosledi strukturiran rezime čoveku:

```json
{
  "customer_id": "CUST-12345",
  "customer_name": "Ivan Petrov",
  "issue_summary": "Refund request for a damaged item",
  "order_id": "ORD-67890",
  "root_cause": "Item arrived damaged; photos attached",
  "actions_taken": [
    "Verified customer via get_customer",
    "Confirmed order via lookup_order",
    "Offered a standard replacement — customer insists on a refund"
  ],
  "refund_amount": "$89.99",
  "recommended_action": "Approve a full refund",
  "escalation_reason": "Customer requested to speak with a manager"
}
```

Ljudski operater nema pristup celokupnom transkriptu razgovora — vidi samo ovaj rezime. Zato on mora biti potpun i samodovoljan.

## 9.4 Kalibracija pouzdanosti i ljudski nadzor

Za sisteme za ekstrakciju podataka:

1. **Skorovi pouzdanosti na nivou polja:** model daje skor pouzdanosti za svako ekstrahovano polje
2. **Kalibracija:** koristi označene validacione skupove za podešavanje pragova
3. **Rutiranje:**
- Visoka pouzdanost + stabilna tačnost -> automatska obrada
- Niska pouzdanost ili dvosmisleni izvori -> ljudska provera
**Stratifikovano slučajno uzorkovanje:**

- Čak i za ekstrakcije sa visokom pouzdanošću, redovno proveravaj uzorak
- Agregatna tačnost od 97% može da sakrije 40% grešaka za određeni tip dokumenta
- Analiziraj tačnost po tipu dokumenta i po polju, a ne samo ukupno
# Poglavlje 10: Rukovanje greškama u multi-agentskim sistemima

## 10.1 Kategorije grešaka

| Kategorija | Primeri | Može se ponoviti | Akcija agenta |
|---|---|---|---|
| **Prolazne** | Tajmaut, 503, mrežni otkaz | Da | Ponovni pokušaj uz eksponencijalni backoff |
| **Validacione** | Nevalidan format ulaza, nedostaje obavezno polje | Ne (ispravi ulaz) | Izmeni zahtev i ponovi |
| **Poslovne** | Kršenje politike, prekoračen prag | Ne | Objasni korisniku; predloži alternativu |
| **Dozvole** | Pristup odbijen | Ne | Eskaliraj |

## 10.2 Anti-obrasci u rukovanju greškama

| Anti-obrazac | Problem | Ispravan pristup |
|---|---|---|
| Generički status „pretraga nedostupna“ | Koordinator ne može da odluči kako da se oporavi | Vrati tip greške, upit, delimične rezultate, alternative |
| Tiho potiskivanje (prazan rezultat = uspeh) | Koordinator misli da nije bilo poklapanja, a zapravo je bio otkaz | Razlikuj „nema rezultata“ od „otkaz pretrage“ |
| Prekidanje celog radnog toka zbog jednog otkaza | Gubiš sve delimične rezultate | Nastavi sa delimičnim rezultatima; označi praznine |
| Beskonačni ponovni pokušaji unutar podagenta | Latencija i protraćeni resursi | Lokalni oporavak (1–2 pokušaja), zatim propagiraj koordinatoru |

## 10.3 Strukturisana greška podagenta

```json
{
  "status": "partial_failure",
  "failure_type": "timeout",
  "attempted_query": "AI impact on music industry 2024",
  "partial_results": [
    {"title": "AI Music Generation Report", "url": "...", "relevance": 0.8}
  ],
  "alternative_approaches": [
    "Try a narrower query: 'AI music composition tools'",
    "Use an alternative data source"
  ],
  "coverage_impact": "Not covered: AI impact on music production"
}
```

Ovo koordinatoru pruža informacije potrebne da odluči:

- Ponoviti sa izmenjenim upitom?
- Iskoristiti delimične rezultate?
- Delegirati drugom podagentu?
- Nastaviti bez ovog odeljka i označiti prazninu?
## 10.4 Anotacije pokrivenosti u finalnoj sintezi

```text
## Report: AI Impact on Creative Industries

### Visual Art (FULL COVERAGE)
[research results]

### Music (PARTIAL COVERAGE — search agent timeout)
[partial results]
⚠️ Note: coverage for this section is limited due to a timeout in the search agent.

### Literature (FULL COVERAGE)
[research results]
```

## 11.1 Izdvajanje činjenica u zaseban blok

Umesto oslanjanja na istoriju konverzacije (koja se degradira tokom sažimanja), izdvojite ključne činjenice u strukturisan blok:

```text
=== CASE FACTS (updated whenever a new fact appears) ===
Customer ID: CUST-12345
Order ID: ORD-67890
Order Date: 2025-01-15
Order Amount: $89.99
Issue: Damaged item on delivery
Customer Request: Full refund
Status: Pending manager approval
===
```

Uključite ovaj blok u svaki prompt, bez obzira na to kako se istorija sažima.

## 11.2 Skraćivanje rezultata alata

Ako `lookup_order` vraća 40+ polja, a vama je za trenutni zadatak potrebno samo 5:

```python
# PostToolUse hook: keep only relevant fields
@hook("PostToolUse", tool="lookup_order")
def trim_order_fields(result):
    return {
        "order_id": result["order_id"],
        "status": result["status"],
        "total": result["total"],
        "items": result["items"],
        "return_eligible": result["return_eligible"]
    }
```

Ovo čuva kontekst i smanjuje šum.

## 11.3 Ulaz svestan pozicije

Smestite kritične informacije imajući u vidu efekat izgubljenosti u sredini (lost-in-the-middle):

```text
[KEY FINDINGS — at the top]
Found 3 critical vulnerabilities...

[DETAILED RESULTS — middle]
=== File auth.ts ===
...
=== File database.ts ===
...

[ACTION ITEMS — at the end]
Priority: fix auth.ts vulnerabilities before merge.
```

## 11.4 Scratchpad fajlovi

U dugim istragama, agent može da upiše ključne nalaze u scratchpad fajl:

```text
# investigation-scratchpad.md
## Key findings
- PaymentProcessor in src/payments/processor.ts inherits from BaseProcessor
- refund() is called from 3 places: OrderController, AdminPanel, CronJob
- External PaymentGateway API has a rate limit of 100 req/min
- Migration #47 added refund_reason (NOT NULL) — 2024-12-01
```

Kada se kontekst degradira (ili u novoj sesiji), agent može da konsultuje scratchpad umesto da ponovo pokreće otkrivanje.

## 11.5 Delegiranje podagentima radi zaštite konteksta

```text
Main agent: "Investigate dependencies of the payments module"
  -> Subagent (Explore): reads 15 files, traces imports
  -> Returns: "Payments depends on AuthService, OrderModel, and the external PaymentGateway API"

Main agent: keeps one line in context instead of 15 files
```

**Zaseban sloj konteksta:**
U multi-agentskim sistemima, svaki podagent radi u okviru ograničenog budžeta konteksta — dobija samo informacije potrebne za svoj zadatak. Koordinator deluje kao zaseban sloj konteksta: agregira izlaze podagenata, čuva globalno stanje i raspodeljuje kontekst. Ovo sprečava „curenje konteksta“ (context leakage), gde jedan agent troši prozor informacijama nebitnim za ostale.

**Ograničeni budžeti konteksta za podagente:**

- Šaljite minimalan kontekst: konkretan zadatak + neophodne podatke
- Uputite podagenta da vraća strukturisane rezultate, a ne sirov dump podataka
- Koristite `allowedTools` da ograničite skup alata podagenta — manje alata znači manje ometanja i nižu cenu konteksta
## 11.6 Strukturisano očuvanje stanja (za oporavak od pada)

Svaki agent izvozi svoje stanje na poznatu lokaciju:

```json
// agent-state/web-search-agent.json
{
  "status": "completed",
  "queries_executed": ["AI music 2024", "AI music composition"],
  "results_count": 12,
  "key_findings": [...],
  "coverage": ["music composition", "music production"],
  "gaps": ["music distribution", "music licensing"]
}
```

Koordinator pri nastavku učitava manifest:

```json
// agent-state/manifest.json
{
  "web-search": "completed",
  "doc-analysis": "in_progress",
  "synthesis": "not_started"
}
```

# Poglavlje 12: Očuvanje porekla

## 12.1 Problem gubitka atribucije

Pri sažimanju rezultata iz više izvora, veza „tvrdnja → izvor“ može da se izgubi:

```text
Bad: "The AI music market is estimated at $3.2B." (No source, no year.)

Good:
{
  "claim": "The AI music market is estimated at $3.2B.",
  "source_url": "https://example.com/report",
  "source_name": "Global AI Music Report 2024",
  "publication_date": "2024-06-15",
  "confidence": 0.9
}
```

## 12.2 Rukovanje konfliktnim podacima

Kada dva izvora daju različite vrednosti:

```json
{
  "claim": "Share of AI-generated music on streaming platforms",
  "values": [
    {
      "value": "12%",
      "source": "Spotify Annual Report 2024",
      "date": "2024-03",
      "methodology": "Automated classification"
    },
    {
      "value": "8%",
      "source": "Music Industry Association Survey",
      "date": "2024-07",
      "methodology": "Survey of 500 labels"
    }
  ],
  "conflict_detected": true,
  "possible_explanation": "Difference in methodology and time period"
}
```

Nemoj proizvoljno birati jednu vrednost. Sačuvaj obe uz atribuciju i prepusti koordinatoru da odluči.

## 12.3 Uključi datume radi ispravne interpretacije

Bez datuma se vremenske razlike mogu pogrešno protumačiti kao protivrečnosti:

```text
Bad: "Source A says 10%, source B says 15%. Contradiction."
Good: "Source A (2023) says 10%, source B (2024) says 15%. Likely +5% growth over a year."
```

## 12.4 Prikazuj prema tipu sadržaja

Ne guraj sve na silu u jedan format:

- Finansijski podaci -> tabele
- Vesti i analize -> prozni tekst
- Tehnički nalazi -> strukturirane liste
- Vremenske serije -> hronološko uređenje
## 13.1 Referenca za izbor alata

| Zadatak | Alat | Primer |
|---|---|---|
| Pronalaženje fajlova po imenu/obrascu | **Glob** | `**/*.test.tsx`, `src/components/**/*.ts` |
| Pretraga unutar fajlova | **Grep** | Ime funkcije, poruka o grešci, import |
| Čitanje celog fajla | **Read** | Učitavanje fajla radi analize |
| Pisanje novog fajla | **Write** | Kreiranje fajla od nule |
| Precizno menjanje postojećeg fajla | **Edit** | Zamena određenog isečka putem jedinstvenog poklapanja teksta |
| Pokretanje shell komande | **Bash** | git, npm, pokretanje testova, build |

## 13.2 Strategija inkrementalnog istraživanja

Ne čitaj sve fajlove odjednom. Gradi razumevanje inkrementalno:

```text
1. Grep: find entry points (function definition, export)
2. Read: read the found files
3. Grep: find usages (import, calls)
4. Read: read consumer files
5. Repeat until you have a complete picture
```

## 13.3 Rezervna opcija: Read + Write umesto Edit

Kada Edit ne uspe zbog nejedinstvenog poklapanja teksta:

1. Read — učitaj kompletan sadržaj fajla
2. Izmeni sadržaj programski
3. Write — upiši ažuriranu verziju
# DEO II: BELEŠKE PO ISPITNIM DOMENIMA

# Domen 1: Arhitektura i orkestracija agenata (27%)

## 1.1 Dizajniranje agentskih petlji za autonomno izvršavanje zadataka

### Ključno znanje:

- Životni ciklus agentske petlje: pošalji zahtev ka Claude-u, proveri `stop_reason` (`"tool_use"` naspram `"end_turn"`), izvrši alate, vrati rezultate za sledeću iteraciju
- Rezultati alata se dodaju u istoriju konverzacije kako bi model mogao da odluči o sledećoj akciji
- Donošenje odluka vođeno modelom (Claude bira sledeći alat) naspram čvrsto kodiranih stabala odlučivanja
### Ključne veštine:

- Kontrola toka: nastavi petlju kada je `stop_reason = "tool_use"`, a zaustavi je na `"end_turn"`
- Dodavanje rezultata alata u kontekst između iteracija
- Anti-obrasci koje treba izbegavati: parsiranje teksta asistenta radi utvrđivanja završetka, korišćenje proizvoljnih ograničenja broja iteracija kao primarnog mehanizma zaustavljanja
## 1.2 Orkestracija višeagentskih sistema (koordinator–podagent)

### Ključno znanje:

- Hub-and-spoke arhitektura: sva međuagentska komunikacija, obrada grešaka i rutiranje su u nadležnosti koordinatora
- Podagenti rade sa izolovanim kontekstom — oni ne nasleđuju automatski istoriju koordinatora
- Odgovornosti koordinatora: dekompozicija zadataka, delegiranje, agregacija rezultata, dinamičko biranje podagenata
- Rizik da koordinator izvrši preusku dekompoziciju
### Ključne veštine:

- Podeli pokrivenost istraživanja među podagentima radi smanjenja dupliranja
- Implementiraj petlje iterativnog usavršavanja (koordinator procenjuje sintezu i ponovo rutira zadatke)
- Rutiraj svu komunikaciju kroz koordinatora radi osmotrivosti
## 1.3 Konfigurisanje poziva podagenata, prosleđivanja konteksta i kreiranja (spawning)

### Ključno znanje:

- Alat `Task` kreira (spawn) podagente; koordinatorov `allowedTools` mora da uključuje `"Task"`
- Kontekst podagenta mora biti eksplicitno uključen u prompt; podagenti ne nasleđuju kontekst roditelja
- Konfiguracija `AgentDefinition`: opisi, sistemski promptovi, ograničenja alata
- Upravljanje sesijom putem `fork_session` radi istraživanja alternativa
### Ključne veštine:

- Uključi potpune izlaze prethodnih agenata u prompt podagenta
- Koristi strukturirane formate da bi odvojio podatke od metapodataka prilikom prosleđivanja konteksta
- Kreiraj paralelne podagente putem više `Task` poziva u jednom potezu koordinatora
- Formuliši promptove koordinatora kroz ciljeve i kriterijume kvaliteta, a ne kroz instrukcije korak po korak
## 1.4 Implementacija višekoračnih radnih tokova sa obrascima sprovođenja i predaje (handoff)

### Ključno znanje:

- Razlika između **programskog sprovođenja** (hook-ovi, preduslovi) i **usmeravanja promptom** kada treba obezbediti redosled koraka u radnom toku
- Kada su ti potrebne determinističke garancije (npr. provera identiteta pre finansijskih operacija), sami promptovi nisu dovoljni
- Strukturirani protokoli predaje (handoff) tokom eskalacije (ID kupca, razlog, preporučena akcija)
### Ključne veštine:

- Programski preduslovi koji blokiraju naredne pozive dok prethodni koraci nisu završeni (npr. blokiraj `process_refund` dok `get_customer` ne vrati verifikovani ID)
- Dekomponuj višeaspektne zahteve kupaca na zasebne stavke
- Generiši strukturirane rezimee prilikom eskalacije ka čoveku
## 1.5 Hook-ovi Agent SDK-a za presretanje poziva alata i normalizaciju podataka

### Ključno znanje:

- Obrasci hook-ova (npr. `PostToolUse`) za presretanje rezultata alata pre nego što ih model iskoristi
- Hook-ovi koji presreću odlazne pozive radi sprovođenja pravila usklađenosti (npr. blokiranje povraćaja iznad praga)
- Hook-ovi pružaju **determinističke garancije** naspram instrukcija u promptu koje pružaju **probabilističku usklađenost**
### Ključne veštine:

- `PostToolUse` hook-ovi za normalizaciju formata podataka (Unix vremenske oznake, ISO 8601, numerički statusni kodovi)
- Hook-ovi za presretanje koji blokiraju akcije koje krše politiku uz preusmeravanje na eskalaciju
- Biraj hook-ove umesto promptova kada poslovna pravila zahtevaju garantovanu usklađenost
## 1.6 Strategije dekompozicije zadataka za složene radne tokove

### Ključno znanje:

- **Fiksni pipeline-ovi** (prompt chaining) naspram **dinamičke adaptivne dekompozicije** zasnovane na međurezultatima
- Prompt chaining: sekvencijalni koraci (analiziraj svaki fajl zasebno, zatim pokreni integracioni prolaz)
- Adaptivni planovi istraživanja koji generišu podzadatke na osnovu onoga što je otkriveno
### Ključne veštine:

- Koristi prompt chaining za predvidive višeaspektne preglede; koristi dinamičku dekompoziciju za otvorena istraživanja
- Podeli velike preglede koda na analizu po fajlu plus zaseban integracioni prolaz preko više fajlova
- Dekomponuj otvorene zadatke: prvo mapiraj strukturu, zatim izgradi prioritizovan plan
## 1.7 Stanje sesije, nastavljanje i grananje (forking)

### Ključno znanje:

- `--resume <session-name>` za nastavak imenovanih sesija
- `fork_session` za kreiranje nezavisnih grana istraživanja iz deljenog konteksta
- Važnost obaveštavanja agenta o izmenama fajlova prilikom nastavljanja sesija
- Nova sesija sa strukturiranim rezimeom može biti pouzdanija od nastavljanja sa zastarelim rezultatima
### Ključne veštine:

- Koristi `--resume` za nastavak imenovanih istraživačkih sesija
- Koristi `fork_session` za paralelno upoređivanje pristupa
- Biraj između nastavljanja (kontekst još uvek aktuelan) i pokretanja nove sesije (rezultati zastareli)
# Domen 2: Dizajn alata i MCP integracija (18%)

## 2.1 Dizajniranje interfejsa alata sa jasnim opisima

### Ključno znanje:

- Opisi alata su **primarni mehanizam** koji LLM koristi za izbor alata; minimalni opisi dovode do nepouzdanog izbora
- Važnost uključivanja ulaznih formata, primera upita, graničnih slučajeva i granica primenljivosti
- Dvosmisleni opisi i opisi koji se preklapaju dovode do pogrešnog usmeravanja
- Formulacija sistemskog prompta može stvoriti nenamerne asocijacije sa alatima
### Ključne veštine:

- Pisati opise koji jasno razlikuju svaki alat od sličnih alternativa
- Preimenovati alate da bi se eliminisalo funkcionalno preklapanje (npr. `analyze_content` -> `extract_web_results`)
- Podeliti alate opšte namene na specijalizovane sa jasnim ulazno/izlaznim ugovorima
## 2.2 Implementacija strukturiranih odgovora na greške za MCP alate

### Ključno znanje:

- Zastavica `isError` u odgovorima MCP alata
- Razlika između **prolaznih grešaka** (tajmauti), **grešaka validacije** (loš ulaz), **poslovnih grešaka** (kršenja politike) i **grešaka pristupa/dozvola**
- Generičke greške ("Operation failed") sprečavaju ispravne odluke o oporavku
- Razlika između grešaka kod kojih ponovni pokušaj ima smisla i onih kod kojih nema
### Ključne veštine:

- Vraćati strukturirane metapodatke kao što su `errorCategory` (transient/validation/permission), `isRetryable` i poruku čitljivu ljudima
- Koristiti `retryable: false` za kršenja poslovnih pravila uz jasna objašnjenja namenjena korisniku
- Oporavak od prolaznih grešaka obavljati lokalno unutar podagenata; propagirati samo greške koje oni ne mogu da reše
- Razlikovati greške pristupa (odluka o ponovnom pokušaju) od validnih praznih rezultata (nema poklapanja)
## 2.3 Raspodela alata po agentima i konfigurisanje `tool_choice`

### Ključno znanje:

- Previše alata po agentu (npr. 18 umesto 4–5) **smanjuje** pouzdanost izbora alata
- Agenti sa alatima izvan svoje specijalizacije skloni su da ih pogrešno koriste
- Ograničen pristup alatima: samo alati relevantni za ulogu plus ograničen skup uslužnih alata zajedničkih za više uloga
- `tool_choice`: `"auto"`, `"any"` i prinudni izbor alata (`{"type": "tool", "name": "..."}`)
### Ključne veštine:

- Ograničiti skup alata svakog podagenta na ono što je relevantno za njegovu ulogu
- Zameniti opšte alate ograničenim alternativama (npr. `fetch_url` -> `load_document`)
- Koristiti `tool_choice: "any"` da bi se garantovao poziv alata umesto tekstualnog odgovora
- Nametnuti određeni alat da bi se osigurao redosled izvršavanja
## 2.4 Integracija MCP servera u Claude Code i radne tokove agenata

### Ključno znanje:

- Opseg MCP servera: projekat (`.mcp.json`) za timove naspram korisnika (`~/.claude.json`) za eksperimente
- Zamena promenljivih okruženja u `.mcp.json` (npr. `${GITHUB_TOKEN}`) za upravljanje tajnama
- Alati sa svih povezanih MCP servera otkrivaju se pri povezivanju i dostupni su istovremeno
- MCP resursi kao „katalozi sadržaja“ (sažeci zadataka, šeme baza podataka) za smanjenje istraživačkih poziva alata
### Ključne veštine:

- Konfigurisati zajedničke MCP servere u projektnom `.mcp.json` sa tokenima zasnovanim na promenljivama okruženja
- Držati lične/eksperimentalne servere u `~/.claude.json`
- Za standardne integracije davati prednost MCP serverima iz zajednice nad sopstvenim serverima
## 2.5 Izbor i primena ugrađenih alata (Read, Write, Edit, Bash, Grep, Glob)

### Ključno znanje:

- **Grep**: pretraga unutar sadržaja datoteka (imena funkcija, poruke o greškama, importi)
- **Glob**: pronalaženje datoteka po obrascima imena/ekstenzije
- **Read/Write**: operacije nad celom datotekom; **Edit**: precizne izmene preko jedinstvenih poklapanja teksta
- Ako Edit ne uspe zbog poklapanja koja nisu jedinstvena, vratiti se na Read + Write
### Ključne veštine:

- Koristiti Grep za pretragu sadržaja i Glob za pronalaženje datoteka po obrascima
- Graditi razumevanje postepeno: Grep za ulazne tačke, zatim Read za praćenje tokova
- Pratiti upotrebu funkcija kroz wrapper module
# Domen 3: Konfiguracija i radni tokovi Claude Code-a (20%)

## 3.1 Konfigurisanje CLAUDE.md sa hijerarhijom, opsegom i modularnom organizacijom

### Ključno znanje:

- Hijerarhija CLAUDE.md: korisnički nivo (`~/.claude/CLAUDE.md`), projektni nivo (`.claude/CLAUDE.md` ili koreni `CLAUDE.md`) i nivo direktorijuma (CLAUDE.md u poddirektorijumima)
- Podešavanja na korisničkom nivou važe samo za jednog korisnika i ne dele se preko VCS-a
- `@path` sintaksa za referenciranje eksternih fajlova (npr. `@./standards/coding-style.md`) radi modularizacije CLAUDE.md
- Direktorijum `.claude/rules/` za tematski fokusirane fajlove pravila umesto monolitnog CLAUDE.md
### Ključne veštine:

- Dijagnostikovanje problema sa hijerarhijom (novi član tima ne dobija instrukcije jer su na korisničkom umesto na projektnom nivou)
- Korišćenje `@path` (npr. `@./standards/testing.md`) za selektivno uključivanje standarda u CLAUDE.md svakog paketa
- Razbijanje velikog CLAUDE.md na više `.claude/rules/` fajlova (testing.md, api-conventions.md, deployment.md)
## 3.2 Kreiranje i konfigurisanje prilagođenih slash komandi i veština (skills)

### Ključno znanje:

- **Projektne komande** u `.claude/commands/` (dele se preko VCS-a) nasuprot **korisničkim komandama** u `~/.claude/commands/`
- Veštine (skills) u `.claude/skills/` sa `SKILL.md` frontmatter-om: `context: fork`, `allowed-tools`, `argument-hint`
- `context: fork` pokreće veštinu u izolovanom kontekstu podagenta tako da ne zagađuje glavnu sesiju
- Lične varijante veština mogu da postoje u `~/.claude/skills/` pod različitim imenima
### Ključne veštine:

- Čuvanje projektnih slash komandi u `.claude/commands/` da bi ih dobio ceo tim
- Korišćenje `context: fork` za izolovanje veština sa opširnim izlazom
- Korišćenje `allowed-tools` da se ograniči koje alate veština sme da koristi
- Korišćenje `argument-hint` da se od programera zatraže obavezni parametri
## 3.3 Korišćenje pravila specifičnih za putanje za uslovno učitavanje konvencija

### Ključno znanje:

- `.claude/rules/` fajlovi mogu da uključe YAML frontmatter `paths` radi aktiviranja pravila na osnovu glob obrazaca
- Pravila ograničena na putanju učitavaju se **samo** pri izmeni odgovarajućih fajlova, čime se štede kontekst i tokeni
- Pravila putanja zasnovana na glob obrascima mogu biti pogodnija od CLAUDE.md na nivou direktorijuma kada konvencije važe kroz mnogo direktorijuma (npr. testovi)
### Ključne veštine:

- Kreiranje `.claude/rules/` fajlova sa `paths: ["terraform/**/*"]` radi učitavanja samo pri radu na odgovarajućim fajlovima
- Korišćenje glob obrazaca (`**/*.test.tsx`) za primenu konvencija prema tipu fajla bez obzira na lokaciju
- Davanje prednosti pravilima specifičnim za putanje u odnosu na CLAUDE.md na nivou direktorijuma kada se konvencije protežu kroz celu bazu koda
## 3.4 Odlučivanje kada koristiti režim planiranja, a kada direktno izvršavanje

### Ključno znanje:

- **Režim planiranja**: za složene zadatke koji uključuju velike izmene, više održivih pristupa i arhitektonske odluke
- **Direktno izvršavanje**: za jednostavne, dobro poznate izmene (npr. dodavanje jedne validacije)
- Režim planiranja omogućava bezbedno istraživanje baze koda pre nego što se naprave izmene
- Explore podagent izoluje opširan izlaz istraživanja
### Ključne veštine:

- Korišćenje režima planiranja za zadatke sa arhitektonskim posledicama (mikroservisi, migracije koje dotiču 45+ fajlova)
- Korišćenje direktnog izvršavanja za popravke sa jasnim stack trace-om i jednim fajlom
- Korišćenje Explore podagenta da bi se sprečilo iscrpljivanje kontekstnog prozora u višefaznim zadacima
- Kombinovanje pristupa: planiranje za istraživanje, zatim izvršavanje za implementaciju
## 3.5 Iterativno dorađivanje radi postepenog poboljšanja

### Ključno znanje:

- Konkretni primeri ulaza/izlaza najefikasniji su način da se prenesu očekivanja
- **Iteracija vođena testovima**: prvo se pišu testovi, zatim se iterira na osnovu onih koji padaju
- Obrazac „intervju”: Claude postavlja pitanja da bi izneo na površinu neočigledne aspekte dizajna
- Kada navesti sve probleme u jednoj poruci (međuzavisni), a kada jedan po jedan (nezavisni)
### Ključne veštine:

- Navođenje 2–3 konkretna primera ulaza/izlaza radi razjašnjenja zahteva za transformaciju
- Izrada skupova testova sa očekivanim ponašanjem, graničnim slučajevima i zahtevima za performanse pre implementacije
- Korišćenje obrasca intervjua da bi se izneli na površinu aspekti dizajna (invalidacija keša, načini otkazivanja)
- Navođenje konkretnih test slučajeva sa primerima ulaza i očekivanim izlazima za granične slučajeve
## 3.6 Integracija Claude Code-a u CI/CD pipeline-ove

### Ključno znanje:

- Zastavica `-p` (ili `--print`) za neinteraktivni režim u automatizovanim pipeline-ovima
- `--output-format json` i `--json-schema` za strukturirani izlaz u CI-ju
- CLAUDE.md pruža projektni kontekst (standardi testiranja, kriterijumi pregleda) za Claude Code pokrenut iz CI-ja
- **Izolacija konteksta sesije**: ista sesija koja je generisala kod manje je delotvorna u njegovom pregledu nego nezavisna instanca
### Ključne veštine:

- Pokretanje Claude Code-a u CI-ju sa `-p` da bi se izbeglo zaglavljivanje na interaktivnom unosu
- Korišćenje `--output-format json` + `--json-schema` za strukturirane rezultate (npr. inline PR komentari)
- Uključivanje rezultata prethodnog pregleda pri ponovnom pokretanju posle novih commit-a (prijavljuju se samo novi/neispravljeni problemi)
- Dokumentovanje standarda testiranja i dostupnih fixtura u CLAUDE.md radi poboljšanja kvaliteta generisanja testova
- Uključivanje postojećih test fajlova u kontekst pri generisanju novih testova da bi se izbeglo dupliranje i održala konzistentnost stila
# Domen 4: Inženjering promptova i strukturirani izlaz (20%)

## 4.1 Dizajn promptova sa eksplicitnim kriterijumima radi povećanja tačnosti

### Ključno znanje:

- Eksplicitni kriterijumi su delotvorniji od nejasnih uputstava (npr. „označavaj komentare samo kada protivreče kodu” naspram „proveri tačnost komentara”)
- Generičke smernice poput „budi konzervativniji” daju slabije rezultate od konkretnih kategorijalnih kriterijuma
- Uticaj lažno pozitivnih rezultata na poverenje programera: visoke stope lažno pozitivnih u nekim kategorijama narušavaju poverenje u tačne kategorije
### Ključne veštine:

- Definiši kriterijume pregleda: šta prijaviti (bagovi, bezbednost), a šta ignorisati (sitan stil)
- Privremeno onemogući kategorije sa visokim stopama lažno pozitivnih
- Definiši eksplicitne kriterijume ozbiljnosti sa primerima koda za svaki nivo
## 4.2 Korišćenje few-shot promptovanja radi poboljšanja konzistentnosti izlaza

### Ključno znanje:

- Few-shot primeri su najdelotvorniji metod za proizvodnju dosledno formatiranog, upotrebljivog izlaza
- Few-shot može da demonstrira rukovanje dvosmislenim slučajevima (izbor alata, praznine u pokrivenosti testovima)
- Few-shot pomaže modelu da generalizuje na nove obrasce, umesto da samo ponavlja podrazumevane vrednosti
- Few-shot može da smanji halucinacije u zadacima ekstrakcije
### Ključne veštine:

- Pruži 2–4 ciljana primera za dvosmislene scenarije sa obrazloženjem
- Uključi few-shot primere koji demonstriraju format izlaza (lokacija, problem, ozbiljnost, predložena ispravka)
- Pruži primere koji razlikuju prihvatljive obrasce koda od stvarnih problema
- Pruži primere ispravne ekstrakcije iz dokumenata sa različitim strukturama
## 4.3 Nametanje strukturiranog izlaza pomoću `tool_use` i JSON šema

### Ključno znanje:

- `tool_use` sa JSON šemama je najpouzdaniji način da se garantuje izlaz usklađen sa šemom i eliminišu JSON sintaksne greške
- Sa `tool_choice: "auto"` model može da vrati tekst; sa `"any"` mora da pozove alat; prinudni izbor bira određeni alat
- Stroge JSON šeme eliminišu sintaksne greške, ali ne sprečavaju semantičke greške (zbirovi se ne slažu; vrednosti u pogrešnim poljima)
- Dizajn šeme: obavezna polja naspram opcionih; enumeracije sa „other” plus string sa detaljima radi proširivosti
### Ključne veštine:

- Definiši alate za ekstrakciju sa JSON šemama i parsiraj podatke iz `tool_use` rezultata
- Koristi `tool_choice: "any"` da garantuješ strukturirani izlaz kada postoji više šema
- Forsiraj poziv određenog alata: `tool_choice: {"type": "tool", "name": "extract_metadata"}`
- Učini polja opcionim/nulabilnim kada izvor možda ne sadrži informaciju, da bi se izbeglo izmišljanje vrednosti
- Koristi enum vrednosti poput `"unclear"` i `"other"` plus polja sa detaljima za proširivu kategorizaciju
## 4.4 Implementacija validacije, ponovnih pokušaja i povratnih petlji za kvalitet ekstrakcije

### Ključno znanje:

- Ponovni pokušaj sa povratnom informacijom o grešci: uključi konkretne validacione greške u prompt ponovnog pokušaja da bi usmerio ispravke
- Ponovni pokušaji su nedelotvorni kada informacija jednostavno nije prisutna u izvoru
- Dizajn povratne petlje: prati obrazac koji je pokrenuo nalaz (`detected_pattern`)
- Semantičke greške (zbirovi se ne usaglašavaju) naspram sintaksnih grešaka (rešava ih `tool_use`)
### Ključne veštine:

- Naknadni promptovi sa originalnim dokumentom, netačnom ekstrakcijom i konkretnim validacionim greškama
- Identifikuj kada će ponovni pokušaj biti nedelotvoran (potrebna informacija je samo u spoljnom dokumentu)
- Uključi `detected_pattern` polja u nalaze radi analize lažno pozitivnih
- Dizajniraj samokorekciju tako što ekstrahuješ i `calculated_total` i `stated_total` radi otkrivanja nepodudaranja
## 4.5 Dizajn efikasnih strategija paketne obrade

### Ključno znanje:

- Message Batches API: 50% uštede, prozor obrade do 24 sata, bez garancija SLA za latenciju
- Paketna obrada je pogodna za neblokirajuće zadatke (noćni izveštaji, revizije), a nije pogodna za blokirajuće zadatke (provere pre merge-a)
- Batch API ne podržava višekoračno pozivanje alata unutar jednog zahteva
- `custom_id` polja koreliraju zahtev/odgovor unutar paketa
### Ključne veštine:

- Koristi sinhroni API za blokirajuće provere; koristi Batch API za noćne/nedeljne poslove
- Planiraj ritam predaje paketa na osnovu SLA potreba (npr. prozori od 4 sata za garanciju od 30 sati uz obradu od 24 sata)
- Neuspehe rešavaj ponovnom predajom samo neuspelih dokumenata (identifikovanih preko `custom_id`)
- Iteriraj nad promptovima na uzorku pre pokretanja obrade velikog obima
## 4.6 Dizajn arhitektura pregleda sa više instanci i više prolaza

### Ključno znanje:

- Ograničenja samopregleda: model zadržava svoj kontekst rezonovanja i manja je verovatnoća da će preispitati sopstvene odluke
- Nezavisne instance pregleda (bez konteksta generisanja) bolje pronalaze suptilne probleme
- Pregled u više prolaza: lokalna analiza po fajlu plus integracioni prolaz kroz više fajlova, da bi se izbeglo razvodnjavanje pažnje
### Ključne veštine:

- Koristi drugu nezavisnu Claude instancu za pregled izmena bez konteksta generisanja
- Podeli preglede više fajlova na prolaze po fajlu plus integracione prolaze za analizu protoka podataka kroz više fajlova
- Koristi verifikacione prolaze sa samoocenjenom pouzdanošću da bi kalibrisano usmeravao preglede
# Domen 5: Upravljanje kontekstom i pouzdanost (15%)

## 5.1 Upravljanje kontekstom razgovora radi očuvanja kritičnih informacija

### Ključno znanje:

- Rizici progresivnog sažimanja: numeričke vrednosti, procenti i datumi se svode na nejasne rezimee
- Efekat „izgubljeno u sredini”: modeli pouzdano obrađuju početak i kraj dugačkih ulaza, ali mogu da propuste nalaze iz sredine
- Izlazi alata mogu da se gomilaju u kontekstu nesrazmerno svojoj relevantnosti (40+ polja kada je potrebno 5)
- Važnost slanja kompletne istorije razgovora u narednim API zahtevima
### Ključne veštine:

- Izdvajanje transakcionih činjenica u trajni blok „činjenica slučaja” izvan sažete istorije
- Skraćivanje opširnih izlaza alata na relevantna polja
- Postavljanje ključnih nalaza na početak agregiranih podataka uz eksplicitne naslove sekcija
- Zahtevanje od podagenata da uključe metapodatke (datume, izvore) u strukturirane izlaze
## 5.2 Projektovanje efikasnih obrazaca eskalacije i razrešavanje dvosmislenosti

### Ključno znanje:

- Pogodni okidači eskalacije: eksplicitan zahtev za čovekom, praznine/izuzeci u politici, nemogućnost napredovanja
- Trenutna eskalacija (eksplicitan zahtev) naspram pokušaja razrešavanja (u okviru opsega agenta)
- Analiza sentimenta i samoocene poverenja modela su nepouzdani indikatori složenosti slučaja
- Više podudaranja kupaca zahteva traženje dodatnih identifikatora, a ne heurističko pogađanje
### Ključne veštine:

- Eksplicitni kriterijumi eskalacije sa few-shot primerima u sistemskom promptu
- Izvršavanje eksplicitnih zahteva za čovekom odmah, bez dodatne istrage
- Eskalacija kada je politika dvosmislena ili ne pokriva određeni zahtev
- Traženje dodatnih identifikatora kada rezultati alata sadrže više podudaranja
## 5.3 Implementacija strategija propagacije grešaka u višeagentskim sistemima

### Ključno znanje:

- Strukturirani kontekst greške (tip otkaza, upit, delimični rezultati, alternative) omogućava pametniji oporavak koordinatora
- Razlikovanje otkaza pristupa (tajmauti zahtevaju odluku o ponovnom pokušaju) od validnih praznih rezultata (nema podudaranja)
- Generički statusi greške („pretraga nedostupna”) skrivaju dragocen kontekst od koordinatora
- Nečujno potiskivanje ili prekidanje celog radnog toka zbog jednog otkaza — oba su antiobrasci
### Ključne veštine:

- Vraćanje strukturiranog konteksta greške: tip otkaza, šta je pokušano, delimični rezultati, moguće alternative
- Razlikovanje otkaza pristupa od validnih praznih rezultata
- Sprovođenje lokalnog oporavka u podagentima za prolazne otkaze; propagiranje samo nepopravljivih grešaka uz delimične rezultate
- Označavanje pokrivenosti u sintezi: šta je dobro potkrepljeno naspram toga gde ostaju praznine
## 5.4 Efikasno upravljanje kontekstom pri istraživanju velikih kodnih baza

### Ključno znanje:

- Degradacija konteksta u dugim sesijama: model počinje da daje nestabilne odgovore i da se poziva na „tipične obrasce” umesto na konkretne klase
- Scratchpad fajlovi čuvaju ključne nalaze preko granica konteksta
- Delegiranje podagentima izoluje opširan izlaz faze otkrivanja
- Strukturirano trajno čuvanje stanja omogućava oporavak nakon pada
### Ključne veštine:

- Pokretanje podagenata za konkretna pitanja uz zadržavanje koordinacije na visokom nivou u glavnom agentu
- Korišćenje scratchpad fajlova za čuvanje ključnih nalaza i kasnije pozivanje na njih
- Sažimanje ključnih nalaza pre pokretanja podagenata sledeće faze
- Korišćenje `/compact` za smanjenje potrošnje konteksta tokom dugih istraga
## 5.5 Projektovanje radnih tokova sa ljudskim nadzorom i kalibracijom poverenja

### Ključno znanje:

- Agregirane metrike (npr. 97% ukupne tačnosti) mogu da maskiraju loše performanse na određenim tipovima dokumenata ili poljima
- Stratifikovano slučajno uzorkovanje meri stope grešaka u ekstrakcijama sa visokim poverenjem
- Kalibracija poverenja na nivou polja korišćenjem označenih validacionih skupova
- Validacija tačnosti po tipu dokumenta i segmentu polja pre automatizacije
### Ključne veštine:

- Implementacija stratifikovanog slučajnog uzorkovanja radi otkrivanja novih obrazaca grešaka
- Analiza tačnosti po tipu dokumenta i polju radi validacije stabilnih performansi
- Generisanje ocena poverenja na nivou polja i kalibracija pragova za pregled korišćenjem označenih podataka
- Usmeravanje ekstrakcija sa niskim poverenjem ili dvosmislenim izvorom na ljudski pregled
## 5.6 Očuvanje porekla i upravljanje neizvesnošću u sintezi iz više izvora

### Ključno znanje:

- Atribucija se gubi tokom sažimanja ako se ne očuvaju mapiranja „tvrdnja → izvor”
- Strukturirana mapiranja moraju biti očuvana tokom agregacije
- Obrada konfliktnih statistika označavanjem konflikata uz atribuciju umesto proizvoljnog biranja jedne vrednosti
- Uključivanje datuma objavljivanja/prikupljanja radi izbegavanja pogrešnog tumačenja vremenskih razlika kao protivrečnosti
### Ključne veštine:

- Zahtevanje od podagenata da vraćaju mapiranja „tvrdnja → izvor” (URL, naziv dokumenta, citati)
- Strukturiranje izveštaja tako da se stabilni nalazi odvoje od spornih
- Očuvanje konfliktnih vrednosti uz napomene i njihovo prosleđivanje koordinatoru radi usaglašavanja
- Uključivanje datuma objavljivanja radi ispravnog vremenskog tumačenja
- Prikazivanje sadržaja po tipu: finansijski podaci kao tabele, vesti kao proza, tehnički nalazi kao strukturirane liste
# Primeri ispitnih pitanja sa objašnjenjima

## Pitanje 1 (Scenario: agent za korisničku podršku)

**Situacija:** Podaci pokazuju da u 12% slučajeva agent preskoči `get_customer` i pozove `lookup_order` koristeći samo ime kupca, što dovodi do pogrešnih povraćaja novca.

**Koja izmena je najefikasnija?**

- A) Dodati programski preduslov koji blokira `lookup_order` i `process_refund` dok se ID ne dobije iz `get_customer` **[CORRECT]**
- B) Poboljšati sistemski prompt
- C) Dodati few-shot primere
- D) Implementirati klasifikator za rutiranje
**Zašto A:** Kada kritična poslovna logika zahteva određen redosled alata, softver pruža **determinističke garancije** koje pristupi zasnovani na promptu (B, C) ne mogu da pruže. D rešava dostupnost, a ne redosled alata.

## Pitanje 2 (Scenario: agent za korisničku podršku)

**Situacija:** Agent često poziva `get_customer` umesto `lookup_order` za pitanja vezana za porudžbine. Opisi alata su minimalni i slični.

**Koji je prvi korak?**

- A) Few-shot primeri
- B) Proširiti opis svakog alata formatima ulaza, primerima i granicama **[CORRECT]**
- C) Dodati sloj za rutiranje
- D) Spojiti alate
**Zašto B:** Opisi alata su primarni mehanizam preko kojeg model bira alat. Ovo je ispravka sa najmanje truda i najvećim učinkom. A dodaje tokene bez rešavanja osnovnog uzroka. C je overengineering. D zahteva više truda nego što je opravdano.

## Pitanje 3 (Scenario: agent za korisničku podršku)

**Situacija:** Agent rešava samo 55% problema, uz cilj od 80%. Eskalira jednostavne slučajeve, a pokušava da samostalno reši složene izuzetke od politike.

**Kako poboljšati kalibraciju?**

- A) Dodati eksplicitne kriterijume za eskalaciju sa few-shot primerima **[CORRECT]**
- B) Samoocenjivanje pouzdanosti (1–10) sa automatskom eskalacijom
- C) Zaseban klasifikator obučen na istorijskim podacima
- D) Analiza sentimenta
**Zašto A:** Direktno rešava osnovni uzrok — nejasne granice odlučivanja. B je nepouzdano (model može samouvereno da greši). C je overengineering. D rešava drugačiji problem (raspoloženje != složenost).

## Pitanje 4 (Scenario: generisanje koda sa Claude Code)

**Situacija:** Potrebna ti je prilagođena `/review` komanda za standardni pregled koda koja je dostupna celom timu kada kloniraju repozitorijum.

**Gde treba da kreiraš fajl komande?**

- A) `.claude/commands/` u repozitorijumu projekta **[CORRECT]**
- B) `~/.claude/commands/`
- C) Korenski `CLAUDE.md`
- D) `.claude/config.json`
**Zašto A:** Komande projekta smeštene u `.claude/commands/` su pod kontrolom verzija i automatski dostupne svima. B je za lične komande. C je za instrukcije, ne za definicije komandi. D ne postoji.

## Pitanje 5 (Scenario: generisanje koda sa Claude Code)

**Situacija:** Treba da restrukturiraš monolit u mikroservise (desetine fajlova, odluke o granicama servisa).

**Koji pristup treba da koristiš?**

- A) Režim planiranja: istraži kod, razumi zavisnosti, osmisli pristup **[CORRECT]**
- B) Inkrementalno direktno izvršavanje
- C) Direktno izvršavanje sa detaljnim unapred zadatim instrukcijama
- D) Direktno izvršavanje uz prelazak na planiranje kada postane teško
**Zašto A:** Režim planiranja je namenjen velikim izmenama, više mogućih pristupa i arhitektonskim odlukama. B rizikuje skupu preradu. C pretpostavlja da već znaš strukturu. D je reaktivan.

## Pitanje 6 (Scenario: generisanje koda sa Claude Code)

**Situacija:** Kod ima različite konvencije po oblastima (React, API, baza podataka). Testovi se nalaze uz kod. Želiš da se konvencije primenjuju automatski.

**Koji pristup treba da koristiš?**

- A) `.claude/rules/` fajlovi sa YAML frontmatter-om i glob obrascima **[CORRECT]**
- B) Staviti sve u korenski CLAUDE.md
- C) Veštine u `.claude/skills/`
- D) CLAUDE.md u svakom direktorijumu
**Zašto A:** `.claude/rules/` sa glob obrascima (npr. `**/*.test.tsx`) omogućava automatsku primenu konvencija na osnovu putanja fajlova — idealno za testove razasute po kodu. B se oslanja na zaključivanje modela. C je ručno/na zahtev. D ne radi dobro kada su relevantni fajlovi u mnogo direktorijuma.

## Pitanje 7 (Scenario: višeagentski istraživački sistem)

**Situacija:** Sistem istražuje „uticaj veštačke inteligencije na kreativne industrije”, ali izveštaji pokrivaju samo vizuelnu umetnost. Koordinator je dekomponovao temu na: „AI u digitalnoj umetnosti”, „AI u grafičkom dizajnu”, „AI u fotografiji”.

**Koji je uzrok?**

- A) Agent za sintezu ne otkriva praznine
- B) Koordinator je previše usko dekomponovao zadatak **[CORRECT]**
- C) Agent za pretragu veba ne pretražuje dovoljno temeljno
- D) Agent za analizu dokumenata filtrira nevizuelne izvore
**Zašto B:** Logovi pokazuju da je koordinator dekomponovao „kreativne industrije” samo na vizuelne podteme, potpuno izostavivši muziku, književnost i film. Podagenti su svoj deo posla obavili ispravno — problem je u tome šta im je dodeljeno.

## Pitanje 8 (Scenario: višeagentski istraživački sistem)

**Situacija:** Podagent za pretragu veba prekorači vremensko ograničenje dok istražuje složenu temu. Treba da osmisliš kako se informacija o grešci prosleđuje nazad koordinatoru.

**Koji pristup propagaciji grešaka najbolje omogućava inteligentan oporavak?**

- A) Vratiti koordinatoru strukturiran kontekst greške: tip otkaza, upit, delimične rezultate i alternative **[CORRECT]**
- B) Implementirati automatske ponovne pokušaje sa eksponencijalnim odlaganjem unutar podagenta, pa vratiti generički status „pretraga nedostupna”
- C) Uhvatiti istek vremena unutar podagenta i vratiti prazan skup rezultata označen kao uspeh
- D) Propagirati izuzetak isteka vremena do handler-a na najvišem nivou koji prekida ceo radni tok
**Zašto A:** Strukturiran kontekst greške daje koordinatoru ono što mu treba da odluči da li da ponovi pokušaj sa izmenjenim upitom, proba alternativni pristup ili nastavi sa delimičnim rezultatima. B skriva kontekst iza generičkog statusa. C maskira otkaz kao uspeh. D nepotrebno prekida ceo radni tok.

## Pitanje 9 (Scenario: višeagentski istraživački sistem)

**Situacija:** Agent za sintezu često mora da proveri određene tvrdnje dok spaja rezultate. Trenutno, kada je potrebna provera, agent za sintezu vraća kontrolu koordinatoru, koji poziva agenta za pretragu veba, a zatim ponovo pokreće sintezu sa novim rezultatima. To dodaje 2–3 dodatna kruga po zadatku i povećava latenciju za 40%. Tvoja procena pokazuje da 85% ovih provera čine jednostavne provere činjenica (datumi, imena, statistike), dok 15% zahteva dublje istraživanje.

**Kako smanjiti dodatne troškove uz održavanje pouzdanosti?**

- A) Dati agentu za sintezu ograničen alat `verify_fact` za jednostavne provere, a složene provere i dalje rutirati preko koordinatora **[CORRECT]**
- B) Akumulirati sve potrebe za proverom u grupu i vratiti ih koordinatoru na kraju
- C) Dati agentu za sintezu pun pristup svim alatima za pretragu veba
- D) Proaktivno keširati dodatni kontekst oko svakog izvora
**Zašto A:** Ovo primenjuje princip najmanje privilegije: agent za sintezu dobija tačno ono što mu treba za uobičajeni slučaj od 85% (jednostavne provere činjenica), dok put preko koordinatora ostaje za složena istraživanja. B uvodi blokirajuće zavisnosti (kasniji koraci sinteze mogu zavisiti od ranije proverenih činjenica). C narušava razdvajanje odgovornosti. D se oslanja na špekulativno keširanje koje ne može pouzdano da predvidi potrebe.

## Pitanje 10 (Scenario: Claude Code za CI)

**Situacija:** Pipeline pokreće `claude "Analyze this pull request for security issues"`, ali se zaglavi čekajući interaktivni unos.

**Koji je ispravan pristup?**

- A) Koristiti `-p` zastavicu: `claude -p "Analyze this pull request for security issues"` **[CORRECT]**
- B) Postaviti `CLAUDE_HEADLESS=true`
- C) Preusmeriti stdin sa `/dev/null`
- D) Koristiti `--batch`
**Zašto A:** `-p` (ili `--print`) je dokumentovan način za pokretanje Claude Code u neinteraktivnom režimu. Obrađuje prompt, ispisuje na stdout i izlazi. Ostale opcije su ili nepostojeće funkcije ili Unix zaobilaznice.

## Pitanje 11 (Scenario: Claude Code za CI)

**Situacija:** Tim želi da smanji trošak API-ja za automatizovanu analizu. Claude trenutno opslužuje dva radna toka u realnom vremenu: (1) blokirajuću pre-merge proveru koja mora da se završi pre nego što programeri mogu da spoje PR, i (2) izveštaj o tehničkom dugu koji se generiše tokom noći za jutarnji pregled. Menadžer predlaže da se oba prebace na Message Batches API radi uštede od 50%.

**Kako treba da proceniš ovaj predlog?**

- A) Koristiti grupno (batch) procesiranje samo za izveštaje o tehničkom dugu; zadržati pozive u realnom vremenu za pre-merge provere **[CORRECT]**
- B) Prebaciti oba radna toka na grupno procesiranje i periodično proveravati da li su završeni
- C) Zadržati pozive u realnom vremenu za oba kako bi se izbegli problemi sa redosledom u grupnim rezultatima
- D) Prebaciti oba na grupno procesiranje uz rezervni prelazak na realno vreme ako grupa traje predugo
**Zašto A:** Message Batches API štedi 50%, ali obrada može da traje i do 24 sata bez zagarantovanog SLA za latenciju. To ga čini neprikladnim za blokirajuće pre-merge provere gde programeri čekaju, ali idealnim za noćne grupne (batch) poslove poput izveštaja o tehničkom dugu.

## Pitanje 12 (Scenario: pregled koda u više fajlova)

**Situacija:** Pull request menja 14 fajlova u modulu za praćenje zaliha. Pregled svih fajlova u jednom prolazu daje nekonzistentne rezultate: detaljne komentare za neke fajlove, a površne za druge, propuštene očigledne greške i protivrečne povratne informacije (obrazac je označen kao problematičan u jednom fajlu, a odobren u identičnom kodu u drugom fajlu).

**Kako treba da restrukturiraš pregled?**

- A) Podeliti na fokusirane prolaze: analizirati svaki fajl pojedinačno za lokalne probleme, pa pokrenuti zaseban integracioni prolaz za tokove podataka između fajlova **[CORRECT]**
- B) Zahtevati od programera da podele velike PR-ove na predaje od 3–4 fajla
- C) Preći na model više klase sa većim kontekstnim prozorom da bi se svih 14 fajlova pregledalo u jednom prolazu
- D) Pokrenuti tri nezavisna prolaza pregleda celog PR-a i prijaviti samo probleme pronađene u najmanje dva pokretanja
**Zašto A:** Fokusirani prolazi direktno rešavaju osnovni uzrok — razblaživanje pažnje pri obradi mnogo fajlova odjednom. Analiza po fajlu obezbeđuje konzistentnu dubinu, a zaseban integracioni prolaz hvata probleme između fajlova. B prebacuje teret na programere bez poboljšanja sistema. C je zabluda: veći kontekst ne popravlja kvalitet pažnje. D potiskuje stvarne greške zahtevajući konsenzus među nekonzistentnim detekcijama.

# Probni test

> 60 pitanja kroz 4 scenarija. Format i težina odgovaraju pravom ispitu.

> Alternativno, ova pitanja možete vežbati u HTML fajlu nalik ispitu: [Practical Test (EN)](practical_test_en.html)

## Scenario: Multi-agent Research System

## Pitanje 1 (Scenario: Multi-agent Research System)

**Situacija:** Agent za analizu dokumenata otkriva da dva verodostojna izvora sadrže direktno protivrečne statistike za ključnu metriku: vladin izveštaj navodi rast od 40%, dok industrijska analiza navodi 12%. Oba izvora deluju verodostojno, a neslaganje bi moglo materijalno da utiče na zaključke istraživanja. Kako bi agent za analizu dokumenata trebalo najefikasnije da reši ovu situaciju?

**Koji pristup je najefikasniji?**

- A) Primeniti heuristike verodostojnosti da bi se izabrao najverovatnije tačan broj, završiti analizu s tom vrednošću i dodati fusnotu koja pominje neslaganje.
- B) Uključiti oba broja u izlaz analize bez označavanja da su protivrečni, prepuštajući agentu za sintezu da odluči koji da koristi na osnovu šireg konteksta.
- C) Zaustaviti analizu i odmah eskalirati koordinatoru, tražeći od njega da odluči koji je izvor merodavniji pre nastavka.
- D) Završiti analizu s oba broja, eksplicitno anotirati sukob uz pripisivanje izvora i prepustiti koordinatoru da odluči kako da usaglasi podatke pre prosleđivanja na sintezu. **[CORRECT]**
**Zašto D:** Ovaj pristup čuva razdvajanje odgovornosti: agent za analizu završava svoj osnovni posao bez blokiranja, čuva obe protivrečne vrednosti uz jasno pripisivanje i ispravno prepušta usaglašavanje koordinatoru, koji ima širi kontekst.

## Pitanje 2 (Scenario: Multi-agent Research System)

**Situacija:** Agenti za pretragu veba i za analizu dokumenata završili su svoje zadatke i vratili rezultate koordinatoru. Koji je sledeći korak u kreiranju integrisanog istraživačkog izveštaja?

**Koji sledeći korak je najprikladniji?**

- A) Svaki agent šalje svoje rezultate direktno agentu za pisanje izveštaja, zaobilazeći koordinatora.
- B) Agent za analizu dokumenata zahteva rezultate pretrage veba i interno ih spaja.
- C) Koordinator prosleđuje oba skupa rezultata agentu za sintezu radi objedinjene integracije. **[CORRECT]**
- D) Koordinator nadovezuje sirove izlaze oba agenta i vraća ih kao konačan rezultat.
**Zašto C:** U arhitekturi koordinator–podagent, koordinator prosleđuje oba skupa rezultata agentu za sintezu radi centralizovane integracije, čuvajući kontrolu i obezbeđujući kvalitetno spajanje.

## Pitanje 3 (Scenario: Multi-agent Research System)

**Situacija:** Podagent za analizu dokumenata često otkazuje pri obradi PDF fajlova: neki imaju oštećene delove koji izazivaju izuzetke pri parsiranju, drugi su zaštićeni lozinkom, a ponekad se biblioteka za parsiranje zaglavi na velikim fajlovima. Trenutno bilo koji izuzetak odmah obustavlja podagenta i vraća grešku koordinatoru, koji mora da odluči da li da ponovi pokušaj, preskoči ili obori ceo zadatak. Ovo izaziva preterano uključivanje koordinatora u rutinsko rukovanje greškama. Koje arhitektonsko poboljšanje je najefikasnije?

**Koje poboljšanje je najefikasnije?**

- A) Kreirati namenskog agenta za rukovanje greškama koji prati sve otkaze preko deljenog reda i odlučuje o radnjama oporavka, šaljući komande za restart direktno podagentima.
- B) Podesiti podagenta da uvek vraća delimične rezultate sa statusom uspeha, ugrađujući detalje grešaka u metapodatke; koordinator tretira sve odgovore kao uspešne.
- C) Naterati koordinatora da validira sve dokumente pre slanja podagentu, odbacujući dokumente koji bi mogli da izazovu otkaze.
- D) Implementirati lokalni oporavak u podagentu za prolazne otkaze i eskalirati koordinatoru samo greške koje ne može da reši, uključujući pokušane korake i delimične rezultate. **[CORRECT]**
**Zašto D:** Rukuj greškama na najnižem nivou koji je sposoban da ih reši. Lokalni oporavak smanjuje opterećenje koordinatora, dok i dalje eskalira zaista neoporavljive probleme uz pun kontekst i delimičan napredak.

## Pitanje 4 (Scenario: Multi-agent Research System)

**Situacija:** Nakon pokretanja sistema na temi „AI impact on creative industries“, primećujete da svaki podagent uspešno završava: agent za pretragu veba nalazi relevantne članke, agent za analizu dokumenata ih ispravno sažima, a agent za sintezu proizvodi koherentan tekst. Međutim, konačni izveštaji pokrivaju samo vizuelnu umetnost, a potpuno propuštaju muziku, književnost i film. U logovima koordinatora vidite da je temu razložio na tri podzadatka: „AI in digital art“, „AI in graphic design“ i „AI in photography“. Koji je najverovatniji osnovni uzrok?

**Koji je najverovatniji osnovni uzrok?**

- A) Agentu za sintezu nedostaju instrukcije za detekciju praznina u pokrivenosti.
- B) Agent za analizu dokumenata filtrira nevizuelne izvore zbog previše strogih kriterijuma relevantnosti.
- C) Koordinatorovo razlaganje zadatka je preusko, dodeljujući podagentima posao koji ne pokriva sve relevantne oblasti. **[CORRECT]**
- D) Upiti agenta za pretragu veba su nedovoljni i treba ih proširiti da pokriju više sektora.
**Zašto C:** Koordinator je široku temu razložio samo na podzadatke iz vizuelne umetnosti, potpuno propustivši muziku, književnost i film. Pošto su podagenti ispravno izvršili svoje zadatke, usko razlaganje je očigledan osnovni uzrok.

## Pitanje 5 (Scenario: Multi-agent Research System)

**Situacija:** Podagent za pretragu veba vraća rezultate za samo 3 od 5 zatraženih kategorija izvora (sajtovi konkurenata i industrijski izveštaji uspevaju, ali novinski arhivi i društveni feedovi doživljavaju tajmaut). Podagent za analizu dokumenata uspešno obrađuje sve dostavljene dokumente. Podagent za sintezu mora da proizvede sažetak iz uzvodnih ulaza mešovitog kvaliteta. Koja strategija propagacije grešaka je najefikasnija?

**Koja strategija propagacije grešaka je najefikasnija?**

- A) Nastaviti sintezu koristeći samo uspešne izvore i proizvesti izlaz bez pominjanja koji podaci nisu bili dostupni.
- B) Podagent za sintezu vraća grešku koordinatoru, pokrećući pun ponovni pokušaj ili otkaz zadatka zbog nepotpunih podataka.
- C) Podagent za sintezu traži od koordinatora da izvore koji su doživeli tajmaut ponovo pokuša sa dužim tajmautom pre početka sinteze.
- D) Strukturirati izlaz sinteze sa anotacijama pokrivenosti koje označavaju koji su zaključci dobro potkrepljeni i gde postoje praznine zbog nedostupnih izvora. **[CORRECT]**
**Zašto D:** Anotacije pokrivenosti implementiraju gracioznu degradaciju uz transparentnost, čuvajući vrednost obavljenog posla, dok propagiraju neizvesnost kako bi omogućile informisane odluke o pouzdanosti.

## Pitanje 6 (Scenario: Multi-agent Research System)

**Situacija:** Podagent za analizu dokumenata naiđe na oštećen PDF fajl koji ne može da parsira. Pri projektovanju rukovanja greškama u sistemu, koji je najefikasniji način da se obradi ovaj otkaz?

**Koji pristup je najefikasniji?**

- A) Vratiti grešku sa kontekstom koordinatorskom agentu, omogućavajući mu da odluči kako da nastavi. **[CORRECT]**
- B) Nečujno preskočiti oštećen dokument i nastaviti obradu preostalih fajlova kako bi se izbeglo prekidanje radnog toka.
- C) Automatski ponoviti parsiranje dokumenta tri puta sa eksponencijalnim povlačenjem (backoff) pre prijavljivanja otkaza.
- D) Baciti izuzetak koji obustavlja ceo istraživački radni tok.
**Zašto A:** Vraćanje greške sa kontekstom koordinatoru je najefikasniji pristup jer omogućava koordinatoru da donese informisanu odluku — preskoči fajl, isproba alternativnu metodu parsiranja ili obavesti korisnika — uz održavanje vidljivosti otkaza.

## Pitanje 7 (Scenario: Multi-agent Research System)

**Situacija:** Produkcioni logovi pokazuju uporan obrazac: zahtevi poput „analyze the uploaded quarterly report“ usmeravaju se ka agentu za pretragu veba u 45% slučajeva umesto ka agentu za analizu dokumenata. Pregledom definicija alata utvrđujete da agent za pretragu veba ima alat `analyze_content` opisan kao „analyzes content and extracts key information“, dok agent za analizu dokumenata ima alat `analyze_document` opisan kao „analyzes documents and extracts key information“. Kako biste rešili problem pogrešnog usmeravanja?

**Kako biste rešili problem pogrešnog usmeravanja?**

- A) Dodati klasifikator pre usmeravanja koji detektuje da li korisnik misli na otpremljene fajlove ili na veb sadržaj pre nego što koordinator odluči o delegiranju.
- B) Preimenovati alat za pretragu veba u `extract_web_results` i ažurirati njegov opis u „processes and returns information retrieved from web search and URLs“. **[CORRECT]**
- C) Dodati few-shot primere u prompt koordinatora koji prikazuju ispravno usmeravanje: „User uploads a quarterly report → document analysis agent“ i „User asks about a web page → web-search agent“.
- D) Proširiti opis alata za analizu dokumenata primerima upotrebe poput „Use for uploaded PDFs, Word docs, and spreadsheets“, ostavljajući alat za pretragu veba nepromenjenim.
**Zašto B:** Preimenovanje alata za pretragu veba u `extract_web_results` i ažuriranje njegovog opisa da eksplicitno upućuje na pretragu veba i URL-ove direktno uklanja osnovni uzrok eliminisanjem semantičkog preklapanja između imena i opisa dva alata. Time svrha svakog alata postaje nedvosmislena, omogućavajući koordinatoru da pouzdano razlikuje analizu dokumenata od pretrage veba.

## Pitanje 8 (Scenario: Multi-agent Research System)

**Situacija:** Kolega predlaže da agent za analizu dokumenata šalje svoje rezultate direktno agentu za sintezu, zaobilazeći koordinatora. Koja je glavna prednost zadržavanja koordinatora kao centralnog čvorišta za svu komunikaciju među podagentima?

**Koja je glavna prednost zadržavanja koordinatora kao centralnog čvorišta?**

- A) Koordinator može da posmatra sve interakcije, jednoobrazno rukuje greškama i odlučuje koje informacije svaki podagent treba da primi. **[CORRECT]**
- B) Koordinator grupiše više zahteva ka podagentima, smanjujući ukupan broj API poziva i celokupnu latenciju.
- C) Usmeravanje kroz koordinatora omogućava automatsku logiku ponovnih pokušaja koju direktni pozivi između agenata ne mogu da podrže.
- D) Podagenti koriste izolovanu memoriju, a direktna komunikacija bi zahtevala složenu serijalizaciju koju samo koordinator može da obavi.
**Zašto A:** Obrazac koordinatora pruža centralizovanu vidljivost svih interakcija, jednoobrazno rukovanje greškama u celom sistemu i finu kontrolu nad time koje informacije svaki podagent prima — to su primarne prednosti zvezdaste topologije komunikacije.

## Pitanje 9 (Scenario: Multi-agent Research System)

**Situacija:** Podagent za pretragu veba doživi tajmaut dok istražuje složenu temu. Treba da projektujete kako se informacija o ovom otkazu vraća koordinatoru. Koji pristup propagacije grešaka najbolje omogućava inteligentan oporavak?

**Koji pristup propagacije grešaka najbolje omogućava inteligentan oporavak?**

- A) Vratiti strukturirani kontekst greške koordinatoru, uključujući tip otkaza, izvršeni upit, sve delimične rezultate i moguće alternativne pristupe. **[CORRECT]**
- B) Uhvatiti tajmaut unutar podagenta i vratiti prazan skup rezultata označen kao uspešan.
- C) Implementirati automatske ponovne pokušaje sa eksponencijalnim povlačenjem unutar podagenta, vraćajući generički status „search unavailable“ tek nakon iscrpljivanja pokušaja.
- D) Propagirati izuzetak tajmauta direktno najvišem rukovaocu, obustavljajući ceo istraživački radni tok.
**Zašto A:** Vraćanje strukturiranog konteksta greške — uključujući tip otkaza, izvršeni upit, delimične rezultate i alternativne pristupe — daje koordinatoru sve što je potrebno za donošenje inteligentnih odluka o oporavku (npr. ponoviti pokušaj sa izmenjenim upitom ili nastaviti sa delimičnim rezultatima). Čuva maksimum konteksta za informisano odlučivanje na nivou koordinacije.

## Pitanje 10 (Scenario: Multi-agent Research System)

**Situacija:** U vašem dizajnu sistema dali ste agentu za analizu dokumenata pristup alatu opšte namene `fetch_url` kako bi mogao da preuzima dokumente po URL-u. Produkcioni logovi pokazuju da ovaj agent sada često preuzima stranice rezultata pretraživača da bi obavio ad hoc pretragu veba — ponašanje koje bi trebalo usmeravati kroz agenta za pretragu veba — izazivajući nedosledne rezultate. Koja popravka je najefikasnija?

**Koja popravka je najefikasnija?**

- A) Zameniti `fetch_url` alatom `load_document` koji validira da URL-ovi upućuju na formate dokumenata. **[CORRECT]**
- B) Ukloniti `fetch_url` iz agenta za analizu dokumenata i usmeriti sva preuzimanja URL-ova kroz koordinatora ka agentu za pretragu veba.
- C) Implementirati filtriranje koje blokira `fetch_url` pozive ka poznatim domenima pretraživača, dozvoljavajući druge URL-ove.
- D) Dodati u prompt agenta za analizu dokumenata instrukcije da `fetch_url` treba koristiti samo za preuzimanje URL-ova dokumenata, ne za pretragu.
**Zašto A:** Zamena alata opšte namene alatom specifičnim za dokumente koji validira URL-ove u odnosu na formate dokumenata otklanja osnovni uzrok ograničavanjem mogućnosti na nivou interfejsa. Ovo prati princip najmanje privilegije, čineći neželjeno ponašanje pretrage nemogućim, a ne samo obeshrabrenim.

## Pitanje 11 (Scenario: Multi-agent Research System)

**Situacija:** Dok istražujete široku temu, primećujete da agent za pretragu veba i agent za analizu dokumenata istražuju iste podteme, što dovodi do značajnog dupliranja u njihovim izlazima. Potrošnja tokena se gotovo udvostručuje bez srazmernog povećanja širine ili dubine istraživanja. Koji je najefikasniji način da se ovo reši?

**Koji je najefikasniji način da se ovo reši?**

- A) Dozvoliti da oba agenta završe paralelno, a zatim da koordinator deduplicira preklapajuće rezultate pre prosleđivanja agentu za sintezu.
- B) Koordinator eksplicitno particioniše istraživački prostor pre delegiranja, dodeljujući svakom agentu zasebne podteme ili tipove izvora. **[CORRECT]**
- C) Implementirati mehanizam deljenog stanja u kome agenti beleže svoju trenutnu oblast fokusa kako bi drugi agenti dinamički izbegavali dupliranje tokom izvršavanja.
- D) Preći na sekvencijalno izvršavanje gde analiza dokumenata teče tek nakon što se pretraga veba završi, koristeći rezultate pretrage veba kao kontekst da bi se izbeglo dupliranje.
**Zašto B:** To što koordinator eksplicitno particioniše istraživački prostor pre delegiranja najefikasnije je jer rešava osnovni uzrok — nejasne granice zadataka — pre nego što ijedan posao počne. Čuva paralelizam, a istovremeno sprečava dupliranje truda i traćenje tokena.

## Pitanje 12 (Scenario: Multi-agent Research System)

**Situacija:** Tokom istraživanja, podagent za pretragu veba šalje upite ka tri kategorije izvora sa različitim ishodima: akademske baze vraćaju 15 relevantnih radova, industrijski izveštaji vraćaju „0 results“, a baze patenata vraćaju „Connection timeout“. Pri projektovanju propagacije grešaka ka koordinatoru, koji pristup omogućava najbolje odluke o oporavku?

**Koji pristup omogućava najbolje odluke o oporavku?**

- A) Agregirati rezultate u jednu metriku procenta uspeha (npr. „67% source coverage“) uz detaljne logove dostupne na zahtev.
- B) Prijaviti i „timeout“ i „0 results“ kao otkaze koji zahtevaju intervenciju koordinatora.
- C) Interno ponoviti prolazne otkaze i prijaviti samo trajne greške.
- D) Razlikovati otkaze pristupa (timeout) koji zahtevaju odluku o ponovnom pokušaju od validnih praznih rezultata („0 results“) koji predstavljaju uspešne upite. **[CORRECT]**
**Zašto D:** Tajmaut (otkaz pristupa) i „0 results“ (validan prazan rezultat) su semantički različiti ishodi koji zahtevaju različite odgovore. Njihovo razlikovanje omogućava koordinatoru da ponovo pokuša bazu patenata, dok prihvata „0 results“ industrijskih izveštaja kao validan, informativan nalaz.

## Pitanje 13 (Scenario: Multi-agent Research System)

**Situacija:** Produkcioni nadzor pokazuje nedoslednost u kvalitetu sinteze. Kada su agregirani rezultati ~75K tokena, agent za sintezu pouzdano citira informacije iz prvih 15K tokena (naslovi/isečci pretrage veba) i poslednjih 10K tokena (zaključci analize dokumenata), ali često propušta kritične nalaze u srednjih 50K tokena — čak i kada oni direktno odgovaraju na istraživačko pitanje. Kako biste restrukturirali agregirani ulaz?

**Kako biste restrukturirali agregirani ulaz?**

- A) Sažeti sve izlaze podagenata na ispod 20K tokena pre agregacije kako bi sadržaj ostao unutar pouzdanog opsega obrade modela.
- B) Strimovati rezultate podagenata agentu za sintezu inkrementalno, tako da se prvo do kraja obrade rezultati pretrage veba, a zatim dodaju rezultati analize dokumenata.
- C) Postaviti sažetak ključnih nalaza na početak agregiranog ulaza i organizovati detaljne rezultate sa eksplicitnim naslovima sekcija radi lakše navigacije. **[CORRECT]**
- D) Implementirati rotaciju koja kroz istraživačke zadatke naizmenično menja koji se rezultati podagenata pojavljuju prvi, kako bi oba izvora vremenom dobila ravnopravnu poziciju na vrhu.
**Zašto C:** Postavljanje sažetka ključnih nalaza na početak iskorišćava efekat prvenstva (primacy) tako da kritične informacije stoje na najpouzdanije obrađivanoj poziciji. Dodavanje eksplicitnih naslova sekcija kroz ceo ulaz pomaže modelu da navigira i obrati pažnju na sadržaj iz sredine ulaza, direktno ublažavajući fenomen „lost in the middle“.

## Pitanje 14 (Scenario: Multi-agent Research System)

**Situacija:** Pri testiranju, kombinovani izlaz agenta za pretragu veba (85K tokena uključujući sadržaj stranica) i agenta za analizu dokumenata (70K tokena uključujući lance razmišljanja) iznosi ukupno 155K tokena, ali agent za sintezu najbolje radi sa ulazima ispod 50K tokena. Koje rešenje je najefikasnije?

**Koje rešenje je najefikasnije?**

- A) Izmeniti uzvodne agente da vraćaju strukturirane podatke (ključne činjenice, citate, ocene relevantnosti) umesto opširnog sadržaja i rezonovanja. **[CORRECT]**
- B) Dodati posrednog agenta za sažimanje koji kondenzuje nalaze pre prosleđivanja na sintezu.
- C) Neka agent za sintezu obrađuje nalaze u sekvencijalnim grupama, održavajući stanje između poziva.
- D) Skladištiti nalaze u vektorskoj bazi podataka i dati agentu za sintezu alate za pretragu kojima može da postavlja upite tokom rada.
**Zašto A:** Izmena uzvodnih agenata da vraćaju strukturirane podatke otklanja osnovni uzrok tako što smanjuje obim tokena na samom izvoru, uz očuvanje suštinskih informacija. Time se izbegava prosleđivanje glomaznog sadržaja stranica i tragova rezonovanja koji naduvavaju broj tokena, a ne poboljšavaju korak sinteze.

## Pitanje 15 (Scenario: Multi-agent Research System)

**Situacija:** Pri testiranju primećujete da agent za sintezu često mora da verifikuje konkretne tvrdnje dok spaja rezultate. Trenutno, kada je verifikacija potrebna, agent za sintezu vraća kontrolu koordinatoru, koji poziva agenta za pretragu veba i zatim ponovo poziva sintezu sa rezultatima. To dodaje 2–3 dodatne petlje po zadatku i povećava latenciju za 40%. Vaša procena pokazuje da 85% ovih verifikacija čine jednostavne provere činjenica (datumi, imena, statistike), a 15% zahteva dublje istraživanje. Koji pristup najefikasnije smanjuje režijske troškove uz očuvanje pouzdanosti sistema?

**Koji pristup je najefikasniji?**

- A) Dati agentu za sintezu pristup svim alatima za pretragu veba kako bi svaku potrebu za verifikacijom mogao da reši direktno, bez petlji preko koordinatora.
- B) Neka agent za sintezu akumulira sve potrebe za verifikacijom i na kraju ih kao grupu vrati koordinatoru, koji ih zatim sve odjednom šalje agentu za pretragu veba.
- C) Neka agent za pretragu veba tokom početnog istraživanja proaktivno kešira dodatni kontekst oko svakog izvora, u očekivanju da će sintezi zatrebati verifikacija.
- D) Dati agentu za sintezu alat ograničenog obima `verify_fact` za jednostavne provere, dok se složene verifikacije usmeravaju preko koordinatora ka agentu za pretragu veba. **[CORRECT]**
**Zašto D:** Alat ograničenog obima za verifikaciju činjenica omogućava agentu za sintezu da 85% jednostavnih provera obavi direktno, čime se eliminiše većina petlji, dok put delegiranja preko koordinatora ostaje za 15% složenih verifikacija. Time se primenjuje princip najmanjih privilegija uz značajno smanjenje latencije.

## Scenario: Claude Code za kontinuiranu integraciju

## Pitanje 16 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaš CI pipeline pokreće Claude Code CLI (u `--print` režimu) koristeći CLAUDE.md da obezbedi kontekst projekta za pregled koda, i programeri uglavnom smatraju da su pregledi sadržajni. Međutim, javljaju da je nalaze teško uklopiti u radni tok — Claude ispisuje narativne pasuse koji se moraju ručno kopirati u PR komentare. Tim želi da svaki nalaz automatski objavi kao zaseban inline PR komentar na odgovarajućem mestu u kodu, što zahteva strukturirane podatke sa putanjom fajla, brojem linije, nivoom ozbiljnosti i predloženom ispravkom. Koji pristup je najefikasniji?

**Koji pristup je najefikasniji?**

- A) Dodati sekciju „Output Format for Review“ u CLAUDE.md sa primerima strukturiranih nalaza kako bi Claude naučio očekivani format iz konteksta projekta.
- B) Koristiti CLI flegove `--output-format json` i `--json-schema` da bi se nametnuli strukturirani nalazi, a zatim parsirati izlaz radi objavljivanja inline komentara preko GitHub API-ja. **[CORRECT]**
- C) Uključiti eksplicitna uputstva za formatiranje u prompt za pregled koja zahtevaju da svaki nalaz prati parsabilni šablon poput `[FILE:path] [LINE:n] [SEVERITY:level] ...`.
- D) Zadržati narativni format pregleda ali dodati korak sumiranja koji koristi Claude da generiše strukturirani JSON rezime nalaza.
**Zašto B:** Korišćenje `--output-format json` sa `--json-schema` nameće strukturirani izlaz na nivou CLI-ja, garantujući dobro oblikovan JSON sa potrebnim poljima (putanja fajla, broj linije, ozbiljnost, predložena ispravka) koji se može pouzdano parsirati i objaviti kao inline PR komentari preko GitHub API-ja. Iskorišćava ugrađene CLI mogućnosti dizajnirane specijalno za strukturirani izlaz.

## Pitanje 17 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaš tim koristi Claude Code za generisanje predloga koda, ali primećujete obrazac: neočigledni problemi — optimizacije performansi koje ruše granične slučajeve, čišćenja koja neočekivano menjaju ponašanje — otkrivaju se tek kada drugi član tima pregleda PR. Claude-ovo rezonovanje tokom generisanja pokazuje da je razmatrao te slučajeve, ali je zaključio da je njegov pristup ispravan. Koji pristup direktno rešava osnovni uzrok ovog ograničenja samoprovere?

**Koji pristup direktno rešava osnovni uzrok?**

- A) Pokrenuti drugu nezavisnu instancu Claude Code-a da pregleda izmene bez pristupa rezonovanju generatora. **[CORRECT]**
- B) Uključiti režim proširenog razmišljanja u fazi generisanja kako bi model mogao temeljnije da promisli pre nego što proizvede predloge.
- C) Dodati eksplicitna uputstva za samopregled u prompt za generisanje koja traže od Claude-a da kritikuje sopstvene predloge pre finalizovanja izlaza.
- D) Uključiti kompletne test fajlove i dokumentaciju u kontekst prompta kako bi Claude bolje razumeo očekivano ponašanje tokom generisanja.
**Zašto A:** Druga nezavisna instanca Claude Code-a bez pristupa rezonovanju generatora direktno rešava osnovni uzrok jer izbegava pristrasnost potvrđivanja. Ova perspektiva „svežih očiju“ preslikava ljudski peer review, gde drugi recenzent uhvati probleme koje je autor racionalizovao.

## Pitanje 18 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaša komponenta za pregled koda je iterativna: Claude analizira izmenjeni fajl, zatim može zatražiti povezane fajlove (importe, bazne klase, testove) preko poziva alata kako bi razumeo kontekst pre davanja konačnog feedback-a. Vaša aplikacija definiše alat koji omogućava Claude-u da zatraži sadržaj fajlova; Claude poziva alat, dobija rezultate i nastavlja analizu. Razmatrate batch obradu radi smanjenja troška API-ja. Koje je primarno tehničko ograničenje pri razmatranju batch obrade za ovaj radni tok?

**Koje je primarno tehničko ograničenje?**

- A) Batch obrada ne uključuje korelacione ID-jeve za mapiranje izlaza nazad na ulazne zahteve.
- B) Asinhroni model ne može da izvrši alate usred zahteva i vrati rezultate da bi Claude nastavio analizu. **[CORRECT]**
- C) Batch API ne podržava definicije alata u parametrima zahteva.
- D) Latencija batch obrade do 24 sata previše je spora za feedback na pull request, iako bi radni tok inače funkcionisao.
**Zašto B:** „Fire-and-forget“ asinhroni model Batch API-ja nema mehanizam da presretne poziv alata tokom zahteva, izvrši alat i vrati rezultate da bi Claude nastavio analizu. To je fundamentalno nekompatibilno sa iterativnim radnim tokovima poziva alata koji zahtevaju više rundi zahtev/odgovor alata unutar jedne logičke interakcije.

## Pitanje 19 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaš CI/CD sistem pokreće tri analize bazirane na Claude-u: (1) brze provere stila na svakom PR-u koje blokiraju merge do završetka, (2) sveobuhvatne nedeljne bezbednosne revizije celog codebase-a, i (3) noćno generisanje test slučajeva za nedavno izmenjene module. Message Batches API nudi 50% uštede, ali obrada može trajati do 24 sata. Želite da optimizujete trošak API-ja uz održavanje prihvatljivog iskustva za programere. Koja kombinacija ispravno uparuje svaki zadatak sa API pristupom?

**Koja kombinacija je ispravna?**

- A) Koristiti Message Batches API za sva tri zadatka kako bi se maksimalno iskoristila ušteda od 50%, uz konfigurisanje pipeline-a da periodično proverava (poll) završetak batch-a.
- B) Koristiti sinhrone pozive za PR provere stila; koristiti Message Batches API za nedeljne bezbednosne revizije i noćno generisanje testova. **[CORRECT]**
- C) Koristiti sinhrone pozive za sva tri zadatka radi doslednih vremena odziva, oslanjajući se na prompt keširanje da smanji troškove u svim radnim opterećenjima.
- D) Koristiti sinhrone pozive za PR provere stila i noćno generisanje testova; koristiti Message Batches API samo za nedeljne bezbednosne revizije.
**Zašto B:** PR provere stila blokiraju programere i zahtevaju trenutne odgovore preko sinhronih poziva, dok su nedeljne bezbednosne revizije i noćno generisanje testova zakazani zadaci sa fleksibilnim rokovima koji mogu da tolerišu batch prozor do 24 sata — čime se ostvaruje 50% uštede za oba.

## Pitanje 20 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaši automatizovani pregledi pronalaze stvarne probleme, ali programeri javljaju da feedback nije primenljiv. Nalazi sadrže fraze poput „complex ticket routing logic“ ili „potential null pointer“ bez navođenja šta tačno treba promeniti. Kada dodate detaljna uputstva poput „always include concrete fix suggestions“, model i dalje proizvodi nedosledan izlaz — ponekad detaljan, ponekad neodređen. Koja tehnika prompting-a najpouzdanije proizvodi dosledno primenljiv feedback?

**Koja tehnika prompting-a je najpouzdanija?**

- A) Dalje precizirati uputstva sa eksplicitnijim zahtevima za svaki deo formata feedback-a (lokacija, problem, ozbiljnost, predložena ispravka).
- B) Proširiti kontekstni prozor da obuhvati više okolnog koda iz codebase-a, kako bi model imao dovoljno informacija da predloži konkretne ispravke.
- C) Implementirati pristup u dva prolaza, gde jedan prompt identifikuje probleme, a drugi generiše ispravke, što omogućava specijalizaciju.
- D) Dodati 3–4 few-shot primera koji prikazuju tačan zahtevani format: identifikovani problem, lokacija u kodu, konkretan predlog ispravke. **[CORRECT]**
**Zašto D:** Few-shot primeri su najefikasnija tehnika za postizanje doslednog formata izlaza kada sama uputstva daju promenljive rezultate. Pružanje 3–4 primera koji prikazuju tačno željenu strukturu (problem, lokacija, konkretna ispravka) daje modelu konkretan obrazac koji može da sledi, što je pouzdanije od apstraktnih uputstava.

## Pitanje 21 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaš CI pipeline uključuje dva režima pregleda koda bazirana na Claude-u: pre-merge-commit hook koji blokira merge PR-a do završetka, i „deep analysis“ koja se izvršava preko noći, periodično proverava završetak batch-a i objavljuje detaljne predloge na PR. Želite da smanjite trošak API-ja koristeći Message Batches API, koji nudi 50% uštede, ali zahteva periodično proveravanje (polling) i može trajati do 24 sata. Koji režim bi trebalo da koristi batch obradu?

**Koji režim bi trebalo da koristi batch obradu?**

- A) Samo pre-merge-commit hook.
- B) Samo deep analysis. **[CORRECT]**
- C) Oba režima.
- D) Nijedan režim.
**Zašto B:** Deep analysis je idealan kandidat za batch obradu jer se već izvršava preko noći, toleriše kašnjenje i koristi model periodičnog proveravanja pre objavljivanja rezultata — što odgovara asinhronoj arhitekturi Message Batches API-ja zasnovanoj na polling-u, uz ostvarivanje 50% uštede.

## Pitanje 22 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaš automatizovani pregled analizira komentare i docstring-ove. Trenutni prompt nalaže Claude-u da „check that comments are accurate and up to date“. Nalazi često označavaju prihvatljive obrasce (TODO markere, jednostavne opise), dok propuštaju komentare koji opisuju ponašanje koje kod više ne implementira. Koja izmena rešava osnovni uzrok ove nedosledne analize?

**Koja izmena rešava osnovni uzrok?**

- A) Uključiti `git blame` podatke kako bi Claude mogao da identifikuje komentare koji prethode nedavnim izmenama koda.
- B) Dodati few-shot primere obmanjujućih komentara kako bi se pomoglo modelu da prepozna slične obrasce u codebase-u.
- C) Filtrirati TODO, FIXME i deskriptivne obrasce komentara pre analize radi smanjenja šuma.
- D) Navesti eksplicitne kriterijume: označavati komentare samo kada ponašanje koje navode protivreči stvarnom ponašanju koda. **[CORRECT]**
**Zašto D:** Eksplicitni kriterijumi — označavanje komentara samo kada navedeno ponašanje protivreči stvarnom ponašanju koda — direktno rešavaju osnovni uzrok tako što neodređeno uputstvo zamenjuju preciznom definicijom toga šta predstavlja problem. Time se smanjuju i lažni pozitivi na prihvatljivim obrascima i propusti zaista obmanjujućih komentara.

## Pitanje 23 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaš automatizovani sistem za pregled koda pokazuje nedosledne ocene ozbiljnosti — slični problemi, poput rizika od null pokazivača, u nekim PR-ovima ocenjeni su kao „critical“, a u drugima samo kao „medium“. Ankete programera pokazuju rastuće nepoverenje — mnogi počinju da odbacuju nalaze bez čitanja, jer „half are wrong“. Kategorije sa visokom stopom lažnih pozitiva nagrizaju poverenje u tačne kategorije. Koji pristup najbolje vraća poverenje programera uz poboljšanje sistema?

**Koji pristup najbolje vraća poverenje programera?**

- A) Privremeno onemogućiti kategorije sa visokom stopom lažnih pozitiva (stil, imenovanje, dokumentacija) i zadržati samo kategorije visoke preciznosti dok se poboljšavaju promptovi. **[CORRECT]**
- B) Zadržati sve kategorije omogućene, ali prikazivati skor pouzdanosti uz svaki nalaz, kako bi programeri mogli da odluče šta da istraže.
- C) Zadržati sve kategorije omogućene i dodati few-shot primere kako bi se tokom narednih nekoliko nedelja poboljšala tačnost svake kategorije.
- D) Ujednačeno smanjiti strogost u svim kategorijama kako bi se snizila ukupna stopa lažnih pozitiva.
**Zašto A:** Privremeno onemogućavanje kategorija sa visokom stopom lažnih pozitiva odmah zaustavlja eroziju poverenja uklanjanjem bučnih nalaza zbog kojih programeri odbacuju sve, a istovremeno čuva vrednost kategorija visoke preciznosti, poput bezbednosti i ispravnosti. Takođe stvara prostor da se promptovi problematičnih kategorija poboljšaju pre ponovnog omogućavanja.

## Pitanje 24 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaš automatizovani pregled generiše predloge test slučajeva za svaki PR. Pregledajući PR koji dodaje praćenje završetka kursa, Claude predlaže 10 test slučajeva, ali feedback programera pokazuje da ih 6 duplira scenarije koje već pokriva postojeći skup testova. Koja izmena najefikasnije smanjuje duplirane predloge?

**Koja izmena je najefikasnija?**

- A) Uključiti postojeći test fajl u kontekst kako bi Claude mogao da utvrdi koji scenariji su već pokriveni. **[CORRECT]**
- B) Smanjiti traženi broj predloga sa 10 na 5, pod pretpostavkom da Claude prioritet daje najvrednijim slučajevima.
- C) Dodati uputstva koja usmeravaju Claude-a da se fokusira isključivo na granične slučajeve i uslove grešaka, umesto na uspešne putanje.
- D) Implementirati naknadnu obradu koja filtrira predloge čiji opisi odgovaraju postojećim nazivima testova preko preklapanja ključnih reči.
**Zašto A:** Uključivanje postojećeg test fajla rešava osnovni uzrok dupliranja: Claude može izbeći predlaganje već pokrivenih scenarija samo ako zna koji testovi već postoje. To daje Claude-u informacije potrebne da predloži istinski nove, vredne testove.

## Pitanje 25 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Nakon što početni automatizovani pregled identifikuje 12 nalaza, programer push-uje nove commit-e kojima rešava probleme. Ponovno pokretanje pregleda daje 8 nalaza, ali programeri javljaju da ih 5 duplira ranije komentare na kodu koji je u novim commit-ima već ispravljen. Koji je najefikasniji način da se eliminiše ovaj redundantni feedback uz očuvanje temeljnosti?

**Koji je najefikasniji način da se eliminiše redundantni feedback?**

- A) Pokretati pregled samo pri kreiranju PR-a i u finalnom stanju pre merge-a, preskačući commit-e između.
- B) Dodati filter u naknadnoj obradi koji, pre objavljivanja komentara, uklanja nalaze koji se po putanjama fajlova i opisima problema poklapaju sa prethodnim.
- C) Ograničiti obim pregleda na fajlove izmenjene u najnovijem push-u, isključujući fajlove iz ranijih commit-a.
- D) Uključiti prethodne nalaze pregleda u kontekst i naložiti Claude-u da prijavi samo nove ili još nerešene probleme. **[CORRECT]**
**Zašto D:** Uključivanje prethodnih nalaza pregleda u kontekst omogućava Claude-u da razlikuje nove probleme od onih već rešenih u nedavnim commit-ima. Time se čuva temeljnost pregleda, a Claude-ovo rezonovanje se koristi da se izbegne redundantni feedback na ispravljenom kodu.

## Pitanje 26 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaša pipeline skripta pokreće `claude "Analyze this pull request for security issues"`, ali posao visi u nedogled. Logovi pokazuju da Claude Code čeka interaktivni unos. Koji je ispravan pristup za pokretanje Claude Code-a u automatizovanom pipeline-u?

**Koji je ispravan pristup?**

- A) Dodati `--batch` fleg: `claude --batch "Analyze this pull request for security issues"`.
- B) Dodati `-p` fleg: `claude -p "Analyze this pull request for security issues"`. **[CORRECT]**
- C) Preusmeriti stdin sa `/dev/null`: `claude "Analyze this pull request for security issues" < /dev/null`.
- D) Postaviti promenljivu okruženja `CLAUDE_HEADLESS=true` pre pokretanja komande.
**Zašto B:** Fleg `-p` (ili `--print`) je dokumentovani način da se Claude Code pokrene neinteraktivno. Obrađuje prompt, ispisuje rezultat na stdout i izlazi bez čekanja na korisnički unos — idealno za CI/CD pipeline-ove.

## Pitanje 27 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Pull request menja 14 fajlova u modulu za praćenje zaliha. Pregled u jednom prolazu, koji analizira sve fajlove zajedno, daje nedosledne rezultate: detaljan feedback za neke fajlove, a površne komentare za druge, propuštene očigledne bagove i protivrečan feedback (obrazac se označi u jednom fajlu, ali se identičan kod odobri u drugom fajlu istog PR-a). Kako bi trebalo da restrukturirate pregled?

**Kako bi trebalo da restrukturirate pregled?**

- A) Pokrenuti tri nezavisna prolaza pregleda celog PR-a i označiti samo probleme koji se pojavljuju u najmanje dva od tri pokretanja.
- B) Podeliti na fokusirane prolaze: pregledati svaki fajl pojedinačno za lokalne probleme, zatim pokrenuti zaseban prolaz orijentisan na integraciju radi ispitivanja tokova podataka između fajlova. **[CORRECT]**
- C) Zahtevati od programera da velike PR-ove podele na manje celine od 3–4 fajla pre pokretanja automatizovanog pregleda.
- D) Preći na veći model sa većim kontekstnim prozorom kako bi mogao da posveti dovoljno pažnje svim 14 fajlova u jednom prolazu.
**Zašto B:** Fokusirani prolazi po fajlu rešavaju osnovni uzrok — razvodnjavanje pažnje — obezbeđujući doslednu dubinu i pouzdanu detekciju lokalnih problema. Zaseban prolaz orijentisan na integraciju zatim pokriva pitanja koja se protežu kroz više fajlova, poput interakcija zavisnosti i toka podataka.

## Pitanje 28 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaš automatizovani pregled koda u proseku daje 15 nalaza po pull request-u, a programeri prijavljuju stopu lažnih pozitiva od 40%. Usko grlo je vreme istraživanja: programeri moraju da kliknu na svaki nalaz i pročitaju Claude-ovo obrazloženje pre nego što odluče da li da ga isprave ili odbace. Vaš CLAUDE.md već sadrži sveobuhvatna pravila za prihvatljive obrasce, a zainteresovane strane su odbacile svaki pristup koji filtrira nalaze pre nego što ih programeri vide. Koja izmena najbolje rešava problem vremena istraživanja?

**Koja izmena najbolje rešava problem vremena istraživanja?**

- A) Zahtevati od Claude-a da uključi svoje obrazloženje i procenu pouzdanosti direktno u svaki nalaz. **[CORRECT]**
- B) Dodati naknadni procesor koji analizira obrasce nalaza i automatski potiskuje one koji odgovaraju istorijskim potpisima lažnih pozitiva.
- C) Kategorizovati nalaze kao „blocking issues“ naspram „suggestions“, sa različitim zahtevima pregleda po nivou.
- D) Konfigurisati Claude da prikazuje samo nalaze visoke pouzdanosti, filtrirajući nesigurne oznake pre nego što ih programeri vide.
**Zašto A:** Uključivanje obrazloženja i pouzdanosti direktno u svaki nalaz smanjuje vreme istraživanja jer omogućava programerima brzu trijažu bez otvaranja svakog nalaza. Zadovoljava ograničenje „bez filtriranja“ jer svi nalazi ostaju vidljivi, a odlučivanje programera se ubrzava.

## Pitanje 29 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Analiza vašeg automatizovanog pregleda koda pokazuje velike razlike u stopama lažnih pozitiva po kategorijama nalaza: nalazi o bezbednosti/ispravnosti imaju 8% lažnih pozitiva, nalazi o performansama 18%, nalazi o stilu/imenovanju 52%, a nalazi o dokumentaciji 48%. Ankete programera pokazuju rastuće nepoverenje — mnogi počinju da odbacuju nalaze i bez čitanja jer je „pola pogrešno“. Kategorije sa visokom stopom lažnih pozitiva nagrizaju poverenje i u tačne kategorije. Koji pristup najbolje vraća poverenje programera uz poboljšanje sistema?

**Koji pristup najbolje vraća poverenje programera?**

- A) Privremeno onemogućiti kategorije sa visokom stopom lažnih pozitiva (stil, imenovanje, dokumentacija) i zadržati samo kategorije visoke preciznosti dok se poboljšavaju promptovi. **[CORRECT]**
- B) Zadržati sve kategorije uključene, ali uz svaki nalaz prikazivati skor pouzdanosti kako bi programeri mogli da odluče šta da istraže.
- C) Zadržati sve kategorije uključene i dodati few-shot primere za poboljšanje tačnosti svake kategorije tokom narednih nekoliko nedelja.
- D) Ujednačeno smanjiti strogost u svim kategorijama kako bi se ukupna stopa lažnih pozitiva snizila.
**Zašto A:** Privremeno onemogućavanje kategorija sa visokom stopom lažnih pozitiva odmah zaustavlja eroziju poverenja jer uklanja bučne nalaze zbog kojih programeri odbacuju sve, a pritom čuva vrednost kategorija visoke preciznosti poput bezbednosti i ispravnosti. Takođe stvara prostor da se promptovi za problematične kategorije poboljšaju pre nego što se one ponovo uključe.

## Pitanje 30 (Scenario: Claude Code za kontinuiranu integraciju)

**Situacija:** Vaš tim želi da smanji troškove API-ja za automatizovanu analizu. Sinhroni Claude pozivi trenutno podržavaju dva radna toka: (1) blokirajuću pre-merge proveru koja mora da se završi pre nego što programeri mogu da urade merge, i (2) izveštaj o tehničkom dugu koji se generiše preko noći za pregled sledećeg jutra. Vaš menadžer predlaže prebacivanje oba na Message Batches API radi uštede od 50%. Kako bi trebalo da procenite ovaj predlog?

**Kako bi trebalo da procenite ovaj predlog?**

- A) Prebaciti oba na batch obradu, uz fallback na sinhrone pozive ako batch-evi predugo traju.
- B) Prebaciti oba radna toka na batch obradu uz polling statusa radi provere završetka.
- C) Koristiti batch obradu samo za izveštaje o tehničkom dugu; zadržati sinhrone pozive za pre-merge provere. **[CORRECT]**
- D) Zadržati sinhrone pozive za oba radna toka kako bi se izbegli problemi sa redosledom batch rezultata.
**Zašto C:** Obrada preko Message Batches API-ja može da traje do 24 sata bez SLA za latenciju, što je prihvatljivo za noćne izveštaje o tehničkom dugu, ali neprihvatljivo za blokirajuće pre-merge provere gde programeri čekaju. Time se svaki radni tok uparuje sa odgovarajućim API-jem na osnovu zahteva za latencijom.

## Scenario: Generisanje koda sa Claude Code

## Pitanje 31 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Zatražili ste od Claude Code-a da implementira funkciju koja transformiše API odgovore u interni normalizovani format. Posle dve iteracije, struktura izlaza i dalje ne odgovara očekivanjima — neka polja su drugačije ugnežđena, a vremenske oznake su pogrešno formatirane. Zahteve ste opisali proznim tekstom, ali ih Claude svaki put drugačije tumači.

**Koji pristup je najefikasniji za sledeću iteraciju?**

- A) Napišite JSON šemu koja opisuje očekivanu strukturu izlaza i validirajte Claude-ov izlaz prema njoj posle svake iteracije.
- B) Dajte 2–3 konkretna primera ulaz-izlaz koji prikazuju očekivanu transformaciju za reprezentativne API odgovore. **[CORRECT]**
- C) Prepišite zahteve sa više tehničke preciznosti, navodeći tačna mapiranja polja, pravila ugnežđivanja i formatne stringove vremenskih oznaka.
- D) Zamolite Claude-a da objasni svoje trenutno razumevanje zahteva kako biste utvrdili gde se tumačenja razilaze.
**Zašto B:** Konkretni primeri ulaz-izlaz uklanjaju dvosmislenost svojstvenu proznim opisima tako što Claude-u prikazuju tačne očekivane rezultate transformacije. Time se direktno rešava osnovni uzrok — pogrešno tumačenje tekstualnih zahteva — pružanjem nedvosmislenih obrazaca za ugnežđivanje polja i formatiranje vremenskih oznaka.

## Pitanje 32 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Potrebno je da dodate Slack kao novi kanal za obaveštenja. Postojeći kod ima jasne, ustanovljene obrasce za email, SMS i push kanale. Međutim, Slack-ov API nudi fundamentalno različite pristupe integraciji — dolazne webhook-ove (jednostavni, jednosmerni), bot tokene (podržavaju potvrdu isporuke i programsku kontrolu) ili Slack Apps (dvosmerni događaji, zahteva odobrenje radnog prostora). Vaš zadatak glasi „dodaj Slack podršku“, bez preciziranja metode integracije i bez zahteva za naprednim funkcijama poput praćenja isporuke.

**Kako treba da pristupite ovom zadatku?**

- A) Počnite u režimu direktnog izvršavanja koristeći dolazne webhook-ove kako biste se uklopili u postojeći jednosmerni obrazac obaveštenja.
- B) Prebacite se u režim planiranja da biste istražili opcije integracije i arhitektonske implikacije, a zatim predstavite preporuku pre implementacije. **[CORRECT]**
- C) Počnite u režimu direktnog izvršavanja postavljanjem kostura klase Slack kanala koristeći postojeće obrasce, odlažući odluku o metodi integracije.
- D) Počnite u režimu direktnog izvršavanja koristeći pristup sa bot tokenom kako biste osigurali da je potvrda isporuke moguća.
**Zašto B:** Slack integracija ima više validnih pristupa sa značajno različitim arhitektonskim implikacijama, a zahtevi su dvosmisleni. Režim planiranja vam omogućava da procenite kompromise između webhook-ova, bot tokena i Slack Apps i da se usaglasite oko pristupa pre implementacije.

## Pitanje 33 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Vaš CLAUDE.md fajl je narastao na preko 400 linija i sadrži standarde kodiranja, konvencije testiranja, detaljnu kontrolnu listu za PR pregled, uputstva za deployment i procedure za migraciju baze podataka. Želite da Claude uvek prati standarde kodiranja i konvencije testiranja, ali da smernice za PR pregled, deploy i migracije primenjuje samo kada radi te zadatke.

**Koji pristup restrukturiranju je najefikasniji?**

- A) Premestite sve smernice u zasebne Skills fajlove organizovane po tipu radnog toka, ostavljajući samo kratak opis projekta u CLAUDE.md.
- B) Zadržite sve u CLAUDE.md ali koristite `@import` sintaksu da biste organizovali u zasebno održavane fajlove po kategorijama.
- C) Podelite CLAUDE.md na fajlove u `.claude/rules/` sa glob obrascima vezanim za putanju tako da se svako pravilo učitava samo za relevantne tipove fajlova.
- D) Zadržite univerzalne standarde u CLAUDE.md i kreirajte Skills za smernice specifične za radni tok (PR pregled, deploy, migracije) sa okidačkim ključnim rečima. **[CORRECT]**
**Zašto D:** Sadržaj CLAUDE.md se učitava u svakoj sesiji, čime se osigurava da standardi kodiranja i konvencije testiranja uvek važe, dok se Skills pozivaju po potrebi kada Claude detektuje okidačke ključne reči — idealno za smernice specifične za radni tok poput PR pregleda, deployment-a i migracija.

## Pitanje 34 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Dobili ste zadatak da restrukturirate monolitnu aplikaciju vašeg tima u mikroservise. To podrazumeva izmene u desetinama fajlova i zahteva odluke o granicama servisa i zavisnostima modula.

**Koji pristup treba da izaberete?**

- A) Prebacite se u režim planiranja da biste istražili kod, razumeli zavisnosti i osmislili pristup implementaciji pre nego što napravite izmene. **[CORRECT]**
- B) Počnite u režimu direktnog izvršavanja i pređite na planiranje tek kada tokom implementacije naiđete na neočekivanu složenost.
- C) Počnite u režimu direktnog izvršavanja i pravite inkrementalne izmene, puštajući da implementacija otkrije prirodne granice servisa.
- D) Koristite direktno izvršavanje sa detaljnim unapred datim uputstvima koja specificiraju strukturu svakog servisa.
**Zašto A:** Režim planiranja je prava strategija za složeno arhitektonsko restrukturiranje poput razdvajanja monolita: omogućava bezbedno istraživanje i informisane odluke o granicama pre nego što se obavežete na potencijalno skupe izmene u velikom broju fajlova.

## Pitanje 35 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Vaš tim je kreirao `/analyze-codebase` skill koji obavlja duboku analizu koda — skeniranje zavisnosti, izračunavanje pokrivenosti testovima i metrike kvaliteta koda. Nakon pokretanja komande, članovi tima prijavljuju da Claude postaje manje responzivan u sesiji i gubi kontekst originalnog zadatka.

**Kako ovo najefikasnije rešavate uz zadržavanje punih mogućnosti analize?**

- A) Dodajte `context: fork` u frontmatter skilla da biste analizu pokrenuli u izolovanom kontekstu podagenta. **[CORRECT]**
- B) Dodajte `model: haiku` u frontmatter da biste koristili brži, jeftiniji model za analizu.
- C) Podelite skill na tri manja skilla, od kojih svaki proizvodi manje izlaza.
- D) Dodajte u skill uputstva da sažme sve rezultate u kratak rezime pre nego što ih prikaže.
**Zašto A:** `context: fork` pokreće analizu u izolovanom kontekstu podagenta, tako da veliki izlaz ne zagađuje kontekstni prozor glavne sesije i Claude ne gubi iz vida originalni zadatak. Time se čuva puna sposobnost analize, a glavna sesija ostaje responzivna.

## Pitanje 36 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Vaš tim koristi `/commit` skill u `.claude/skills/commit/SKILL.md`. Programer želi da ga prilagodi svom ličnom radnom toku (drugačiji format commit poruka, dodatne provere), a da to ne utiče na kolege iz tima.

**Šta preporučujete?**

- A) Kreirajte ličnu verziju u `~/.claude/skills/` sa drugačijim imenom, npr. `/my-commit`.
- B) Dodajte uslovnu logiku na osnovu korisničkog imena u frontmatter projektnog skilla.
- C) Kreirajte ličnu verziju na `~/.claude/skills/commit/SKILL.md` sa istim imenom. **[CORRECT]**
- D) Postavite `override: true` u frontmatter ličnog skilla da biste mu dali prioritet nad projektnom verzijom.
**Zašto C:** Lični skillovi imaju prednost nad projektnim skillovima istog imena. Lični skill na `~/.claude/skills/commit/SKILL.md` nadjačaće timski projektni skill, pa programer može da prilagodi svoj radni tok, a da zadrži poznato ime komande `/commit` za ličnu upotrebu. Ovaj pristup je bolji od opcije A jer čuva originalno ime komande — poboljšava programerov radni tok, a ne utiče na kolege iz tima.

## Pitanje 37 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Vaš tim koristi Claude Code mesecima. Tri programera su nedavno prijavila da Claude prati smernicu „uvek uključi sveobuhvatno rukovanje greškama“, ali četvrti programer, koji se tek pridružio, kaže da je Claude ne prati. Sva četvorica rade u istom repozitorijumu i imaju ažuran kod.

**Šta je najverovatniji uzrok i rešenje?**

- A) Smernica se nalazi u korisničkim `~/.claude/CLAUDE.md` fajlovima originalnih programera, a ne u projektnom `.claude/CLAUDE.md`. Premestite uputstvo u fajl na nivou projekta tako da ga svi članovi tima dobiju. **[CORRECT]**
- B) `~/.claude/CLAUDE.md` novog programera sadrži konfliktna uputstva koja nadjačavaju projektna podešavanja; on treba da obriše konfliktni odeljak.
- C) Claude Code vremenom uči preferencije po korisniku; novi programer mora da ponavlja zahtev dok ga Claude ne „zapamti“.
- D) Claude Code kešira CLAUDE.md posle prvog čitanja; originalni programeri koriste keširane verzije. Svi treba da obrišu Claude Code keš.
**Zašto A:** Ako je smernica dodata samo u korisničke konfiguracije originalnih programera, a ne u `.claude/CLAUDE.md` na nivou projekta, novi članovi tima je neće dobiti. Premeštanje u konfiguraciju na nivou projekta osigurava da svi trenutni i budući članovi tima automatski dobiju smernicu.

## Pitanje 38 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Otkrivate da uključivanje 2–3 potpuna primera implementacije endpointa kao konteksta značajno poboljšava konzistentnost pri generisanju novih API endpointa. Međutim, ovaj kontekst je koristan samo pri kreiranju novih endpointa — ne i pri debagovanju, pregledu koda ili drugom radu u API direktorijumu.

**Koji pristup konfiguraciji je najefikasniji?**

- A) Dodajte primere endpointa i dokumentaciju obrazaca u projektni CLAUDE.md tako da su uvek dostupni.
- B) Ručno referencirajte primere endpointa u svakom zahtevu za generisanje tako što ćete kopirati kod u prompt.
- C) Konfigurišite pravila specifična za putanju u `.claude/rules/api/` koja uključuju primere endpointa i aktiviraju se pri radu u API direktorijumu.
- D) Kreirajte skill koji referencira primere endpointa i sadrži uputstva za praćenje obrazaca, a poziva se po potrebi preko slash komande. **[CORRECT]**
**Zašto D:** Skill koji se poziva po potrebi učitava kontekst primera samo pri generisanju novih endpointa, a ne tokom nepovezanih zadataka poput debagovanja ili pregleda. Tako glavni kontekst ostaje čist, a visokokvalitetno generisanje ostaje dostupno kada je potrebno.

## Pitanje 39 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Vaš tim je kreirao `/migration` skill koji generiše fajlove za migraciju baze podataka. Ime migracije prima preko `$ARGUMENTS`. U produkciji uočavate tri problema: (1) programeri često pokreću skill bez argumenata, što dovodi do loše imenovanih fajlova, (2) skill ponekad koristi detalje šeme baze podataka iz nepovezanih ranijih razgovora, i (3) jedan programer je slučajno pokrenuo destruktivno čišćenje testova dok je skill imao širok pristup alatima.

**Koji pristup konfiguraciji rešava sva tri problema?**

- A) Koristite pozicione parametre `$1` i `$2` umesto `$ARGUMENTS` da biste nametnuli specifične ulaze, uključite eksplicitne reference na fajl šeme preko `@` sintakse za kontrolu konteksta, i dodajte opis u frontmatter sa upozorenjem o destruktivnim operacijama.
- B) Dodajte `argument-hint` u frontmatter da biste zatražili obavezne parametre, koristite `context: fork` da biste izolovali izvršavanje, i ograničite `allowed-tools` na operacije upisa u fajlove. **[CORRECT]**
- C) Podelite na `/migration-create` i `/migration-apply` skillove, dodajte uputstva za validaciju koja traže ime migracije ako nedostaje, i koristite različite opsege `allowed-tools` za svaki.
- D) Dodajte uputstva za validaciju u SKILL.md skilla da osigurate da je `$ARGUMENTS` validno ime, dodajte promptove da se ignoriše kontekst prethodnog razgovora, i navedite zabranjene operacije koje treba izbegavati.
**Zašto B:** Ovde tri zasebne konfiguracione mogućnosti rešavaju po jedan problem: `argument-hint` poboljšava unos argumenata i smanjuje slučajeve izostavljenih argumenata, `context: fork` sprečava curenje konteksta iz ranijih razgovora, a `allowed-tools` ograničava skill na bezbedne operacije upisa u fajlove, čime sprečava destruktivne radnje.

## Pitanje 40 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Vaš kod sadrži oblasti sa različitim konvencijama kodiranja: React komponente koriste funkcionalni stil sa hook-ovima, API handleri koriste async/await sa specifičnim rukovanjem greškama, a modeli baze podataka prate repository obrazac. Test fajlovi su razmešteni po celom kodu, pored koda koji testiraju (npr. `Button.test.tsx` pored `Button.tsx`), a vi želite da svi testovi prate iste konvencije bez obzira na lokaciju.

**Koji je najpodržaniji način da osigurate da Claude automatski primenjuje ispravne konvencije pri generisanju koda?**

- A) Stavite sve konvencije u korenski CLAUDE.md pod naslovima za svaku oblast i oslonite se na to da Claude zaključi koji odeljak važi.
- B) Kreirajte skillove u `.claude/skills/` za svaki tip koda, ugrađujući konvencije u svaki SKILL.md.
- C) Postavite zaseban CLAUDE.md fajl u svaki poddirektorijum koji sadrži konvencije za tu oblast.
- D) Kreirajte fajlove pravila u `.claude/rules/` sa YAML frontmatter-om koji specificira glob obrasce za uslovno primenjivanje konvencija na osnovu putanja fajlova. **[CORRECT]**
**Zašto D:** Fajlovi u `.claude/rules/` sa YAML frontmatter-om i glob obrascima (npr. `**/*.test.tsx`, `src/api/**/*.ts`) omogućavaju determinističku primenu konvencija na osnovu putanje, bez obzira na strukturu direktorijuma. Ovo je najpodržaniji pristup za obrasce koji se protežu kroz ceo kod, poput test fajlova razmeštenih svuda.

## Pitanje 41 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Želite da kreirate prilagođenu slash komandu `/review` koja pokreće standardnu kontrolnu listu za pregled koda vašeg tima. Treba da bude dostupna svakom programeru kada klonira ili ažurira repozitorijum.

**Gde treba da kreirate fajl komande?**

- A) U `~/.claude/commands/` u home direktorijumu svakog programera.
- B) U projektnom repozitorijumu u `.claude/commands/`. **[CORRECT]**
- C) U `.claude/config.json` kao niz komandi.
- D) U korenskom projektnom CLAUDE.md.
**Zašto B:** Stavljanje prilagođenih slash komandi u `.claude/commands/` unutar projektnog repozitorijuma osigurava da su pod kontrolom verzija i automatski dostupne svakom programeru koji klonira ili ažurira repozitorijum. Ovo je predviđena lokacija za prilagođene komande na nivou projekta u Claude Code.

## Pitanje 42 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** CLAUDE.md vašeg tima narastao je na preko 500 linija u kojima se mešaju TypeScript konvencije, smernice za testiranje, API obrasci i procedure za deployment. Programerima je teško da pronađu i ažuriraju prave odeljke.

**Koji pristup Claude Code podržava za organizovanje uputstava na nivou projekta u fokusirane tematske module?**

- A) Definišite `.claude/config.yaml` koji mapira obrasce fajlova na specifične odeljke unutar CLAUDE.md.
- B) Kreirajte zasebne Markdown fajlove u `.claude/rules/`, od kojih svaki pokriva jednu temu (npr. `testing.md`, `api-conventions.md`). **[CORRECT]**
- C) Podelite uputstva u README.md fajlove u relevantnim poddirektorijumima koje Claude automatski učitava kao uputstva.
- D) Kreirajte više fajlova pod imenom CLAUDE.md na različitim nivoima stabla direktorijuma, od kojih svaki nadjačava uputstva roditelja.
**Zašto B:** Claude Code podržava `.claude/rules/` direktorijum gde možete kreirati zasebne Markdown fajlove za tematske smernice (npr. `testing.md`, `api-conventions.md`), omogućavajući timovima da organizuju velike skupove uputstava u fokusirane, lako održive module.

## Pitanje 43 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Kreirate prilagođeni skill `/explore-alternatives` koji vaš tim koristi za brainstorming i procenu pristupa implementaciji pre nego što se odluči za jedan. Programeri prijavljuju da su nakon pokretanja skilla naredni Claudeovi odgovori pod uticajem diskusije o alternativama — ponekad referenciraju odbačene pristupe ili zadržavaju kontekst istraživanja koji ometa stvarnu implementaciju.

**Kako treba najefikasnije da konfigurišete ovaj skill?**

- A) Koristite `!` prefiks u skillu da biste pokrenuli logiku istraživanja kao bash podproces.
- B) Dodajte `context: fork` u frontmatter skilla. **[CORRECT]**
- C) Podelite na dva skilla — `/explore-start` i `/explore-end` — da biste označili granice kada kontekst istraživanja treba odbaciti.
- D) Kreirajte skill u `~/.claude/skills/` umesto u `.claude/skills/`.
**Zašto B:** `context: fork` pokreće skill u izolovanom kontekstu subagenta tako da diskusije o istraživanju ne zagađuju istoriju glavnog razgovora. Time se sprečava da odbačeni pristupi i kontekst brainstorming-a utiču na naredni rad na implementaciji.

## Pitanje 44 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Vaš tim želi da doda GitHub MCP server za pretragu PR-ova i proveru statusa CI-ja preko Claude Code. Svaki od šest programera ima svoj lični GitHub access token. Želite konzistentne alate u celom timu bez urezivanja kredencijala u kontrolu verzija.

**Koji pristup konfiguraciji je najefikasniji?**

- A) Neka svaki programer doda server u korisničkom opsegu preko `claude mcp add --scope user`.
- B) Kreirajte MCP server-omotač koji čita tokene iz `.env` fajla i proksira GitHub API pozive, a zatim dodajte omotač u projektni `.mcp.json`.
- C) Dodajte server u projektni `.mcp.json` koristeći zamenu promenljivih okruženja (`${GITHUB_TOKEN}`) za autentifikaciju i dokumentujte potrebnu promenljivu okruženja u projektnom README. **[CORRECT]**
- D) Konfigurišite server u projektnom opsegu sa placeholder tokenom, a zatim recite programerima da ga nadjačaju u svojoj lokalnoj konfiguraciji.
**Zašto C:** Projektni `.mcp.json` sa zamenom promenljivih okruženja je idiomatski: pruža jedinstven, verzionisani izvor istine za MCP konfiguraciju, dok svakom programeru dozvoljava da dostavi kredencijale preko promenljivih okruženja. Dokumentovanje promenljive olakšava uvođenje (onboarding) bez urezivanja tajni.

## Pitanje 45 (Scenario: Generisanje koda sa Claude Code)

**Situacija:** Dodajete omotače za rukovanje greškama oko spoljnih API poziva u kodu od 120 fajlova. Posao ima tri faze: (1) otkrivanje svih mesta poziva i obrazaca, (2) kolaborativno osmišljavanje pristupa rukovanju greškama, i (3) dosledna implementacija omotača. U Fazi 1, Claude generiše veliki izlaz koji nabraja stotine mesta poziva sa kontekstom, brzo popunjavajući prozor konteksta pre nego što se otkrivanje završi.

**Koji pristup je najefikasniji za završetak zadatka uz održavanje konzistentnosti implementacije?**

- A) Koristite Explore subagenta za Fazu 1 da biste izolovali opširni izlaz otkrivanja i vratili rezime, a zatim nastavite Faze 2–3 u glavnom razgovoru. **[CORRECT]**
- B) Obavite sve faze u glavnom razgovoru, periodično koristeći `/compact` da biste smanjili upotrebu konteksta dok prolazite kroz fajlove.
- C) Prebacite se u headless režim sa `--continue`, prosleđujući eksplicitne rezimee konteksta između batch poziva da biste održali kontinuitet.
- D) Definišite obrazac rukovanja greškama u CLAUDE.md, a zatim obrađujte fajlove u grupama kroz više sesija, oslanjajući se na deljeni memorijski fajl radi konzistentnosti.
**Zašto A:** Explore subagent izoluje opširni izlaz otkrivanja u zaseban kontekst i vraća samo sažet rezime u glavni razgovor. Time se čuva prozor glavnog konteksta za faze kolaborativnog osmišljavanja i dosledne implementacije gde je zadržani kontekst najvredniji.

## Scenario: Customer Support Agent

## Pitanje 46 (Scenario: Customer Support Agent)

**Situacija:** Tokom testiranja primećujete da agent često poziva `get_customer` kada korisnici pitaju za status porudžbine, iako bi `lookup_order` bio prikladniji. Šta prvo treba da proverite da biste rešili ovaj problem?

**Šta prvo treba da proverite?**

- A) Implementirajte klasifikator za predobradu koji detektuje zahteve vezane za porudžbine i usmerava ih direktno na `lookup_order`.
- B) Smanjite broj alata dostupnih agentu da biste pojednostavili izbor.
- C) Dodajte few-shot primere u sistemski prompt koji pokrivaju sve moguće obrasce zahteva za porudžbine da biste poboljšali izbor alata.
- D) Proverite opise alata da biste se uverili da jasno razdvajaju svrhu svakog alata. **[CORRECT]**
**Zašto D:** Opisi alata su primarni ulaz koji model koristi da odluči koji alat da pozove. Kada agent dosledno bira pogrešan alat, prvi dijagnostički korak je da se proveri da li opisi alata jasno razdvajaju svrhu i granice upotrebe svakog alata.

## Pitanje 47 (Scenario: Customer Support Agent)

**Situacija:** Vaš agent obrađuje zahteve sa jednim problemom sa 94% tačnosti (npr. „I need a refund for order #1234”). Ali kada korisnici u jednoj poruci navedu više problema (npr. „I need a refund for order #1234 and also want to update the shipping address for order #5678”), tačnost izbora alata pada na 58%. Agent obično rešava samo jedan problem ili meša parametre između zahteva. Koji pristup najefikasnije poboljšava pouzdanost za zahteve sa više problema?

**Koji pristup je najefikasniji?**

- A) Implementirajte sloj za predobradu koji koristi poseban poziv modela da razloži poruke sa više problema na zasebne zahteve, obradi svaki nezavisno i spoji rezultate.
- B) Spojite povezane alate u manji broj univerzalnih alata.
- C) Dodajte few-shot primere u prompt koji demonstriraju ispravno rezonovanje i redosled pozivanja alata za zahteve sa više problema. **[CORRECT]**
- D) Implementirajte validaciju odgovora koja detektuje nepotpune odgovore i automatski ponovo prompt-uje agenta da reši propuštene probleme.
**Zašto C:** Few-shot primeri koji demonstriraju ispravno rezonovanje i redosled pozivanja alata za zahteve sa više problema su najefikasniji jer agent već dobro rešava pojedinačne probleme — ono što mu treba jeste smernica o obrascu za razlaganje i usmeravanje više problema i držanje parametara razdvojenim.

## Pitanje 48 (Scenario: Customer Support Agent)

**Situacija:** Produkcioni logovi pokazuju da za jednostavne zahteve poput „refund for order #1234” vaš agent rešava problem u 3–4 poziva alata sa 91% uspeha. Ali za složene zahteve poput „I was billed twice, my discount didn’t apply, and I want to cancel” agent u proseku napravi 12+ poziva alata sa samo 54% uspeha — često istražuje probleme sekvencijalno i za svaki iznova preuzima redundantne podatke o korisniku. Koja izmena najefikasnije poboljšava obradu složenih zahteva?

**Koja izmena je najefikasnija?**

- A) Dodajte eksplicitne kontrolne tačke verifikacije između faza, zahtevajući da agent zabeleži napredak nakon rešavanja svakog problema pre prelaska na sledeći.
- B) Smanjite broj alata spajanjem `get_customer`, `lookup_order` i alata vezanih za naplatu u jedan `investigate_issue` alat.
- C) Razložite zahtev na zasebne probleme, zatim istražite svaki paralelno koristeći deljeni kontekst o korisniku pre sintetisanja konačnog rešenja. **[CORRECT]**
- D) Dodajte few-shot primere u sistemski prompt koji demonstriraju idealne sekvence poziva alata za razne višeslojne scenarije naplate.
**Zašto C:** Razlaganje na zasebne probleme i paralelno istraživanje sa deljenim kontekstom o korisniku rešava oba ključna problema: eliminiše redundantno preuzimanje podataka ponovnim korišćenjem deljenog konteksta između problema i smanjuje ukupan broj petlji poziva alata paralelizovanjem istraživanja pre sintetisanja jedinstvenog rešenja.

## Pitanje 49 (Scenario: Customer Support Agent)

**Situacija:** Vaš agent postiže 55% rešavanja pri prvom kontaktu, znatno ispod cilja od 80%. Logovi pokazuju da eskalira jednostavne slučajeve (standardne zamene oštećene robe sa fotografskim dokazom), dok pokušava da autonomno rešava složene situacije koje zahtevaju izuzetke od politike. Koji je najefikasniji način da se poboljša kalibracija eskalacije?

**Koji je najefikasniji način da se poboljša kalibracija eskalacije?**

- A) Zahtevajte da agent pre svakog odgovora sam oceni pouzdanost na skali 1–10, uz automatsko usmeravanje ka ljudima kada pouzdanost padne ispod praga.
- B) Postavite poseban klasifikatorski model treniran na istorijskim tiketima da predvidi koje zahteve treba eskalirati pre nego što glavni agent počne obradu.
- C) Dodajte eksplicitne kriterijume eskalacije u sistemski prompt sa few-shot primerima koji pokazuju kada treba eskalirati, a kada rešavati autonomno. **[CORRECT]**
- D) Implementirajte analizu sentimenta koja određuje nivo frustracije korisnika i automatski eskalira kada se pređe prag negativnog sentimenta.
**Zašto C:** Eksplicitni kriterijumi eskalacije sa few-shot primerima direktno rešavaju osnovni uzrok — nejasne granice odlučivanja između jednostavnih i složenih slučajeva. To je najproporcionalnija i najefikasnija prva intervencija, koja agenta uči kada da eskalira, a kada da rešava autonomno, bez dodatne infrastrukture.

## Pitanje 50 (Scenario: Customer Support Agent)

**Situacija:** Nakon pozivanja `get_customer` i `lookup_order`, agent ima sve dostupne sistemske podatke, ali se i dalje suočava sa neizvesnošću. Koja situacija je najopravdaniji okidač za pozivanje `escalate_to_human`?

**Koja situacija je najopravdanija za eskalaciju?**

- A) Korisnik želi da otkaže porudžbinu koja je poslata juče i stiže sutra. Agent treba da eskalira jer bi korisnik mogao da se predomisli nakon prijema paketa.
- B) Korisnik tvrdi da nije primio porudžbinu, ali praćenje pokazuje da je pre tri dana isporučena na njegovu adresu i preuzeta uz potpis. Agent treba da eskalira jer bi iznošenje protivrečnih dokaza moglo da naškodi odnosu sa korisnikom.
- C) Korisnik traži izjednačavanje cene sa konkurencijom. Vaše politike dozvoljavaju korekciju cene za pad cene na sopstvenom sajtu u roku od 14 dana, ali ne kažu ništa o cenama konkurencije. Agent treba da eskalira radi tumačenja politike. **[CORRECT]**
- D) Poruka korisnika sadrži i pitanje o naplati i povraćaj proizvoda. Agent treba da eskalira kako bi čovek koordinisao oba problema u jednoj interakciji.
**Zašto C:** Ovo je prava praznina u politici: pravila kompanije pokrivaju pad cena na sopstvenom sajtu, ali ne pominju izjednačavanje cene sa konkurencijom. Agent ne sme da izmišlja politiku i treba da eskalira radi ljudske procene o tome kako tumačiti ili proširiti postojeća pravila.

## Pitanje 51 (Scenario: Customer Support Agent)

**Situacija:** Produkcioni logovi pokazuju da u 12% slučajeva vaš agent preskače `get_customer` i poziva `lookup_order` direktno, koristeći samo ime koje je korisnik naveo, što ponekad dovodi do pogrešno identifikovanih naloga i pogrešnih povraćaja novca. Koja izmena najefikasnije rešava ovaj problem pouzdanosti?

**Koja izmena je najefikasnija?**

- A) Dodajte few-shot primere koji pokazuju da agent uvek prvo poziva `get_customer`, čak i kada korisnici sami navedu detalje porudžbine.
- B) Implementirajte klasifikator za usmeravanje koji analizira svaki zahtev i omogućava samo podskup alata prikladnih za taj tip zahteva.
- C) Dodajte programski preduslov koji blokira `lookup_order` i `process_refund` dok `get_customer` ne vrati verifikovani identifikator korisnika. **[CORRECT]**
- D) Pojačajte sistemski prompt navodeći da je verifikacija korisnika preko `get_customer` obavezna pre bilo kakvih operacija sa porudžbinama.
**Zašto C:** Programski preduslov daje determinističku garanciju da će zahtevani redosled biti ispoštovan. To je najefikasniji pristup jer eliminiše mogućnost preskakanja verifikacije, bez obzira na ponašanje LLM-a.

## Pitanje 52 (Scenario: Customer Support Agent)

**Situacija:** Produkcione metrike pokazuju da su pri rešavanju složenih sporova oko naplate ili povraćaja sa više porudžbina ocene zadovoljstva korisnika 15% niže nego za jednostavne slučajeve — čak i kada je rešenje tehnički ispravno. Analiza osnovnog uzroka pokazuje da agent pruža tačna rešenja, ali obrazloženje iznosi nedosledno: ponekad izostavi relevantne detalje politike, ponekad propusti informacije o vremenskom okviru ili sledeće korake. Konkretne praznine u kontekstu variraju od slučaja do slučaja. Želiš da poboljšaš kvalitet rešenja bez dodavanja ljudskog nadzora. Koji pristup je najefikasniji?

**Koji pristup je najefikasniji?**

- A) Dodaj fazu samokritike u kojoj agent procenjuje potpunost nacrta odgovora — proveravajući da li rešava problem korisnika, uključuje relevantan kontekst i predviđa naknadna pitanja. **[CORRECT]**
- B) Dodaj fazu potvrde u kojoj agent pita „Does this fully resolve your issue?” pre zatvaranja, dozvoljavajući korisnicima da zatraže dodatne informacije ako je potrebno.
- C) Unapredi model sa Haiku na Sonnet za složene slučajeve, usmeravajući na osnovu definisane metrike složenosti.
- D) Implementiraj few-shot primere u sistemskom promptu koji pokazuju potpuna objašnjenja za pet uobičajenih tipova složenih slučajeva, demonstrirajući kako uključiti kontekst politike, vremenske okvire i sledeće korake.
**Zašto A:** Faza samokritike (obrazac evaluator-optimizator) direktno rešava nedoslednu potpunost objašnjenja tako što primorava agenta da sopstveni nacrt proceni prema konkretnim kriterijumima — poput konteksta politike, vremenskih okvira i sledećih koraka — pre nego što ga prezentuje. Time se hvataju praznine specifične za konkretan slučaj, bez ljudskog nadzora.

## Pitanje 53 (Scenario: Customer Support Agent)

**Situacija:** Produkcione metrike pokazuju da tvoj agent u proseku ima 4+ API petlji po rešenju. Analiza otkriva da Claude često zahteva `get_customer` i `lookup_order` u zasebnim sekvencijalnim potezima čak i kada su oba potrebna na početku. Koji je najefikasniji način da se smanji broj petlji?

**Koji je najefikasniji način da se smanje petlje?**

- A) Implementiraj spekulativno izvršavanje koje automatski poziva verovatno potrebne alate paralelno sa bilo kojim zahtevanim alatom i vraća sve rezultate bez obzira na to šta je zatraženo.
- B) Povećaj `max_tokens` da daš Claude-u više prostora za planiranje i prirodno kombinovanje zahteva za alate.
- C) Kreiraj kompozitne alate poput `get_customer_with_orders` koji grupišu uobičajene kombinacije pretrage u pojedinačne pozive.
- D) Uputi Claude-a u promptu da grupiše zahteve za alate u jedan potez i vrati sve rezultate zajedno pre sledećeg API poziva. **[CORRECT]**
**Zašto D:** Promptovanje Claude-a da grupiše povezane zahteve za alate u jedan potez koristi njegovu nativnu sposobnost da zatraži više alata odjednom. To direktno rešava obrazac sekvencijalnih poziva uz minimalnu arhitektonsku izmenu.

## Pitanje 54 (Scenario: Customer Support Agent)

**Situacija:** Produkcioni logovi pokazuju obrazac: korisnici se pozivaju na konkretne iznose (npr. „the 15% discount I mentioned”), ali agent odgovara netačnim vrednostima. Analiza pokazuje da su ti detalji pomenuti pre 20+ poteza i svedeni na nejasne sažetke poput „promotional pricing was discussed”. Koja popravka je najefikasnija?

**Koja popravka je najefikasnija?**

- A) Povećaj prag sažimanja sa 70% na 85% tako da razgovori imaju više prostora pre nego što se sažimanje aktivira.
- B) Skladišti punu istoriju razgovora u eksternom skladištu i implementiraj preuzimanje kada agent detektuje reference poput „as I mentioned”.
- C) Ekstrahuj transakcione činjenice (iznose, datume, brojeve porudžbina) u trajni blok „case facts” koji se uključuje u svaki prompt, izvan sažete istorije. **[CORRECT]**
- D) Revidiraj prompt za sažimanje da eksplicitno doslovno sačuva sve brojeve, procente, datume i očekivanja koja je korisnik naveo.
**Zašto C:** Sažimanje inherentno gubi precizne detalje. Ekstrakcija transakcionih činjenica u strukturisani blok „case facts” izvan sažete istorije čuva kritične informacije, tako da su pouzdano dostupne u svakom promptu bez obzira na to koliko je poteza sažeto.

## Pitanje 55 (Scenario: Customer Support Agent)

**Situacija:** Tvoj alat `get_customer` pri pretrazi po imenu vraća sva poklapanja. Trenutno, kada postoji više rezultata, Claude bira korisnika sa najnovijom porudžbinom, ali produkcioni podaci pokazuju da se kod dvosmislenih poklapanja na taj način u 15% slučajeva bira pogrešan nalog. Kako to treba da rešiš?

**Kako to treba da rešiš?**

- A) Implementiraj sistem ocenjivanja pouzdanosti koji iznad 85% pouzdanosti deluje autonomno, a ispod praga traži pojašnjenje.
- B) Uputi Claude-a da zatraži dodatni identifikator (imejl, telefon ili broj porudžbine) kada `get_customer` vrati više poklapanja, pre preduzimanja bilo kakve radnje specifične za korisnika. **[CORRECT]**
- C) Izmeni `get_customer` da vraća samo jedno najverovatnije poklapanje na osnovu algoritma rangiranja, eliminišući dvosmislenost.
- D) Dodaj few-shot primere u prompt koji demonstriraju ispravno rezonovanje i redosled pozivanja alata za dvosmislena poklapanja.
**Zašto B:** Traženje dodatnog identifikatora od korisnika najpouzdaniji je način da se razreši dvosmislenost, jer jedino korisnik sa sigurnošću zna sopstveni identitet. Jedan dodatni potez u razgovoru mala je cena za eliminisanje stope greške od 15% nastale izborom pogrešnog naloga.

## Pitanje 56 (Scenario: Customer Support Agent)

**Situacija:** Produkcioni logovi pokazuju dosledan obrazac: kada korisnici uključe reč „account” u svoju poruku (npr. „I want to check my account for an order I made yesterday”), agent prvo poziva `get_customer` u 78% slučajeva. Kada korisnici formulišu slične zahteve bez „account” (npr. „I want to check an order I made yesterday”), prvo poziva `lookup_order` u 93% slučajeva. Opisi alata su jasni i nedvosmisleni. Koji je najverovatniji osnovni uzrok ove neusklađenosti?

**Koji je najverovatniji osnovni uzrok?**

- A) Sistemski prompt sadrži instrukcije osetljive na ključne reči koje usmeravaju ponašanje na osnovu termina poput „account”, stvarajući nenamerne obrasce izbora alata. **[CORRECT]**
- B) Bazna obuka modela stvara asocijacije između terminologije „account” i operacija vezanih za korisnike koje nadjačavaju opise alata.
- C) Modelu treba više podataka za obuku o porukama sa više koncepata i treba ga fino podesiti na primerima koji sadrže i terminologiju naloga i porudžbina.
- D) Opisima alata su potrebni dodatni negativni primeri koji preciziraju kada NE koristiti svaki alat da bi se sprečila ova zabuna izazvana ključnim rečima.
**Zašto A:** Sistematski obrazac vođen ključnim rečima (78% naspram 93%) snažno ukazuje na eksplicitnu logiku usmeravanja u sistemskom promptu koja reaguje na reč „account” i usmerava agenta ka alatima vezanim za korisnike. Pošto su opisi alata već jasni, neusklađenost upućuje na instrukcije na nivou prompta koje stvaraju nenamerno usmeravanje ponašanja.

## Pitanje 57 (Scenario: Customer Support Agent)

**Situacija:** Produkcioni logovi pokazuju da agent često poziva `get_customer` kada korisnici pitaju o porudžbinama (npr. „check my order #12345”) umesto da poziva `lookup_order`. Oba alata imaju minimalne opise („Gets customer information” / „Gets order details”) i prihvataju slične formate identifikatora. Koji je najefikasniji prvi korak za poboljšanje pouzdanosti izbora alata?

**Koji je najefikasniji prvi korak?**

- A) Implementiraj sloj za usmeravanje koji analizira korisnički unos pre svakog poteza i unapred bira ispravan alat na osnovu detektovanih ključnih reči i obrazaca ID-jeva.
- B) Spoji oba alata u jedan `lookup_entity` koji prihvata bilo koji identifikator i interno odlučuje koji bekend da upita.
- C) Dodaj few-shot primere u sistemski prompt koji demonstriraju ispravne obrasce izbora alata, sa 5–8 primera koji usmeravaju upite vezane za porudžbine na `lookup_order`.
- D) Proširi opis svakog alata tako da uključuje formate ulaza, primere upita, granične slučajeve i granice koje objašnjavaju kada ga koristiti naspram sličnih alata. **[CORRECT]**
**Zašto D:** Proširivanje opisa alata formatima ulaza, primerima upita, graničnim slučajevima i jasnim granicama direktno rešava osnovni uzrok — minimalne opise koji LLM-u ne daju dovoljno informacija da razlikuje slične alate. To je prvi korak koji traži malo truda, a ima veliki učinak, jer poboljšava primarni mehanizam kojim se LLM služi pri izboru alata.

## Pitanje 58 (Scenario: Customer Support Agent)

**Situacija:** Implementiraš petlju agenta za svog agenta podrške. Nakon svakog Claude API poziva, moraš odlučiti da li da nastaviš petlju (pokreneš zahtevane alate i ponovo pozoveš Claude-a) ili da zaustaviš (prezentuješ konačan odgovor korisniku). Šta određuje ovu odluku?

**Šta određuje ovu odluku?**

- A) Proveri polje `stop_reason` u Claude-ovom odgovoru — nastavi ako je `tool_use` a zaustavi ako je `end_turn`. **[CORRECT]**
- B) Parsiraj Claude-ov tekst tražeći fraze poput „I’m done” ili „Can I help with anything else?” — signali u prirodnom jeziku ukazuju na završetak zadatka.
- C) Postavi maksimalan broj iteracija (npr. 10 poziva) i zaustavi kada se dostigne, bez obzira na to da li Claude ukazuje da je potrebno više rada.
- D) Proveri da li odgovor sadrži tekstualni sadržaj asistenta — ako je Claude generisao objašnjavajući tekst, petlja treba da se prekine.
**Zašto A:** `stop_reason` je Claude-ov eksplicitni strukturisani signal za kontrolu petlje: `tool_use` ukazuje da Claude želi da pokrene alat i dobije rezultate nazad, dok `end_turn` ukazuje da je Claude završio svoj odgovor i da petlja treba da se okonča.

## Pitanje 59 (Scenario: Customer Support Agent)

**Situacija:** Produkcioni logovi pokazuju da agent pogrešno tumači izlaze tvojih MCP alata: Unix vremenske oznake iz `get_customer`, ISO 8601 datume iz `lookup_order` i numeričke statusne kodove (1=pending, 2=shipped). Neki alati su MCP serveri trećih strana koje ne možeš da menjaš. Koji pristup normalizaciji formata podataka je najodrživiji?

**Koji pristup je najodrživiji?**

- A) Koristi PostToolUse hook da presretneš izlaze alata i primeniš transformacije formatiranja pre nego što ih agent obradi. **[CORRECT]**
- B) Izmeni alate koje kontrolišeš da vraćaju formate čitljive ljudima i kreiraj omotače za alate trećih strana.
- C) Kreiraj `normalize_data` alat koji agent poziva nakon svakog preuzimanja podataka da transformiše vrednosti.
- D) Dodaj detaljnu dokumentaciju o formatima u sistemski prompt koja objašnjava konvencije podataka svakog alata.
**Zašto A:** PostToolUse hook pruža centralizovanu, determinističku tačku za presretanje i normalizaciju svih izlaza alata — uključujući podatke MCP servera trećih strana — pre nego što ih agent obradi. Održiviji je jer transformacije žive u kodu i primenjuju se jednoobrazno, umesto da se oslanjaju na tumačenje LLM-a.

## Pitanje 60 (Scenario: Customer Support Agent)

**Situacija:** Produkcioni logovi pokazuju da agent ponekad bira `get_customer` kada bi `lookup_order` bio prikladniji, naročito za dvosmislene upite poput „I need help with my recent purchase”. Odlučuješ da dodaš few-shot primere u sistemski prompt da bi poboljšao izbor alata. Koji pristup najefikasnije rešava problem?

**Koji pristup je najefikasniji?**

- A) Dodaj eksplicitne smernice „use when” i „don’t use when” u opis svakog alata koje pokrivaju dvosmislene slučajeve.
- B) Dodaj primere grupisane po alatu — sve `get_customer` scenarije zajedno, zatim sve `lookup_order` scenarije.
- C) Dodaj 4–6 primera usmerenih na dvosmislene scenarije, svaki sa obrazloženjem zašto je jedan alat izabran umesto drugih uverljivih alternativa. **[CORRECT]**
- D) Dodaj 10–15 primera jasnih, nedvosmislenih zahteva koji demonstriraju ispravan izbor alata za tipične scenarije za svaki alat.
**Zašto C:** Usmeravanje few-shot primera na konkretne dvosmislene scenarije u kojima se greške javljaju, uz eksplicitno obrazloženje zašto je jedan alat bolji od alternativa, uči model komparativnom procesu odlučivanja koji je potreban za granične slučajeve. To je efikasnije od generičkih primera ili deklarativnih pravila.

## Pitanje 61 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Tvoj alat `remove_team_member` koristi parametar `dry_run: boolean` za pregled posledica pre izvršavanja. Produkcioni monitoring pokazuje da agent zaobilazi korak pregleda tako što direktno poziva sa `dry_run=false`. Moraš da obezbediš da svakom uklanjanju prethodi pregled koji korisnik eksplicitno potvrdi.

**Koji je najpouzdaniji pristup?**

- A) Dodaj validaciju na serverskoj strani koja dozvoljava `dry_run=false` samo ako se poziv sa `dry_run=true` i identičnim parametrima dogodio u poslednjih 60 sekundi.
- B) Označi alat kao alat koji zahteva potvrdu i konfiguriši orkestracioni sloj da od korisnika traži odobrenje pre prosleđivanja bilo kog poziva označenim alatima.
- C) Dodaj detaljna uputstva i few-shot primere u opis alata koji zahtevaju da agent uvek prvo pozove sa `dry_run=true` i sačeka korisnikovu potvrdu pre ponovnog poziva.
- D) Zameni sa dva alata: `preview_remove_member` vraća detalje o posledicama i jednokratni potvrdni token; `execute_remove_member` zahteva taj token, vezujući izvršavanje za pregled. **[CORRECT]**
**Zašto D:** Pristup sa dva alata i vezivanjem tokena čini arhitektonski nemogućim izvršavanje bez prethodnog pregleda — alat za izvršavanje doslovno zahteva token koji jedino alat za pregled može da generiše. Ovo je jedini pristup koji nameće ograničenje na nivou koda umesto da se oslanja na to da će LLM poštovati uputstva (C), na vremenske heuristike (A) ili na orkestracionu infrastrukturu (B).

## Pitanje 62 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Produkcioni monitoring pokazuje da tvoj alat `search_catalog` ne uspe u 12% slučajeva: 8% su mrežni timeout-ovi koji uspeju kada se ponove, a 4% su sintaksne greške upita koje nikada ne uspeju bez obzira na ponavljanja. Trenutno se oba tipa grešaka vraćaju identično, što izaziva uzaludna ponavljanja.

**Kako bi trebalo da izmeniš obradu grešaka u alatu?**

- A) Dodaj few-shot primere u sistemski prompt koji pokazuju kako da se mrežne greške razlikuju od sintaksnih grešaka.
- B) Primeni logiku ponavljanja sa eksponencijalnim odlaganjem (exponential backoff) uniformno na sve greške.
- C) Implementiraj automatsko ponavljanje sa odlaganjem (backoff) za mrežne timeout-ove unutar samog alata; sintaksne greške vrati odmah, sa detaljima validacije parametara. **[CORRECT]**
- D) Vrati sve greške sa bulovskom zastavicom `retryable` i detaljima o tipu greške.
**Zašto C:** Obrada ponavljanja na nivou alata za prolazne greške jeste ispravna granica apstrakcije — alat ima definitivno znanje o tipu greške i može da implementira determinističku logiku ponavljanja bez oslanjanja na to da će agent protumačiti zastavicu (D) ili pratiti uputstva na nivou prompta (A). Uniformni backoff (B) troši vreme na sintaksne greške koje nikada neće uspeti.

## Pitanje 63 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Tokom nekoliko poteza razgovora o investicionoj strategiji, korisnik je rekao „Imam veoma nisku toleranciju na rizik”, a kasnije „Želim da maksimizujem svoj prinos”. Sada pita: „U šta da investiram?”

**Koji pristup najbolje obezbeđuje da preporuka bude usklađena sa korisnikovim stvarnim prioritetom?**

- A) Iznesi protivrečnost i zamoli korisnika da pojasni šta mu je važnije. **[CORRECT]**
- B) Pruži zasebne preporuke za oba scenarija.
- C) Nastavi sa poslednje izrečenom preferencijom.
- D) Preporuči izbalansiran portfolio bez razrešavanja sukoba.
**Zašto A:** Kada korisnikove preferencije direktno protivreče jedna drugoj, iznošenje sukoba i traženje pojašnjenja jedini je način da se garantuje da je preporuka usklađena sa korisnikovom stvarnom namerom. Svaki drugi pristup podrazumeva pretpostavku koja može biti pogrešna — maksimizacija prinosa i niska tolerancija na rizik suštinski su nespojivi ciljevi koji zahtevaju ljudsku odluku.

## Pitanje 64 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Korisnici tokom više poteza razgovora preciziraju svoje preferencije za plejlistu. Dve poruke nakon što je korisnik rekao „Obožavam džez”, Claude pita „Koje žanrove voliš?”

**Koji je najverovatniji uzrok?**

- A) Claude zahteva vezu sa vektorskom bazom podataka da bi održao memoriju razgovora.
- B) Premašen je kontekstni prozor modela.
- C) Claude API zahteva parametar `session_id`.
- D) Tvoja aplikacija ne uključuje prethodne poruke u niz `messages`. **[CORRECT]**
**Zašto D:** Claude nema memoriju na serverskoj strani — svaki API poziv je bez stanja (stateless). Ako se kompletna istorija razgovora ne uključi u niz `messages` svakog zahteva, Claude nema znanje o prethodnim potezima. Vektorske baze podataka (A) i `session_id` (C) nisu deo Claude arhitekture; prelivanje kontekstnog prozora (B) je nemoguće kod razmene od dve poruke.

## Pitanje 65 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Posle 40-minutne sesije kuvanja, razgovor dostiže 78.000 tokena. Istorija uključuje alergije, skaliranje recepata, pojašnjene kulinarske termine i opštu diskusiju. Moraš da smanjiš broj tokena uz očuvanje važnih informacija.

**Koji pristup najbolje balansira između očuvanja informacija i smanjenja broja tokena?**

- A) Sažmi celokupnu istoriju razgovora.
- B) Zadrži samo poslednjih 20.000 tokena.
- C) Ekstrahuj kritične strukturirane podatke (alergije, količine, preferencije), sažmi opštu diskusiju, a nedavne razmene zadrži doslovno. **[CORRECT]**
- D) Skladišti kompletan razgovor eksterno i preuzimaj relevantne delove putem semantičke pretrage.
**Zašto C:** Hibridni pristup čuva informacije najveće vrednosti uz najniži trošak. Kritične činjenice poput alergija i količina u receptima ekstrahuju se u kompaktan strukturiran blok (čime se sprečava gubitak preciznosti koji nastaje tokom sažimanja), opšta diskusija se sažima, a nedavne razmene zadržavaju se doslovno radi koherentnosti razgovora. Opcije A i B rizikuju gubitak kritičnih informacija o ishrani; D je arhitektonski preteran za jednu sesiju kuvanja.

## Pitanje 66 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Korisnici prijavljuju da tokom dugih razgovora asistent gubi iz vida ranije teme i preferencije. Tvoja trenutna implementacija zadržava samo poslednjih 25 parova poruka.

**Koje je najefikasnije rešenje?**

- A) Hibridni pristup: sažmi starije poruke, a nedavne zadrži doslovno. **[CORRECT]**
- B) Pretraga po vektorskoj sličnosti nad celokupnom istorijom razgovora.
- C) Povećaj prozor na 50 parova poruka.
- D) Sažimaj odbačene poruke u svakom potezu i tekući sažetak dodaj na početak.
**Zašto A:** Hibridni pristup rešava obe dimenzije problema: zadržava tačan nedavni kontekst (kritičan za koherentnost razgovora) uz održavanje sažetog prikaza ranijih preferencija (čime se sprečava potpuni gubitak kada se parovi odbace). Povećanje prozora (C) samo odlaže isti problem. Vektorska pretraga (B) može da promaši važan kontekst koji nije semantički sličan trenutnom upitu. Potpuno sažimanje u svakom potezu (D) dodaje opterećenje i akumulira greške sažimanja.

## Pitanje 67 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Korisnici prijavljuju da latencija i troškovi rastu kada razgovori premaše 50 poteza.

**Koji je primarni uzrok?**

- A) Celokupna istorija razgovora uključuje se uz svaki API zahtev. **[CORRECT]**
- B) Model generiše progresivno duže odgovore.
- C) Operacije nad bazom podataka usporavaju kako istorija raste.
- D) Model gradi interni profil korisnika koji zahteva više obrade.
**Zašto A:** Claude API je potpuno bez stanja (stateless) — svaki zahtev mora da uključi kompletnu istoriju razgovora u nizu `messages`. Kako razgovori rastu, svaki zahtev nosi više tokena, što direktno povećava i latenciju obrade i trošak. Model ne održava nikakvo interno stanje između poziva (D je netačno), a dužina odgovora nije inherentno vezana za dužinu razgovora (B).

## Pitanje 68 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Posle tri meseca nedeljnih sesija, istorija razgovora naraste na 85.000 tokena. Kada korisnik pita „Šta smo zaključili o temi izolacije?”, asistent daje generičke odgovore umesto da se poziva na prethodne diskusije.

**Koji je najefikasniji pristup?**

- A) Skraćivanje pomerajućim prozorom (rolling window).
- B) Progresivno sažimanje koje hvata ključne zaključke.
- C) Semantička ugnežđivanja (embeddings) sa preuzimanjem relevantnih razmena. **[CORRECT]**
- D) Dodaj strukturirane XML tagove koji označavaju zaključke diskusije.
**Zašto C:** Semantička pretraga nad istorijom razgovora jedini je pristup koji se skalira na tri meseca diskusije i pritom može na zahtev da iznese konkretne relevantne razmene. Pomerajući prozor (A) odbacio bi najveći deo istorije. Progresivno sažimanje (B) sažima diskusije u apstrakcije koje gube konkretne zaključke o kojima korisnici pitaju. XML tagovi (D) zahtevaju restrukturiranje celog prošlog sadržaja i ne rešavaju problem preuzimanja na ovoj skali.

## Pitanje 69 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Tokom QA testiranja, Claude prati smernice sistemskog prompta prvih 10–15 poteza, ali kasniji odgovori odstupaju. Razgovor je i dalje unutar ograničenja broja tokena.

**Koje je najbolje rešenje?**

- A) Premesti smernice ponašanja u prvu korisničku poruku.
- B) Započni novi razgovor posle 20 poteza.
- C) Ubacuj poruke u ulozi korisnika koje pojačavaju smernice na prelomnim tačkama razgovora. **[CORRECT]**
- D) Koristi validaciju nakon odgovora da bi se neusaglašeni odgovori regenerisali.
**Zašto C:** Periodično ubacivanje podsetnika o ponašanju direktno suzbija drift uputstava (instruction drift) tako što ponovo uspostavlja ograničenja u redovnim intervalima kako se istorija razgovora akumulira. Premeštanje smernica u prvu korisničku poruku (A) smanjuje njihov autoritet. Započinjanje novog razgovora (B) uništava kontekst. Validacija nakon odgovora (D) je korektivna, a ne preventivna, i dodaje značajnu latenciju.

## Pitanje 70 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Tvoj AI tutor ima sistemski prompt od 2.800 tokena koji definiše metodologiju podučavanja i pravila prilagođavanja. Posle 12 poteza, asistent počinje da ignoriše nivoe znanja.

**Koja je najefikasnija ispravka?**

- A) Ubacuj podsetnike svakih 4–5 poteza.
- B) Zameni opširna pravila few-shot primerima koji demonstriraju prilagođavanje nivou znanja. **[CORRECT]**
- C) Postavi kritična pravila na kraj sistemskog prompta.
- D) Evaluiraj odgovore i regeneriši ih ako se nivo težine ne poklapa.
**Zašto B:** Sistemski prompt od 2.800 tokena sa deklarativnim pravilima ranjiv je na drift jer apstraktna pravila zahtevaju da model o njima rezonuje u svakom potezu. Zamena opširnih pravila konkretnim few-shot primerima koji demonstriraju ispravno prilagođavanje nivou znanja daje modelu jasne obrasce ponašanja koje treba da prati — model ih kroz mnogo poteza sledi pouzdanije nego apstraktna uputstva. Ubacivanje podsetnika (A) pomaže, ali tretira simptome; postavljanje na kraj (C) pomaže u početku, ali ne i kod drifta na nivou poteza; regeneracija (D) je skupa i korektivna.

## Pitanje 71 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Tvoj asistent mora da održava entuzijastičan ton, objašnjava svoje rezonovanje i postavlja pitanja za pojašnjenje. Gde bi ove smernice ponašanja trebalo da budu definisane?

**Gde bi ove smernice ponašanja trebalo da budu definisane?**

- A) Dodate na početak svake korisničke poruke.
- B) U sistemskom promptu. **[CORRECT]**
- C) U prvoj poruci asistenta.
- D) U promenljivama okruženja (environment variables).
**Zašto B:** Sistemski prompt je posebno namenjen za trajna ograničenja ponašanja i smernice koje važe tokom celog razgovora. Dodavanje na početak svake korisničke poruke (A) predstavlja suvišno opterećenje. Prva poruka asistenta (C) je nepouzdana jer model može da odstupi od sopstvenih ranijih izjava. Promenljive okruženja (D) nemaju nikakav uticaj na ponašanje modela.

## Pitanje 72 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Korisnici prijavljuju repetitivne početke odgovora poput „Certainly!” i „I'd be happy to help!”

**Koji je najefikasniji pristup?**

- A) Dodaj delimičnu poruku asistenta sa direktnim početkom odgovora. **[CORRECT]**
- B) Smanji vrednost parametra temperature.
- C) Naknadno obradi odgovore da bi se uklonili pozdravi.
- D) Dodaj uputstva u sistemski prompt da se te fraze izbegavaju.
**Zašto A:** Pretpopunjavanje (prefill) odgovora asistenta početkom direktnog odgovora sprečava obrasce pozdrava na nivou generisanja — model nastavlja od pretpopunjenog teksta umesto da generiše nove uvodne fraze. Uputstva u sistemskom promptu (D) mogu pomoći, ali su manje pouzdana jer model i dalje može da proizvede varijante. Naknadna obrada (C) je krhko zaobilazno rešenje. Temperature (B) kontroliše nasumičnost, a ne konkretne obrasce fraza.

## Pitanje 73 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Webhook obaveštava tvoj sistem da je korisnikov paket poslat dok korisnik aktivno ćaska. Želiš da asistent ovo prirodno ugradi u sledeći odgovor.

**Koji je najbolji pristup?**

- A) Dodaj status isporuke u sistemski prompt.
- B) Pošalji trenutnu sintetičku korisničku poruku.
- C) Primoraj asistenta da poziva alat za status u svakom potezu.
- D) Dodaj ažuriranje statusa kao prefiks sledeće korisničke poruke. **[CORRECT]**
**Zašto D:** Dodavanje ažuriranja statusa kao prefiksa sledeće korisničke poruke ubacuje kontekst u realnom vremenu na prirodnoj granici razgovora bez narušavanja toka. Izmena sistemskog prompta (A) zahteva ponovnu izgradnju sesije ili je arhitektonski glomazna. Sintetička korisnička poruka (B) može da prekine prirodan tok dijaloga i da unese zabunu u atribuciju. Primoravanje na poziv alata u svakom potezu (C) je rasipanje kada su događaji retki.

## Pitanje 74 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Korisnici često šalju zahteve poput „Rezerviši prostor za žurku”. Asistent postavlja 4+ pitanja za pojašnjenje, što izaziva 35% odustajanja.

**Koji pristup najbolje poboljšava ovaj kompromis?**

- A) Nastavi sa skrivenim podrazumevanim vrednostima.
- B) Postavi sva pitanja za pojašnjenje u jednoj objedinjenoj poruci.
- C) Eksplicitno navedi pretpostavke i nastavi, uz poziv na ispravke. **[CORRECT]**
- D) Koristi strukturirani obrazac za prijem (intake form).
**Zašto C:** Eksplicitno navođenje pretpostavki i nastavak rada daju korisniku odmah koristan odgovor, a pritom mu ostavljaju mogućnost da ispravi pogrešne pretpostavke. Skrivene podrazumevane vrednosti (A) ostavljaju korisnika u neznanju o tome šta je pretpostavljeno. Objedinjena lista pitanja (B) i dalje od korisnika zahteva trud unapred. Strukturirani obrazac (D) dodaje više trenja, a ne manje — što je u suprotnosti sa ciljem smanjenja odustajanja.

## Pitanje 75 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Tvoj asistent koristi sistemski prompt sa personom izvođača radova (contractor). Rani potezi prate pravila, ali do 7. poteza asistent daje generičke savete. Dužina razgovora je svega 2.500 tokena.

**Koji je najverovatniji uzrok?**

- A) Sistemski promptovi uspostavljaju samo početno ponašanje.
- B) Pažnja modela slabi kako se potezi akumuliraju.
- C) Akumulirani odgovori asistenta razblažuju uticaj sistemskog prompta. **[CORRECT]**
- D) Sistemski prompt se šalje samo jednom.
**Zašto C:** Kako se odgovori asistenta akumuliraju u istoriji razgovora, udeo teksta koji odražava ograničenja ponašanja iz sistemskog prompta opada u odnosu na rastuću masu sadržaja koji je asistent generisao. Model se sve više povodi za obrascima iz sopstvenih ranijih izlaza umesto za sistemskim promptom, što pojačava drift čak i pri malom broju tokena. Sistemski prompt se uključuje u svaki API poziv (D je netačno kao samostalno objašnjenje), a degradacija pažnje modela (B) ne deluje na 2.500 tokena.

## Pitanje 76 (Scenario: Obrasci arhitekture konverzacijske veštačke inteligencije)

**Situacija:** Korisnici postavljaju nejasne zahteve poput „Možeš li da pomogneš sa izveštajem?”. Asistent odgovara postavljanjem više pitanja (koji izveštaj? kakva pomoć? rok?), što izaziva 40% odustajanja.

**Koje je najbolje rešenje?**

- A) Napravi razumne pretpostavke, eksplicitno ih navedi i ponudi prilagođavanje. **[CORRECT]**
- B) Klasifikuj dvosmislenost manjim modelom pre odgovaranja.
- C) Koristi unapred definisana tumačenja bez navođenja pretpostavki.
- D) Ograniči asistenta na jedno pitanje za pojašnjenje po potezu.
**Zašto A:** Nastavak sa razumnim, eksplicitno navedenim pretpostavkama u potpunosti eliminiše razmenu pitanja napred-nazad, a korisnik ostaje informisan i zadržava kontrolu. Unapred definisana tiha tumačenja (C) zbunjuju korisnike kada odgovor ne odgovara njihovoj nameri. Ograničenje na jedno pitanje (D) i dalje zahteva više poteza razmene. Manji klasifikacioni model (B) dodaje latenciju i složenost infrastrukture, a ne rešava suštinski UX problem.

# Praktične vežbe

## Vežba 1: Agent sa više alata i logikom eskalacije

**Cilj:** Projektovati agentsku petlju sa integracijom alata, strukturiranim rukovanjem greškama i eskalacijom.

**Koraci:**

1. Definiši 3–4 MCP alata sa detaljnim opisima (uključi dva slična alata da bi se testirao izbor alata)
2. Implementiraj agentsku petlju koja proverava `stop_reason` (`"tool_use"` / `"end_turn"`)
3. Dodaj strukturirane odgovore za greške: `errorCategory`, `isRetryable`, opis
4. Implementiraj presretački hook koji blokira operacije iznad praga i preusmerava ih na eskalaciju
5. Testiraj sa višeaspektnim zahtevima
**Domeni:** 1 (Arhitektura agenata), 2 (Alati i MCP), 5 (Kontekst i pouzdanost)

## Vežba 2: Konfigurisanje Claude Code-a za timski razvoj

**Cilj:** Konfigurisati CLAUDE.md, prilagođene komande, pravila specifična za putanje i MCP servere.

**Koraci:**

1. Kreiraj CLAUDE.md na nivou projekta sa univerzalnim standardima
2. Kreiraj `.claude/rules/` fajlove sa YAML frontmatter-om za različite oblasti koda (`paths: ["src/api/**/*"]`, `paths: ["**/*.test.*"]`)
3. Kreiraj projektnu veštinu (skill) u `.claude/skills/` sa `context: fork` i `allowed-tools`
4. Konfiguriši MCP server u `.mcp.json` sa promenljivama okruženja + lično premošćavanje (override) u `~/.claude.json`
5. Testiraj režim planiranja naspram direktnog izvršavanja na zadacima različite složenosti
**Domeni:** 3 (Konfigurisanje Claude Code-a), 2 (Alati i MCP)

## Vežba 3: Pipeline za strukturiranu ekstrakciju podataka

**Cilj:** JSON šeme, `tool_use` za strukturirani izlaz, petlje validacije/ponovnog pokušaja, paketna obrada.

**Koraci:**

1. Definiši alat za ekstrakciju sa JSON šemom (obavezna/opciona polja, enum-i sa "other", polja koja mogu biti null)
2. Izgradi petlju validacije: u slučaju greške, ponovi pokušaj sa dokumentom, pogrešnom ekstrakcijom i konkretnom greškom validacije
3. Dodaj few-shot primere za dokumente sa različitim strukturama
4. Koristi paketnu obradu preko Message Batches API-ja: 100 dokumenata, obradi neuspehe preko `custom_id`
5. Preusmeri na ljude: skorovi pouzdanosti na nivou polja, analiza tipa dokumenta
**Domeni:** 4 (Inženjering promptova), 5 (Kontekst i pouzdanost)

## Vežba 4: Projektovanje i otklanjanje grešaka u višeagentskom istraživačkom pipeline-u

**Cilj:** Orkestracija podagenata, prosleđivanje konteksta, propagacija grešaka, sinteza sa praćenjem izvora.

**Koraci:**

1. Koordinator sa 2+ podagenta (`allowedTools` uključuje `"Task"`, kontekst se eksplicitno prosleđuje u promptovima)
2. Pokreni podagente paralelno preko više `Task` poziva u jednom odgovoru
3. Zahtevaj strukturirani izlaz podagenta: tvrdnja, citat, URL izvora, datum objavljivanja
4. Simuliraj istek vremena (timeout) podagenta: vrati strukturirani kontekst greške koordinatoru i nastavi sa delimičnim rezultatima
5. Testiraj sa konfliktnim podacima: sačuvaj obe vrednosti uz atribuciju; odvoji potvrđene od spornih nalaza
**Domeni:** 1 (Arhitektura agenata), 2 (Alati i MCP), 5 (Kontekst i pouzdanost)

# Dodatak: Tehnologije i koncepti

| Tehnologija | Ključni aspekti |
|---|---|
| **Claude Agent SDK** | AgentDefinition, agentske petlje, `stop_reason`, hook-ovi (PostToolUse), pokretanje podagenata preko Task, `allowedTools` |
| **Model Context Protocol (MCP)** | MCP serveri, alati, resursi, `isError`, opisi alata, `.mcp.json`, promenljive okruženja |
| **Claude Code** | Hijerarhija CLAUDE.md, `.claude/rules/` sa glob obrascima, `.claude/commands/`, `.claude/skills/` sa SKILL.md, režim planiranja, `/compact`, `--resume`, `fork_session` |
| **Claude Code CLI** | `-p` / `--print` za neinteraktivni režim, `--output-format json`, `--json-schema` |
| **Claude API** | `tool_use` sa JSON šemama, `tool_choice` ("auto"/"any"/forsirano), `stop_reason`, `max_tokens`, sistemski promptovi |
| **Message Batches API** | 50% uštede, prozor do 24 sata, `custom_id`, bez višekoračnog pozivanja alata |
| **JSON Schema** | Obavezna naspram opcionih polja, polja koja mogu biti null, enum tipovi, "other" + detalj, strogi režim |
| **Pydantic** | Validacija šeme, semantičke greške, petlje validacije/ponovnog pokušaja |
| **Ugrađeni alati** | Read, Write, Edit, Bash, Grep, Glob — svrha i kriterijumi za izbor |
| **Few-shot prompting** | Ciljani primeri za dvosmislene situacije, uopštavanje na nove obrasce |
| **Prompt chaining** | Sekvencijalna dekompozicija u fokusirane prolaze |
| **Kontekstni prozor** | Budžeti tokena, progresivno sažimanje, "lost in the middle", scratchpad fajlovi |
| **Upravljanje sesijama** | Nastavljanje, `fork_session`, imenovane sesije, izolacija konteksta |
| **Kalibracija pouzdanosti** | Skorovanje na nivou polja, kalibracija na obeleženim skupovima, stratifikovano uzorkovanje |

# Teme van obima

Sledeće srodne teme **NEĆE** biti na ispitu:

- Fino podešavanje (fine-tuning) Claude modela ili treniranje prilagođenih modela
- Autentifikacija Claude API-ja, naplata ili upravljanje nalogom
- Detaljna implementacija u konkretnim programskim jezicima ili radnim okvirima (van onoga što je potrebno za konfigurisanje alata/šeme)
- Postavljanje (deploy) ili hostovanje MCP servera (infrastruktura, umrežavanje, orkestracija kontejnera)
- Interna arhitektura Claude-a, proces treniranja ili težine modela
- Constitutional AI, RLHF ili metodologije treniranja za bezbednost
- Modeli za embedding ili detalji implementacije vektorskih baza podataka
- Computer use (automatizacija pregledača, interakcija sa desktopom)
- Mogućnosti analize slika (Vision)
- Streaming API ili server-sent events
- Ograničavanje brzine (rate limiting), kvote ili detaljni proračuni troškova API-ja
- OAuth, rotacija API ključeva ili detalji protokola autentifikacije
- Konfiguracije specifične za cloud provajdere (AWS, GCP, Azure)
- Benčmarkovi performansi ili metrike za poređenje modela
- Detalji implementacije prompt keširanja (van toga da znaš da postoji)
- Algoritmi za brojanje tokena ili specifičnosti tokenizacije
# Preporuke za pripremu

1. **Izgradi agenta pomoću Claude Agent SDK-a** — implementiraj kompletnu agentsku petlju sa pozivanjem alata, rukovanjem greškama i upravljanjem sesijama. Vežbaj podagente i eksplicitno prosleđivanje konteksta.
2. **Konfiguriši Claude Code za stvarni projekat** — koristi hijerarhiju CLAUDE.md, pravila specifična za putanje u `.claude/rules/`, veštine (skills) sa `context: fork` i `allowed-tools`, i integraciju MCP servera.
3. **Projektuj i testiraj MCP alate** — piši opise koji razlikuju slične alate, vraćaj strukturirane greške sa kategorijama i zastavicama za ponovni pokušaj, i testiraj na dvosmislenim korisničkim zahtevima.
4. **Izgradi pipeline za ekstrakciju podataka** — koristi `tool_use` sa JSON šemama, petlje validacije/ponovnog pokušaja, opciona polja i polja koja mogu biti null, i paketnu obradu preko Message Batches API-ja.
5. **Vežbaj inženjering promptova** — dodaj few-shot primere za dvosmislene scenarije, eksplicitne kriterijume za pregled i višeprolazne arhitekture za velike preglede koda.
6. **Prouči obrasce upravljanja kontekstom** — izvuci činjenice iz opširnih izlaza, koristi scratchpad fajlove i delegiraj otkrivanje podagentima kako bi se savladala ograničenja konteksta.
7. **Razumi eskalaciju i human-in-the-loop** — kada eskalirati (praznine u politici, eksplicitan zahtev korisnika, nemogućnost napretka) i tokove rada za usmeravanje na osnovu pouzdanosti.
8. **Uradi probni ispit** pre pravog. On koristi iste scenarije i format.

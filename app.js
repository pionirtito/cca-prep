// ---- state ----
let QUESTIONS = [];
let GLOSSARY = [];
let PATTERNS = [];
let GUIDE = null;
let LARIONOV = null;
let INTERACTIVE = [];
let view = "overview";
let quiz = null;
let interactiveFile = null;
let guideLang = "both"; // "both" | "en" | "sr"
let lrLang = "en"; // "en" | "sr" — Larionov tab default view

const app = document.getElementById("app");
const statsEl = document.getElementById("stats");

// ---- load data ----
async function load() {
  try {
    const domains = await Promise.all(
      [1, 2, 3, 4, 5].map((d) => fetch(`./data/domain${d}.json`).then((r) => r.json()))
    );
    QUESTIONS = domains.flat();
    GLOSSARY = await fetch("./data/glossary.json").then((r) => r.json());
    try { PATTERNS = await fetch("./data/patterns.json").then((r) => r.json()); } catch (e) { PATTERNS = []; }
    try { GUIDE = await fetch("./data/guide.json").then((r) => r.json()); } catch (e) { GUIDE = null; }
    try { LARIONOV = await fetch("./data/larionov.json").then((r) => r.json()); } catch (e) { LARIONOV = null; }
    try { INTERACTIVE = await fetch("./data/interactive.json").then((r) => r.json()); } catch (e) { INTERACTIVE = []; }
    renderStats();
    render();
  } catch (e) {
    app.innerHTML = `<p class="empty">Ne mogu da ucitam podatke. Pokreni sajt preko lokalnog servera (vidi README), ne otvaranjem fajla direktno.</p>`;
    console.error(e);
  }
}

function renderStats() {
  const total = QUESTIONS.length;
  const ok = QUESTIONS.filter((q) => q.status === "correct").length;
  const no = QUESTIONS.filter((q) => q.status === "wrong").length;
  statsEl.innerHTML = `
    <span>ukupno <b>${total}</b></span>
    <span class="ok">tacno <b>${ok}</b></span>
    <span class="no">netacno <b>${no}</b></span>`;
}

// ---- routing ----
document.querySelectorAll("#tabs button").forEach((b) => {
  b.onclick = () => {
    view = b.dataset.view;
    document.querySelectorAll("#tabs button").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    quiz = null;
    interactiveFile = null;
    render();
  };
});

function render() {
  if (view === "overview") renderOverview();
  else if (view === "quiz") renderQuizSetup();
  else if (view === "glossary") renderGlossary();
  else if (view === "patterns") renderPatterns();
  else if (view === "guide") renderGuide();
  else if (view === "larionov") renderLarionov();
  else if (view === "interactive") renderInteractive();
}

// ---- overview + search ----
function renderOverview(filter = "", domain = "all", status = "all") {
  app.innerHTML = `
    <div class="toolbar">
      <input id="search" placeholder="Pretrazi pitanja, opcije, tagove..." value="${filter}" />
      <select id="fdom">
        <option value="all">Svi domeni</option>
        ${[1, 2, 3, 4, 5].map((d) => `<option value="${d}" ${domain == d ? "selected" : ""}>Domen ${d}</option>`).join("")}
      </select>
      <select id="fstat">
        <option value="all">Svi statusi</option>
        <option value="correct" ${status === "correct" ? "selected" : ""}>Tacno</option>
        <option value="wrong" ${status === "wrong" ? "selected" : ""}>Netacno</option>
        <option value="unseen" ${status === "unseen" ? "selected" : ""}>Neobradjeno</option>
      </select>
    </div>
    <div id="list"></div>`;

  // osvezava samo listu (ne ceo app) -> #search element ostaje, fokus se ne gubi pri kucanju
  function renderList() {
    const f = document.getElementById("search").value.toLowerCase();
    const dom = document.getElementById("fdom").value;
    const stat = document.getElementById("fstat").value;
    const filtered = QUESTIONS.filter((q) => {
      const text = (q.question + JSON.stringify(q.options) + (q.tags || []).join(" ")).toLowerCase();
      const okDom = dom === "all" || String(q.domain) === dom;
      const okStat = stat === "all" || q.status === stat;
      return text.includes(f) && okDom && okStat;
    });
    document.getElementById("list").innerHTML =
      filtered.length ? filtered.map(cardHTML).join("") : `<p class="empty">Nema pitanja za ovaj filter.</p>`;
  }

  renderList();
  document.getElementById("search").oninput = renderList;
  document.getElementById("fdom").onchange = renderList;
  document.getElementById("fstat").onchange = renderList;
}

function explanationsHTML(q) {
  // podrzava i staru semu (explanation: string) i novu (explanations: {A,B,C,D})
  if (q.explanations) {
    return Object.entries(q.explanations).map(([k, v]) => {
      const good = k === q.correct;
      return `<div class="exp-opt ${good ? "good" : "bad"}"><span class="exp-key">${k}</span><span>${esc(v)}</span></div>`;
    }).join("");
  }
  return `<div>${esc(q.explanation || "-")}</div>`;
}

function cardHTML(q) {
  const statusPill =
    q.status === "correct" ? `<span class="pill ok">tacno</span>` :
    q.status === "wrong" ? `<span class="pill no">netacno</span>` :
    `<span class="pill un">neobradjeno</span>`;
  const opts = Object.entries(q.options).map(([k, v]) => {
    let cls = "opt";
    if (k === q.correct) cls += " correct";
    if (q.my_answer && k === q.my_answer && k !== q.correct) cls += " wrong";
    if (q.my_answer === k) cls += " picked";
    return `<div class="${cls}"><span class="key">${k}</span><span>${esc(v)}</span></div>`;
  }).join("");
  const refs = (q.glossary_refs || []).map((r) => `<span class="ref" onclick="jumpToTerm('${esc(r)}')">${esc(r)}</span>`).join("");
  const prefs = (q.pattern_refs || []).map((r) => `<span class="ref pat" onclick="jumpToPattern('${esc(r)}')">⬡ ${esc(patternTitle(r))}</span>`).join("");
  return `
    <div class="card">
      <div class="meta">
        <span class="pill">${q.id}</span>
        <span>Domen ${q.domain} · ${q.subdomain || ""}</span>
        ${statusPill}
      </div>
      <div class="q">${esc(q.question)}</div>
      ${opts}
      <div class="explain">
        <h4>Objasnjenje po opciji</h4>
        ${explanationsHTML(q)}
        ${q.claude_notes ? `<div class="sr">${esc(q.claude_notes)}</div>` : ""}
        ${refs ? `<div class="refs"><span class="refs-label">pojmovi:</span> ${refs}</div>` : ""}
        ${prefs ? `<div class="refs"><span class="refs-label">obrasci:</span> ${prefs}</div>` : ""}
      </div>
    </div>`;
}

// ---- quiz ----
function renderQuizSetup() {
  app.innerHTML = `
    <div class="quiz-setup">
      <h2>Quiz mod</h2>
      <p>Izaberi sta vezbas. „Samo netacna" je najmocniji nacin ucenja.</p>
      <div class="quiz-opts">
        <button onclick="startQuiz('all')">Sva pitanja</button>
        <button onclick="startQuiz('wrong')">Samo netacna</button>
        <button onclick="startQuiz('unseen')">Samo neobradjena</button>
        ${[1, 2, 3, 4, 5].map((d) => `<button onclick="startQuiz('d${d}')">Domen ${d}</button>`).join("")}
      </div>
    </div>`;
}

function startQuiz(mode) {
  let pool = QUESTIONS.slice();
  if (mode === "wrong") pool = pool.filter((q) => q.status === "wrong");
  else if (mode === "unseen") pool = pool.filter((q) => q.status === "unseen");
  else if (mode.startsWith("d")) pool = pool.filter((q) => String(q.domain) === mode.slice(1));
  if (!pool.length) { app.innerHTML = `<p class="empty">Nema pitanja u ovoj kategoriji.</p>`; return; }
  pool = pool.sort(() => Math.random() - 0.5);
  quiz = { pool, i: 0, score: 0, revealed: false, picked: null };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = quiz.pool[quiz.i];
  const opts = Object.entries(q.options).map(([k, v]) => {
    let cls = "opt";
    if (quiz.revealed) {
      if (k === q.correct) cls += " correct";
      if (k === quiz.picked && k !== q.correct) cls += " wrong";
    } else if (k === quiz.picked) cls += " picked";
    return `<div class="${cls}" onclick="pick('${k}')"><span class="key">${k}</span><span>${esc(v)}</span></div>`;
  }).join("");

  app.innerHTML = `
    <div class="progress">Pitanje ${quiz.i + 1} / ${quiz.pool.length} · tacno ${quiz.score}</div>
    <div class="card">
      <div class="meta"><span class="pill">${q.id}</span><span>Domen ${q.domain} · ${q.subdomain || ""}</span></div>
      <div class="q">${esc(q.question)}</div>
      ${opts}
      ${quiz.revealed ? `
        <div class="explain">
          <h4>Objasnjenje po opciji</h4>
          ${explanationsHTML(q)}
          ${q.claude_notes ? `<div class="sr">${esc(q.claude_notes)}</div>` : ""}
        </div>
        <button class="btn btn-primary reveal-btn" onclick="nextQuiz()">${quiz.i + 1 < quiz.pool.length ? "Sledece →" : "Zavrsi"}</button>
      ` : `<button class="btn reveal-btn" onclick="reveal()">Otkrij odgovor</button>`}
    </div>`;
}

function pick(k) { if (!quiz.revealed) { quiz.picked = k; renderQuizQuestion(); } }
function reveal() {
  if (!quiz.picked) return;
  quiz.revealed = true;
  if (quiz.picked === quiz.pool[quiz.i].correct) quiz.score++;
  renderQuizQuestion();
}
function nextQuiz() {
  quiz.i++;
  if (quiz.i >= quiz.pool.length) {
    app.innerHTML = `<div class="quiz-setup"><h2>Gotovo</h2><p>Rezultat: <b>${quiz.score} / ${quiz.pool.length}</b></p><button class="btn btn-primary" onclick="renderQuizSetup()">Novi quiz</button></div>`;
    return;
  }
  quiz.revealed = false; quiz.picked = null;
  renderQuizQuestion();
}

// ---- glossary ----
function renderGlossary(filter = "") {
  app.innerHTML = `
    <div class="toolbar"><input id="gsearch" placeholder="Pretrazi pojmove..." value="${filter}" /></div>
    <div id="glist"></div>`;
  // osvezava samo #glist -> input ostaje, fokus se ne gubi pri kucanju
  function renderGList() {
    const f = document.getElementById("gsearch").value.toLowerCase();
    const filtered = GLOSSARY.filter((g) => (g.term + g.en + g.sr).toLowerCase().includes(f))
      .sort((a, b) => a.term.localeCompare(b.term));
    document.getElementById("glist").innerHTML =
      filtered.length ? filtered.map(glossHTML).join("") : `<p class="empty">Nema pojmova za ovaj filter.</p>`;
  }
  renderGList();
  document.getElementById("gsearch").oninput = renderGList;
}

function glossHTML(g) {
  const seen = (g.seen_in || []).map((id) => `<span class="ref" onclick="jumpToQuestion('${id}')">${id}</span>`).join(" ");
  return `
    <div class="gloss-item" id="term-${slug(g.term)}">
      <h3>${esc(g.term)} <span class="dim">· domen ${g.domain || "?"}</span></h3>
      <div class="en">${esc(g.en)}</div>
      <div class="sr">${esc(g.sr)}</div>
      ${seen ? `<div class="seen">javlja se u: ${seen}</div>` : ""}
    </div>`;
}

// ---- patterns ----
function renderPatterns(filter = "") {
  app.innerHTML = `
    <div class="toolbar"><input id="psearch" placeholder="Pretrazi obrasce..." value="${filter}" /></div>
    <div id="plist"></div>`;
  // osvezava samo #plist -> input ostaje, fokus se ne gubi pri kucanju
  function renderPList() {
    const f = document.getElementById("psearch").value.toLowerCase();
    const filtered = PATTERNS.filter((p) => (p.title + p.lesson_sr + p.lesson_en).toLowerCase().includes(f))
      .sort((a, b) => (a.domain - b.domain) || a.title.localeCompare(b.title));
    document.getElementById("plist").innerHTML =
      filtered.length ? filtered.map(patternHTML).join("") : `<p class="empty">Jos nema obrazaca.</p>`;
  }
  renderPList();
  document.getElementById("psearch").oninput = renderPList;
}

function patternHTML(p) {
  const seen = (p.seen_in || []).map((id) => `<span class="ref" onclick="jumpToQuestion('${id}')">${id}</span>`).join(" ");
  return `
    <div class="gloss-item pattern" id="pat-${slug(p.id)}">
      <h3>⬡ ${esc(p.title)} <span class="dim">· domen ${p.domain || "?"}</span></h3>
      <div class="sr-main">${esc(p.lesson_sr)}</div>
      <div class="en dim2">${esc(p.lesson_en)}</div>
      ${seen ? `<div class="seen">ilustruju ga: ${seen}</div>` : ""}
    </div>`;
}

function patternTitle(id) {
  const p = PATTERNS.find((x) => x.id === id);
  return p ? p.title : id;
}

// ---- guide ----
function bi(node) {
  if (!node) return "";
  const en = node.en ? `<span class="g-en">${esc(node.en)}</span>` : "";
  const sr = node.sr ? `<span class="g-sr">${esc(node.sr)}</span>` : "";
  if (guideLang === "en") return en;
  if (guideLang === "sr") return sr;
  return en + sr;
}

function setGuideLang(lang) { guideLang = lang; renderGuide(); }

function renderGuide() {
  if (!GUIDE) {
    app.innerHTML = `<p class="empty">Vodič nije učitan. Proveri data/guide.json (pokreni preko lokalnog servera).</p>`;
    return;
  }
  const g = GUIDE;
  const m = g.meta || {};
  const langBtn = (val, label) => `<button class="${guideLang === val ? "active" : ""}" onclick="setGuideLang('${val}')">${label}</button>`;

  const sections = [];

  // meta header
  sections.push(`
    <div class="guide-meta">
      <div class="guide-title">${esc((m.title && m.title.sr) || "Exam Guide")}</div>
      <div class="guide-sub">${esc((m.title && m.title.en) || "")}</div>
      <div class="guide-badges">
        <span class="pill">verzija ${esc(m.version || "?")}</span>
        <span class="pill">ažurirano ${esc(m.updated || "?")}</span>
        ${m.source_pdf ? `<a class="pill link" href="${esc(m.source_pdf)}" target="_blank" rel="noopener">izvorni PDF ↗</a>` : ""}
        ${m.official_page ? `<a class="pill link" href="${esc(m.official_page)}" target="_blank" rel="noopener">Anthropic Academy ↗</a>` : ""}
      </div>
      ${m.note ? `<div class="guide-note">${bi(m.note)}</div>` : ""}
    </div>`);

  // intro + target candidate
  if (g.intro) {
    sections.push(`<section class="guide-section"><h2>${esc(g.intro.title.sr)} <span class="dim">· ${esc(g.intro.title.en)}</span></h2>
      ${g.intro.paragraphs.map((p) => `<div class="guide-p">${bi(p)}</div>`).join("")}</section>`);
  }
  if (g.target_candidate) {
    const t = g.target_candidate;
    sections.push(`<section class="guide-section"><h2>${esc(t.title.sr)} <span class="dim">· ${esc(t.title.en)}</span></h2>
      <div class="guide-p">${bi(t.intro)}</div>
      <ul class="guide-list">${t.items.map((i) => `<li>${bi(i)}</li>`).join("")}</ul>
      <div class="guide-p">${bi(t.outro)}</div></section>`);
  }

  // exam format
  if (g.exam_format) {
    sections.push(`<section class="guide-section"><h2>${esc(g.exam_format.title.sr)} <span class="dim">· ${esc(g.exam_format.title.en)}</span></h2>
      ${g.exam_format.groups.map((gr) => `<h3 class="guide-h3">${bi(gr.heading)}</h3>${gr.paragraphs.map((p) => `<div class="guide-p">${bi(p)}</div>`).join("")}`).join("")}</section>`);
  }

  // domains with weight bars
  if (g.domains) {
    sections.push(`<section class="guide-section"><h2>${esc(g.domains.title.sr)} <span class="dim">· ${esc(g.domains.title.en)}</span></h2>
      <div class="domain-weights">${g.domains.items.map((d) => `
        <div class="dw-row">
          <span class="dw-n">D${d.n}</span>
          <span class="dw-name">${bi(d.name)}</span>
          <span class="dw-bar"><span class="dw-fill" style="width:${d.weight}%"></span></span>
          <span class="dw-pct">${d.weight}%</span>
        </div>`).join("")}</div></section>`);
  }

  // scenarios
  if (g.scenarios) {
    sections.push(`<section class="guide-section"><h2>${esc(g.scenarios.title.sr)} <span class="dim">· ${esc(g.scenarios.title.en)}</span></h2>
      <div class="guide-p">${bi(g.scenarios.intro)}</div>
      ${g.scenarios.items.map((s) => `
        <div class="scenario">
          <div class="scenario-h"><span class="pill">Scenario ${s.n}</span> ${bi(s.name)}</div>
          <div class="guide-p">${bi(s.body)}</div>
          <div class="scenario-dom"><span class="refs-label">primarni domeni:</span> ${bi(s.primary_domains)}</div>
        </div>`).join("")}</section>`);
  }

  // domain details (task statements)
  (g.domain_details || []).forEach((d) => {
    sections.push(`<section class="guide-section"><h2 class="domain-head">${bi(d.title)}</h2>
      ${d.tasks.map((t) => `
        <div class="task">
          <div class="task-h"><span class="pill warn">${esc(t.id)}</span> ${bi(t.title)}</div>
          <div class="task-block">
            <h4 class="kn-h">Knowledge of</h4>
            <ul class="guide-list">${t.knowledge.map((k) => `<li>${bi(k)}</li>`).join("")}</ul>
          </div>
          <div class="task-block">
            <h4 class="sk-h">Skills in</h4>
            <ul class="guide-list">${t.skills.map((s) => `<li>${bi(s)}</li>`).join("")}</ul>
          </div>
        </div>`).join("")}</section>`);
  });

  // sample questions
  if (g.sample_questions) {
    const sq = g.sample_questions;
    sections.push(`<section class="guide-section"><h2>${esc(sq.title.sr)} <span class="dim">· ${esc(sq.title.en)}</span></h2>
      <div class="guide-p">${bi(sq.intro)}</div>
      ${sq.items.map((q) => `
        <div class="sample-q">
          <div class="meta"><span class="pill">Q${q.n}</span> <span>${bi(q.scenario)}</span></div>
          <div class="q">${bi(q.question)}</div>
          ${Object.entries(q.options).map(([k, v]) => `<div class="opt ${k === q.correct ? "correct" : ""}"><span class="key">${k}</span><span>${bi(v)}</span></div>`).join("")}
          <details class="sample-reveal">
            <summary>Prikaži tačan odgovor i objašnjenje</summary>
            <div class="sample-ans">Tačan odgovor: <b>${esc(q.correct)}</b></div>
            <div class="explain"><h4>Objašnjenje</h4>${bi(q.explanation)}</div>
          </details>
        </div>`).join("")}</section>`);
  }

  // exercises
  if (g.exercises) {
    const ex = g.exercises;
    sections.push(`<section class="guide-section"><h2>${esc(ex.title.sr)} <span class="dim">· ${esc(ex.title.en)}</span></h2>
      <div class="guide-p">${bi(ex.intro)}</div>
      ${ex.items.map((e) => `
        <div class="exercise">
          <div class="task-h"><span class="pill">Vežba ${e.n}</span> ${bi(e.title)}</div>
          <div class="ex-obj"><span class="refs-label">cilj:</span> ${bi(e.objective)}</div>
          <ol class="guide-olist">${e.steps.map((s) => `<li>${bi(s)}</li>`).join("")}</ol>
          <div class="ex-dom"><span class="refs-label">domeni:</span> ${bi(e.domains_reinforced)}</div>
        </div>`).join("")}</section>`);
  }

  // appendix
  if (g.appendix) {
    const a = g.appendix;
    const termList = (block) => `<h3 class="guide-h3">${esc(block.title.sr)} <span class="dim">· ${esc(block.title.en)}</span></h3>
      <div class="guide-p">${bi(block.intro)}</div>
      <div class="appendix-grid">${block.items.map((i) => `<div class="appendix-item">${i.name ? `<span class="ai-name">${esc(i.name)}</span>` : ""}${bi(i)}</div>`).join("")}</div>`;
    sections.push(`<section class="guide-section"><h2>${esc(a.title.sr)} <span class="dim">· ${esc(a.title.en)}</span></h2>
      ${termList(a.technologies)}
      ${termList(a.in_scope)}
      <h3 class="guide-h3">${esc(a.out_of_scope.title.sr)} <span class="dim">· ${esc(a.out_of_scope.title.en)}</span></h3>
      <div class="guide-p">${bi(a.out_of_scope.intro)}</div>
      <ul class="guide-list scope-out">${a.out_of_scope.items.map((i) => `<li>${bi(i)}</li>`).join("")}</ul>
      <h3 class="guide-h3">${esc(a.recommendations.title.sr)} <span class="dim">· ${esc(a.recommendations.title.en)}</span></h3>
      <div class="guide-p">${bi(a.recommendations.intro)}</div>
      <ol class="guide-olist">${a.recommendations.items.map((i) => `<li>${bi(i)}</li>`).join("")}</ol></section>`);
  }

  app.innerHTML = `
    <div class="guide-lang">
      <span class="refs-label">jezik:</span>
      ${langBtn("both", "Oba")}${langBtn("en", "EN")}${langBtn("sr", "SR")}
    </div>
    ${sections.join("")}`;
}

// ---- larionov guide (bilingual, hover -> EN) ----
function inlineMd(s) {
  let t = esc(s || "");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  return t;
}
// plain English text for the hover tooltip (strip markdown markers)
function enAttr(s) {
  const plain = (s || "")
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/`/g, "");
  return esc(plain);
}

// ---- glossary auto-linking in Larionov text ----
let _glossIdx = null;
function escapeRegExp(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function glossIndex() {
  if (_glossIdx) return _glossIdx;
  const byTerm = new Map();
  const terms = [];
  for (const g of GLOSSARY) {
    if (!g || !g.term) continue;
    byTerm.set(g.term.toLowerCase(), g);
    terms.push(g.term);
  }
  terms.sort((a, b) => b.length - a.length); // longest-first so multi-word terms win
  let re = null;
  if (terms.length) {
    const alt = terms.map(escapeRegExp).join("|");
    re = new RegExp(`(?<![\\w-])(?:${alt})(?![\\w-])`, "gi");
  }
  _glossIdx = { byTerm, re };
  return _glossIdx;
}
// wrap glossary-term occurrences in spans, only inside text (never inside tags/attrs)
function linkGloss(html) {
  const { byTerm, re } = glossIndex();
  if (!re) return html;
  return html.split(/(<[^>]+>)/).map((seg) => {
    if (!seg || seg[0] === "<") return seg;
    re.lastIndex = 0;
    return seg.replace(re, (m) => {
      const g = byTerm.get(m.toLowerCase());
      if (!g) return m;
      return `<span class="gloss-link" data-term="${esc(g.term)}">${m}</span>`;
    });
  }).join("");
}

function setLrLang(lang) { lrLang = lang; renderLarionov(); }

// pick which language is the displayed text and which goes in the hover tooltip
function lrPick(node) {
  return lrLang === "en" ? { main: node.en, hover: node.sr } : { main: node.sr, hover: node.en };
}

function lrBlock(b) {
  const t = lrPick(b);
  switch (b.type) {
    case "h1":
      return `<h2 class="lr-h1" data-alt="${enAttr(t.hover)}">${linkGloss(inlineMd(t.main))}</h2>`;
    case "h2":
      return `<h2 class="lr-h2" data-alt="${enAttr(t.hover)}">${linkGloss(inlineMd(t.main))}</h2>`;
    case "h3":
      return `<h3 class="guide-h3" data-alt="${enAttr(t.hover)}">${linkGloss(inlineMd(t.main))}</h3>`;
    case "h4":
      return `<h4 class="lr-h4" data-alt="${enAttr(t.hover)}">${linkGloss(inlineMd(t.main))}</h4>`;
    case "p":
      return `<p class="guide-p" data-alt="${enAttr(t.hover)}">${linkGloss(inlineMd(t.main))}</p>`;
    case "quote":
      return `<blockquote class="lr-quote" data-alt="${enAttr(t.hover)}">${linkGloss(inlineMd(t.main))}</blockquote>`;
    case "code":
      return `<pre class="lr-code"${b.lang ? ` data-lang="${esc(b.lang)}"` : ""}><code>${esc(b.text || "")}</code></pre>`;
    case "table": {
      const rows = b.cells || [];
      if (!rows.length) return "";
      const cell = (tag, c) => { const p = lrPick(c); return `<${tag} data-alt="${enAttr(p.hover)}">${linkGloss(inlineMd(p.main))}</${tag}>`; };
      const head = `<tr>${rows[0].map((c) => cell("th", c)).join("")}</tr>`;
      const body = rows.slice(1).map((r) => `<tr>${r.map((c) => cell("td", c)).join("")}</tr>`).join("");
      return `<div class="lr-table-wrap"><table class="lr-table"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
    }
    default:
      return "";
  }
}

function renderLarionov() {
  if (!LARIONOV) {
    app.innerHTML = `<p class="empty">Larionov vodič nije učitan. Proveri data/larionov.json (pokreni preko lokalnog servera).</p>`;
    return;
  }
  const m = LARIONOV.meta || {};
  const blocks = LARIONOV.blocks || [];
  const out = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.type === "li" || b.type === "oli") {
      const tag = b.type === "li" ? "ul" : "ol";
      const cls = b.type === "li" ? "guide-list" : "guide-olist";
      const items = [];
      while (i < blocks.length && blocks[i].type === b.type) {
        const t = lrPick(blocks[i]);
        items.push(`<li data-alt="${enAttr(t.hover)}">${linkGloss(inlineMd(t.main))}</li>`);
        i++;
      }
      out.push(`<${tag} class="${cls}">${items.join("")}</${tag}>`);
      continue;
    }
    out.push(lrBlock(b));
    i++;
  }

  const title = m.title || {};
  const mainTitle = lrLang === "en" ? title.en : title.sr;
  const subTitle = lrLang === "en" ? title.sr : title.en;
  const note = lrLang === "en"
    ? `${esc(m.license_note || "")} Text is in English (the original guide) — <b>hover any paragraph</b> to see the Serbian translation.`
    : `${esc(m.license_note || "")} Tekst je na srpskom — <b>pređi mišem preko pasusa</b> da vidiš engleski original.`;
  const langBtn = (val, label) => `<button class="${lrLang === val ? "active" : ""}" onclick="setLrLang('${val}')">${label}</button>`;

  app.innerHTML = `
    <div class="guide-lang">
      <span class="refs-label">jezik:</span>
      ${langBtn("en", "EN")}${langBtn("sr", "SR")}
    </div>
    <div class="guide-meta">
      <div class="guide-title">${esc(mainTitle || "Larionov vodič")}</div>
      <div class="guide-sub">${esc(subTitle || "")}</div>
      <div class="guide-badges">
        ${m.author ? `<span class="pill">${esc(m.author)}</span>` : ""}
        ${m.source ? `<a class="pill link" href="${esc(m.source)}" target="_blank" rel="noopener">izvor na GitHub-u ↗</a>` : ""}
      </div>
      <div class="guide-note">${note}</div>
    </div>
    <div class="lr-body">${out.join("")}</div>`;
  wireGloss();
}

// ---- glossary hover container (singleton) on the Larionov tab ----
function ensureGlossTip() {
  let tip = document.getElementById("gloss-tip");
  if (!tip) {
    tip = document.createElement("div");
    tip.id = "gloss-tip";
    tip.innerHTML = `<div class="gt-term"></div><div class="gt-en"></div><div class="gt-sr"></div>`;
    document.body.appendChild(tip);
  }
  return tip;
}
function positionGlossTip(tip, link) {
  const r = link.getBoundingClientRect();
  const tw = tip.offsetWidth, th = tip.offsetHeight;
  const vw = window.innerWidth, vh = window.innerHeight;
  let left = Math.min(r.left, vw - tw - 8);
  if (left < 8) left = 8;
  let top = r.bottom + 6;
  if (top + th > vh - 8) top = r.top - th - 6; // flip above if no room below
  if (top < 8) top = 8;
  tip.style.left = left + "px";
  tip.style.top = top + "px";
}
function wireGloss() {
  const body = app.querySelector(".lr-body");
  if (!body) return; // listeners bind to the fresh .lr-body each render — old node is discarded
  const tip = ensureGlossTip();
  const { byTerm } = glossIndex();
  const hide = () => { tip.classList.remove("show"); body.classList.remove("gloss-open"); };
  body.addEventListener("mouseover", (e) => {
    const link = e.target.closest(".gloss-link");
    if (!link) return;
    const g = byTerm.get((link.dataset.term || "").toLowerCase());
    if (!g) return;
    tip.querySelector(".gt-term").textContent = g.term;
    tip.querySelector(".gt-en").textContent = g.en || "";
    tip.querySelector(".gt-sr").textContent = g.sr || "";
    tip.classList.add("show");
    positionGlossTip(tip, link);
    body.classList.add("gloss-open");
  });
  body.addEventListener("mouseout", (e) => {
    const link = e.target.closest(".gloss-link");
    if (!link) return;
    if (e.relatedTarget && link.contains(e.relatedTarget)) return;
    hide();
  });
  body.addEventListener("click", (e) => {
    const link = e.target.closest(".gloss-link");
    if (!link) return;
    hide();
    jumpToTerm(link.dataset.term);
  });
}

// ---- interactive tools (self-contained HTML pages in iframe) ----
const IX_GROUPS = {
  0: "Osnove",
  1: "Domen 1 · Agentic Architecture",
  2: "Domen 2 · Tool Design & MCP",
  3: "Domen 3 · Claude Code",
  4: "Domen 4 · Prompt Engineering",
  5: "Domen 5 · Context & Reliability",
};

function openInteractive(file) { interactiveFile = file; renderInteractive(); window.scrollTo(0, 0); }
function closeInteractive() { interactiveFile = null; renderInteractive(); }

function renderInteractive() {
  if (!INTERACTIVE.length) {
    app.innerHTML = `<p class="empty">Interaktivni alati nisu učitani. Proveri data/interactive.json (pokreni preko lokalnog servera).</p>`;
    return;
  }

  // viewer: a single tool open in an iframe
  if (interactiveFile) {
    const item = INTERACTIVE.find((x) => x.file === interactiveFile);
    const title = item ? item.title : "";
    app.innerHTML = `
      <div class="ix-viewer-bar">
        <button class="btn" onclick="closeInteractive()">← Nazad</button>
        <span class="ix-viewer-title">${esc(title)}</span>
        <a class="ix-open" href="${esc(interactiveFile)}" target="_blank" rel="noopener">otvori u novom tabu ↗</a>
      </div>
      <iframe class="ix-frame" src="${esc(interactiveFile)}" loading="lazy" title="${esc(title)}"></iframe>`;
    return;
  }

  // gallery: cards grouped by domain
  const groups = [...new Set(INTERACTIVE.map((x) => x.group))].sort((a, b) => a - b);
  const sections = groups.map((g) => {
    const cards = INTERACTIVE.filter((x) => x.group === g).map((x) => `
      <div class="ix-card" onclick="openInteractive('${esc(x.file)}')">
        <div class="ix-card-top">
          <span class="pill">${esc(x.type)}</span>
          <a class="ix-card-ext" href="${esc(x.file)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="otvori u novom tabu">↗</a>
        </div>
        <h3 class="ix-card-title">${esc(x.title_sr)}</h3>
        <div class="ix-card-en">${esc(x.title)}</div>
        <p class="ix-card-desc">${esc(x.desc)}</p>
      </div>`).join("");
    return `<h2 class="ix-group-h">${esc(IX_GROUPS[g] || ("Grupa " + g))}</h2><div class="ix-grid">${cards}</div>`;
  }).join("");

  app.innerHTML = `
    <div class="ix-intro">
      <p>Interaktivni alati i objašnjenja — samostalne stranice koje rade uživo. Klikni karticu da je otvoriš ovde, ili „↗“ za novi tab. <a class="ix-open" href="interactive/" target="_blank" rel="noopener">otvori kao zasebnu stranu ↗</a></p>
    </div>
    ${sections}`;
}

// ---- cross-navigation ----
function jumpToTerm(term) {
  switchTab("glossary"); renderGlossary();
  highlight("term-" + slug(term));
}
function jumpToPattern(id) {
  switchTab("patterns"); renderPatterns();
  highlight("pat-" + slug(id));
}
function jumpToQuestion(id) {
  switchTab("overview");
  const q = QUESTIONS.find((x) => x.id === id);
  renderOverview(q ? q.id : "");
}
function switchTab(name) {
  view = name;
  document.querySelectorAll("#tabs button").forEach((x) => x.classList.toggle("active", x.dataset.view === name));
}
function highlight(elId) {
  setTimeout(() => {
    const el = document.getElementById(elId);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" }); el.style.borderColor = "var(--accent)"; }
  }, 60);
}

// ---- utils ----
function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-"); }

load();

// ---- state ----
let QUESTIONS = [];
let GLOSSARY = [];
let view = "overview";
let quiz = null;

const app = document.getElementById("app");
const statsEl = document.getElementById("stats");

// ---- load data ----
async function load() {
  try {
    const domains = await Promise.all(
      [1, 2, 3, 4, 5].map((d) =>
        fetch(`./data/domain${d}.json`).then((r) => r.json())
      )
    );
    QUESTIONS = domains.flat();
    GLOSSARY = await fetch("./data/glossary.json").then((r) => r.json());
    renderStats();
    render();
  } catch (e) {
    app.innerHTML = `<p class="empty">Ne mogu da učitam podatke. Pokreni sajt preko lokalnog servera (vidi README), ne otvaranjem fajla direktno.</p>`;
    console.error(e);
  }
}

function renderStats() {
  const total = QUESTIONS.length;
  const ok = QUESTIONS.filter((q) => q.status === "correct").length;
  const no = QUESTIONS.filter((q) => q.status === "wrong").length;
  statsEl.innerHTML = `
    <span>ukupno <b>${total}</b></span>
    <span class="ok">tačno <b>${ok}</b></span>
    <span class="no">netačno <b>${no}</b></span>`;
}

// ---- routing ----
document.querySelectorAll("#tabs button").forEach((b) => {
  b.onclick = () => {
    view = b.dataset.view;
    document.querySelectorAll("#tabs button").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    quiz = null;
    render();
  };
});

function render() {
  if (view === "overview") renderOverview();
  else if (view === "quiz") renderQuizSetup();
  else if (view === "glossary") renderGlossary();
}

// ---- overview + search ----
function renderOverview(filter = "", domain = "all", status = "all") {
  const filtered = QUESTIONS.filter((q) => {
    const text = (q.question + JSON.stringify(q.options) + (q.tags || []).join(" ")).toLowerCase();
    const okText = text.includes(filter.toLowerCase());
    const okDom = domain === "all" || String(q.domain) === domain;
    const okStat = status === "all" || q.status === status;
    return okText && okDom && okStat;
  });

  app.innerHTML = `
    <div class="toolbar">
      <input id="search" placeholder="Pretraži pitanja, opcije, tagove…" value="${filter}" />
      <select id="fdom">
        <option value="all">Svi domeni</option>
        ${[1, 2, 3, 4, 5].map((d) => `<option value="${d}" ${domain == d ? "selected" : ""}>Domen ${d}</option>`).join("")}
      </select>
      <select id="fstat">
        <option value="all">Svi statusi</option>
        <option value="correct" ${status === "correct" ? "selected" : ""}>Tačno</option>
        <option value="wrong" ${status === "wrong" ? "selected" : ""}>Netačno</option>
        <option value="unseen" ${status === "unseen" ? "selected" : ""}>Neobrađeno</option>
      </select>
    </div>
    <div id="list"></div>`;

  const list = document.getElementById("list");
  if (!filtered.length) {
    list.innerHTML = `<p class="empty">Nema pitanja za ovaj filter.</p>`;
  } else {
    list.innerHTML = filtered.map(cardHTML).join("");
  }

  document.getElementById("search").oninput = (e) =>
    renderOverview(e.target.value, document.getElementById("fdom").value, document.getElementById("fstat").value);
  document.getElementById("fdom").onchange = (e) =>
    renderOverview(document.getElementById("search").value, e.target.value, document.getElementById("fstat").value);
  document.getElementById("fstat").onchange = (e) =>
    renderOverview(document.getElementById("search").value, document.getElementById("fdom").value, e.target.value);
}

function cardHTML(q) {
  const statusPill =
    q.status === "correct" ? `<span class="pill ok">tačno</span>` :
    q.status === "wrong" ? `<span class="pill no">netačno</span>` :
    `<span class="pill un">neobrađeno</span>`;
  const opts = Object.entries(q.options).map(([k, v]) => {
    let cls = "opt";
    if (k === q.correct) cls += " correct";
    if (q.my_answer && k === q.my_answer && k !== q.correct) cls += " wrong";
    if (q.my_answer === k) cls += " picked";
    return `<div class="${cls}"><span class="key">${k}</span><span>${esc(v)}</span></div>`;
  }).join("");
  const refs = (q.glossary_refs || []).map((r) => `<span class="ref" onclick="jumpToTerm('${esc(r)}')">${esc(r)}</span>`).join("");
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
        <h4>Objašnjenje</h4>
        <div>${esc(q.explanation || "—")}</div>
        ${q.claude_notes ? `<div class="sr">${esc(q.claude_notes)}</div>` : ""}
        ${refs ? `<div class="refs">${refs}</div>` : ""}
      </div>
    </div>`;
}

// ---- quiz ----
function renderQuizSetup() {
  app.innerHTML = `
    <div class="quiz-setup">
      <h2>Quiz mod</h2>
      <p>Izaberi šta vežbaš. „Samo netačna" je najmoćniji način učenja.</p>
      <div class="quiz-opts">
        <button onclick="startQuiz('all')">Sva pitanja</button>
        <button onclick="startQuiz('wrong')">Samo netačna</button>
        <button onclick="startQuiz('unseen')">Samo neobrađena</button>
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
    <div class="progress">Pitanje ${quiz.i + 1} / ${quiz.pool.length} · tačno ${quiz.score}</div>
    <div class="card">
      <div class="meta"><span class="pill">${q.id}</span><span>Domen ${q.domain} · ${q.subdomain || ""}</span></div>
      <div class="q">${esc(q.question)}</div>
      ${opts}
      ${quiz.revealed ? `
        <div class="explain">
          <h4>Objašnjenje</h4>
          <div>${esc(q.explanation || "—")}</div>
          ${q.claude_notes ? `<div class="sr">${esc(q.claude_notes)}</div>` : ""}
        </div>
        <button class="btn btn-primary reveal-btn" onclick="nextQuiz()">${quiz.i + 1 < quiz.pool.length ? "Sledeće →" : "Završi"}</button>
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
  const filtered = GLOSSARY.filter((g) =>
    (g.term + g.en + g.sr).toLowerCase().includes(filter.toLowerCase())
  ).sort((a, b) => a.term.localeCompare(b.term));

  app.innerHTML = `
    <div class="toolbar"><input id="gsearch" placeholder="Pretraži pojmove…" value="${filter}" /></div>
    <div id="glist">${
      filtered.length
        ? filtered.map(glossHTML).join("")
        : `<p class="empty">Nema pojmova za ovaj filter.</p>`
    }</div>`;
  document.getElementById("gsearch").oninput = (e) => renderGlossary(e.target.value);
}

function glossHTML(g) {
  const seen = (g.seen_in || []).map((id) => `<span class="ref" onclick="jumpToQuestion('${id}')">${id}</span>`).join(" ");
  return `
    <div class="gloss-item" id="term-${slug(g.term)}">
      <h3>${esc(g.term)} <span style="color:var(--ink-dim);font-size:11px">· domen ${g.domain || "?"}</span></h3>
      <div class="en">${esc(g.en)}</div>
      <div class="sr">${esc(g.sr)}</div>
      ${seen ? `<div class="seen">javlja se u: ${seen}</div>` : ""}
    </div>`;
}

// ---- cross-navigation ----
function jumpToTerm(term) {
  view = "glossary";
  document.querySelectorAll("#tabs button").forEach((x) => x.classList.toggle("active", x.dataset.view === "glossary"));
  renderGlossary();
  setTimeout(() => {
    const el = document.getElementById("term-" + slug(term));
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" }); el.style.borderColor = "var(--accent)"; }
  }, 60);
}
function jumpToQuestion(id) {
  view = "overview";
  document.querySelectorAll("#tabs button").forEach((x) => x.classList.toggle("active", x.dataset.view === "overview"));
  const q = QUESTIONS.find((x) => x.id === id);
  renderOverview(q ? q.id : "");
}

// ---- utils ----
function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-"); }

load();

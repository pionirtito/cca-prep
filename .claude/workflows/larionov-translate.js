export const meta = {
  name: 'larionov-translate',
  description: 'Translate the Larionov CCA-F guide to Serbian in parallel, as paired bilingual blocks',
  phases: [
    { title: 'Translate', detail: 'one agent per chunk → SR bilingual blocks' },
    { title: 'QA', detail: 'proof diacritics + untranslated tokens per chunk' },
  ],
}

const FILE = 'docs/guide_en.md'
const OUT = 'docs/.chunks'

// [startLine, endLine, label] — boundaries follow the H1/H2 heading map of guide_en.md
const CHUNKS = [
  [1, 78, 'Front matter: intro, target candidate, exam format, 5 domains, scenarios'],
  [80, 109, 'Official Documentation links'],
  [110, 196, 'PART I header + Chapter 1: Claude API fundamentals'],
  [197, 305, 'Chapter 2: Tools and tool_use'],
  [306, 445, 'Chapter 3: Claude Agent SDK'],
  [446, 546, 'Chapter 4: Model Context Protocol (MCP)'],
  [547, 801, 'Chapter 5: Claude Code configuration and workflows'],
  [802, 1015, 'Chapter 6: Prompt engineering'],
  [1016, 1077, 'Chapter 7: Message Batches API'],
  [1078, 1128, 'Chapter 8: Task decomposition strategies'],
  [1129, 1229, 'Chapter 9: Escalation and human-in-the-loop'],
  [1230, 1292, 'Chapter 10: Error handling in multi-agent systems'],
  [1293, 1410, 'Chapter 11: Context management'],
  [1411, 1477, 'Chapter 12: Preserving provenance'],
  [1478, 1510, 'Chapter 13: Claude Code built-in tools'],
  [1511, 1606, 'PART II header + Domain 1 notes'],
  [1607, 1677, 'Domain 2 notes'],
  [1678, 1763, 'Domain 3 notes'],
  [1764, 1848, 'Domain 4 notes'],
  [1849, 1937, 'Domain 5 notes'],
  [1938, 2119, 'Worked example questions Q1-12 with explanations'],
  [2120, 2354, 'Practice Test Q1-15'],
  [2355, 2583, 'Practice Test Q16-30'],
  [2584, 2812, 'Practice Test Q31-45'],
  [2813, 3042, 'Practice Test Q46-60'],
  [3043, 3282, 'Practice Test Q61-76'],
  [3283, 3405, 'Practical exercises + appendix + out-of-scope + recommendations'],
]

const pad = (n) => (n < 10 ? '0' + n : '' + n)

const SPEC = `
Output JSON shape — a FLAT array of blocks in exact document order:
  {"order": <N>, "blocks": [ <block>, ... ]}
Block types:
  Heading:  {"type":"h1"|"h2"|"h3"|"h4","en":"...","sr":"..."}  (text WITHOUT leading '#'; keep inline \`code\` backticks)
  Paragraph:{"type":"p","en":"...","sr":"..."}
  Bullet:   {"type":"li","en":"...","sr":"..."}
  Numbered: {"type":"oli","en":"...","sr":"..."}
  Quote:    {"type":"quote","en":"...","sr":"..."}   (blockquote '>' lines; translate prose, keep URLs/links)
  Code:     {"type":"code","lang":"<python|bash|json|text>","text":"<VERBATIM, no translation, keep newlines>"}
  Table:    {"type":"table","cells":[[{"en":"..","sr":".."}, ...header...],[...row...]]}  (first row = header)

RULES (mandatory):
- Serbian MUST use correct diacritics: ć č ž š đ everywhere the orthography requires. Never bare-latin.
- "en" = the ORIGINAL English text, verbatim, with inline markdown markers (**bold**, \`code\`, [text](url)) preserved. Never paraphrase "en".
- "sr" = natural Serbian (ekavica, technical register), preserving the SAME inline markers in the same places.
- DO NOT translate, in either field — keep token-identical: code blocks; tool/API/identifier tokens
  (e.g. stop_reason, tool_use, tool_choice, allowedTools, PreToolUse, PostToolUse, isError, custom_id,
  fork_session, AgentDefinition, end_turn, max_tokens, CLAUDE.md, @path, Read/Write/Edit/Bash/Grep/Glob/Task);
  file paths; URLs; and the literal marker **[CORRECT]** (keep exactly).
- Table value/identifier/code cells (e.g. \`"end_turn"\`): set en == sr (verbatim).
- One block per source heading / paragraph / list item / fenced code block / table. Preserve order. Do not merge or drop blocks.
- Skip pure '---' horizontal-rule lines and blank lines (do not emit blocks for them).
`

phase('Translate')
const results = await pipeline(
  CHUNKS.map((c, i) => ({ start: c[0], end: c[1], label: c[2], idx: i + 1 })),

  // Stage A: translate the chunk and write its file
  (c) => agent(
    `You translate one section of an English study guide into Serbian for a CCA-F exam-prep site.

Read ${FILE} lines ${c.start}-${c.end} (this is: "${c.label}"). Translate ONLY those lines.

${SPEC}

Steps:
1. Build the blocks array for the lines in range, following the spec exactly.
2. Write the JSON object {"order": ${c.idx}, "label": ${JSON.stringify(c.label)}, "blocks": [...]} to ${OUT}/chunk-${pad(c.idx)}.json (valid JSON, UTF-8, real ć č ž š đ characters).
3. Return your status.`,
    {
      label: `tx:${pad(c.idx)}`,
      phase: 'Translate',
      schema: {
        type: 'object',
        additionalProperties: false,
        required: ['written', 'path', 'blockCount'],
        properties: {
          written: { type: 'boolean' },
          path: { type: 'string' },
          blockCount: { type: 'integer' },
        },
      },
    }
  ).then((r) => ({ ...r, ...c })),

  // Stage B: QA the written file in place
  (a) => a == null ? null : agent(
    `Proofread a Serbian translation chunk for our CCA-F prep site.

Read ${a.path}. It is {"order","label","blocks"} where each translatable block has "en" (English original) and "sr" (Serbian). Source English is ${FILE} lines ${a.start}-${a.end} if you need to cross-check.

Check and FIX in place:
- Serbian diacritics ć č ž š đ are correct and complete (the most common defect — restore any missing).
- No code/identifier/URL/token was translated; the literal **[CORRECT]** marker is intact (see the token list below).
- "en" is the verbatim English original (restore if paraphrased).
- Inline markers (**bold**, \`code\`, [text](url)) match between en and sr.
- Block count and order unchanged.

Token list to keep verbatim: stop_reason, tool_use, tool_choice, allowedTools, PreToolUse, PostToolUse, isError, custom_id, fork_session, AgentDefinition, end_turn, max_tokens, CLAUDE.md, @path, Read/Write/Edit/Bash/Grep/Glob/Task, plus all code blocks, file paths, URLs.

Overwrite ${a.path} with the corrected JSON (same shape, valid UTF-8). Return status.`,
    {
      label: `qa:${pad(a.idx)}`,
      phase: 'QA',
      schema: {
        type: 'object',
        additionalProperties: false,
        required: ['path', 'blockCount', 'fixesApplied'],
        properties: {
          path: { type: 'string' },
          blockCount: { type: 'integer' },
          fixesApplied: { type: 'integer' },
        },
      },
    }
  )
)

const ok = results.filter(Boolean)
log(`Done: ${ok.length}/${CHUNKS.length} chunks, ${ok.reduce((s, r) => s + (r.blockCount || 0), 0)} blocks total`)
return ok

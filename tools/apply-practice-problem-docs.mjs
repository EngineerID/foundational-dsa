#!/usr/bin/env node
/**
 * Normalize practice-problems.md sections: Statement, Edge cases, Implementation, Walkthrough.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import { EDGE_NOTES } from './item-doc-parity-data.mjs';
import { PRACTICE_PROBLEMS } from './practice-walkthrough-data.mjs';
import { practiceGoldenJsonForTopic } from './practice-golden-map.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PRACTICE_MD = path.join(ROOT, 'docs', 'practice-problems.md');

const STATEMENT_RE = /^\*\*Statement:\*\*[^\n]*\n/m;
const EDGE_RE = /^\*\*Edge cases:\*\*[^\n]*\n/m;
const IMPL_RE = /^\*\*Implementation:\*\*[^\n]*\n/m;

function sectionBounds(text, n) {
  const re = new RegExp(`^##\\s+${n}\\.[^\\n]*$`, 'm');
  const start = text.search(re);
  if (start < 0) return null;
  const after = text.slice(start);
  const next = after.slice(1).search(/^##\s+\d+\./m);
  const end = next >= 0 ? start + 1 + next : text.length;
  return { start, end, body: text.slice(start, end) };
}

function edgeCasesBlock(catalogTopic) {
  const json = practiceGoldenJsonForTopic(catalogTopic);
  const note = EDGE_NOTES[catalogTopic];
  const noteSuffix = note ? ` ${note}` : '';
  return `**Edge cases:** Regression JSON \`tools/${json}\` (≥3 edge-themed cases; \`npm run check:practice-edge-goldens\`).${noteSuffix}\n\n`;
}

function normalizeStatement(catalogTopic, current) {
  if (/per shared goldens/i.test(current)) {
    const purpose = DOC_SPECS[catalogTopic]?.purpose;
    if (purpose) return `**Statement:** ${purpose}\n`;
  }
  return current.endsWith('\n') ? current : `${current}\n`;
}

function upsertSection(body, catalogTopic) {
  let out = body;
  const stmtMatch = out.match(STATEMENT_RE);
  if (!stmtMatch) return { body: out, changed: false };
  const normalizedStmt = normalizeStatement(catalogTopic, stmtMatch[0]);
  if (normalizedStmt !== stmtMatch[0]) {
    out = out.replace(STATEMENT_RE, normalizedStmt);
  }

  if (!EDGE_RE.test(out)) {
    out = out.replace(STATEMENT_RE, `$&${edgeCasesBlock(catalogTopic)}`);
  }

  const required = [STATEMENT_RE, EDGE_RE, IMPL_RE];
  const ok = required.every((re) => re.test(out));
  if (!ok) return { body: out, changed: out !== body };

  return { body: out, changed: out !== body };
}

function main() {
  let text = fs.readFileSync(PRACTICE_MD, 'utf8');
  let changes = 0;
  for (const row of PRACTICE_PROBLEMS) {
    const bounds = sectionBounds(text, row.n);
    if (!bounds) {
      console.error(`Missing section ## ${row.n}.`);
      process.exit(1);
    }
    const { body: newBody, changed } = upsertSection(bounds.body, row.catalogTopic);
    if (changed) {
      text = text.slice(0, bounds.start) + newBody + text.slice(bounds.end);
      changes += 1;
    }
  }
  if (changes) {
    fs.writeFileSync(PRACTICE_MD, text);
  }
  console.log(`apply-practice-problem-docs: ${changes} section(s) updated.`);
}

main();

#!/usr/bin/env node
/** Insert or refresh **Complexity:** from doc-spec in docs/practice-problems.md. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import { PRACTICE_PROBLEMS } from './practice-walkthrough-data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PRACTICE_MD = path.join(ROOT, 'docs', 'practice-problems.md');

const COMPLEXITY_RE = /^\*\*Complexity:\*\*[^\n]*\n/m;
const EDGE_RE = /^\*\*Edge cases:\*\*[^\n]*\n(?:\n)*/m;

function sectionBounds(text, n) {
  const re = new RegExp(`^##\\s+${n}\\.[^\\n]*$`, 'm');
  const start = text.search(re);
  if (start < 0) return null;
  const after = text.slice(start);
  const next = after.slice(1).search(/^##\s+\d+\./m);
  const end = next >= 0 ? start + 1 + next : text.length;
  return { start, end, body: text.slice(start, end) };
}

function complexityBlock(catalogTopic) {
  const spec = DOC_SPECS[catalogTopic];
  if (!spec?.complexity) return null;
  return `**Complexity:** ${spec.complexity}\n\n`;
}

function upsertComplexity(body, catalogTopic) {
  const block = complexityBlock(catalogTopic);
  if (!block) return { body, changed: false };
  if (COMPLEXITY_RE.test(body)) {
    const next = body.replace(COMPLEXITY_RE, block);
    return { body: next, changed: next !== body };
  }
  if (!EDGE_RE.test(body)) return { body, changed: false };
  const next = body.replace(EDGE_RE, (m) => `${m}${block}`);
  return { body: next, changed: true };
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
    const { body: newBody, changed } = upsertComplexity(bounds.body, row.catalogTopic);
    if (changed) {
      text = text.slice(0, bounds.start) + newBody + text.slice(bounds.end);
      changes += 1;
    }
  }
  if (changes) fs.writeFileSync(PRACTICE_MD, text);
  console.log(`apply-practice-problem-complexity: ${changes} section(s) updated.`);
}

main();

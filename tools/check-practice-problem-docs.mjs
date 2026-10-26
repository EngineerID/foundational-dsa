#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { PRACTICE_PROBLEMS } from './practice-walkthrough-data.mjs';
import { practiceGoldenJsonForTopic } from './practice-golden-map.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PRACTICE_MD = path.join(ROOT, 'docs', 'practice-problems.md');

function sectionBody(text, n) {
  const re = new RegExp(`^##\\s+${n}\\.[^\\n]*$`, 'm');
  const start = text.search(re);
  if (start < 0) return null;
  const after = text.slice(start);
  const next = after.slice(1).search(/^##\s+\d+\./m);
  return next >= 0 ? after.slice(0, next + 1) : after;
}

export function checkPracticeProblemDocs(options = {}) {
  const text = fs.readFileSync(options.practicePath ?? PRACTICE_MD, 'utf8');
  const problems = options.problems ?? PRACTICE_PROBLEMS;
  const errors = [];

  for (const row of problems) {
    const body = sectionBody(text, row.n);
    if (!body) {
      errors.push(`#${row.n}: missing section heading`);
      continue;
    }
    if (!/^\*\*Statement:\*\*/m.test(body)) {
      errors.push(`#${row.n} ${row.docAnchor}: missing **Statement:**`);
    }
    if (!/^\*\*Edge cases:\*\*/m.test(body)) {
      errors.push(`#${row.n} ${row.docAnchor}: missing **Edge cases:**`);
    } else {
      const json = practiceGoldenJsonForTopic(row.catalogTopic);
      if (json && !body.includes(`tools/${json}`)) {
        errors.push(`#${row.n} ${row.docAnchor}: Edge cases must reference tools/${json}`);
      }
    }
    if (!/^\*\*Implementation:\*\*/m.test(body)) {
      errors.push(`#${row.n} ${row.docAnchor}: missing **Implementation:**`);
    }
    if (!/^\*\*Walkthrough:\*\*/m.test(body)) {
      errors.push(`#${row.n} ${row.docAnchor}: missing **Walkthrough:**`);
    }
    const order = ['Statement', 'Edge cases', 'Implementation', 'Walkthrough'];
    let last = -1;
    for (const label of order) {
      const idx = body.indexOf(`**${label}:**`);
      if (idx >= 0) {
        if (idx < last) errors.push(`#${row.n} ${row.docAnchor}: out-of-order **${label}:**`);
        last = idx;
      }
    }
  }

  return errors;
}

function main() {
  const errors = checkPracticeProblemDocs();
  if (errors.length) {
    console.error('Practice problem docs check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`Practice problem docs check passed (${PRACTICE_PROBLEMS.length} problems).`);
}

main();

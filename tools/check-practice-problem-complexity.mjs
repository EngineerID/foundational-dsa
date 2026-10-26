#!/usr/bin/env node
/** Each practice problem section must include **Complexity:** matching doc-spec for its catalog topic. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import { PRACTICE_PROBLEMS } from './practice-walkthrough-data.mjs';

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

export function checkPracticeProblemComplexity(options = {}) {
  const text = fs.readFileSync(options.practicePath ?? PRACTICE_MD, 'utf8');
  const problems = options.problems ?? PRACTICE_PROBLEMS;
  const errors = [];

  for (const row of problems) {
    const body = sectionBody(text, row.n);
    if (!body) {
      errors.push(`#${row.n}: missing section heading`);
      continue;
    }
    const spec = DOC_SPECS[row.catalogTopic];
    if (!spec?.complexity) continue;
    if (!/^\*\*Complexity:\*\*/m.test(body)) {
      errors.push(`#${row.n} ${row.catalogTopic}: missing **Complexity:**`);
      continue;
    }
    if (!body.includes(spec.complexity)) {
      errors.push(
        `#${row.n} ${row.catalogTopic}: **Complexity:** must include doc-spec string: ${spec.complexity}`,
      );
    }
    const order = ['Statement', 'Edge cases', 'Complexity', 'Implementation', 'Walkthrough'];
    let last = -1;
    for (const label of order) {
      const idx = body.indexOf(`**${label}:**`);
      if (idx >= 0) {
        if (idx < last) errors.push(`#${row.n} ${row.catalogTopic}: out-of-order **${label}:**`);
        last = idx;
      }
    }
  }

  return errors;
}

function main() {
  const errors = checkPracticeProblemComplexity();
  if (errors.length) {
    console.error('Practice problem complexity check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`Practice problem complexity check passed (${PRACTICE_PROBLEMS.length} problems).`);
}

main();

#!/usr/bin/env node
/** Ensures README links every catalog topic and practice problem doc anchor. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ITEMS } from './items.mjs';
import { PRACTICE_DOC_ANCHORS } from './practice-walkthrough-data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const README = path.join(ROOT, 'README.md');

function main() {
  const text = fs.readFileSync(README, 'utf8');
  const errors = [];
  for (const item of ITEMS) {
    const rel = `docs/items/${item.topic}/${item.id}.md`;
    if (!text.includes(`(${rel})`) && !text.includes(`(${rel}#`)) {
      errors.push(`README missing link to ${rel}`);
    }
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) {
      errors.push(`missing item doc file ${rel}`);
    }
  }
  for (const anchor of PRACTICE_DOC_ANCHORS) {
    if (!text.includes(`docs/practice-problems.md#${anchor}`)) {
      errors.push(`README missing practice link #${anchor}`);
    }
  }
  if (errors.length) {
    console.error('README index check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`README index check passed (${ITEMS.length} topics, ${PRACTICE_DOC_ANCHORS.length} practice links).`);
}

main();

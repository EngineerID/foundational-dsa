#!/usr/bin/env node
/** Ensures docs/golden-fixtures.md matches tools/golden-fixtures.mjs registry. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CORE_GOLDENS, STATEFUL_GOLDENS } from './golden-fixtures.mjs';
import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOC = path.join(ROOT, 'docs', 'golden-fixtures.md');

function main() {
  const have = new Set([...Object.keys(CORE_GOLDENS), ...STATEFUL_GOLDENS.map((f) => f.id)]);
  const missing = ITEMS.filter((i) => !have.has(i.id)).map((i) => i.id);
  const text = fs.readFileSync(DOC, 'utf8');
  const errors = [];
  const withMatch = text.match(/Topics with shared goldens \((\d+) catalog ids\)/);
  if (!withMatch || Number(withMatch[1]) !== have.size) {
    errors.push(`doc header count ${withMatch?.[1] ?? '?'} != registry ${have.size}`);
  }
  const withoutMatch = text.match(/still without shared goldens \((\d+)\)/);
  if (!withoutMatch || Number(withoutMatch[1]) !== missing.length) {
    errors.push(`doc missing count ${withoutMatch?.[1] ?? '?'} != actual ${missing.length}`);
  }
  for (const id of have) {
    if (!text.includes(`| \`${id}\` |`)) {
      errors.push(`doc table missing ${id}`);
    }
  }
  if (errors.length) {
    console.error('Golden fixtures doc check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    console.error('\nRegenerate: node tools/refresh-golden-fixtures-doc.mjs');
    process.exit(1);
  }
  console.log(`Golden fixtures doc check passed (${have.size} with, ${missing.length} without).`);
}

main();

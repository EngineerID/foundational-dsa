#!/usr/bin/env node
/** Ensures every docs/items page uses the standard section headings. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REQUIRED = ['## Overview', '## Complexity', '## Code links', '## Tests'];

function main() {
  const errors = [];
  for (const item of ITEMS) {
    const mdPath = path.join(ROOT, 'docs', 'items', item.topic, `${item.id}.md`);
    if (!fs.existsSync(mdPath)) {
      errors.push(`missing item doc ${item.id}`);
      continue;
    }
    const text = fs.readFileSync(mdPath, 'utf8');
    let last = -1;
    for (const h of REQUIRED) {
      const idx = text.indexOf(h);
      if (idx < 0) {
        errors.push(`${item.id}: missing ${h}`);
        continue;
      }
      if (idx <= last) {
        errors.push(`${item.id}: ${h} out of order`);
      }
      last = idx;
    }
  }
  if (errors.length) {
    console.error('Item doc headings check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`Item doc headings check passed (${ITEMS.length} topics).`);
}

main();

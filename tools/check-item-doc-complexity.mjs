#!/usr/bin/env node
/**
 * Verifies docs/items/** pages **Complexity:** lines match tools/doc-spec.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function normalizeComplexity(s) {
  return s
    .replace(/·/g, '*')
    .replace(/\s+/g, '')
    .replace(/charsstored/gi, 'totalchars')
    .toLowerCase();
}

function main() {
  const errors = [];
  for (const item of ITEMS) {
    const mdPath = path.join(ROOT, 'docs', 'items', item.topic, `${item.id}.md`);
    if (!fs.existsSync(mdPath)) {
      errors.push(`missing item doc ${item.id}`);
      continue;
    }
    const spec = DOC_SPECS[item.id];
    if (!spec?.complexity) {
      errors.push(`doc-spec missing complexity for ${item.id}`);
      continue;
    }
    const text = fs.readFileSync(mdPath, 'utf8');
    const m = text.match(/\*\*Complexity:\*\*\s*(.+)/);
    if (!m) {
      errors.push(`${item.id}: docs/items page missing **Complexity:** line`);
      continue;
    }
    const docLine = normalizeComplexity(m[1]);
    const specLine = normalizeComplexity(spec.complexity);
    if (docLine !== specLine) {
      errors.push(
        `${item.id}: item doc complexity mismatch\n    doc:  ${m[1].trim()}\n    spec: ${spec.complexity}`,
      );
    }
  }
  if (errors.length) {
    console.error('Item doc complexity check failed:\n');
    for (const e of errors) {
      console.error(`  - ${e}`);
    }
    process.exit(1);
  }
  console.log(`Item doc complexity matches doc-spec for ${ITEMS.length} topics.`);
}

main();

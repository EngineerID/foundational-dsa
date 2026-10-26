#!/usr/bin/env node
/**
 * Verifies docs/items/** ## Complexity sections match tools/doc-spec.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function extractSection(text, heading) {
  const start = text.indexOf(heading);
  if (start < 0) return '';
  const rest = text.slice(start + heading.length);
  const next = rest.search(/\n## /);
  return (next < 0 ? rest : rest.slice(0, next)).trim();
}

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
    const section = extractSection(text, '## Complexity');
    const body = section
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)[0];
    if (!body) {
      errors.push(`${item.id}: docs/items page missing ## Complexity body`);
      continue;
    }
    const docLine = normalizeComplexity(body);
    const specLine = normalizeComplexity(spec.complexity);
    if (docLine !== specLine) {
      errors.push(
        `${item.id}: item doc complexity mismatch\n    doc:  ${body}\n    spec: ${spec.complexity}`,
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

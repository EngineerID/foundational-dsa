#!/usr/bin/env node
/**
 * Verifies each docs/items page has a ## Complexity table aligned with doc-spec.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { normalizeComplexityCell, parseTimeSpace } from './complexity-table.mjs';
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

function parseTable(section) {
  const lines = section.split('\n').map((l) => l.trim()).filter(Boolean);
  const row = lines.find((l) => l.startsWith('| Primary |'));
  if (!row) return null;
  const cells = row.split('|').map((c) => c.trim()).filter(Boolean);
  if (cells.length < 3) return null;
  return { time: cells[1], space: cells[2] };
}

function main() {
  const errors = [];
  for (const item of ITEMS) {
    const mdPath = path.join(ROOT, 'docs', 'items', item.topic, `${item.id}.md`);
    const spec = DOC_SPECS[item.id];
    if (!spec?.complexity) {
      errors.push(`doc-spec missing complexity for ${item.id}`);
      continue;
    }
    const text = fs.readFileSync(mdPath, 'utf8');
    const section = extractSection(text, '## Complexity');
    const table = parseTable(section);
    if (!table) {
      errors.push(`${item.id}: missing Primary complexity table row`);
      continue;
    }
    const expected = parseTimeSpace(spec.complexity);
    if (normalizeComplexityCell(table.time) !== normalizeComplexityCell(expected.time)) {
      errors.push(`${item.id}: table time ${table.time} != ${expected.time}`);
    }
    if (normalizeComplexityCell(table.space) !== normalizeComplexityCell(expected.space)) {
      errors.push(`${item.id}: table space ${table.space} != ${expected.space}`);
    }
  }
  if (errors.length) {
    console.error('Item doc complexity table check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`Item doc complexity tables match doc-spec for ${ITEMS.length} topics.`);
}

main();

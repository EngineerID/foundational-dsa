#!/usr/bin/env node
/**
 * Verifies README.md complexity table rows align with tools/doc-spec.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const README = path.join(ROOT, 'README.md');

function normalizeBigO(token) {
  const inner = token
    .replace(/^O\(/i, '')
    .replace(/\)$/i, '')
    .replace(/·/g, '*')
    .replace(/[*·\s]/g, '')
    .replace(/charsstored/gi, 'totalchars')
    .toLowerCase();
  return `o(${inner})`;
}

function normalizeComplexity(s) {
  return s
    .replace(/·/g, '*')
    .replace(/\s+/g, '')
    .replace(/charsstored/gi, 'totalchars')
    .toLowerCase();
}

function parseReadmeTable(text) {
  const start = text.indexOf('## Complexity (primary operations)');
  if (start === -1) {
    throw new Error('README missing complexity section');
  }
  const section = text.slice(start);
  const rows = [];
  for (const line of section.split('\n')) {
    const m = line.match(
      /^\|\s*[^|]+\|\s*([a-z0-9-]+)\s*\|\s*([^|]+)\|\s*([^|]+)\|/,
    );
    if (!m) continue;
    const id = m[1];
    if (id === 'Topic' || id === '-------') continue;
    rows.push({
      id,
      time: normalizeComplexity(m[2]),
      space: normalizeComplexity(m[3]),
    });
  }
  return rows;
}

function extractBigO(text) {
  return [...text.matchAll(/O\([^)]+\)/gi)].map((m) => normalizeBigO(m[0]));
}

function main() {
  const readmeRows = parseReadmeTable(fs.readFileSync(README, 'utf8'));
  const byId = new Map(readmeRows.map((r) => [r.id, r]));
  const errors = [];

  for (const item of ITEMS) {
    const row = byId.get(item.id);
    if (!row) {
      errors.push(`README table missing row for ${item.id}`);
      continue;
    }
    const spec = DOC_SPECS[item.id];
    if (!spec?.complexity) {
      errors.push(`doc-spec missing complexity for ${item.id}`);
      continue;
    }
    const specOs = new Set(extractBigO(spec.complexity));
    const timeOs = extractBigO(row.time);
    const spaceOs = extractBigO(row.space);
    for (const t of timeOs) {
      if (!specOs.has(t)) {
        errors.push(`${item.id}: README time ${t} not in doc-spec: ${spec.complexity}`);
      }
    }
    for (const sp of spaceOs) {
      if (!specOs.has(sp)) {
        errors.push(`${item.id}: README space ${sp} not in doc-spec: ${spec.complexity}`);
      }
    }
  }

  if (errors.length) {
    console.error('README complexity check failed:\n');
    for (const e of errors) {
      console.error(`  - ${e}`);
    }
    process.exit(1);
  }
  console.log(`README complexity table matches doc-spec for ${ITEMS.length} items.`);
}

main();

#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ITEMS } from './matrix.mjs';
import { API_MANIFEST } from './api-manifest.mjs';
import { DOC_SPECS } from './doc-spec.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const lines = [
  '# Canonical API (trilingual)',
  '',
  'Per-language public symbols are defined in `tools/api-manifest.mjs` (source of truth).',
  'Null/empty: arrays may be `null` (Java/JS) or `None` (Python); sorts no-op; searches return `-1` or empty.',
  '',
];

for (const item of ITEMS) {
  const spec = API_MANIFEST[item.id];
  const doc = DOC_SPECS[item.id];
  lines.push(`## ${item.id}`);
  lines.push('');
  if (doc) lines.push(doc.purpose);
  lines.push('');
  lines.push('| Language | Module |');
  lines.push('|----------|--------|');
  lines.push(`| Java | \`${item.java}\` |`);
  lines.push(`| Python | \`${item.py}\` |`);
  lines.push(`| JavaScript | \`${item.js}\` |`);
  lines.push('');
  if (spec) {
    lines.push('**Operations:**');
    for (let i = 0; i < spec.java.length; i++) {
      const j = spec.java[i];
      const p = spec.python[i];
      const s = spec.javascript[i];
      lines.push(`- \`${j}\` → Python \`${p}\`, JS \`${s}\``);
    }
  }
  lines.push('');
}

fs.writeFileSync(path.join(ROOT, 'docs', 'API.md'), lines.join('\n'));
console.log('Wrote docs/API.md');

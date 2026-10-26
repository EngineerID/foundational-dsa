#!/usr/bin/env node
/** Rewrite docs/golden-fixtures.md from golden-fixtures.mjs registry. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CORE_GOLDENS, STATEFUL_GOLDENS } from './golden-fixtures.mjs';
import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOC = path.join(ROOT, 'docs', 'golden-fixtures.md');

const jsonById = new Map();
for (const [id, paths] of Object.entries(CORE_GOLDENS)) {
  jsonById.set(id, paths.json);
}
for (const entry of STATEFUL_GOLDENS) {
  jsonById.set(entry.id, entry.json);
}

const haveSet = new Set([...Object.keys(CORE_GOLDENS), ...STATEFUL_GOLDENS.map((f) => f.id)]);
const withIds = [...haveSet].sort();
const missing = ITEMS.filter((i) => !haveSet.has(i.id)).map((i) => i.id);

const lines = [];
lines.push('# Shared golden fixtures', '');
lines.push(
  'Trilingual `*Goldens*` tests lock behavior against JSON under `tools/`. Registry: `tools/golden-fixtures.mjs` (`npm run check:golden-parity`).',
  '',
);
lines.push(`## Topics with shared goldens (${withIds.length} catalog ids)`, '');
lines.push('| Topic id | JSON |');
lines.push('|----------|------|');
for (const id of withIds) {
  lines.push(`| \`${id}\` | \`${jsonById.get(id)}\` |`);
}
lines.push('');
lines.push(`## Catalog topics still without shared goldens (${missing.length})`, '');
lines.push('');
lines.push(missing.map((id) => `\`${id}\``).join(', ') + '.', '');
lines.push(
  'Regenerate this page: `node tools/refresh-golden-fixtures-doc.mjs`. Gap list only: `node tools/list-golden-fixture-gaps.mjs`.',
  '',
);

fs.writeFileSync(DOC, lines.join('\n'));
console.log(`Wrote ${DOC} (${withIds.length} with, ${missing.length} without).`);

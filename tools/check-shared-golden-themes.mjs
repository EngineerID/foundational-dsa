#!/usr/bin/env node
/** Ensures shared golden JSON includes standard edge themes where applicable. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CORE_GOLDENS, STATEFUL_GOLDENS } from './golden-fixtures.mjs';
import { requiredThemes, themesInCases } from './shared-golden-themes.mjs';

/** Stateful fixtures must include these keys on every case object. */
const REQUIRED_CASE_KEYS = {
  'reservoir-sampling-goldens.json': ['stream', 'k', 'seed', 'expected'],
  'treap-goldens.json': ['seed', 'inserts', 'searchResults'],
};

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function allFixtures() {
  const out = [];
  for (const [id, meta] of Object.entries(CORE_GOLDENS)) {
    out.push({ id, json: meta.json });
  }
  for (const meta of STATEFUL_GOLDENS) {
    out.push({ id: meta.id, json: meta.json });
  }
  return out;
}

function main() {
  const errors = [];
  for (const { id, json } of allFixtures()) {
    const p = path.join(ROOT, 'tools', json);
    const cases = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!Array.isArray(cases) || cases.length === 0) {
      errors.push(`${id}: golden must be non-empty array`);
      continue;
    }
    const have = themesInCases(cases);
    for (const need of requiredThemes(id)) {
      if (!have.has(need)) {
        errors.push(`${id}: missing golden theme "${need}" in ${json}`);
      }
    }
    const requiredKeys = REQUIRED_CASE_KEYS[json];
    if (requiredKeys) {
      cases.forEach((c, i) => {
        for (const key of requiredKeys) {
          if (!(key in c)) {
            errors.push(`${id}: case ${i} missing "${key}" in ${json}`);
          }
        }
      });
    }
  }
  if (errors.length) {
    console.error('Shared golden themes check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    console.error('\nExpand: node tools/expand-shared-golden-edges.mjs');
    process.exit(1);
  }
  console.log(`Shared golden themes check passed (${allFixtures().length} fixtures).`);
}

main();

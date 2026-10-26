#!/usr/bin/env node
/** Ensures shared golden JSON fixtures have trilingual test entrypoints. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CORE_GOLDENS, STATEFUL_GOLDENS } from './golden-fixtures.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function main() {
  const errors = [];
  for (const [itemId, paths] of Object.entries(CORE_GOLDENS)) {
    checkFixture(errors, itemId, paths);
  }
  for (const fixture of STATEFUL_GOLDENS) {
    checkFixture(errors, fixture.id, fixture);
  }
  if (errors.length) {
    console.error('Golden parity check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log('Golden fixture parity check passed.');
}

function checkFixture(errors, id, { json, py, js, java }) {
  const jsonPath = path.join(ROOT, 'tools', json);
  if (!fs.existsSync(jsonPath)) {
    errors.push(`missing tools/${json} (${id})`);
  }
  for (const rel of [py, js, java]) {
    if (!fs.existsSync(path.join(ROOT, rel))) {
      errors.push(`missing ${rel} (${id})`);
    }
  }
}

main();

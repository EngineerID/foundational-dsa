#!/usr/bin/env node
/** Fails when any catalog topic lacks shared JSON goldens in golden-fixtures.mjs. */
import { CORE_GOLDENS, STATEFUL_GOLDENS } from './golden-fixtures.mjs';
import { ITEMS } from './items.mjs';

function main() {
  const have = new Set([...Object.keys(CORE_GOLDENS), ...STATEFUL_GOLDENS.map((f) => f.id)]);
  const missing = ITEMS.filter((i) => !have.has(i.id)).map((i) => i.id);
  if (missing.length) {
    console.error('Catalog golden coverage check failed. Topics without shared goldens:\n');
    for (const id of missing) {
      console.error(`  - ${id}`);
    }
    console.error('\nAdd tools/<topic>-goldens.json, trilingual *Goldens* tests, and registry entries.');
    process.exit(1);
  }
  console.log(`Catalog golden coverage check passed (${ITEMS.length}/${ITEMS.length} catalog topics).`);
}

main();

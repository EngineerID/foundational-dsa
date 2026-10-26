#!/usr/bin/env node
/** Print catalog topic ids with / without shared golden fixtures. */
import { CORE_GOLDENS, STATEFUL_GOLDENS } from './golden-fixtures.mjs';
import { ITEMS } from './items.mjs';

const have = new Set([...Object.keys(CORE_GOLDENS), ...STATEFUL_GOLDENS.map((f) => f.id)]);

const withGoldens = ITEMS.filter((i) => have.has(i.id)).map((i) => i.id);
const missing = ITEMS.filter((i) => !have.has(i.id)).map((i) => i.id);

console.log(`With shared goldens (${withGoldens.length}):`);
for (const id of withGoldens) console.log(`  ${id}`);
console.log(`\nWithout shared goldens (${missing.length}):`);
for (const id of missing) console.log(`  ${id}`);

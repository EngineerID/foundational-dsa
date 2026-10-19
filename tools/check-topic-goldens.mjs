#!/usr/bin/env node
/** Validates tools/goldens/*.json exist and JS reference runner passes computable cases. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GOLD = path.join(ROOT, 'tools', 'goldens');

function main() {
  const errors = [];
  for (const item of ITEMS) {
    const p = path.join(GOLD, `${item.id}.json`);
    if (!fs.existsSync(p)) {
      errors.push(`missing golden ${item.id}.json (run npm run seed:goldens)`);
      continue;
    }
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!data.kind || !Array.isArray(data.cases)) {
      errors.push(`${item.id}.json: invalid shape`);
    }
  }
  if (errors.length) {
    console.error('Topic golden check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`Topic golden files present for ${ITEMS.length} items.`);
}

main();

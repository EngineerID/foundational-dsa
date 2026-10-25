#!/usr/bin/env node
/**
 * Ensures docs/API.md matches tools/generate-api-doc.mjs output.
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = path.join(ROOT, 'docs', 'API.md');

function main() {
  const before = fs.readFileSync(API, 'utf8');
  execSync('node tools/generate-api-doc.mjs', { cwd: ROOT, stdio: 'pipe' });
  const after = fs.readFileSync(API, 'utf8');
  if (before !== after) {
    console.error('docs/API.md is stale; run: npm run api:doc');
    process.exit(1);
  }
  console.log(`docs/API.md is up to date (${before.split('\n').length} lines).`);
}

main();

#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const PATTERN = /NotImplementedError|notImplemented|TODO: implement|JS pending|\bpending\b/;
const SCAN_DIRS = [
  'java/src',
  'python/dsa',
  'python/tests',
  'javascript/src',
  'javascript/test',
];

const hits = [];

function walk(dir) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return;
  for (const entry of fs.readdirSync(full, { withFileTypes: true })) {
    const p = path.join(full, entry.name);
    if (entry.isDirectory()) {
      if (['target', 'node_modules', '.venv', '__pycache__'].includes(entry.name)) continue;
      walk(path.join(dir, entry.name));
    } else if (/\.(java|py|js)$/.test(entry.name)) {
      const lines = fs.readFileSync(p, 'utf8').split('\n');
      lines.forEach((line, i) => {
        if (PATTERN.test(line)) {
          hits.push(`${path.relative(ROOT, p)}:${i + 1}:${line.trim()}`);
        }
      });
    }
  }
}

for (const d of SCAN_DIRS) walk(d);

if (hits.length) {
  console.error('Stub markers found — implement or remove these before committing:');
  hits.forEach((h) => console.error(h));
  process.exit(1);
}
console.log('No stub markers.');

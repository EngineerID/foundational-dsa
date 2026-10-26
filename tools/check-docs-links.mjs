#!/usr/bin/env node
/**
 * Verifies relative markdown links in docs/ and root README resolve to files.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SCAN_ROOTS = [
  path.join(ROOT, 'README.md'),
  path.join(ROOT, 'CONTRIBUTING.md'),
  path.join(ROOT, 'docs'),
];

const LINK_RE = /!?\[[^\]]*\]\(([^)]+)\)/g;

function collectMarkdownFiles() {
  const files = [];
  for (const entry of SCAN_ROOTS) {
    if (!fs.existsSync(entry)) continue;
    if (entry.endsWith('.md')) {
      files.push(entry);
      continue;
    }
    const walk = (dir) => {
      for (const name of fs.readdirSync(dir)) {
        const full = path.join(dir, name);
        const st = fs.statSync(full);
        if (st.isDirectory()) walk(full);
        else if (name.endsWith('.md')) files.push(full);
      }
    };
    walk(entry);
  }
  return files.sort();
}

function isExternal(href) {
  return /^(https?:|mailto:|#)/i.test(href);
}

function resolveTarget(fromFile, href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean) return null;
  const abs = path.resolve(path.dirname(fromFile), clean);
  if (!abs.startsWith(ROOT)) {
    return { abs, outside: true };
  }
  return { abs, outside: false };
}

function main() {
  const missing = [];
  for (const file of collectMarkdownFiles()) {
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(LINK_RE)) {
      const href = m[1].trim();
      if (isExternal(href)) continue;
      const target = resolveTarget(file, href);
      if (!target || target.outside) continue;
      if (!fs.existsSync(target.abs)) {
        missing.push({
          file: path.relative(ROOT, file),
          href,
          expected: path.relative(ROOT, target.abs),
        });
      }
    }
  }
  if (missing.length) {
    console.error('Broken relative markdown links:');
    for (const row of missing) {
      console.error(`  ${row.file}: (${row.href}) → missing ${row.expected}`);
    }
    process.exit(1);
  }
  console.log(`check-docs-links: OK (${collectMarkdownFiles().length} markdown files)`);
}

main();

#!/usr/bin/env node
/**
 * Verifies relative markdown links in docs/ and root README resolve to files.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { collectHeadingSlugs } from './github-heading-slug.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SCAN_ROOTS = [
  path.join(ROOT, 'README.md'),
  path.join(ROOT, 'CONTRIBUTING.md'),
  path.join(ROOT, 'SECURITY.md'),
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

const headingCache = new Map();

function headingSlugsFor(absPath) {
  if (!headingCache.has(absPath)) {
    headingCache.set(absPath, collectHeadingSlugs(fs.readFileSync(absPath, 'utf8')));
  }
  return headingCache.get(absPath);
}

function main() {
  const missing = [];
  const badAnchors = [];
  for (const file of collectMarkdownFiles()) {
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(LINK_RE)) {
      const href = m[1].trim();
      if (isExternal(href)) continue;
      const [pathPart, hash] = href.split('#');
      const target = resolveTarget(file, pathPart || href);
      if (!target || target.outside) continue;
      if (!fs.existsSync(target.abs)) {
        missing.push({
          file: path.relative(ROOT, file),
          href,
          expected: path.relative(ROOT, target.abs),
        });
        continue;
      }
      if (hash) {
        const slug = hash.toLowerCase();
        const slugs = headingSlugsFor(target.abs);
        if (!slugs.has(slug)) {
          badAnchors.push({
            file: path.relative(ROOT, file),
            href,
            target: path.relative(ROOT, target.abs),
            anchor: slug,
          });
        }
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
  if (badAnchors.length) {
    console.error('Broken markdown heading anchors:');
    for (const row of badAnchors) {
      console.error(`  ${row.file}: (${row.href}) → no heading #${row.anchor} in ${row.target}`);
    }
    process.exit(1);
  }
  console.log(`check-docs-links: OK (${collectMarkdownFiles().length} markdown files)`);
}

main();

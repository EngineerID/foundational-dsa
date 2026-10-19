#!/usr/bin/env node
/**
 * Maps canonical API symbols (api-manifest.mjs) to test references per language.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { API_MANIFEST } from './api-manifest.mjs';
import { ITEMS } from './items.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const JAVA_TOPIC_DIRS = {
  searching: ['searching'],
  sorting: ['sorting'],
  strings: ['strings'],
  linear: ['linear'],
  heaps: ['heaps'],
  trees: ['trees'],
  hashing: ['hashing'],
  unionfind: ['unionfind'],
  graphs: ['graphs'],
};

function readIfExists(p) {
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
}

function listJavaTestsForItem(item) {
  const dirs = JAVA_TOPIC_DIRS[item.topic] ?? [item.topic];
  const files = [];
  for (const d of dirs) {
    const dir = path.join(ROOT, 'java', 'src', 'test', 'java', 'com', 'dsa', 'examples', d);
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      if (name.endsWith('Test.java')) files.push(path.join(dir, name));
    }
  }
  const propDir = path.join(ROOT, 'java', 'src', 'test', 'java', 'com', 'dsa', 'examples', 'property');
  if (fs.existsSync(propDir)) {
    for (const name of fs.readdirSync(propDir)) {
      if (!name.endsWith('Test.java')) continue;
      const full = path.join(propDir, name);
      const text = fs.readFileSync(full, 'utf8');
      if (text.includes(item.java)) files.push(full);
    }
  }
  return [...new Set(files)];
}

function pyTestFile(item) {
  return path.join(ROOT, 'python', 'tests', item.topic, `test_${item.py}.py`);
}

function jsTestFile(item) {
  return path.join(ROOT, 'javascript', 'test', item.topic, `${item.js}.test.js`);
}

function symbolInText(text, sym, lang) {
  if (!text) return false;
  if (lang === 'java') {
    return new RegExp(`\\b${sym}\\b`).test(text);
  }
  return new RegExp(`\\.${sym}\\b|\\b${sym}\\(`).test(text);
}

/**
 * @returns {{ itemId: string, language: string, symbol: string }[]}
 */
export function findApiTestGaps(items = ITEMS) {
  const gaps = [];
  for (const item of items) {
    const spec = API_MANIFEST[item.id];
    if (!spec) continue;

    const javaCorpus = listJavaTestsForItem(item)
      .map((f) => readIfExists(f))
      .join('\n');
    for (const sym of spec.java) {
      if (!symbolInText(javaCorpus, sym, 'java')) {
        gaps.push({ itemId: item.id, language: 'java', symbol: sym });
      }
    }

    const pyCorpus = readIfExists(pyTestFile(item));
    for (const sym of spec.python) {
      if (!symbolInText(pyCorpus, sym, 'python')) {
        gaps.push({ itemId: item.id, language: 'python', symbol: sym });
      }
    }

    const jsCorpus = readIfExists(jsTestFile(item));
    for (const sym of spec.javascript) {
      if (!symbolInText(jsCorpus, sym, 'javascript')) {
        gaps.push({ itemId: item.id, language: 'javascript', symbol: sym });
      }
    }
  }
  return gaps;
}

export function formatGapsMarkdown(gaps) {
  const lines = [
    '',
    '## API test coverage',
    '',
    'Canonical public operations from `tools/api-manifest.mjs` must appear in each item\'s dedicated test file (Java: topic test classes plus property tests that reference the implementation).',
    '',
  ];
  if (!gaps.length) {
    lines.push('**API tests:** all manifest symbols covered ✅', '');
    return lines.join('\n');
  }
  lines.push('| Item | Language | Symbol |', '|------|----------|--------|');
  for (const g of gaps) {
    lines.push(`| ${g.itemId} | ${g.language} | \`${g.symbol}\` |`);
  }
  lines.push('', `**Open gaps:** ${gaps.length}`, '');
  return lines.join('\n');
}

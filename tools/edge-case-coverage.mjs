#!/usr/bin/env node
/**
 * Ensures each item's dedicated tests mention the five standard edge-case themes.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
      if (fs.readFileSync(full, 'utf8').includes(item.java)) files.push(full);
    }
  }
  const catalog = path.join(ROOT, 'java', 'src', 'test', 'java', 'com', 'dsa', 'examples', 'catalog', 'EdgeCaseThemesTest.java');
  if (fs.existsSync(catalog)) files.push(catalog);
  return [...new Set(files)];
}

export const EDGE_THEMES = ['empty', 'single', 'duplicate', 'large', 'invalid'];

const PATTERNS = {
  empty: /\bempty\b|\[\s*\]|\.isEmpty\(|is_empty|length\s*===?\s*0|len\([^)]*\)\s*==\s*0|null\)/i,
  single: /\bsingle\b|\[\s*1\s*\]|length\s*===?\s*1|one element|size\s*===?\s*1/i,
  duplicate: /\bduplicate\b|twice|same key|\[2,\s*2|two equal|repeated/i,
  large: /\blarge\b|\b1000\b|range\(\s*1\d{2,}|new int\[100|Array\(100/i,
  invalid: /\binvalid\b|pytest\.raises|assertThrows|assert_throws|toThrow|IndexError|ValueError|IllegalArgument|OutOfBounds/i,
};

function readCorpus(paths) {
  return paths.map((p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '')).join('\n');
}

function pyTestFile(item) {
  return path.join(ROOT, 'python', 'tests', item.topic, `test_${item.py}.py`);
}

function jsTestFile(item) {
  return path.join(ROOT, 'javascript', 'test', item.topic, `${item.js}.test.js`);
}

function javaPaths(item) {
  return listJavaTestsForItem(item);
}

function missingThemes(corpus) {
  return EDGE_THEMES.filter((theme) => !PATTERNS[theme].test(corpus));
}

function catalogPaths(language) {
  if (language === 'python') {
    return [path.join(ROOT, 'python', 'tests', 'catalog', 'test_edge_case_themes.py')];
  }
  if (language === 'javascript') {
    return [path.join(ROOT, 'javascript', 'test', 'catalog', 'edgeCaseThemes.test.js')];
  }
  return [path.join(ROOT, 'java', 'src', 'test', 'java', 'com', 'dsa', 'examples', 'catalog', 'EdgeCaseThemesTest.java')];
}

export function findEdgeCaseGaps() {
  const gaps = [];
  const catalog = {
    java: readCorpus(catalogPaths('java')),
    python: readCorpus(catalogPaths('python')),
    javascript: readCorpus(catalogPaths('javascript')),
  };
  for (const item of ITEMS) {
    const langs = [
      ['java', javaPaths(item)],
      ['python', [pyTestFile(item)]],
      ['javascript', [jsTestFile(item)]],
    ];
    for (const [language, paths] of langs) {
      const miss = missingThemes(`${catalog[language]}\n${readCorpus(paths)}`);
      for (const theme of miss) {
        gaps.push({ itemId: item.id, language, theme });
      }
    }
  }
  return gaps;
}

export function formatEdgeCaseMarkdown(gaps) {
  const lines = [
    '',
    '## Edge-case test themes',
    '',
    'Each item\'s dedicated tests should cover: empty, single-element, duplicates, large inputs, invalid arguments.',
    '',
  ];
  if (!gaps.length) {
    lines.push('**Edge themes:** all five covered per item/language ✅', '');
    return lines.join('\n');
  }
  lines.push('| Item | Language | Missing theme |', '|------|----------|---------------|');
  for (const g of gaps) {
    lines.push(`| ${g.itemId} | ${g.language} | ${g.theme} |`);
  }
  lines.push('', `**Open edge gaps:** ${gaps.length}`, '');
  return lines.join('\n');
}

#!/usr/bin/env node
/**
 * Ensures each practice catalog topic is referenced in trilingual edge-theme tests.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { PRACTICE_EDGE_THEME_ALL } from './practice-edge-theme-topics.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const TARGETS = [
  {
    label: 'JavaScript',
    files: [
      path.join(ROOT, 'javascript/test/practice/practiceEdgeThemes.test.js'),
      path.join(ROOT, 'javascript/test/practice/practiceEdgeThemesPhase2.test.js'),
    ],
  },
  {
    label: 'Python',
    files: [
      path.join(ROOT, 'python/tests/practice/test_practice_edge_themes.py'),
      path.join(ROOT, 'python/tests/practice/test_practice_edge_themes_phase2.py'),
    ],
  },
  {
    label: 'Java',
    files: [
      path.join(
        ROOT,
        'java/src/test/java/com/dsa/examples/practice/PracticeEdgeThemesTest.java',
      ),
      path.join(
        ROOT,
        'java/src/test/java/com/dsa/examples/practice/PracticeEdgeThemesPhase2Test.java',
      ),
    ],
  },
];

export function checkPracticeEdgeThemeCoverage() {
  const errors = [];
  for (const { label, files } of TARGETS) {
    const texts = [];
    for (const file of files) {
      if (!fs.existsSync(file)) {
        errors.push(`${label}: missing ${path.relative(ROOT, file)}`);
        continue;
      }
      texts.push(fs.readFileSync(file, 'utf8'));
    }
    if (texts.length !== files.length) continue;
    const combined = texts.join('\n');
    for (const id of PRACTICE_EDGE_THEME_ALL) {
      if (!combined.includes(id)) {
        errors.push(`${label}: missing edge-theme marker "${id}"`);
      }
    }
  }
  return errors;
}

function main() {
  const errors = checkPracticeEdgeThemeCoverage();
  if (errors.length) {
    console.error('Practice edge theme coverage check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(
    `Practice edge theme coverage check passed (${PRACTICE_EDGE_THEME_ALL.length} topics × ${TARGETS.length} languages).`,
  );
}

main();

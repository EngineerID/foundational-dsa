#!/usr/bin/env node
/**
 * Ensures each practice property topic is referenced in trilingual property tests.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { PRACTICE_PROPERTY_ALL } from './practice-property-topics.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const TARGETS = [
  {
    label: 'JavaScript',
    files: [
      path.join(ROOT, 'javascript/test/practice/practiceProperty.test.js'),
      path.join(ROOT, 'javascript/test/practice/practicePropertyPhase2.test.js'),
    ],
  },
  {
    label: 'Python',
    files: [
      path.join(ROOT, 'python/tests/practice/test_practice_property.py'),
      path.join(ROOT, 'python/tests/practice/test_practice_property_phase2.py'),
    ],
  },
  {
    label: 'Java',
    files: [
      path.join(
        ROOT,
        'java/src/test/java/com/dsa/examples/practice/PracticePropertyTest.java',
      ),
      path.join(
        ROOT,
        'java/src/test/java/com/dsa/examples/practice/PracticePropertyPhase2Test.java',
      ),
    ],
  },
];

export function checkPracticePropertyCoverage() {
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
    for (const id of PRACTICE_PROPERTY_ALL) {
      if (!combined.includes(id)) {
        errors.push(`${label}: missing topic marker "${id}" in practice property tests`);
      }
    }
  }
  return errors;
}

function main() {
  const errors = checkPracticePropertyCoverage();
  if (errors.length) {
    console.error('Practice property coverage check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(
    `Practice property coverage check passed (${PRACTICE_PROPERTY_ALL.length} topics × ${TARGETS.length} languages).`,
  );
}

main();

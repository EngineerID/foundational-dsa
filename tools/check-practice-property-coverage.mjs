#!/usr/bin/env node
/**
 * Ensures each phase-1 practice property topic is referenced in trilingual property tests.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { PRACTICE_PROPERTY_ALL } from './practice-property-topics.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const TARGETS = [
  {
    label: 'JavaScript',
    file: path.join(ROOT, 'javascript/test/practice/practiceProperty.test.js'),
  },
  {
    label: 'Python',
    file: path.join(ROOT, 'python/tests/practice/test_practice_property.py'),
  },
  {
    label: 'Java',
    file: path.join(
      ROOT,
      'java/src/test/java/com/dsa/examples/practice/PracticePropertyTest.java',
    ),
  },
];

export function checkPracticePropertyCoverage() {
  const errors = [];
  for (const { label, file } of TARGETS) {
    if (!fs.existsSync(file)) {
      errors.push(`${label}: missing ${path.relative(ROOT, file)}`);
      continue;
    }
    const text = fs.readFileSync(file, 'utf8');
    for (const id of PRACTICE_PROPERTY_ALL) {
      if (!text.includes(id)) {
        errors.push(`${label}: missing topic marker "${id}" in ${path.relative(ROOT, file)}`);
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

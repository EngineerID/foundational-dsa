#!/usr/bin/env node
/**
 * Interview-style practice goldens must appear in trilingual practiceInterviewGoldens tests.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { PRACTICE_INTERVIEW_GOLDEN_JSON } from './practice-interview-golden-topics.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const TARGETS = [
  {
    label: 'JavaScript',
    file: path.join(ROOT, 'javascript/test/practice/practiceInterviewGoldens.test.js'),
  },
  {
    label: 'Python',
    file: path.join(ROOT, 'python/tests/practice/test_practice_interview_goldens.py'),
  },
  {
    label: 'Java',
    file: path.join(
      ROOT,
      'java/src/test/java/com/dsa/examples/practice/PracticeInterviewGoldensTest.java',
    ),
  },
];

export function checkPracticeInterviewGoldenTrilingual() {
  const errors = [];
  for (const { label, file } of TARGETS) {
    if (!fs.existsSync(file)) {
      errors.push(`${label}: missing ${path.relative(ROOT, file)}`);
      continue;
    }
    const text = fs.readFileSync(file, 'utf8');
    for (const json of PRACTICE_INTERVIEW_GOLDEN_JSON) {
      if (!text.includes(json)) {
        errors.push(`${label}: missing reference to ${json}`);
      }
    }
  }
  return errors;
}

function main() {
  const errors = checkPracticeInterviewGoldenTrilingual();
  if (errors.length) {
    console.error('Practice interview golden trilingual check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(
    `Practice interview golden trilingual check passed (${PRACTICE_INTERVIEW_GOLDEN_JSON.length} fixtures × ${TARGETS.length} languages).`,
  );
}

main();

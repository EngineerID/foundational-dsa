import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { checkPracticeWalkthroughCoverage } from './check-practice-walkthrough-coverage.mjs';

test('checkPracticeWalkthroughCoverage passes on repo practice doc', () => {
  const errors = checkPracticeWalkthroughCoverage();
  assert.deepEqual(errors, []);
});

test('checkPracticeWalkthroughCoverage flags missing walkthrough link', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'practice-wt-'));
  const practicePath = path.join(dir, 'practice-problems.md');
  const workedPath = path.join(dir, 'worked-examples.md');
  fs.writeFileSync(
    practicePath,
    `## 1. Two Sum II\n\n**Implementation:** x\n\n## 2. Maximum subarray\n\n**Walkthrough:** [x](worked-examples.md#maximum-subarray-kadane).\n`,
  );
  fs.writeFileSync(workedPath, '## Two Sum II (sorted pair)\n');
  const errors = checkPracticeWalkthroughCoverage({
    practicePath,
    workedPath,
    problems: [{ n: 1, docAnchor: '1-two-sum-ii', walkthroughSlug: 'two-sum-ii-sorted-pair' }],
  });
  assert.ok(errors.some((e) => e.includes('1-two-sum-ii') && e.includes('missing walkthrough')));
});

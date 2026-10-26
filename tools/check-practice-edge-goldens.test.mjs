import assert from 'node:assert/strict';
import { test } from 'node:test';

import { checkPracticeEdgeGoldens, MIN_PRACTICE_EDGE_GOLDENS } from './check-practice-edge-goldens.mjs';

test('checkPracticeEdgeGoldens passes on repo fixtures', () => {
  const errors = checkPracticeEdgeGoldens();
  assert.equal(errors.length, 0, errors.join('\n'));
});

test('MIN_PRACTICE_EDGE_GOLDENS is 3', () => {
  assert.equal(MIN_PRACTICE_EDGE_GOLDENS, 3);
});

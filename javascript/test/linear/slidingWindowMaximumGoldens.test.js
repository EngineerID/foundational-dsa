const fs = require('fs');
const path = require('path');
const { maxSlidingWindow } = require('../../src/linear/slidingWindowMaximum');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/sliding-window-maximum-goldens.json'),
    'utf8',
  ),
);

describe('sliding window maximum shared goldens', () => {
  for (const { nums, k, expected } of goldens) {
    test(`k=${k}`, () => {
      expect(maxSlidingWindow(nums, k)).toEqual(expected);
    });
  }
});

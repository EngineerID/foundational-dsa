const fs = require('fs');
const path = require('path');
const { kthSmallest } = require('../../src/searching/quickSelect');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/quick-select-goldens.json'), 'utf8'),
);

describe('quick select shared goldens', () => {
  for (const { arr, k, expected } of goldens) {
    test(`k=${k} on ${JSON.stringify(arr)}`, () => {
      expect(kthSmallest(arr, k)).toBe(expected);
    });
  }
});

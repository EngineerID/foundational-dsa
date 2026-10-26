const fs = require('fs');
const path = require('path');
const { kthSmallest } = require('../../src/searching/quickSelect');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/quick-select-goldens.json'), 'utf8'),
);

describe('quick select shared goldens', () => {
  for (const case_ of goldens) {
    test(`k=${case_.k} on ${JSON.stringify(case_.arr)}`, () => {
      if (case_.expectError) {
        expect(() => kthSmallest(case_.arr, case_.k)).toThrow();
      } else {
        expect(kthSmallest(case_.arr, case_.k)).toBe(case_.expected);
      }
    });
  }
});

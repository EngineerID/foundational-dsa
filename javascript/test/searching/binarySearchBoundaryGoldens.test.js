const fs = require('fs');
const path = require('path');
const { firstOccurrence, lastOccurrence } = require('../../src/searching/binarySearch');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/binary-search-boundary-goldens.json'), 'utf8'),
);

describe('binary search boundary shared goldens', () => {
  for (const { arr, key, first, last } of goldens) {
    test(`${JSON.stringify(arr)} key ${key} bounds`, () => {
      expect(firstOccurrence(arr, key)).toBe(first);
      expect(lastOccurrence(arr, key)).toBe(last);
    });
  }
});

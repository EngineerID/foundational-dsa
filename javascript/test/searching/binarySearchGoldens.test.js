const fs = require('fs');
const path = require('path');
const { search } = require('../../src/searching/binarySearch');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/binary-search-goldens.json'), 'utf8'),
);

describe('binary search shared goldens', () => {
  for (const { arr, key, expected } of goldens) {
    test(`${JSON.stringify(arr)} key ${key} => ${expected}`, () => {
      expect(search(arr, key)).toBe(expected);
    });
  }
});

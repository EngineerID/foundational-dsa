const fs = require('fs');
const path = require('path');
const { indexOf } = require('../../src/searching/linearSearch');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/linear-search-goldens.json'), 'utf8'),
);

describe('linear search shared goldens', () => {
  for (const { arr, target, expected } of goldens) {
    test(`${JSON.stringify(arr)} target ${target} => ${expected}`, () => {
      expect(indexOf(arr, target)).toBe(expected);
    });
  }
});

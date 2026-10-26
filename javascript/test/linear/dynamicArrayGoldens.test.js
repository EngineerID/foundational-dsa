const fs = require('fs');
const path = require('path');
const { DynamicArray } = require('../../src/linear/dynamicArray');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/dynamic-array-goldens.json'),
    'utf8',
  ),
);

describe('dynamic array shared goldens', () => {
  for (const case_ of goldens) {
    test('append get', () => {
      const arr = new DynamicArray();
      for (const v of case_.append) arr.add(v);
      expect(arr.size()).toBe(case_.size);
      for (const { index, value } of case_.get) {
        expect(arr.get(index)).toBe(value);
      }
    });
  }
});

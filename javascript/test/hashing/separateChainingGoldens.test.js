const fs = require('fs');
const path = require('path');
const { HashTableChaining } = require('../../src/hashing/separateChaining');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/separate-chaining-goldens.json'),
    'utf8',
  ),
);

describe('separate chaining shared goldens', () => {
  for (const case_ of goldens) {
    test('put get', () => {
      const table = new HashTableChaining();
      for (const [op, key, value] of case_.ops) {
        expect(op).toBe('put');
        table.put(key, value);
      }
      expect(table.get(case_.get.key)).toBe(case_.get.value);
      if (case_.getMissing) {
        expect(table.get(case_.getMissing.key)).toBe(case_.getMissing.value);
      }
    });
  }
});

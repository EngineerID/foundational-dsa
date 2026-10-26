const fs = require('fs');
const path = require('path');
const { HashTableOpenAddressing } = require('../../src/hashing/openAddressing');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/open-addressing-goldens.json'),
    'utf8',
  ),
);

describe('open addressing shared goldens', () => {
  for (const case_ of goldens) {
    test('put get remove', () => {
      const table = new HashTableOpenAddressing();
      for (const [op, key, value] of case_.ops) {
        expect(op).toBe('put');
        table.put(key, value);
      }
      expect(table.get(case_.get.key)).toBe(case_.get.value);
      expect(table.remove(case_.remove.key)).toBe(case_.remove.present);
      expect(table.get(case_.getAfterRemove.key)).toBe(case_.getAfterRemove.value);
    });
  }
});

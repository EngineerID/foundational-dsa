const fs = require('fs');
const path = require('path');
const { Treap } = require('../../src/trees/treap');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/treap-goldens.json'), 'utf8'),
);

describe('treap shared goldens', () => {
  for (const { seed, inserts, searchResults } of goldens) {
    test(`seed=${seed}`, () => {
      const t = new Treap(seed);
      for (const [key, value] of inserts) {
        t.insert(key, value);
      }
      for (const { key, value } of searchResults) {
        expect(t.search(key)).toBe(value);
      }
    });
  }
});

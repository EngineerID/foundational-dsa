const fs = require('fs');
const path = require('path');
const { BTree } = require('../../src/trees/bTree');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/b-tree-goldens.json'), 'utf8'));

describe('b-tree shared goldens', () => {
  for (const case_ of goldens) {
    test('search', () => {
      if (case_.expectError) {
        expect(() => new BTree(case_.t)).toThrow();
        return;
      }
      const tree = new BTree(case_.t);
      for (const key of case_.inserts) tree.insert(key);
      for (const spec of case_.searches) expect(tree.search(spec.key)).toBe(spec.found);
    });
  }
});

const fs = require('fs');
const path = require('path');
const { RedBlackTree } = require('../../src/trees/redBlackTree');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/red-black-tree-goldens.json'), 'utf8'));

describe('red-black tree shared goldens', () => {
  for (const case_ of goldens) {
    test('ops', () => {
      const tree = new RedBlackTree();
      for (const [key, value] of case_.inserts) tree.insert(key, value);
      for (const [key, value] of case_.searches) expect(tree.search(key)).toBe(value);
      expect(tree.search(case_.searchMiss)).toBeNull();
    });
  }
});

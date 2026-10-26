const fs = require('fs');
const path = require('path');
const { AVLTree } = require('../../src/trees/avlTree');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/avl-tree-goldens.json'), 'utf8'));

describe('avl tree shared goldens', () => {
  for (const case_ of goldens) {
    test('ops', () => {
      const tree = new AVLTree();
      for (const [key, value] of case_.inserts) tree.insert(key, value);
      expect(tree.inOrder()).toEqual(case_.inOrderKeys);
      expect(tree.search(case_.searchKey)).toBe(case_.searchValue);
    });
  }
});

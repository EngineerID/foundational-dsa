const fs = require('fs');
const path = require('path');
const { BST } = require('../../src/trees/bst');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/bst-goldens.json'), 'utf8'),
);

describe('bst shared goldens', () => {
  for (const case_ of goldens) {
    test('insert and search', () => {
      const tree = new BST();
      for (const [key, value] of case_.inserts) {
        tree.insert(key, value);
      }
      expect(tree.inOrder()).toEqual(case_.inOrderKeys);
      expect(tree.search(case_.searchKey)).toBe(case_.searchValue);
    });
  }
});

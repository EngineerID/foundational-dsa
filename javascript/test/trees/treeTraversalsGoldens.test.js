const fs = require('fs');
const path = require('path');
const { BST } = require('../../src/trees/bst');
const {
  inOrderRecursive,
  preOrderRecursive,
  postOrderRecursive,
} = require('../../src/trees/treeTraversals');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/tree-traversals-goldens.json'), 'utf8'),
);

describe('tree traversals shared goldens', () => {
  for (const case_ of goldens) {
    test('orders', () => {
      const tree = new BST();
      for (const [key, value] of case_.inserts) {
        tree.insert(key, value);
      }
      const root = tree.root;
      expect(inOrderRecursive(root)).toEqual(case_.inOrder);
      expect(preOrderRecursive(root)).toEqual(case_.preOrder);
      expect(postOrderRecursive(root)).toEqual(case_.postOrder);
    });
  }
});

const { BST } = require('../../src/trees/bst');
const tt = require('../../src/trees/treeTraversals');

describe('TreeTraversals', () => {
  function buildTree() {
    const bst = new BST();
    bst.insert(4, '');
    bst.insert(2, '');
    bst.insert(6, '');
    return bst.getRoot();
  }

  test('recursive traversals', () => {
    const root = buildTree();
    expect(tt.inOrderRecursive(root)).toEqual([2, 4, 6]);
    expect(tt.preOrderRecursive(root)).toEqual([4, 2, 6]);
    expect(tt.postOrderRecursive(root)).toEqual([2, 6, 4]);
  });

  test('iterative and level order', () => {
    const root = buildTree();
    expect(tt.inOrderIterative(root)).toEqual([2, 4, 6]);
    expect(tt.preOrderIterative(root)).toEqual([4, 2, 6]);
    expect(tt.postOrderIterative(root)).toEqual([2, 6, 4]);
    expect(tt.levelOrder(root)).toEqual([4, 2, 6]);
  });

  test('empty tree', () => {
    expect(tt.inOrderRecursive(null)).toEqual([]);
    expect(tt.levelOrder(null)).toEqual([]);
  });

  test('single node', () => {
    const bst = new BST();
    bst.insert(1, '');
    const root = bst.getRoot();
    expect(tt.inOrderRecursive(root)).toEqual([1]);
    expect(tt.preOrderIterative(root)).toEqual([1]);
  });
});

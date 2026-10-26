const { BST } = require('../trees/bst');
const {
  inOrderRecursive,
  preOrderRecursive,
  postOrderRecursive,
} = require('../trees/treeTraversals');

class TreeTraversalsPractice {
  constructor() {
    this.tree = new BST();
  }

  insert(key, value) {
    this.tree.insert(key, value);
  }

  inOrder() {
    return inOrderRecursive(this.tree.root);
  }

  preOrder() {
    return preOrderRecursive(this.tree.root);
  }

  postOrder() {
    return postOrderRecursive(this.tree.root);
  }
}

module.exports = { TreeTraversalsPractice };

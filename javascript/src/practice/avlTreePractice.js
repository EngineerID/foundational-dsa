const { AVLTree } = require('../trees/avlTree');

class AvlTreePractice {
  constructor() {
    this.tree = new AVLTree();
  }

  insert(key, value) {
    this.tree.insert(key, value);
  }

  inOrderKeys() {
    return this.tree.inOrder();
  }

  search(key) {
    return this.tree.search(key);
  }
}

module.exports = { AvlTreePractice };

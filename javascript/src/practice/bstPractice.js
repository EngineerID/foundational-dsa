const { BST } = require('../trees/bst');

class BstPractice {
  constructor() {
    this.tree = new BST();
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

module.exports = { BstPractice };

const { RedBlackTree } = require('../trees/redBlackTree');

class RedBlackTreePractice {
  constructor() {
    this.tree = new RedBlackTree();
  }

  insert(key, value) {
    this.tree.insert(key, value);
  }

  search(key) {
    return this.tree.search(key);
  }
}

module.exports = { RedBlackTreePractice };

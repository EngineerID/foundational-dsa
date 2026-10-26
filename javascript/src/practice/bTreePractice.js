const { BTree } = require('../trees/bTree');

class BTreePractice {
  constructor(t) {
    this.tree = new BTree(t);
  }

  insert(key) {
    this.tree.insert(key);
  }

  search(key) {
    return this.tree.search(key);
  }
}

module.exports = { BTreePractice };

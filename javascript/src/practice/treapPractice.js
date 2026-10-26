const { Treap } = require('../trees/treap');

class TreapPractice {
  constructor(seed) {
    this.treap = new Treap(seed);
  }

  insert(key, value) {
    this.treap.insert(key, value);
  }

  search(key) {
    return this.treap.search(key);
  }
}

module.exports = { TreapPractice };

const { OrderStatisticTree } = require('../trees/orderStatisticTree');

class OrderStatisticTreePractice {
  constructor() {
    this.tree = new OrderStatisticTree();
  }

  insert(key, value) {
    this.tree.insert(key, value);
  }

  select(k) {
    return this.tree.select(k);
  }

  rank(key) {
    return this.tree.rank(key);
  }
}

module.exports = { OrderStatisticTreePractice };

const { FenwickTree } = require('../trees/fenwickTree');

class FenwickTreePractice {
  constructor(n) {
    this.tree = new FenwickTree(n);
  }

  add(index, delta) {
    this.tree.add(index, delta);
  }

  prefixSum(index) {
    return this.tree.prefixSum(index);
  }

  rangeSum(left, right) {
    return this.tree.rangeSum(left, right);
  }
}

module.exports = { FenwickTreePractice };

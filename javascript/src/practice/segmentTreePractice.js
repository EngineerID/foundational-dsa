const { SegmentTree } = require('../trees/segmentTree');

class SegmentTreePractice {
  constructor(initial) {
    this.tree = new SegmentTree(initial);
  }

  rangeSum(left, right) {
    return this.tree.rangeSum(left, right);
  }

  update(index, value) {
    this.tree.update(index, value);
  }
}

module.exports = { SegmentTreePractice };

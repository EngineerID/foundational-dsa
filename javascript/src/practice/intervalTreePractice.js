const { Interval, IntervalTree } = require('../trees/intervalTree');

class IntervalTreePractice {
  constructor() {
    this.tree = new IntervalTree();
  }

  insert(low, high) {
    this.tree.insert(new Interval(low, high));
  }

  overlapSorted(qLow, qHigh) {
    const found = this.tree.overlapSearch(new Interval(qLow, qHigh));
    const got = found.map((i) => [i.low, i.high]);
    got.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    return got;
  }
}

module.exports = { IntervalTreePractice };

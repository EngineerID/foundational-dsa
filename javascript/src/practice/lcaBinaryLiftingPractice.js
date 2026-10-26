const { LCABinaryLifting } = require('../trees/lcaBinaryLifting');

class LcaBinaryLiftingPractice {
  constructor(parent) {
    this.lca = new LCABinaryLifting(parent);
  }

  query(u, v) {
    return this.lca.query(u, v);
  }
}

module.exports = { LcaBinaryLiftingPractice };

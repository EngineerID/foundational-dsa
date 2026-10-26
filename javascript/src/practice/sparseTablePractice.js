const { SparseTable } = require('../trees/sparseTable');

class SparseTablePractice {
  constructor(initial) {
    this.table = new SparseTable(initial);
  }

  query(left, right) {
    return this.table.query(left, right);
  }
}

module.exports = { SparseTablePractice };

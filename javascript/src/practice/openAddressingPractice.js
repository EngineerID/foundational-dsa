const { HashTableOpenAddressing, ProbingStrategy } = require('../hashing/openAddressing');

class OpenAddressingPractice {
  constructor() {
    this.table = new HashTableOpenAddressing(ProbingStrategy.LINEAR);
  }

  put(key, value) {
    this.table.put(key, value);
  }

  get(key) {
    return this.table.get(key);
  }

  remove(key) {
    return this.table.remove(key);
  }
}

module.exports = { OpenAddressingPractice };

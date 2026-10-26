const { HashTableChaining } = require('../hashing/separateChaining');

class SeparateChainingPractice {
  constructor() {
    this.table = new HashTableChaining();
  }

  put(key, value) {
    this.table.put(key, value);
  }

  get(key) {
    return this.table.get(key);
  }
}

module.exports = { SeparateChainingPractice };

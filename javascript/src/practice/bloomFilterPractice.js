const { BloomFilter } = require('../hashing/bloomFilter');

class BloomFilterPractice {
  constructor(expectedItems, falsePositiveRate) {
    this.filter = new BloomFilter(expectedItems, falsePositiveRate);
  }

  add(item) {
    this.filter.add(item);
  }

  mightContain(item) {
    return this.filter.mightContain(item);
  }
}

module.exports = { BloomFilterPractice };

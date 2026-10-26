const fs = require('fs');
const path = require('path');
const { BloomFilter } = require('../../src/hashing/bloomFilter');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/bloom-filter-goldens.json'), 'utf8'),
);

describe('bloom filter shared goldens', () => {
  for (const { expectedItems, falsePositiveRate, add, queries } of goldens) {
    test(`n=${expectedItems}`, () => {
      const bf = new BloomFilter(expectedItems, falsePositiveRate);
      for (const item of add) {
        bf.add(item);
      }
      for (const { item, expected } of queries) {
        expect(bf.mightContain(item)).toBe(expected);
      }
    });
  }
});

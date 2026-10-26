const fs = require('fs');
const path = require('path');
const { topKFrequent } = require('../../src/heaps/topKFrequentElements');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/top-k-frequent-elements-goldens.json'), 'utf8'),
);

describe('top k frequent elements shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify({ nums: case_.nums, k: case_.k }), () => {
      if (case_.expectError) {
        expect(() => topKFrequent(case_.nums, case_.k)).toThrow();
        return;
      }
      expect(topKFrequent(case_.nums, case_.k)).toEqual(case_.expected);
    });
  }
});

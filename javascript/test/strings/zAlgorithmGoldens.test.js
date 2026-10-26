const fs = require('fs');
const path = require('path');
const { search, zArray } = require('../../src/strings/zAlgorithm');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/z-algorithm-goldens.json'), 'utf8'));

describe('z-algorithm shared goldens', () => {
  for (const case_ of goldens) {
    test('z and search', () => {
      expect(search(case_.text, case_.pattern)).toBe(case_.index);
      expect(zArray(case_.text)).toEqual(case_.z);
    });
  }
});

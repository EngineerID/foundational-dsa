const fs = require('fs');
const path = require('path');
const { build } = require('../../src/strings/suffixArray');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/suffix-array-goldens.json'), 'utf8'));

describe('suffix array shared goldens', () => {
  for (const case_ of goldens) {
    test('sa', () => {
      expect(build(case_.s)).toEqual(case_.sa);
    });
  }
});

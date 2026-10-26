const fs = require('fs');
const path = require('path');
const { length } = require('../../src/dp/lcs');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/lcs-goldens.json'), 'utf8'),
);

describe('lcs shared goldens', () => {
  for (const { a, b, expected } of goldens) {
    test(`${a}/${b}`, () => {
      expect(length(a, b)).toBe(expected);
    });
  }
});

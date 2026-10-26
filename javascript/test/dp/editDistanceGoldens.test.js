const fs = require('fs');
const path = require('path');
const { distance } = require('../../src/dp/editDistance');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/edit-distance-goldens.json'), 'utf8'),
);

describe('edit distance shared goldens', () => {
  for (const { a, b, expected } of goldens) {
    test(`${a} -> ${b}`, () => {
      expect(distance(a, b)).toBe(expected);
    });
  }
});

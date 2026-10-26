const fs = require('fs');
const path = require('path');
const { sort } = require('../../src/sorting/mergeSort');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/merge-sort-goldens.json'), 'utf8'),
);

describe('merge sort shared goldens', () => {
  for (const { input, sorted } of goldens) {
    test(JSON.stringify(input), () => {
      expect(sort(input)).toEqual(sorted);
    });
  }
});

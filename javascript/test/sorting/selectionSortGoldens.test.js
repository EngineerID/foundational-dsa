const fs = require('fs');
const path = require('path');
const { sort } = require('../../src/sorting/selectionSort');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/selection-sort-goldens.json'), 'utf8'),
);

describe('selection sort shared goldens', () => {
  for (const { input, sorted } of goldens) {
    test(JSON.stringify(input), () => {
      const arr = [...input];
      sort(arr);
      expect(arr).toEqual(sorted);
    });
  }
});

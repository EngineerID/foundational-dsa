const fs = require('fs');
const path = require('path');
const { sort } = require('../../src/sorting/insertionSort');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/insertion-sort-goldens.json'), 'utf8'),
);

describe('insertion sort shared goldens', () => {
  for (const { input, sorted } of goldens) {
    test(JSON.stringify(input), () => {
      const arr = [...input];
      sort(arr);
      expect(arr).toEqual(sorted);
    });
  }
});

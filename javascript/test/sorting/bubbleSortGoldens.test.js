const fs = require('fs');
const path = require('path');
const { sort } = require('../../src/sorting/bubbleSort');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/bubble-sort-goldens.json'), 'utf8'),
);

describe('bubble sort shared goldens', () => {
  for (const { input, sorted } of goldens) {
    test(JSON.stringify(input), () => {
      const arr = [...input];
      sort(arr);
      expect(arr).toEqual(sorted);
    });
  }
});

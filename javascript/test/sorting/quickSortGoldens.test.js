const fs = require('fs');
const path = require('path');
const { sort, sort3Way } = require('../../src/sorting/quickSort');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/quick-sort-goldens.json'), 'utf8'),
);

describe('quick sort shared goldens', () => {
  for (const { input, mode, expected } of goldens) {
    test(`${mode} ${JSON.stringify(input)}`, () => {
      const arr = [...input];
      if (mode === 'sort3Way') {
        sort3Way(arr);
      } else {
        sort(arr);
      }
      expect(arr).toEqual(expected);
    });
  }
});

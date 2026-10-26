const fs = require('fs');
const path = require('path');
const { mergeIntervals } = require('../../src/sorting/mergeIntervals');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/merge-intervals-goldens.json'), 'utf8'),
);

describe('merge intervals shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify(case_.intervals), () => {
      expect(mergeIntervals(case_.intervals)).toEqual(case_.expected);
    });
  }
});

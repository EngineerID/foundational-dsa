const fs = require('fs');
const path = require('path');
const { trap } = require('../../src/searching/trappingRainWater');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/trapping-rain-water-goldens.json'), 'utf8'),
);

describe('trapping rain water shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify(case_.height), () => {
      expect(trap(case_.height)).toBe(case_.expected);
    });
  }
});

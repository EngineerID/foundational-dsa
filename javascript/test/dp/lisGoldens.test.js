const fs = require('fs');
const path = require('path');
const { length } = require('../../src/dp/lis');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/lis-goldens.json'), 'utf8'),
);

describe('lis shared goldens', () => {
  for (const { arr, expected } of goldens) {
    test(JSON.stringify(arr), () => {
      expect(length(arr)).toBe(expected);
    });
  }
});

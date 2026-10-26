const fs = require('fs');
const path = require('path');
const { minMultiplications } = require('../../src/dp/matrixChain');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/matrix-chain-goldens.json'),
    'utf8',
  ),
);

describe('matrix chain shared goldens', () => {
  for (const case_ of goldens) {
    test('min multiplications', () => {
      expect(minMultiplications(case_.dimensions)).toBe(case_.expected);
    });
  }
});

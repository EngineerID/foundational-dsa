const fs = require('fs');
const path = require('path');
const { numIslands } = require('../../src/graphs/numberOfIslands');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/number-of-islands-goldens.json'), 'utf8'),
);

describe('number of islands shared goldens', () => {
  for (const case_ of goldens) {
    test(String(case_.grid.length), () => {
      const grid = case_.grid.map((row) => row.slice());
      expect(numIslands(grid)).toBe(case_.expected);
    });
  }
});

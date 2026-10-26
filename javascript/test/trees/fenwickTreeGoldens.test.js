const fs = require('fs');
const path = require('path');
const { FenwickTree } = require('../../src/trees/fenwickTree');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/fenwick-tree-goldens.json'), 'utf8'),
);

describe('fenwick tree shared goldens', () => {
  for (const { n, adds, checks } of goldens) {
    test(`n=${n}`, () => {
      const ft = new FenwickTree(n);
      for (const [idx, delta] of adds) {
        ft.add(idx, delta);
      }
      for (const row of checks) {
        if (row.prefixAt != null) {
          expect(ft.prefixSum(row.prefixAt)).toBe(row.expected);
        }
        if (row.rangeLeft != null) {
          expect(ft.rangeSum(row.rangeLeft, row.rangeRight)).toBe(row.expected);
        }
      }
    });
  }
});

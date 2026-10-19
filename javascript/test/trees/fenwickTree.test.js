const { FenwickTree } = require('../../src/trees/fenwickTree');

describe('FenwickTree', () => {
  test('prefix and range', () => {
    const ft = new FenwickTree(5);
    [1, 2, 3, 4, 5].forEach((v, i) => ft.add(i, v));
    expect(ft.prefixSum(4)).toBe(15);
    expect(ft.rangeSum(1, 3)).toBe(9);
  });
});

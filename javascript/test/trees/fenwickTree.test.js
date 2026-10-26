const { FenwickTree } = require('../../src/trees/fenwickTree');

describe('FenwickTree', () => {
  test('prefix and range', () => {
    const ft = new FenwickTree(5);
    [1, 2, 3, 4, 5].forEach((v, i) => ft.add(i, v));
    expect(ft.prefixSum(4)).toBe(15);
    expect(ft.rangeSum(1, 3)).toBe(9);
  });

  test('edge themes — empty, single, duplicate, large, invalid', () => {
    const empty = new FenwickTree(0);
    expect(empty.prefixSum(0)).toBe(0);
    const single = new FenwickTree(1);
    single.add(0, 4);
    expect(single.prefixSum(0)).toBe(4);
    const dup = new FenwickTree(2);
    dup.add(0, 1);
    dup.add(0, 2);
    expect(dup.prefixSum(0)).toBe(3);
    const large = new FenwickTree(200);
    for (let i = 0; i < 200; i += 1) large.add(i, 1);
    expect(large.prefixSum(199)).toBe(200);
    expect(() => new FenwickTree(-1)).toThrow();
    const ft = new FenwickTree(2);
    expect(() => ft.add(2, 1)).toThrow();
    expect(() => ft.rangeSum(2, 1)).toThrow();
  });
});

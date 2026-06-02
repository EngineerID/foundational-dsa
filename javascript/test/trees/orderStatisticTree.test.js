const { OrderStatisticTree } = require('../../src/trees/orderStatisticTree');

describe('OrderStatisticTree', () => {
  test('select and rank', () => {
    const ost = new OrderStatisticTree();
    ost.insert(5, '');
    ost.insert(1, '');
    ost.insert(3, '');
    expect(ost.select(2)).toBe(3);
    expect(ost.rank(3)).toBe(2);
  });

  test('select out of range', () => {
    const ost = new OrderStatisticTree();
    ost.insert(1, '');
    expect(() => ost.select(0)).toThrow('k out of range');
    expect(() => ost.select(2)).toThrow('k out of range');
  });

  test('rank missing key', () => {
    const ost = new OrderStatisticTree();
    ost.insert(10, '');
    ost.insert(20, '');
    expect(ost.rank(15)).toBe(1);
  });

  test('single element', () => {
    const ost = new OrderStatisticTree();
    ost.insert(42, '');
    expect(ost.select(1)).toBe(42);
    expect(ost.rank(42)).toBe(1);
  });
});

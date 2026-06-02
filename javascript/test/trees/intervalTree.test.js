const { Interval, IntervalTree } = require('../../src/trees/intervalTree');

describe('IntervalTree', () => {
  test('overlap search', () => {
    const tree = new IntervalTree();
    tree.insert(new Interval(15, 20));
    tree.insert(new Interval(10, 12));
    expect(tree.overlapSearch(new Interval(21, 22))).toEqual([]);
    expect(tree.overlapSearch(new Interval(11, 11))).toHaveLength(1);
  });

  test('invalid interval', () => {
    expect(() => new Interval(5, 3)).toThrow('low > high');
  });

  test('multiple overlaps', () => {
    const tree = new IntervalTree();
    tree.insert(new Interval(1, 5));
    tree.insert(new Interval(3, 7));
    tree.insert(new Interval(8, 10));
    expect(tree.overlapSearch(new Interval(4, 4))).toHaveLength(2);
  });

  test('non overlapping query', () => {
    const tree = new IntervalTree();
    tree.insert(new Interval(1, 2));
    expect(tree.overlapSearch(new Interval(3, 4))).toEqual([]);
  });
});

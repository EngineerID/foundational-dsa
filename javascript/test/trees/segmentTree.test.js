const { SegmentTree } = require('../../src/trees/segmentTree');

describe('SegmentTree', () => {
  test('range sum and update', () => {
    const st = new SegmentTree([1, 3, 5, 7]);
    expect(st.rangeSum(0, 3)).toBe(16);
    st.update(1, 10);
    expect(st.rangeSum(0, 3)).toBe(23);
  });
});

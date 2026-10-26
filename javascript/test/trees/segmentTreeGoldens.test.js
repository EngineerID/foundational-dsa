const fs = require('fs');
const path = require('path');
const { SegmentTree } = require('../../src/trees/segmentTree');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/segment-tree-goldens.json'),
    'utf8',
  ),
);

describe('segment tree shared goldens', () => {
  for (const case_ of goldens) {
    test('range sum and update', () => {
      const st = new SegmentTree(case_.initial);
      for (const q of case_.rangeSum) {
        expect(st.rangeSum(q.left, q.right)).toBe(q.sum);
      }
      st.update(case_.update.index, case_.update.value);
      for (const q of case_.rangeSumAfter) {
        expect(st.rangeSum(q.left, q.right)).toBe(q.sum);
      }
    });
  }
});

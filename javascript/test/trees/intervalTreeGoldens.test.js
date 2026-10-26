const fs = require('fs');
const path = require('path');
const { Interval, IntervalTree } = require('../../src/trees/intervalTree');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/interval-tree-goldens.json'), 'utf8'));

describe('interval tree shared goldens', () => {
  for (const case_ of goldens) {
    test('overlap', () => {
      const tree = new IntervalTree();
      if (case_.expectError) {
        expect(() => {
          for (const [low, high] of case_.inserts) tree.insert(new Interval(low, high));
        }).toThrow();
        return;
      }
      for (const [low, high] of case_.inserts) tree.insert(new Interval(low, high));
      const [ql, qh] = case_.query;
      const got = tree.overlapSearch(new Interval(ql, qh)).map((i) => [i.low, i.high]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      expect(got).toEqual(case_.overlaps);
    });
  }
});

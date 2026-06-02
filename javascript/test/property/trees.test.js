const { BST } = require('../../src/trees/bst');
const { AVLTree } = require('../../src/trees/avlTree');
const { OrderStatisticTree } = require('../../src/trees/orderStatisticTree');
const { IntervalTree, Interval } = require('../../src/trees/intervalTree');
const { PROPERTY_TRIALS, seededRng, isSorted } = require('../_propertyHelpers');

function avlBalanced(tree, node) {
  if (!node) return true;
  const bf = tree._balanceFactor(node);
  if (bf < -1 || bf > 1) return false;
  return avlBalanced(tree, node.left) && avlBalanced(tree, node.right);
}

describe('property trees', () => {
  test('BST in-order sorted', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const tree = new BST();
      const n = Math.floor(rng() * 25);
      for (let i = 0; i < n; i++) tree.insert(Math.floor(rng() * 51), String(i));
      expect(isSorted(tree.inOrder())).toBe(true);
    }
  });

  test('AVL balance factor', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const tree = new AVLTree();
      for (let i = 0; i < Math.floor(rng() * 30); i++) {
        const k = Math.floor(rng() * 41);
        tree.insert(k, String(k));
      }
      if (tree.getRoot()) expect(avlBalanced(tree, tree.getRoot())).toBe(true);
    }
  });

  test('order statistic rank/select', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const ost = new OrderStatisticTree();
      const keys = new Set();
      const m = 1 + Math.floor(rng() * 20);
      for (let i = 0; i < m; i++) keys.add(Math.floor(rng() * 31));
      [...keys].sort((a, b) => a - b).forEach((k) => ost.insert(k, String(k)));
      for (let k = 1; k <= keys.size; k++) {
        const key = ost.select(k);
        expect(ost.rank(key)).toBe(k);
      }
    }
  });

  test('interval overlap', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const tree = new IntervalTree();
      const intervals = [];
      for (let i = 0; i < Math.floor(rng() * 15); i++) {
        const lo = Math.floor(rng() * 21);
        const hi = lo + Math.floor(rng() * 6);
        const iv = new Interval(lo, hi);
        intervals.push(iv);
        tree.insert(iv);
      }
      const qLo = Math.floor(rng() * 16);
      const qHi = qLo + Math.floor(rng() * 9);
      const query = new Interval(qLo, qHi);
      const got = new Set(tree.overlapSearch(query).map((x) => `${x.low},${x.high}`));
      const expected = new Set(
        intervals.filter((iv) => iv.overlaps(query)).map((x) => `${x.low},${x.high}`),
      );
      expect(got).toEqual(expected);
    }
  });
});

"""Property tests: tree invariants (100 seeded trials)."""

from dsa.trees.avl_tree import AVLTree
from dsa.trees.bst import BST
from dsa.trees.interval_tree import Interval, IntervalTree
from dsa.trees.order_statistic_tree import OrderStatisticTree

from _property_helpers import PROPERTY_TRIALS, is_sorted, seeded_rng


def _avl_balanced(tree: AVLTree, node) -> bool:
    if node is None:
        return True
    bf = tree._balance_factor(node)
    if bf not in (-1, 0, 1):
        return False
    return _avl_balanced(tree, node.left) and _avl_balanced(tree, node.right)


def test_bst_inorder_sorted():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        tree = BST[int, str]()
        keys = [rng.randint(0, 50) for _ in range(rng.randint(0, 25))]
        for k in keys:
            tree.insert(k, str(k))
        assert is_sorted(tree.in_order())


def test_avl_balance():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        tree = AVLTree[int, str]()
        for _ in range(rng.randint(0, 30)):
            k = rng.randint(0, 40)
            tree.insert(k, str(k))
            if rng.random() < 0.3 and tree.get_root():
                try:
                    tree.delete(k)
                except Exception:
                    pass
        if tree.get_root():
            assert _avl_balanced(tree, tree.get_root())


def test_order_statistic_rank_select():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        ost = OrderStatisticTree[int, str]()
        keys = sorted({rng.randint(0, 30) for _ in range(rng.randint(1, 20))})
        for k in keys:
            ost.insert(k, str(k))
        for k in range(1, len(keys) + 1):
            key = ost.select(k)
            assert ost.rank(key) == k


def _brute_overlap(intervals: list[Interval], query: Interval) -> list[Interval]:
    return [iv for iv in intervals if iv.overlaps(query)]


def test_interval_tree_overlap():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        tree = IntervalTree()
        intervals: list[Interval] = []
        for _ in range(rng.randint(0, 15)):
            lo = rng.randint(0, 20)
            hi = lo + rng.randint(0, 5)
            iv = Interval(lo, hi)
            intervals.append(iv)
            tree.insert(iv)
        q_lo = rng.randint(0, 15)
        q_hi = q_lo + rng.randint(0, 8)
        query = Interval(q_lo, q_hi)
        got = set((x.low, x.high) for x in tree.overlap_search(query))
        expected = set((x.low, x.high) for x in _brute_overlap(intervals, query))
        assert got == expected

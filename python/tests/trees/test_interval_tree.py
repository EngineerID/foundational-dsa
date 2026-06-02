import pytest

from dsa.trees.interval_tree import Interval, IntervalTree


def test_overlap_search():
    tree = IntervalTree()
    tree.insert(Interval(15, 20))
    tree.insert(Interval(10, 12))
    assert tree.overlap_search(Interval(21, 22)) == []
    assert len(tree.overlap_search(Interval(11, 11))) == 1


def test_invalid_interval():
    with pytest.raises(ValueError, match="low > high"):
        Interval(5, 3)


def test_multiple_overlaps():
    tree = IntervalTree()
    tree.insert(Interval(1, 5))
    tree.insert(Interval(3, 7))
    tree.insert(Interval(8, 10))
    result = tree.overlap_search(Interval(4, 4))
    assert len(result) == 2


def test_non_overlapping_query():
    tree = IntervalTree()
    tree.insert(Interval(1, 2))
    assert tree.overlap_search(Interval(3, 4)) == []

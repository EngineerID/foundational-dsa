import pytest

from dsa.trees.fenwick_tree import FenwickTree


def test_prefix_and_range():
    ft = FenwickTree(5)
    for i, v in enumerate([1, 2, 3, 4, 5]):
        ft.add(i, v)
    assert ft.prefix_sum(4) == 15
    assert ft.range_sum(1, 3) == 9


def test_invalid():
    with pytest.raises(ValueError):
        FenwickTree(-1)
    ft = FenwickTree(2)
    with pytest.raises(IndexError):
        ft.add(2, 1)


def test_empty_single_duplicate_large():
    empty = FenwickTree(0)
    assert empty.prefix_sum(0) == 0
    single = FenwickTree(1)
    single.add(0, 4)
    assert single.prefix_sum(0) == 4
    dup = FenwickTree(2)
    dup.add(0, 1)
    dup.add(0, 2)
    assert dup.prefix_sum(0) == 3
    large = FenwickTree(200)
    for i in range(200):
        large.add(i, 1)
    assert large.prefix_sum(199) == 200

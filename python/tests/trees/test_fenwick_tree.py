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

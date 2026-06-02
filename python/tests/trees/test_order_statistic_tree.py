import pytest

from dsa.trees.order_statistic_tree import OrderStatisticTree


def test_select_and_rank():
    ost = OrderStatisticTree[int, str]()
    ost.insert(5, "")
    ost.insert(1, "")
    ost.insert(3, "")
    assert ost.select(2) == 3
    assert ost.rank(3) == 2


def test_select_out_of_range():
    ost = OrderStatisticTree[int, str]()
    ost.insert(1, "")
    with pytest.raises(ValueError, match="k out of range"):
        ost.select(0)
    with pytest.raises(ValueError, match="k out of range"):
        ost.select(2)


def test_rank_missing_key():
    ost = OrderStatisticTree[int, str]()
    ost.insert(10, "")
    ost.insert(20, "")
    assert ost.rank(15) == 1


def test_single_element():
    ost = OrderStatisticTree[int, str]()
    ost.insert(42, "")
    assert ost.select(1) == 42
    assert ost.rank(42) == 1

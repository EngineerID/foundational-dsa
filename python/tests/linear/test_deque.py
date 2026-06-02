import pytest

from dsa.linear.deque import Deque


def test_deque_both_ends():
    d = Deque()
    d.add_first(1)
    d.add_last(2)
    assert d.remove_first() == 1
    assert d.remove_last() == 2
    assert d.is_empty()


def test_deque_remove_last_empty():
    d = Deque()
    with pytest.raises(RuntimeError, match="empty"):
        d.remove_last()


def test_deque_alternating_inserts():
    d = Deque()
    d.add_first(0)
    d.add_last(1)
    d.add_first(-1)
    assert d.remove_first() == -1
    assert d.remove_last() == 1
    assert d.remove_first() == 0
    assert d.is_empty()

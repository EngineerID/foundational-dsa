import pytest

from dsa.heaps.priority_queue import PriorityQueue


def test_priority_queue_order():
    pq = PriorityQueue[str]()
    pq.insert("b")
    pq.insert("a")
    assert pq.extract_min() == "a"
    assert pq.extract_min() == "b"
    assert pq.is_empty()


def test_peek_without_removal():
    pq = PriorityQueue[int]()
    pq.insert(10)
    pq.insert(5)
    assert pq.peek() == 5
    assert pq.size() == 2


def test_empty_queue():
    pq = PriorityQueue[int]()
    assert pq.is_empty()
    with pytest.raises(RuntimeError, match="Heap is empty"):
        pq.peek()


def test_decrease_key_via_heap():
    pq = PriorityQueue[int]()
    pq.insert(7)
    pq.insert(3)
    pq.decrease_key(0, 1)
    assert pq.extract_min() == 1


def test_exposes_backing_heap():
    pq = PriorityQueue[int]()
    pq.insert(4)
    assert pq.heap().size() == 1

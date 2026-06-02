import pytest

from dsa.heaps.binary_heap import BinaryHeap


def test_insert_and_extract_min():
    heap = BinaryHeap[int]()
    heap.insert(5)
    heap.insert(2)
    heap.insert(8)
    assert heap.extract_min() == 2
    assert heap.peek() == 5


def test_heapify_and_decrease_key():
    heap = BinaryHeap[int]()
    heap.heapify([9, 4, 7, 1, 3])
    assert heap.peek() == 1
    heap.decrease_key(0, 0)
    assert heap.extract_min() == 0


def test_empty_extract_raises():
    heap = BinaryHeap[int]()
    with pytest.raises(RuntimeError, match="Heap is empty"):
        heap.extract_min()


def test_decrease_key_invalid_index():
    heap = BinaryHeap[int]()
    heap.insert(1)
    with pytest.raises(IndexError):
        heap.decrease_key(5, 0)


def test_decrease_key_increase_rejected():
    heap = BinaryHeap[int]()
    heap.insert(3)
    with pytest.raises(ValueError, match="must not be greater"):
        heap.decrease_key(0, 10)

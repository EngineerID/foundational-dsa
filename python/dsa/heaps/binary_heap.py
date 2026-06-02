# Heaps — Binary Min-Heap

"""Array-based binary min-heap.

insert/extract_min/decrease_key O(log n); heapify O(n); peek O(1).
"""

from __future__ import annotations

from typing import Generic, Iterable, TypeVar

T = TypeVar("T")


class BinaryHeap(Generic[T]):
    """Binary min-heap backed by a dynamic array."""

    def __init__(self) -> None:
        """Creates an empty heap.

        Time: O(1); Space: O(1).
        """
        self._heap: list[T] = []

    def size(self) -> int:
        """Returns the number of elements.

        Time: O(1); Space: O(1).
        """
        return len(self._heap)

    def peek(self) -> T:
        """Returns the minimum without removing.

        Time: O(1); Space: O(1).
        """
        if not self._heap:
            raise RuntimeError("Heap is empty")
        return self._heap[0]

    def insert(self, value: T) -> None:
        """Inserts a value.

        Time: O(log n); Space: O(1).
        """
        self._heap.append(value)
        self._sift_up(len(self._heap) - 1)

    def extract_min(self) -> T:
        """Removes and returns the minimum.

        Time: O(log n); Space: O(1).
        """
        if not self._heap:
            raise RuntimeError("Heap is empty")
        minimum = self._heap[0]
        last = self._heap.pop()
        if self._heap:
            self._heap[0] = last
            self._sift_down(0)
        return minimum

    def decrease_key(self, index: int, new_value: T) -> None:
        """Decreases the key at index to new_value (must be smaller).

        Time: O(log n); Space: O(1).
        """
        if index < 0 or index >= len(self._heap):
            raise IndexError(index)
        if new_value > self._heap[index]:
            raise ValueError("New value must not be greater")
        self._heap[index] = new_value
        self._sift_up(index)

    def index_of(self, value: T) -> int:
        """Returns the index of an element, or -1.

        Time: O(n); Space: O(1).
        """
        try:
            return self._heap.index(value)
        except ValueError:
            return -1

    def heapify(self, items: Iterable[T]) -> None:
        """Builds a min-heap from items in place on the internal array.

        Time: O(n); Space: O(n).
        """
        self._heap = list(items)
        for i in range(self._parent(len(self._heap) - 1), -1, -1):
            self._sift_down(i)

    def _sift_up(self, index: int) -> None:
        while index > 0:
            parent = self._parent(index)
            if self._heap[index] >= self._heap[parent]:
                break
            self._swap(index, parent)
            index = parent

    def _sift_down(self, index: int) -> None:
        n = len(self._heap)
        while True:
            left = self._left_child(index)
            right = self._right_child(index)
            smallest = index
            if left < n and self._heap[left] < self._heap[smallest]:
                smallest = left
            if right < n and self._heap[right] < self._heap[smallest]:
                smallest = right
            if smallest == index:
                break
            self._swap(index, smallest)
            index = smallest

    @staticmethod
    def _parent(i: int) -> int:
        return (i - 1) // 2

    @staticmethod
    def _left_child(i: int) -> int:
        return 2 * i + 1

    @staticmethod
    def _right_child(i: int) -> int:
        return 2 * i + 2

    def _swap(self, i: int, j: int) -> None:
        self._heap[i], self._heap[j] = self._heap[j], self._heap[i]

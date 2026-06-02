# Heaps — Priority Queue (min)

"""Min-priority queue for scheduling by priority.

Technique: Binary min-heap priority queue
Invariant: Heap property on underlying BinaryHeap.
insert/extractMin/peek: Time O(log n); Space O(n).
"""

from __future__ import annotations

from typing import Generic, TypeVar

from dsa.heaps.binary_heap import BinaryHeap

T = TypeVar("T")


class PriorityQueue(Generic[T]):
    """Min-priority queue where the value itself is the priority."""

    def __init__(self) -> None:
        self._heap = BinaryHeap[T]()

    def insert(self, value: T) -> None:
        """Inserts a value with its priority (the value itself).

        Time: O(log n); Space: O(1).
        """
        self._heap.insert(value)

    def peek(self) -> T:
        """Returns the minimum priority element.

        Time: O(1); Space: O(1).
        """
        return self._heap.peek()

    def extract_min(self) -> T:
        """Removes and returns the minimum.

        Time: O(log n); Space: O(1).
        """
        return self._heap.extract_min()

    def decrease_key(self, index: int, new_value: T) -> None:
        """Decreases the key at index.

        Time: O(log n); Space: O(1).
        """
        self._heap.decrease_key(index, new_value)

    def is_empty(self) -> bool:
        """Returns whether the queue is empty.

        Time: O(1); Space: O(1).
        """
        return self._heap.size() == 0

    def size(self) -> int:
        """Returns the underlying heap size.

        Time: O(1); Space: O(1).
        """
        return self._heap.size()

    def heap(self) -> BinaryHeap[T]:
        """Exposes the backing heap for algorithms that need index tracking.

        Time: O(1); Space: O(1).
        """
        return self._heap

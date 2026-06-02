# Linear — Dynamic Array

"""Resizable array-backed list with amortized append.

Technique: Dynamic array doubling
Invariant: size <= capacity; length tracks element count.
append/get/set: Time O(1) amortized; resize O(n); Space O(n).
"""

_DEFAULT_CAPACITY = 4


class DynamicArray:
    """Resizable array backed by a Python list (doubling growth)."""

    def __init__(self) -> None:
        """Creates an empty dynamic array.

        Time: O(1); Space: O(1).
        """
        self._data: list = [None] * _DEFAULT_CAPACITY
        self._size = 0

    def size(self) -> int:
        """Returns the number of elements.

        Time: O(1); Space: O(1).
        """
        return self._size

    def add(self, value) -> None:
        """Appends an element (amortized O(1)).

        Time: amortized O(1); Space: O(n) when resize.
        """
        self._ensure_capacity(self._size + 1)
        self._data[self._size] = value
        self._size += 1

    def get(self, index: int):
        """Returns the element at ``index``.

        Time: O(1); Space: O(1).
        """
        self._check_index(index)
        return self._data[index]

    def set(self, index: int, value) -> None:
        """Sets the element at ``index``.

        Time: O(1); Space: O(1).
        """
        self._check_index(index)
        self._data[index] = value

    def remove(self, index: int):
        """Removes and returns the element at ``index``.

        Time: O(n); Space: O(1).
        """
        self._check_index(index)
        removed = self._data[index]
        for i in range(index, self._size - 1):
            self._data[i] = self._data[i + 1]
        self._size -= 1
        self._data[self._size] = None
        return removed

    def _ensure_capacity(self, min_capacity: int) -> None:
        if min_capacity <= len(self._data):
            return
        new_cap = max(len(self._data) * 2, min_capacity)
        self._data.extend([None] * (new_cap - len(self._data)))

    def _check_index(self, index: int) -> None:
        if index < 0 or index >= self._size:
            raise IndexError(index)

# Hashing — Separate Chaining

"""Hash map with linked-list buckets and load-factor resize.

Technique: Separate chaining
Invariant: Load factor <= 0.75 before resize.
put/get/remove: Time O(1) average; resize O(n); Space O(n).
"""

from __future__ import annotations

_LOAD_FACTOR = 0.75


class HashTableChaining:
    """Hash table with separate chaining and load-factor resizing."""

    def __init__(self) -> None:
        """Creates a table with initial capacity 8.

        Time: O(1); Space: O(1).
        """
        self._buckets: list[list[tuple[object, object]]] = [[] for _ in range(8)]
        self._size = 0

    def put(self, key, value) -> None:
        """Inserts or updates a key-value pair.

        Time: O(1) average; Space: O(1).
        """
        idx = self._index(key)
        bucket = self._buckets[idx]
        for i, (k, _) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        bucket.append((key, value))
        self._size += 1
        if self._size / len(self._buckets) > _LOAD_FACTOR:
            self._resize()

    def get(self, key):
        """Returns the value for a key, or None.

        Time: O(1) average; Space: O(1).
        """
        for k, v in self._buckets[self._index(key)]:
            if k == key:
                return v
        return None

    def remove(self, key) -> bool:
        """Removes a key if present.

        Time: O(1) average; Space: O(1).
        """
        idx = self._index(key)
        bucket = self._buckets[idx]
        for i, (k, _) in enumerate(bucket):
            if k == key:
                del bucket[i]
                self._size -= 1
                return True
        return False

    def size(self) -> int:
        """Returns the number of entries.

        Time: O(1); Space: O(1).
        """
        return self._size

    def _index(self, key) -> int:
        return hash(key) % len(self._buckets)

    def _resize(self) -> None:
        old = self._buckets
        self._buckets = [[] for _ in range(len(old) * 2)]
        self._size = 0
        for bucket in old:
            for key, value in bucket:
                self.put(key, value)

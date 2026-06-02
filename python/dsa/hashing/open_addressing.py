# Hashing — Open Addressing

"""Hash table with open addressing and swappable probing strategies.

Average insert/lookup O(1); clustering varies by strategy.
"""

from __future__ import annotations

from enum import Enum, auto

_LOAD_FACTOR = 0.7
_DELETED = object()


class ProbingStrategy(Enum):
    """Probing strategy for collision resolution."""

    LINEAR = auto()
    QUADRATIC = auto()
    DOUBLE_HASHING = auto()


class HashTableOpenAddressing:
    """Hash table with open addressing and tombstone deletion."""

    def __init__(self, strategy: ProbingStrategy = ProbingStrategy.LINEAR) -> None:
        """Creates a table with the given probing strategy.

        Time: O(1); Space: O(1).
        """
        self._strategy = strategy
        self._keys: list[object | None] = [None] * 8
        self._values: list[object | None] = [None] * 8
        self._size = 0

    def put(self, key, value) -> None:
        """Inserts or updates a key-value pair.

        Time: O(1) average; Space: O(1).
        """
        self._ensure_capacity()
        first_deleted = -1
        for i in range(len(self._keys)):
            idx = self._probe(key, i)
            slot = self._keys[idx]
            if slot is None:
                target = first_deleted if first_deleted >= 0 else idx
                self._keys[target] = key
                self._values[target] = value
                self._size += 1
                return
            if slot is _DELETED:
                if first_deleted < 0:
                    first_deleted = idx
            elif slot == key:
                self._values[idx] = value
                return

    def get(self, key):
        """Returns the value for a key, or None.

        Time: O(1) average; Space: O(1).
        """
        for i in range(len(self._keys)):
            idx = self._probe(key, i)
            slot = self._keys[idx]
            if slot is None:
                return None
            if slot is not _DELETED and slot == key:
                return self._values[idx]
        return None

    def remove(self, key) -> bool:
        """Removes a key if present.

        Time: O(1) average; Space: O(1).
        """
        for i in range(len(self._keys)):
            idx = self._probe(key, i)
            slot = self._keys[idx]
            if slot is None:
                return False
            if slot is not _DELETED and slot == key:
                self._keys[idx] = _DELETED
                self._values[idx] = None
                self._size -= 1
                return True
        return False

    def _probe(self, key, i: int) -> int:
        n = len(self._keys)
        h1 = hash(key) % n
        if self._strategy is ProbingStrategy.LINEAR:
            return (h1 + i) % n
        if self._strategy is ProbingStrategy.QUADRATIC:
            return (h1 + i * i) % n
        h2 = 1 + (hash(key) % (n - 1))
        return (h1 + i * h2) % n

    def _ensure_capacity(self) -> None:
        if self._size / len(self._keys) < _LOAD_FACTOR:
            return
        old_keys = self._keys
        old_values = self._values
        self._keys = [None] * (len(old_keys) * 2)
        self._values = [None] * len(self._keys)
        self._size = 0
        for k, v in zip(old_keys, old_values):
            if k is not None and k is not _DELETED:
                self.put(k, v)

# Linear — LRU cache

"""Least-recently-used cache with O(1) get/put.

Technique: Hash map + doubly linked list
Invariant: MRU at head, LRU at tail.
get/put: Time O(1); Space O(capacity).
"""

from __future__ import annotations

from collections import OrderedDict


class LRUCache:
    """Integer keys and values."""

    def __init__(self, capacity: int) -> None:
        if capacity <= 0:
            raise ValueError("capacity must be positive")
        self._cap = capacity
        self._map: OrderedDict[int, int] = OrderedDict()

    def get(self, key: int) -> int:
        """Returns value or -1. Time O(1)."""
        if key not in self._map:
            return -1
        self._map.move_to_end(key)
        return self._map[key]

    def put(self, key: int, value: int) -> None:
        """Time O(1)."""
        if key in self._map:
            self._map.move_to_end(key)
        self._map[key] = value
        if len(self._map) > self._cap:
            self._map.popitem(last=False)

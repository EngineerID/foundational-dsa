# Practice — LRU cache design (LeetCode 146 style)

from dsa.linear.lru_cache import LRUCache as _LRUCache


class LRUCacheDesign:
    """O(1) get/put LRU cache with integer keys and values."""

    def __init__(self, capacity: int) -> None:
        self._cache = _LRUCache(capacity)

    def get(self, key: int) -> int:
        return self._cache.get(key)

    def put(self, key: int, value: int) -> None:
        self._cache.put(key, value)

# Lru Cache

Topic: **linear** / `lru-cache`

Least-recently-used cache with O(1) get and put.

**Complexity:** get/put: Time O(1); Space O(capacity).

Capacity must be **positive**; `get` returns **-1** for missing keys.

**Walkthrough:** [Worked examples — Lru Cache](../../worked-examples.md#lru-cache-capacity-2).

## Implementations

| Language | Source |
|----------|--------|
| Java | [`LRUCache`](../../../java/src/main/java/com/dsa/examples/linear/LRUCache.java) |
| Python | [`lru_cache`](../../../python/dsa/linear/lru_cache.py) |
| JavaScript | [`lruCache`](../../../javascript/src/linear/lruCache.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_lru_cache`](../../../python/tests/linear/test_lru_cache.py) |
| JavaScript | [`lruCache.test.js`](../../../javascript/test/linear/lruCache.test.js) |
| Java | [`LRUCacheTest.java`](../../../java/src/test/java/com/dsa/examples/linear/LRUCacheTest.java) |

**Property-style checks:** Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/linear/`.

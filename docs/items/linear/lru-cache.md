# Lru Cache

Topic: **linear** / `lru-cache`

## Overview

Least-recently-used cache with O(1) get and put.


Capacity must be **positive**; `get` returns **-1** for missing keys.

**Practice:** [LRU cache design (problem 10)](../../practice-problems.md#10-lru-cache-design) · **Walkthrough:** [Worked examples — Lru Cache](../../worked-examples.md#lru-cache-capacity-2) · run `npm run demo -- lru-cache` in all three languages.

## Complexity

get/put: Time O(1); Space O(capacity).
| | Time | Space |
|---|------|-------|
| Primary | Time O(1) | Space O(capacity) |

## Code links

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

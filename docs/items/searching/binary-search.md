# Binary Search

Topic: **searching** / `binary-search`

Find a key in a sorted array. `search` returns any matching index; `firstOccurrence` and `lastOccurrence` return the leftmost and rightmost index when duplicates exist.

**Walkthrough:** step-by-step search on a sorted array in [Worked examples — Binary search](../../worked-examples.md#binary-search-on-a-sorted-array).

**Shared regression vectors:** [`tools/binary-search-goldens.json`](../../../tools/binary-search-goldens.json) (loaded by trilingual golden tests).

## Implementations

| Language | Source |
|----------|--------|
| Java | [`BinarySearch`](../../../java/src/main/java/com/dsa/examples/searching/BinarySearch.java) |
| Python | [`binary_search`](../../../python/dsa/searching/binary_search.py) |
| JavaScript | [`binarySearch`](../../../javascript/src/searching/binarySearch.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_binary_search`](../../../python/tests/searching/test_binary_search.py) |
| JavaScript | [`binarySearch.test.js`](../../../javascript/test/searching/binarySearch.test.js) |
| JavaScript | [`binarySearchGoldens.test.js`](../../../javascript/test/searching/binarySearchGoldens.test.js) |
| Python | [`test_binary_search_goldens`](../../../python/tests/searching/test_binary_search_goldens.py) |
| Java | [`BinarySearchGoldensTest`](../../../java/src/test/java/com/dsa/examples/searching/BinarySearchGoldensTest.java) |

Property-style checks: Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py), Java [`PropertySearchingTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySearchingTest.java), JavaScript [`searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).

Java unit tests also run via Maven in `java/src/test/java/com/dsa/examples/searching/`.

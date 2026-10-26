# Binary Search

Topic: **searching** / `binary-search`

## Overview

Find a key in a sorted array, including first/last duplicate boundaries.


Requires a **sorted** array. `firstOccurrence` / `lastOccurrence` bound duplicate runs. `null` or empty → `-1`.


**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Walkthrough:** [Worked examples — Binary Search](../../worked-examples.md#binary-search-on-a-sorted-array).

**Shared regression vectors:** [`tools/binary-search-goldens.json`](../../../tools/binary-search-goldens.json).

## Complexity

search/firstOccurrence/lastOccurrence: Time O(log n); Space O(1).


## Code links

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
| Java | [`BinarySearchTest.java`](../../../java/src/test/java/com/dsa/examples/searching/BinarySearchTest.java) |
| Python | [`test_binary_search_goldens.py`](../../../python/tests/searching/test_binary_search_goldens.py) |
| JavaScript | [`binarySearchGoldens.test.js`](../../../javascript/test/searching/binarySearchGoldens.test.js) |
| Java | [`BinarySearchGoldensTest`](../../../java/src/test/java/com/dsa/examples/searching/BinarySearchGoldensTest.java) |

**Property-style checks:** Java [`PropertySearchingTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySearchingTest.java); Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js); JavaScript [`searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/searching/`.

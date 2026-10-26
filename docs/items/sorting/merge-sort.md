# Merge Sort

Topic: **sorting** / `merge-sort`

## Overview

Return a stably sorted copy via top-down or bottom-up merge passes.


Returns a **new sorted array** (stable); does not require in-place mutation of the input.


**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Walkthrough:** [Worked examples — Merge Sort](../../worked-examples.md#merge-sort-top-down).

## Complexity

sort/sortBottomUp: Time O(n log n); Space O(n).
| | Time | Space |
|---|------|-------|
| Primary | Time O(n log n) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`MergeSort`](../../../java/src/main/java/com/dsa/examples/sorting/MergeSort.java) |
| Python | [`merge_sort`](../../../python/dsa/sorting/merge_sort.py) |
| JavaScript | [`mergeSort`](../../../javascript/src/sorting/mergeSort.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_merge_sort`](../../../python/tests/sorting/test_merge_sort.py) |
| JavaScript | [`mergeSort.test.js`](../../../javascript/test/sorting/mergeSort.test.js) |
| Java | [`SortingTest.java`](../../../java/src/test/java/com/dsa/examples/sorting/SortingTest.java) |

**Property-style checks:** Java [`PropertySortsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySortsTest.java); Python [`test_property_sorts`](../../../python/tests/test_property_sorts.py); JavaScript [`property/sorts.test.js`](../../../javascript/test/property/sorts.test.js); Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/sorting/`.

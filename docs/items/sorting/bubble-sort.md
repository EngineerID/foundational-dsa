# Bubble Sort

Topic: **sorting** / `bubble-sort`

## Overview

Sort an array in ascending order in place.


Sorts **in place** ascending; empty array is a no-op.


**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Worked example:** Pass adjacent swaps on `[3, 1, 2]` → `[1, 2, 3]` in place after sufficient passes.

**More:** [Topic index](../../worked-examples.md#bubble-sort) · `npm run demo -- bubble-sort`

## Complexity

sort: Time O(n²); Space O(1).

| | Time | Space |
|---|------|-------|
| Primary | Time O(n²) | Space O(1) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`BubbleSort`](../../../java/src/main/java/com/dsa/examples/sorting/BubbleSort.java) |
| Python | [`bubble_sort`](../../../python/dsa/sorting/bubble_sort.py) |
| JavaScript | [`bubbleSort`](../../../javascript/src/sorting/bubbleSort.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_bubble_sort`](../../../python/tests/sorting/test_bubble_sort.py) |
| JavaScript | [`bubbleSort.test.js`](../../../javascript/test/sorting/bubbleSort.test.js) |
| Java | [`SortingTest.java`](../../../java/src/test/java/com/dsa/examples/sorting/SortingTest.java) |

**Property-style checks:** Java [`PropertySortsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySortsTest.java); Python [`test_property_sorts`](../../../python/tests/test_property_sorts.py); JavaScript [`property/sorts.test.js`](../../../javascript/test/property/sorts.test.js); Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/sorting/`.

# Quick Select

Topic: **searching** / `quick-select`

## Overview

Find the k-th smallest element in an unordered array.


**`k` is 1-based** (`k=1` is the minimum). Empty array or `k` outside `1..n` **raises** in all three languages. Input is not mutated (defensive copy).


**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Walkthrough:** [Worked examples — Quick Select](../../worked-examples.md#quick-select-k-th-order-statistic).

## Complexity

select: Time O(n) average, O(n²) worst; Space O(1).

| | Time | Space |
|---|------|-------|
| Primary | Time O(n) | Space O(1) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`QuickSelect`](../../../java/src/main/java/com/dsa/examples/searching/QuickSelect.java) |
| Python | [`quick_select`](../../../python/dsa/searching/quick_select.py) |
| JavaScript | [`quickSelect`](../../../javascript/src/searching/quickSelect.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_quick_select`](../../../python/tests/searching/test_quick_select.py) |
| JavaScript | [`quickSelect.test.js`](../../../javascript/test/searching/quickSelect.test.js) |
| Java | [`QuickSelectTest.java`](../../../java/src/test/java/com/dsa/examples/searching/QuickSelectTest.java) |

**Property-style checks:** Java [`PropertySearchingTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySearchingTest.java); Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js); JavaScript [`searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/searching/`.

# Dynamic Array

Topic: **linear** / `dynamic-array`

## Overview

Resizable array-backed list with amortized append.


Out-of-range `get` raises; empty structure has `size() == 0`.


**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Worked example:** [Topic index](../../worked-examples.md#dynamic-array) (summary) · run `npm run demo -- dynamic-array` in all three languages.

## Complexity

append/get/set: Time O(1) amortized; resize O(n); Space O(n).


## Code links

| Language | Source |
|----------|--------|
| Java | [`DynamicArray`](../../../java/src/main/java/com/dsa/examples/linear/DynamicArray.java) |
| Python | [`dynamic_array`](../../../python/dsa/linear/dynamic_array.py) |
| JavaScript | [`dynamicArray`](../../../javascript/src/linear/dynamicArray.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_dynamic_array`](../../../python/tests/linear/test_dynamic_array.py) |
| JavaScript | [`dynamicArray.test.js`](../../../javascript/test/linear/dynamicArray.test.js) |
| Java | [`LinearStructuresTest.java`](../../../java/src/test/java/com/dsa/examples/linear/LinearStructuresTest.java) |

**Property-style checks:** Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/linear/`.

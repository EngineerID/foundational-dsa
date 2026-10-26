# Linear Search

Topic: **searching** / `linear-search`

## Overview

Find a target value in an array by sequential scan.


`indexOf` / `index_of` returns the **first** matching index, or `-1`. `null` array → `-1`.


**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Worked example:** Scan `[4, 2, 7, 2]` for `2`: index **1** (first occurrence). For `9` → **-1**.

**More:** [Topic index](../../worked-examples.md#linear-search) · `npm run demo -- linear-search`

**Shared regression vectors:** [`tools/linear-search-goldens.json`](../../../tools/linear-search-goldens.json).

## Complexity

search: Time O(n); Space O(1).

| | Time | Space |
|---|------|-------|
| Primary | Time O(n) | Space O(1) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`LinearSearch`](../../../java/src/main/java/com/dsa/examples/searching/LinearSearch.java) |
| Python | [`linear_search`](../../../python/dsa/searching/linear_search.py) |
| JavaScript | [`linearSearch`](../../../javascript/src/searching/linearSearch.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_linear_search`](../../../python/tests/searching/test_linear_search.py) |
| JavaScript | [`linearSearch.test.js`](../../../javascript/test/searching/linearSearch.test.js) |
| Java | [`LinearSearchTest.java`](../../../java/src/test/java/com/dsa/examples/searching/LinearSearchTest.java) |
| Python | [`test_linear_search_goldens.py`](../../../python/tests/searching/test_linear_search_goldens.py) |
| JavaScript | [`linearSearchGoldens.test.js`](../../../javascript/test/searching/linearSearchGoldens.test.js) |
| Java | [`LinearSearchGoldensTest`](../../../java/src/test/java/com/dsa/examples/searching/LinearSearchGoldensTest.java) |

**Property-style checks:** Java [`PropertySearchingTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySearchingTest.java); Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js); JavaScript [`searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/searching/`.

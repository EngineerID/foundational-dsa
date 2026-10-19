# Linear Search

Topic: **searching** / `linear-search`

`index_of` / `indexOf` scans left to right and returns the **first** index where the target appears, or `-1`.

**Shared regression vectors:** [`tools/linear-search-goldens.json`](../../../tools/linear-search-goldens.json).

## Implementations

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
| JavaScript | [`linearSearchGoldens.test.js`](../../../javascript/test/searching/linearSearchGoldens.test.js) |
| Python | [`test_linear_search_goldens`](../../../python/tests/searching/test_linear_search_goldens.py) |
| Java | [`LinearSearchGoldensTest`](../../../java/src/test/java/com/dsa/examples/searching/LinearSearchGoldensTest.java) |

Property checks: Python/JS [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py) / [`searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js); Java [`PropertySearchingTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySearchingTest.java).

Java unit tests also run via Maven in `java/src/test/java/com/dsa/examples/searching/`.

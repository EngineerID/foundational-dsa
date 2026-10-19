# Counting Sort

Topic: **sorting** / `counting-sort`

Stable sort for non-negative integers in bounded range. sort/sortByDigit: Time O(n + k); Space O(k).

**Non-negative keys only**; negative values raise.

**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Worked example:** [Topic index](../../worked-examples.md#counting-sort) (summary) · run `npm run demo -- counting-sort` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`CountingSort`](../../../java/src/main/java/com/dsa/examples/sorting/CountingSort.java) |
| Python | [`counting_sort`](../../../python/dsa/sorting/counting_sort.py) |
| JavaScript | [`countingSort`](../../../javascript/src/sorting/countingSort.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_counting_sort`](../../../python/tests/sorting/test_counting_sort.py) |
| JavaScript | [`countingSort.test.js`](../../../javascript/test/sorting/countingSort.test.js) |
| Java | [`SortingTest.java`](../../../java/src/test/java/com/dsa/examples/sorting/SortingTest.java) |

**Property-style checks:** Java [`PropertySortsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySortsTest.java); Python [`test_property_sorts`](../../../python/tests/test_property_sorts.py); JavaScript [`property/sorts.test.js`](../../../javascript/test/property/sorts.test.js); Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/sorting/`.

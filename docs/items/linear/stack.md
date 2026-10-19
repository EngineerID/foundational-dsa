# Stack

Topic: **linear** / `stack`

LIFO stack backed by dynamic array. push/pop/peek: Time O(1) amortized; Space O(n).

Pop/peek on empty stack raises.

**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Worked example:** [Topic index](../../worked-examples.md#stack) (summary) · run `npm run demo -- stack` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`Stack`](../../../java/src/main/java/com/dsa/examples/linear/Stack.java) |
| Python | [`stack`](../../../python/dsa/linear/stack.py) |
| JavaScript | [`stack`](../../../javascript/src/linear/stack.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_stack`](../../../python/tests/linear/test_stack.py) |
| JavaScript | [`stack.test.js`](../../../javascript/test/linear/stack.test.js) |
| Java | [`LinearStructuresTest.java`](../../../java/src/test/java/com/dsa/examples/linear/LinearStructuresTest.java) |

**Property-style checks:** Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js); JavaScript [`searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/linear/`.

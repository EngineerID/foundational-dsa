# Word Search

Topic: **graphs** / `word-search`

## Overview

Find a word in a grid using adjacent cells without reuse.

**Walkthrough:** [Worked examples — Word Search](../../worked-examples.md#word-search-grid-backtracking).

## Complexity

wordSearch: Time O(rows·cols·4^L); Space O(L).

| | Time | Space |
|---|------|-------|
| Primary | Time O(rows·cols·4^L) | Space O(L) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`WordSearch`](../../../java/src/main/java/com/dsa/examples/graphs/WordSearch.java) |
| Python | [`word_search`](../../../python/dsa/graphs/word_search.py) |
| JavaScript | [`wordSearch`](../../../javascript/src/graphs/wordSearch.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_word_search`](../../../python/tests/graphs/test_word_search.py) |
| JavaScript | [`wordSearch.test.js`](../../../javascript/test/graphs/wordSearch.test.js) |
| Java | [`WordSearchTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/WordSearchTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.

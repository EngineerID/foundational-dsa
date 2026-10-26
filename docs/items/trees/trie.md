# Trie

Topic: **trees** / `trie`

## Overview

Prefix tree for string keys with prefix search.


Empty string key is stored at the root when inserted.

**Worked example:** [Topic index](../../worked-examples.md#trie) (summary) · run `npm run demo -- trie` in all three languages.

## Complexity

insert/search/startsWith: Time O(L) key length; Space O(total chars).
| | Time | Space |
|---|------|-------|
| Primary | Time O(L) | Space O(total chars) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`Trie`](../../../java/src/main/java/com/dsa/examples/trees/Trie.java) |
| Python | [`trie`](../../../python/dsa/trees/trie.py) |
| JavaScript | [`trie`](../../../javascript/src/trees/trie.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_trie`](../../../python/tests/trees/test_trie.py) |
| JavaScript | [`trie.test.js`](../../../javascript/test/trees/trie.test.js) |
| Java | [`TreesTest.java`](../../../java/src/test/java/com/dsa/examples/trees/TreesTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.

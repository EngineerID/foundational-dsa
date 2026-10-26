# Aho Corasick

Topic: **strings** / `aho-corasick`

## Overview

Find all occurrences of multiple patterns in text.

**Worked example:** [Topic index](../../worked-examples.md#aho-corasick) (summary) · run `npm run demo -- aho-corasick` in all three languages.

## Complexity

search: Time O(n+m+z); Space O(m).

| | Time | Space |
|---|------|-------|
| Primary | Time O(n+m+z) | Space O(m) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`AhoCorasick`](../../../java/src/main/java/com/dsa/examples/strings/AhoCorasick.java) |
| Python | [`aho_corasick`](../../../python/dsa/strings/aho_corasick.py) |
| JavaScript | [`ahoCorasick`](../../../javascript/src/strings/ahoCorasick.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_aho_corasick`](../../../python/tests/strings/test_aho_corasick.py) |
| JavaScript | [`ahoCorasick.test.js`](../../../javascript/test/strings/ahoCorasick.test.js) |
| Java | [`AhoCorasickTest.java`](../../../java/src/test/java/com/dsa/examples/strings/AhoCorasickTest.java) |

Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/strings/`.

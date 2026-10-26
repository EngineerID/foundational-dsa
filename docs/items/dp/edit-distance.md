# Edit Distance

Topic: **dp** / `edit-distance`

## Overview

Levenshtein edit distance between two strings.


`null` strings treated as empty; classic Levenshtein DP.

**Walkthrough:** [Worked examples — Edit Distance](../../worked-examples.md#edit-distance-kitten-to-sitting).

## Complexity

distance: Time O(nm); Space O(min(n,m)).


## Code links

| Language | Source |
|----------|--------|
| Java | [`EditDistance`](../../../java/src/main/java/com/dsa/examples/dp/EditDistance.java) |
| Python | [`edit_distance`](../../../python/dsa/dp/edit_distance.py) |
| JavaScript | [`editDistance`](../../../javascript/src/dp/editDistance.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_edit_distance`](../../../python/tests/dp/test_edit_distance.py) |
| JavaScript | [`editDistance.test.js`](../../../javascript/test/dp/editDistance.test.js) |
| Java | [`EditDistanceTest.java`](../../../java/src/test/java/com/dsa/examples/dp/EditDistanceTest.java) |

Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/dp/`.

# Union Find

Topic: **unionfind** / `union-find`

## Overview

Disjoint-set connectivity with union and find.


Vertices `0 .. n-1`; out-of-range `find`/`union` raises.


**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Walkthrough:** [Worked examples — Union Find](../../worked-examples.md#union-find-connectivity).

## Complexity

find/union/connected: Time O(α(n)) amortized; Space O(n).


## Code links

| Language | Source |
|----------|--------|
| Java | [`UnionFind`](../../../java/src/main/java/com/dsa/examples/unionfind/UnionFind.java) |
| Python | [`union_find`](../../../python/dsa/unionfind/union_find.py) |
| JavaScript | [`unionFind`](../../../javascript/src/unionfind/unionFind.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_union_find`](../../../python/tests/unionfind/test_union_find.py) |
| JavaScript | [`unionFind.test.js`](../../../javascript/test/unionfind/unionFind.test.js) |
| Java | [`UnionFindTest.java`](../../../java/src/test/java/com/dsa/examples/unionfind/UnionFindTest.java) |

**Property-style checks:** Java [`PropertyUnionFindTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyUnionFindTest.java); Python [`test_property_unionfind`](../../../python/tests/test_property_unionfind.py); JavaScript [`property/unionfind.test.js`](../../../javascript/test/property/unionfind.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/unionfind/`.

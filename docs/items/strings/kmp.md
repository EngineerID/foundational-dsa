# Kmp

Topic: **strings** / `kmp`

Find first occurrence of a pattern in text.

**Complexity:** search: Time O(n + m); Space O(m).

**Empty `pattern` returns `0`** (vacuous match, like `str.find` / `String.indexOf`). Empty `text` with non-empty `pattern` → `-1`. `null` → `-1`.

**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Walkthrough:** [Worked examples — Kmp](../../worked-examples.md#kmp-pattern-search).

**Shared regression vectors:** [`tools/kmp-goldens.json`](../../../tools/kmp-goldens.json).

## Implementations

| Language | Source |
|----------|--------|
| Java | [`KMP`](../../../java/src/main/java/com/dsa/examples/strings/KMP.java) |
| Python | [`kmp`](../../../python/dsa/strings/kmp.py) |
| JavaScript | [`kmp`](../../../javascript/src/strings/kmp.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_kmp`](../../../python/tests/strings/test_kmp.py) |
| JavaScript | [`kmp.test.js`](../../../javascript/test/strings/kmp.test.js) |
| Java | [`KMPTest.java`](../../../java/src/test/java/com/dsa/examples/strings/KMPTest.java) |
| Python | [`test_kmp_goldens.py`](../../../python/tests/strings/test_kmp_goldens.py) |
| JavaScript | [`kmpGoldens.test.js`](../../../javascript/test/strings/kmpGoldens.test.js) |
| Java | [`KMPGoldensTest`](../../../java/src/test/java/com/dsa/examples/strings/KMPGoldensTest.java) |

**Property-style checks:** Java [`PropertyStringsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyStringsTest.java); Python [`test_strings_hypothesis`](../../../python/tests/property/test_strings_hypothesis.py); JavaScript [`property/strings.property.test.js`](../../../javascript/test/property/strings.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/strings/`.

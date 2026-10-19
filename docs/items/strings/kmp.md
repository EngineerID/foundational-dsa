# Kmp

Topic: **strings** / `kmp`

Knuth–Morris–Pratt substring search: `search(text, pattern)` returns the first index of `pattern` in `text`, or `-1`.

**Conventions:** empty `pattern` returns `0` (vacuous match at index 0, same as Python `str.find` / `String.indexOf`). Empty `text` with a non-empty `pattern` returns `-1`.

**Walkthrough:** [Worked examples — KMP](../../worked-examples.md#kmp-pattern-search).

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
| Python | [`test_kmp_goldens`](../../../python/tests/strings/test_kmp_goldens.py) |
| JavaScript | [`kmp.test.js`](../../../javascript/test/strings/kmp.test.js) |
| JavaScript | [`kmpGoldens.test.js`](../../../javascript/test/strings/kmpGoldens.test.js) |
| Java | [`KMPGoldensTest`](../../../java/src/test/java/com/dsa/examples/strings/KMPGoldensTest.java) |

Property checks: Python [`test_strings_hypothesis`](../../../python/tests/property/test_strings_hypothesis.py), Java [`PropertyStringsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyStringsTest.java), JavaScript [`strings.property.test.js`](../../../javascript/test/property/strings.property.test.js).

Java unit tests also run via Maven in `java/src/test/java/com/dsa/examples/strings/`.

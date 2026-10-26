# Open Addressing

Topic: **hashing** / `open-addressing`

## Overview

Hash map with probing collision resolution and tombstones.


Deleted slots are **tombstoned**; load factor capped before resize.

**Worked example:** [Topic index](../../worked-examples.md#open-addressing) (summary) · run `npm run demo -- open-addressing` in all three languages.

## Complexity

put/get/remove: Time O(1) average; Space O(n) slots.
| | Time | Space |
|---|------|-------|
| Primary | Time O(1) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`HashTableOpenAddressing`](../../../java/src/main/java/com/dsa/examples/hashing/HashTableOpenAddressing.java) |
| Python | [`open_addressing`](../../../python/dsa/hashing/open_addressing.py) |
| JavaScript | [`openAddressing`](../../../javascript/src/hashing/openAddressing.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_open_addressing`](../../../python/tests/hashing/test_open_addressing.py) |
| JavaScript | [`openAddressing.test.js`](../../../javascript/test/hashing/openAddressing.test.js) |
| Java | [`HashingTest.java`](../../../java/src/test/java/com/dsa/examples/hashing/HashingTest.java) |

**Property-style checks:** Java [`PropertyHashingTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyHashingTest.java); Python [`test_property_hashing`](../../../python/tests/test_property_hashing.py); JavaScript [`property/hashing.test.js`](../../../javascript/test/property/hashing.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/hashing/`.

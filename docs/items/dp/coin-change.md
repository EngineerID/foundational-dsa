# Coin Change

Topic: **dp** / `coin-change`

## Overview

Minimum coins to make an amount (unbounded supply).

**Practice:** [Coin change (problem 9)](../../practice-problems.md#9-coin-change) · **Worked example:** [Topic index](../../worked-examples.md#coin-change) (summary) · run `npm run demo -- coin-change` in all three languages.

## Complexity

minCoins: Time O(n·amount); Space O(amount).
| | Time | Space |
|---|------|-------|
| Primary | Time O(n·amount) | Space O(amount) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`CoinChange`](../../../java/src/main/java/com/dsa/examples/dp/CoinChange.java) |
| Python | [`coin_change`](../../../python/dsa/dp/coin_change.py) |
| JavaScript | [`coinChange`](../../../javascript/src/dp/coinChange.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_coin_change`](../../../python/tests/dp/test_coin_change.py) |
| JavaScript | [`coinChange.test.js`](../../../javascript/test/dp/coinChange.test.js) |
| Java | [`CoinChangeTest.java`](../../../java/src/test/java/com/dsa/examples/dp/CoinChangeTest.java) |

Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/dp/`.

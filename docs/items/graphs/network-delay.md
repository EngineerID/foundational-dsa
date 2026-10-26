# Network Delay

Topic: **graphs** / `network-delay`

## Overview

Time for all nodes to receive a signal from a source (max Dijkstra distance).

**Practice:** [Network delay time (problem 19)](../../practice-problems.md#19-network-delay-time) · run `npm run demo -- network-delay` in all three languages.

## Complexity

networkDelay: Time O((V+E) log V); Space O(V).


## Code links

| Language | Source |
|----------|--------|
| Java | [`NetworkDelay`](../../../java/src/main/java/com/dsa/examples/graphs/NetworkDelay.java) |
| Python | [`network_delay`](../../../python/dsa/graphs/network_delay.py) |
| JavaScript | [`networkDelay`](../../../javascript/src/graphs/networkDelay.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_network_delay`](../../../python/tests/graphs/test_network_delay.py) |
| JavaScript | [`networkDelay.test.js`](../../../javascript/test/graphs/networkDelay.test.js) |
| Java | [`NetworkDelayTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/NetworkDelayTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.

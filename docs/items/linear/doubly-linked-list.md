# Doubly Linked List

Topic: **linear** / `doubly-linked-list`

Doubly linked list supporting O(1) removal given a node reference.

**Complexity:** prepend/append/remove: Time O(1) at known node; Space O(n).

**Worked example:** [Topic index](../../worked-examples.md#doubly-linked-list) (summary) · run `npm run demo -- doubly-linked-list` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`DoublyLinkedList`](../../../java/src/main/java/com/dsa/examples/linear/DoublyLinkedList.java) |
| Python | [`doubly_linked_list`](../../../python/dsa/linear/doubly_linked_list.py) |
| JavaScript | [`doublyLinkedList`](../../../javascript/src/linear/doublyLinkedList.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_doubly_linked_list`](../../../python/tests/linear/test_doubly_linked_list.py) |
| JavaScript | [`doublyLinkedList.test.js`](../../../javascript/test/linear/doublyLinkedList.test.js) |
| Java | [`LinearStructuresTest.java`](../../../java/src/test/java/com/dsa/examples/linear/LinearStructuresTest.java) |

**Property-style checks:** Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/linear/`.

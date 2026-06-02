# Linear — Singly Linked List

"""Singly linked list with head insertion and traversal.

Technique: Singly linked list
Invariant: Each node next points to successor or null.
prepend/search: Time O(1)/O(n); Space O(n).
"""


class _Node:
    __slots__ = ("value", "next")

    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class SinglyLinkedList:
    """Singly linked list with head and tail pointers."""

    def __init__(self) -> None:
        """Creates an empty list.

        Time: O(1); Space: O(1).
        """
        self._head = None
        self._tail = None
        self._size = 0

    def size(self) -> int:
        """Returns the number of elements.

        Time: O(1); Space: O(1).
        """
        return self._size

    def add_first(self, value) -> None:
        """Inserts at the front.

        Time: O(1); Space: O(1).
        """
        node = _Node(value)
        node.next = self._head
        self._head = node
        if self._tail is None:
            self._tail = self._head
        self._size += 1

    def add_last(self, value) -> None:
        """Inserts at the back.

        Time: O(1); Space: O(1).
        """
        node = _Node(value)
        if self._tail is None:
            self._head = self._tail = node
        else:
            self._tail.next = node
            self._tail = node
        self._size += 1

    def get(self, index: int):
        """Returns the element at ``index``.

        Time: O(n); Space: O(1).
        """
        return self._node_at(index).value

    def remove(self, index: int):
        """Removes and returns the element at ``index``.

        Time: O(n); Space: O(1).
        """
        if index == 0:
            val = self._head.value
            self._head = self._head.next
            if self._head is None:
                self._tail = None
            self._size -= 1
            return val
        prev = self._node_at(index - 1)
        target = prev.next
        prev.next = target.next
        if target is self._tail:
            self._tail = prev
        self._size -= 1
        return target.value

    def reverse(self) -> None:
        """Reverses the list in place.

        Time: O(n); Space: O(1).
        """
        prev = None
        cur = self._head
        self._tail = self._head
        while cur is not None:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        self._head = prev

    def _node_at(self, index: int) -> _Node:
        if index < 0 or index >= self._size:
            raise IndexError(index)
        cur = self._head
        for _ in range(index):
            cur = cur.next
        return cur

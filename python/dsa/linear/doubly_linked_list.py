# Linear — Doubly Linked List

"""Doubly linked list with forward and backward traversal.

addFirst/addLast O(1); get/remove at index O(n).
"""


class _Node:
    __slots__ = ("value", "prev", "next")

    def __init__(self, value) -> None:
        self.value = value
        self.prev = None
        self.next = None


class DoublyLinkedList:
    """Doubly linked list with head and tail pointers."""

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
        if self._head is None:
            self._head = self._tail = node
        else:
            node.next = self._head
            self._head.prev = node
            self._head = node
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
            node.prev = self._tail
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
        node = self._node_at(index)
        if node.prev is not None:
            node.prev.next = node.next
        else:
            self._head = node.next
        if node.next is not None:
            node.next.prev = node.prev
        else:
            self._tail = node.prev
        self._size -= 1
        return node.value

    def reverse(self) -> None:
        """Reverses the list in place.

        Time: O(n); Space: O(1).
        """
        cur = self._head
        tmp = None
        while cur is not None:
            tmp = cur.prev
            cur.prev = cur.next
            cur.next = tmp
            cur = cur.prev
        tmp = self._head
        self._head = self._tail
        self._tail = tmp

    def _node_at(self, index: int) -> _Node:
        if index < 0 or index >= self._size:
            raise IndexError(index)
        if index < self._size // 2:
            cur = self._head
            for _ in range(index):
                cur = cur.next
            return cur
        cur = self._tail
        for _ in range(self._size - 1, index, -1):
            cur = cur.prev
        return cur

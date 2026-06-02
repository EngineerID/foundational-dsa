# Linear — Deque (doubly-linked)

"""Double-ended queue with O(1) push/pop at both ends.

Technique: Circular buffer deque
Invariant: head/tail wrap in fixed or growing buffer.
pushFront/pushBack/pop: Time O(1) amortized; Space O(n).
"""

from dsa.linear.doubly_linked_list import DoublyLinkedList


class Deque:
    """Double-ended queue using a doubly linked list."""

    def __init__(self) -> None:
        """Creates an empty deque.

        Time: O(1); Space: O(1).
        """
        self._list = DoublyLinkedList()

    def add_first(self, value) -> None:
        """Inserts at the front.

        Time: O(1); Space: O(1).
        """
        self._list.add_first(value)

    def add_last(self, value) -> None:
        """Inserts at the back.

        Time: O(1); Space: O(1).
        """
        self._list.add_last(value)

    def remove_first(self):
        """Removes and returns the front.

        Time: O(1); Space: O(1).
        """
        if self.is_empty():
            raise RuntimeError("Deque is empty")
        return self._list.remove(0)

    def remove_last(self):
        """Removes and returns the back.

        Time: O(1); Space: O(1).
        """
        if self.is_empty():
            raise RuntimeError("Deque is empty")
        return self._list.remove(self._list.size() - 1)

    def is_empty(self) -> bool:
        """Returns True if empty.

        Time: O(1); Space: O(1).
        """
        return self._list.size() == 0

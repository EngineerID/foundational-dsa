# Linear — Stack (linked-list backed)

"""LIFO stack backed by :class:`SinglyLinkedList`.

push/pop/peek O(1); Space: O(n).
"""

from dsa.linear.singly_linked_list import SinglyLinkedList


class Stack:
    """LIFO stack using a singly linked list."""

    def __init__(self) -> None:
        """Creates an empty stack.

        Time: O(1); Space: O(1).
        """
        self._list = SinglyLinkedList()

    def push(self, value) -> None:
        """Pushes a value onto the stack.

        Time: O(1); Space: O(1).
        """
        self._list.add_first(value)

    def pop(self):
        """Pops and returns the top value.

        Time: O(1); Space: O(1).
        """
        if self.is_empty():
            raise RuntimeError("Stack is empty")
        return self._list.remove(0)

    def peek(self):
        """Returns the top without removing.

        Time: O(1); Space: O(1).
        """
        if self.is_empty():
            raise RuntimeError("Stack is empty")
        return self._list.get(0)

    def is_empty(self) -> bool:
        """Returns True if the stack has no elements.

        Time: O(1); Space: O(1).
        """
        return self._list.size() == 0

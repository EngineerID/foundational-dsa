# Linear — Queue (linked-list backed)

"""FIFO queue backed by :class:`SinglyLinkedList`.

enqueue/dequeue/peek O(1); Space: O(n).
"""

from dsa.linear.singly_linked_list import SinglyLinkedList


class Queue:
    """FIFO queue using a singly linked list."""

    def __init__(self) -> None:
        """Creates an empty queue.

        Time: O(1); Space: O(1).
        """
        self._list = SinglyLinkedList()

    def enqueue(self, value) -> None:
        """Enqueues at the back.

        Time: O(1); Space: O(1).
        """
        self._list.add_last(value)

    def dequeue(self):
        """Dequeues from the front.

        Time: O(1); Space: O(1).
        """
        if self.is_empty():
            raise RuntimeError("Queue is empty")
        return self._list.remove(0)

    def peek(self):
        """Returns the front without removing.

        Time: O(1); Space: O(1).
        """
        if self.is_empty():
            raise RuntimeError("Queue is empty")
        return self._list.get(0)

    def is_empty(self) -> bool:
        """Returns True if the queue has no elements.

        Time: O(1); Space: O(1).
        """
        return self._list.size() == 0

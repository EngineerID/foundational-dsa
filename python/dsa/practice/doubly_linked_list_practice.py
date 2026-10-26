from dsa.linear.doubly_linked_list import DoublyLinkedList


class DoublyLinkedListPractice:
    def __init__(self) -> None:
        self._list: DoublyLinkedList[int] = DoublyLinkedList()

    def add_last(self, value: int) -> None:
        self._list.add_last(value)

    def add_first(self, value: int) -> None:
        self._list.add_first(value)

    def get(self, index: int) -> int:
        return self._list.get(index)

    def remove(self, index: int) -> int:
        return self._list.remove(index)

    def size(self) -> int:
        return self._list.size()

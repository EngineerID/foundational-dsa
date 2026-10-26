from dsa.linear.singly_linked_list import SinglyLinkedList


class SinglyLinkedListPractice:
    def __init__(self) -> None:
        self._list: SinglyLinkedList[int] = SinglyLinkedList()

    def add_last(self, value: int) -> None:
        self._list.add_last(value)

    def get(self, index: int) -> int:
        return self._list.get(index)

    def remove(self, index: int) -> int:
        return self._list.remove(index)

    def size(self) -> int:
        return self._list.size()

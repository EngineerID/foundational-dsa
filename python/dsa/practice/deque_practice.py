from dsa.linear.deque import Deque


class DequePractice:
    def __init__(self) -> None:
        self._deque: Deque[int] = Deque()

    def add_last(self, value: int) -> None:
        self._deque.add_last(value)

    def add_first(self, value: int) -> None:
        self._deque.add_first(value)

    def remove_first(self) -> int:
        return self._deque.remove_first()

    def remove_last(self) -> int:
        return self._deque.remove_last()

    def is_empty(self) -> bool:
        return self._deque.is_empty()

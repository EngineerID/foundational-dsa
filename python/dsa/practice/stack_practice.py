from dsa.linear.stack import Stack


class StackPractice:
    def __init__(self) -> None:
        self._stack: Stack[int] = Stack()

    def push(self, value: int) -> None:
        self._stack.push(value)

    def pop(self) -> int:
        return self._stack.pop()

    def peek(self) -> int:
        return self._stack.peek()

    def is_empty(self) -> bool:
        return self._stack.is_empty()

from dsa.linear.queue import Queue


class QueuePractice:
    def __init__(self) -> None:
        self._queue: Queue[int] = Queue()

    def enqueue(self, value: int) -> None:
        self._queue.enqueue(value)

    def dequeue(self) -> int:
        return self._queue.dequeue()

    def peek(self) -> int:
        return self._queue.peek()

    def is_empty(self) -> bool:
        return self._queue.is_empty()

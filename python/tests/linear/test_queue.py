import pytest

from dsa.linear.queue import Queue


def test_queue_fifo():
    q = Queue()
    assert q.is_empty()
    q.enqueue("x")
    q.enqueue("y")
    assert q.peek() == "x"
    assert q.dequeue() == "x"
    assert q.dequeue() == "y"
    assert q.is_empty()


def test_queue_dequeue_empty():
    q = Queue()
    with pytest.raises(RuntimeError, match="empty"):
        q.dequeue()


def test_queue_peek_after_partial_dequeue():
    q = Queue()
    for i in range(5):
        q.enqueue(i)
    assert q.dequeue() == 0
    assert q.peek() == 1

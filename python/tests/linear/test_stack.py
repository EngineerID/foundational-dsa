import pytest

from dsa.linear.stack import Stack


def test_stack_lifo():
    stack = Stack()
    assert stack.is_empty()
    stack.push(1)
    stack.push(2)
    assert stack.peek() == 2
    assert stack.pop() == 2
    assert stack.pop() == 1
    assert stack.is_empty()


def test_stack_peek_empty():
    stack = Stack()
    with pytest.raises(RuntimeError, match="empty"):
        stack.peek()


def test_stack_pop_empty():
    stack = Stack()
    stack.push(1)
    stack.pop()
    with pytest.raises(RuntimeError, match="empty"):
        stack.pop()

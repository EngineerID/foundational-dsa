import pytest

from dsa.linear.doubly_linked_list import DoublyLinkedList


def test_doubly_linked_list_basic():
    lst = DoublyLinkedList()
    lst.add_last(1)
    lst.add_first(2)
    assert lst.get(0) == 2
    lst.reverse()
    assert lst.get(0) == 1


def test_doubly_linked_list_remove_tail():
    lst = DoublyLinkedList()
    lst.add_last(1)
    lst.add_last(2)
    assert lst.remove(1) == 2
    assert lst.size() == 1
    assert lst.get(0) == 1


def test_doubly_linked_list_negative_index():
    lst = DoublyLinkedList()
    lst.add_first(1)
    with pytest.raises(IndexError):
        lst.get(-1)

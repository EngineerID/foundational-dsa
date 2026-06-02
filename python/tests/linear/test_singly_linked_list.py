import pytest

from dsa.linear.singly_linked_list import SinglyLinkedList


def test_singly_linked_list_basic():
    lst = SinglyLinkedList()
    lst.add_last("a")
    lst.add_first("b")
    assert lst.get(0) == "b"
    lst.reverse()
    assert lst.get(0) == "a"
    assert lst.remove(1) == "b"
    assert lst.size() == 1


def test_singly_linked_list_empty_index():
    lst = SinglyLinkedList()
    with pytest.raises(IndexError):
        lst.get(0)


def test_singly_linked_list_single_element_remove():
    lst = SinglyLinkedList()
    lst.add_last(42)
    assert lst.remove(0) == 42
    assert lst.size() == 0

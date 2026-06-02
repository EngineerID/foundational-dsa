import pytest

from dsa.linear.dynamic_array import DynamicArray


def test_dynamic_array_basic():
    arr = DynamicArray()
    assert arr.size() == 0
    arr.add(1)
    arr.add(2)
    assert arr.get(0) == 1
    arr.set(1, 5)
    assert arr.remove(1) == 5
    assert arr.size() == 1


def test_dynamic_array_out_of_bounds():
    arr = DynamicArray()
    with pytest.raises(IndexError):
        arr.get(0)
    arr.add(1)
    with pytest.raises(IndexError):
        arr.get(1)


def test_dynamic_array_resize_and_remove_middle():
    arr = DynamicArray()
    for i in range(10):
        arr.add(i)
    assert arr.size() == 10
    assert arr.get(9) == 9
    assert arr.remove(5) == 5
    assert arr.size() == 9
    assert arr.get(5) == 6

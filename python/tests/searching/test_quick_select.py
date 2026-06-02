import pytest

from dsa.searching.quick_select import kth_smallest


def test_kth_smallest_typical():
    assert kth_smallest([7, 10, 4, 3, 20, 15], 3) == 7


def test_min_and_max():
    arr = [5, 1, 4, 2, 3]
    assert kth_smallest(arr, 1) == 1
    assert kth_smallest(arr, 5) == 5


def test_single_element():
    assert kth_smallest([9], 1) == 9


def test_duplicates():
    assert kth_smallest([2, 2, 2, 1], 2) == 2


def test_invalid_k():
    with pytest.raises(ValueError):
        kth_smallest([1], 0)
    with pytest.raises(ValueError):
        kth_smallest([], 1)

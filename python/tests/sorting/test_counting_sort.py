import pytest

from dsa.sorting.counting_sort import sort, sort_by_digit


def test_typical():
    arr = [4, 2, 2, 8, 3, 3, 1]
    sort(arr)
    assert arr == [1, 2, 2, 3, 3, 4, 8]


def test_single():
    arr = [1]
    sort(arr)
    assert arr == [1]


def test_negative_raises():
    with pytest.raises(ValueError):
        sort([-1, 0])


def test_sort_by_digit():
    arr = [170, 45, 75, 90, 802, 24, 2, 66]
    expected = sorted(arr)
    for exp in (1, 10, 100):
        sort_by_digit(arr, exp)
    assert arr == expected

from dsa.sorting.radix_sort import sort


def test_typical():
    arr = [170, 45, 75, 90, 802, 24, 2, 66]
    sort(arr)
    assert arr == sorted([170, 45, 75, 90, 802, 24, 2, 66])


def test_empty():
    arr = []
    sort(arr)
    assert arr == []


def test_zeros():
    arr = [0, 0, 1]
    sort(arr)
    assert arr == [0, 0, 1]

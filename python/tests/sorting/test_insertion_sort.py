from dsa.sorting.insertion_sort import sort


def test_nearly_sorted():
    arr = [1, 2, 3, 5, 4]
    sort(arr)
    assert arr == [1, 2, 3, 4, 5]


def test_typical_array():
    arr = [5, 1, 4, 2, 3]
    sort(arr)
    assert arr == [1, 2, 3, 4, 5]


def test_empty_array():
    arr: list[int] = []
    sort(arr)
    assert arr == []

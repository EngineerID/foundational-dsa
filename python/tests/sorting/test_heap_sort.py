from dsa.sorting.heap_sort import sort


def test_typical():
    arr = [5, 1, 4, 2, 3]
    sort(arr)
    assert arr == [1, 2, 3, 4, 5]


def test_empty():
    arr = []
    sort(arr)
    assert arr == []


def test_duplicates():
    arr = [2, 2, 1]
    sort(arr)
    assert arr == [1, 2, 2]

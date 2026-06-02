from dsa.sorting.merge_sort import sort, sort_bottom_up


def test_typical_array():
    assert sort([3, 1, 2]) == [1, 2, 3]


def test_empty_array():
    assert sort([]) == []


def test_duplicates():
    assert sort([2, 2]) == [2, 2]


def test_null_returns_empty():
    assert sort(None) == []


def test_bottom_up():
    assert sort_bottom_up([4, 2, 1, 3]) == [1, 2, 3, 4]

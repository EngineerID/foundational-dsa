from dsa.sorting.selection_sort import sort


def _assert_sorted(input_arr: list[int]) -> None:
    arr = list(input_arr)
    sort(arr)
    assert arr == sorted(input_arr)


def test_typical_array():
    _assert_sorted([5, 1, 4, 2, 3])


def test_single_element():
    arr = [1]
    sort(arr)
    assert arr == [1]


def test_empty_array():
    arr: list[int] = []
    sort(arr)
    assert arr == []

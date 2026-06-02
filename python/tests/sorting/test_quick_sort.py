from dsa.sorting.quick_sort import sort, sort_3way


def _assert_sorted(input_arr: list[int], randomized_pivot: bool = False) -> None:
    arr = list(input_arr)
    sort(arr, randomized_pivot=randomized_pivot)
    assert arr == sorted(input_arr)


def test_randomized_pivot():
    _assert_sorted([9, 8, 7, 6, 5], randomized_pivot=True)


def test_single_element():
    arr = [1]
    sort(arr)
    assert arr == [1]


def test_deterministic_pivot():
    _assert_sorted([5, 1, 4, 2, 3])


def test_three_way_duplicates():
    arr = [2, 2, 2, 1, 1]
    sort_3way(arr)
    assert arr == [1, 1, 2, 2, 2]

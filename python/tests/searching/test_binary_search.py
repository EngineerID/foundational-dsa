from dsa.searching.binary_search import first_occurrence, last_occurrence, search


def test_search_typical():
    arr = [1, 3, 5, 7, 9]
    assert search(arr, 5) == 2
    assert search(arr, 4) == -1


def test_empty_and_single():
    assert search([], 1) == -1
    assert search([5], 5) == 0


def test_first_and_last_occurrence_with_duplicates():
    arr = [1, 2, 2, 2, 3]
    assert first_occurrence(arr, 2) == 1
    assert last_occurrence(arr, 2) == 3
    assert first_occurrence(arr, 4) == -1


def test_even_length_array():
    assert search([2, 4, 6, 8], 4) == 1

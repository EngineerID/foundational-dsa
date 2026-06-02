from dsa.searching.linear_search import index_of


def test_finds_existing_key():
    assert index_of([3, 7, 7, 1], 7) == 1


def test_returns_minus_one_when_absent():
    assert index_of([1, 2, 3], 5) == -1


def test_empty_array():
    assert index_of([], 1) == -1


def test_null_array():
    assert index_of(None, 1) == -1


def test_duplicates_returns_first_match():
    assert index_of([1, 2, 2, 3], 2) == 1

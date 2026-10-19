"""Property tests for binary search boundary helpers."""

from hypothesis import given
from hypothesis import strategies as st

from dsa.searching import binary_search


@given(st.lists(st.integers(min_value=-50, max_value=50), max_size=40, unique=True))
def test_first_last_on_sorted_unique(arr):
    arr = sorted(arr)
    if not arr:
        assert binary_search.first_occurrence(arr, 0) == -1
        return
    key = arr[len(arr) // 2]
    assert binary_search.first_occurrence(arr, key) == arr.index(key)
    assert binary_search.last_occurrence(arr, key) == arr.index(key)

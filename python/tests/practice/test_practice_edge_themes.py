"""Edge themes on practice wrappers (empty, single, duplicate, large, invalid)."""

# practice-edge-theme-topics: binary-heap binary-search bubble-sort counting-sort dynamic-array linear-search maximum-subarray merge-sort monotonic-stack stack
import pytest

from dsa.practice.binary_heap_practice import extract_order
from dsa.practice.binary_search_practice import find_index as binary_find_index
from dsa.practice.bubble_sort_practice import sort_nums as bubble_sort_practice
from dsa.practice.counting_sort_practice import sort_nums as counting_sort_practice
from dsa.practice.dynamic_array_practice import DynamicArrayPractice
from dsa.practice.linear_search_practice import find_index as linear_find_index
from dsa.practice.max_subarray import max_subarray
from dsa.practice.merge_sort_practice import sort as merge_sort_practice
from dsa.practice.monotonic_stack_practice import next_greater
from dsa.practice.stack_practice import StackPractice

LARGE_N = 256


def _sort_copy_battery(sort_fn, *, allow_negative: bool = True) -> None:
    assert sort_fn([]) == []
    assert sort_fn([7]) == [7]
    assert sort_fn([2, 2, 1]) == [1, 2, 2]
    assert sort_fn(list(range(LARGE_N, 0, -1))) == list(range(1, LARGE_N + 1))
    if not allow_negative:
        with pytest.raises(Exception):
            sort_fn([-1])


def test_sorting_edge_themes():
    _sort_copy_battery(bubble_sort_practice)
    _sort_copy_battery(merge_sort_practice)
    with pytest.raises(Exception):
        counting_sort_practice([2, -1])


def test_searching_edge_themes():
    assert linear_find_index([], 1) == -1
    assert linear_find_index([5], 5) == 0
    assert linear_find_index([1, 1, 2], 1) == 0
    assert linear_find_index(list(range(LARGE_N)), LARGE_N - 1) == LARGE_N - 1
    assert linear_find_index([1, 2, 3], 9) == -1
    assert binary_find_index([], 1) == -1
    assert binary_find_index([3], 3) == 0
    assert binary_find_index([3, 1], 1) == -1
    assert binary_find_index(list(range(LARGE_N)), LARGE_N - 1) == LARGE_N - 1


def test_maximum_subarray_edge_themes():
    assert max_subarray([4]) == 4
    assert max_subarray([-2, -1]) == -1
    assert max_subarray([1] * LARGE_N) == LARGE_N
    with pytest.raises(Exception):
        max_subarray([])


def test_dynamic_array_edge_themes():
    da = DynamicArrayPractice()
    assert da.size() == 0
    da.add(1)
    assert da.get(0) == 1
    da.add(1)
    with pytest.raises(Exception):
        da.get(-1)
    for i in range(LARGE_N):
        da.add(i)
    assert da.size() == 2 + LARGE_N


def test_stack_edge_themes():
    st = StackPractice()
    assert st.is_empty()
    st.push(1)
    assert st.peek() == 1
    st.push(1)
    assert st.pop() == 1
    for _ in range(LARGE_N):
        st.push(1)
    with pytest.raises(Exception):
        StackPractice().pop()


def test_binary_heap_extract_order_edge_themes():
    assert extract_order([]) == []
    assert extract_order([7]) == [7]
    assert extract_order([2, 2, 1]) == [1, 2, 2]
    assert extract_order(list(range(LARGE_N, 0, -1))) == list(range(1, LARGE_N + 1))


def test_monotonic_stack_next_greater_edge_themes():
    with pytest.raises(Exception):
        next_greater([])
    assert next_greater([7]) == [-1]
    assert next_greater([2, 2, 1]) == [-1, -1, -1]
    assert next_greater(list(range(1, LARGE_N + 1))) == [
        i + 2 if i < LARGE_N - 1 else -1 for i in range(LARGE_N)
    ]

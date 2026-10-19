from hypothesis import given
from hypothesis import strategies as st

from dsa.linear.stack import Stack
from dsa.searching.linear_search import index_of
from dsa.sorting.bubble_sort import sort as bubble_sort
from dsa.sorting.merge_sort import sort as merge_sort


@given(st.lists(st.integers(min_value=0, max_value=40), max_size=25))
def test_bubble_sort_is_sorted(xs):
    arr = list(xs)
    bubble_sort(arr)
    assert arr == sorted(xs)


@given(st.lists(st.integers(min_value=0, max_value=40), max_size=25))
def test_merge_sort_is_sorted(xs):
    assert merge_sort(xs) == sorted(xs)


@given(st.lists(st.integers(min_value=-20, max_value=20), max_size=30), st.integers())
def test_linear_search_matches_scan(xs, target):
    idx = index_of(xs, target)
    if idx >= 0:
        assert xs[idx] == target
    else:
        assert target not in xs


@given(st.lists(st.integers(min_value=0, max_value=10), max_size=20))
def test_stack_push_pop_reverse(xs):
    st = Stack()
    for v in xs:
        st.push(v)
    out = []
    while not st.is_empty():
        out.append(st.pop())
    assert out == list(reversed(xs))

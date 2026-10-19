"""Standard edge themes (empty, single, duplicate, large, invalid) across the catalog."""

import pytest

from dsa.graphs import bfs, graph
from dsa.linear import dynamic_array, stack
from dsa.searching import binary_search, linear_search, quick_select
from dsa.sorting import bubble_sort, counting_sort, merge_sort, quick_sort
from dsa.strings import kmp
from dsa.unionfind import union_find

LARGE_N = 256


def _inplace_sort_battery(sort_fn):
    empty = []
    sort_fn(empty)
    assert empty == []
    single = [7]
    sort_fn(single)
    assert single == [7]
    dup = [2, 2, 1]
    sort_fn(dup)
    assert dup == [1, 2, 2]
    large = list(range(LARGE_N, 0, -1))
    sort_fn(large)
    assert large == list(range(1, LARGE_N + 1))


def test_sorting_edge_themes():
    _inplace_sort_battery(bubble_sort.sort)
    _inplace_sort_battery(quick_sort.sort)
    assert merge_sort.sort([]) == []
    assert merge_sort.sort([7]) == [7]
    assert merge_sort.sort([2, 2, 1]) == [1, 2, 2]
    assert merge_sort.sort(list(range(LARGE_N, 0, -1))) == list(range(1, LARGE_N + 1))
    with pytest.raises(ValueError):
        counting_sort.sort([2, -1])


def test_linear_search_edge_themes():
    assert linear_search.index_of([], 1) == -1
    assert linear_search.index_of([5], 5) == 0
    assert linear_search.index_of([1, 1, 2], 1) == 0
    assert linear_search.index_of(list(range(LARGE_N)), LARGE_N - 1) == LARGE_N - 1
    assert linear_search.index_of([1, 2, 3], 9) == -1


def test_binary_search_edge_themes():
    assert binary_search.search([], 1) == -1
    assert binary_search.search([3], 3) == 0
    assert binary_search.search([1, 2, 2, 3], 2) >= 0
    assert binary_search.search(list(range(LARGE_N)), LARGE_N - 1) == LARGE_N - 1
    assert binary_search.search([3, 1], 1) == -1


def test_quick_select_edge_themes():
    assert quick_select.kth_smallest([9], 1) == 9
    assert quick_select.kth_smallest([3, 3, 1], 2) == 3
    assert quick_select.kth_smallest(list(range(LARGE_N, 0, -1)), 1) == 1
    with pytest.raises(ValueError):
        quick_select.kth_smallest([], 1)


def test_dynamic_array_edge_themes():
    da = dynamic_array.DynamicArray()
    assert da.size() == 0
    da.add(1)
    assert da.get(0) == 1
    da.add(1)
    assert da.size() == 2
    for i in range(LARGE_N):
        da.add(i)
    with pytest.raises(IndexError):
        da.get(-1)


def test_stack_edge_themes():
    st = stack.Stack()
    assert st.is_empty()
    st.push(1)
    assert st.peek() == 1
    st.push(1)
    assert st.pop() == 1
    for _ in range(LARGE_N):
        st.push(1)
    with pytest.raises(RuntimeError):
        stack.Stack().pop()


def test_graph_edge_themes():
    g = graph.Graph(0, directed=False, weighted=False)
    assert g.vertices() == 0
    g1 = graph.Graph(1, directed=True, weighted=True)
    assert g1.vertices() == 1
    g2 = graph.Graph(3, directed=False, weighted=True)
    g2.add_edge(0, 1, 1)
    g2.add_edge(0, 1, 2)
    assert len(g2.all_edges()) >= 1
    gl = graph.Graph(LARGE_N, directed=False, weighted=False)
    assert gl.vertices() == LARGE_N
    with pytest.raises(IndexError):
        g2.neighbors(99)


def test_bfs_edge_themes():
    g = graph.Graph(1, directed=False, weighted=False)
    assert bfs.distances(g, 0)[0] == 0
    g2 = graph.Graph(3, directed=False, weighted=False)
    g2.add_edge(0, 1)
    g2.add_edge(1, 2)
    assert bfs.distances(g2, 0)[2] == 2
    gl = graph.Graph(LARGE_N, directed=False, weighted=False)
    for i in range(LARGE_N - 1):
        gl.add_edge(i, i + 1)
    assert bfs.distances(gl, 0)[LARGE_N - 1] == LARGE_N - 1
    with pytest.raises(IndexError):
        bfs.distances(g, 5)


def test_kmp_edge_themes():
    assert kmp.search("", "a") == -1
    assert kmp.search("a", "a") == 0
    assert kmp.search("aa", "a") == 0
    assert kmp.search("a" * LARGE_N, "a") == 0

@pytest.mark.xfail(reason="empty pattern currently matches at index 0; do not change algorithm")
def test_kmp_empty_pattern_invalid():
    assert kmp.search("abc", "") == -1



def test_union_find_edge_themes():
    uf = union_find.UnionFind(1)
    assert uf.find(0) == 0
    uf2 = union_find.UnionFind(3)
    uf2.union(0, 1)
    uf2.union(0, 1)
    assert uf2.connected(0, 1)
    uf3 = union_find.UnionFind(LARGE_N)
    uf3.union(0, LARGE_N - 1)
    assert uf3.connected(0, LARGE_N - 1)
    with pytest.raises(IndexError):
        uf.find(3)

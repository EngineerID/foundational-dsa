"""Scenarios aligned with docs/worked-examples.md interview walkthroughs."""

from dsa.dp import knapsack, lcs
from dsa.dp.edit_distance import distance as edit_distance
from dsa.graphs.bfs import distances as bfs_distances
from dsa.graphs.dijkstra import shortest_paths as dijkstra_paths
from dsa.graphs.graph import Graph
from dsa.graphs.topological_sort import kahn
from dsa.linear.lru_cache import LRUCache
from dsa.linear.sliding_window_maximum import max_sliding_window
from dsa.searching.binary_search import first_occurrence, search
from dsa.unionfind.union_find import UnionFind


def test_binary_search_index_of_seven():
    assert search([1, 3, 5, 7, 9, 11], 7) == 3


def test_binary_search_answer_first_index_at_least_seven():
    assert first_occurrence([1, 3, 5, 7, 9, 11], 7) == 3


def test_dijkstra_shortest_distance_to_vertex_two():
    g = Graph(4, directed=True, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(0, 2, 4)
    assert dijkstra_paths(g, 0)[2] == 3


def test_union_find_connectivity_after_merges():
    uf = UnionFind(5)
    uf.union(0, 1)
    uf.union(2, 3)
    uf.union(1, 2)
    assert uf.connected(0, 3) is True
    assert uf.connected(0, 4) is False


def test_lru_cache_capacity_two_eviction_pattern():
    cache = LRUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)
    assert cache.get(1) == 1
    cache.put(3, 3)
    assert cache.get(2) == -1
    cache.put(4, 4)
    assert cache.get(1) == -1
    assert cache.get(3) == 3
    assert cache.get(4) == 4


def test_topological_sort_course_schedule_dag():
    dag = Graph(4, directed=True, weighted=False)
    dag.add_edge(0, 1)
    dag.add_edge(0, 2)
    dag.add_edge(1, 3)
    assert kahn(dag) == [0, 1, 2, 3]


def test_sliding_window_maximum_window_three():
    assert max_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3) == [3, 3, 5, 5, 6, 7]


def test_bfs_unweighted_distances_from_vertex_zero():
    g = Graph(5, directed=False, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    assert bfs_distances(g, 0) == [0, 1, 1, 2, -1]


def test_edit_distance_kitten_to_sitting():
    assert edit_distance("kitten", "sitting") == 3


def test_knapsack_zero_one_classic_capacity_five():
    assert knapsack.max_value([1, 2, 3], [6, 10, 12], 5) == 22


def test_lcs_abcde_and_ace():
    assert lcs.length("abcde", "ace") == 3

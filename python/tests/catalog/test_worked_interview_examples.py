"""Scenarios aligned with docs/worked-examples.md interview walkthroughs."""

from dsa.graphs.graph import Graph
from dsa.graphs.topological_sort import kahn
from dsa.linear.sliding_window_maximum import max_sliding_window
from dsa.dp.edit_distance import distance as edit_distance
from dsa.graphs.bfs import distances as bfs_distances
from dsa.searching.binary_search import first_occurrence


def test_topological_sort_course_schedule_dag():
    dag = Graph(4, directed=True, weighted=False)
    dag.add_edge(0, 1)
    dag.add_edge(0, 2)
    dag.add_edge(1, 3)
    assert kahn(dag) == [0, 1, 2, 3]


def test_sliding_window_maximum_window_three():
    assert max_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3) == [3, 3, 5, 5, 6, 7]


def test_binary_search_answer_first_index_at_least_seven():
    assert first_occurrence([1, 3, 5, 7, 9, 11], 7) == 3


def test_bfs_unweighted_distances_from_vertex_zero():
    g = Graph(5, directed=False, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    assert bfs_distances(g, 0) == [0, 1, 1, 2, -1]


def test_edit_distance_kitten_to_sitting():
    assert edit_distance("kitten", "sitting") == 3

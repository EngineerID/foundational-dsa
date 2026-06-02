from dsa.graphs.bellman_ford import shortest_paths
from dsa.graphs.graph import Graph


def test_negative_edge_relaxation():
    g = Graph(3, directed=True, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, -2)
    g.add_edge(0, 2, 3)
    result = shortest_paths(g, 0)
    assert result.has_negative_cycle is False
    assert result.distances[2] == -1


def test_negative_cycle_detected():
    g = Graph(3, directed=True, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, -3)
    g.add_edge(2, 0, 1)
    result = shortest_paths(g, 0)
    assert result.has_negative_cycle is True


def test_single_source_only():
    g = Graph(2, directed=True, weighted=True)
    g.add_edge(0, 1, 5)
    result = shortest_paths(g, 0)
    assert result.distances[1] == 5

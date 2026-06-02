from dsa.graphs.floyd_warshall import all_pairs_shortest_paths, _INF
from dsa.graphs.graph import Graph


def test_all_pairs_path():
    g = Graph(3, directed=True, weighted=True)
    g.add_edge(0, 1, 2)
    g.add_edge(1, 2, 3)
    dist = all_pairs_shortest_paths(g)
    assert dist[0][2] == 5


def test_no_path_inf():
    g = Graph(2, directed=True, weighted=True)
    g.add_edge(0, 1, 1)
    dist = all_pairs_shortest_paths(g)
    assert dist[1][0] == _INF


def test_self_distance_zero():
    g = Graph(2, directed=False, weighted=False)
    g.add_edge(0, 1)
    dist = all_pairs_shortest_paths(g)
    assert dist[0][0] == 0
    assert dist[1][1] == 0

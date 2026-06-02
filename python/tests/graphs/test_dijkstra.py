from dsa.graphs.dijkstra import shortest_paths, _INF
from dsa.graphs.graph import Graph


def test_dijkstra_shortest_paths():
    g = Graph(4, directed=True, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(0, 2, 4)
    dist = shortest_paths(g, 0)
    assert dist[0] == 0
    assert dist[2] == 3


def test_unreachable_vertex():
    g = Graph(3, directed=True, weighted=True)
    g.add_edge(0, 1, 1)
    dist = shortest_paths(g, 0)
    assert dist[2] == _INF


def test_zero_weight_edge():
    g = Graph(2, directed=True, weighted=True)
    g.add_edge(0, 1, 0)
    dist = shortest_paths(g, 0)
    assert dist[1] == 0

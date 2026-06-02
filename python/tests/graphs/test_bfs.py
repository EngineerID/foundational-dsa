from dsa.graphs.bfs import distances
from dsa.graphs.graph import Graph


def test_bfs_unweighted_distances():
    g = Graph(5, directed=False, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    dist = distances(g, 0)
    assert dist[0] == 0
    assert dist[3] == 2
    assert dist[4] == -1


def test_single_vertex():
    g = Graph(1, directed=False, weighted=False)
    assert distances(g, 0) == [0]


def test_disconnected_component():
    g = Graph(4, directed=False, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(2, 3)
    dist = distances(g, 0)
    assert dist[2] == -1
    assert dist[3] == -1

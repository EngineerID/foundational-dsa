from dsa.graphs.graph import Graph
from dsa.graphs.kruskal_mst import mst, total_weight


def test_mst_total_weight():
    g = Graph(4, directed=False, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(2, 3, 3)
    g.add_edge(0, 3, 4)
    assert total_weight(g) == 6


def test_mst_edge_count():
    g = Graph(4, directed=False, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(2, 3, 3)
    g.add_edge(0, 3, 4)
    assert len(mst(g)) == 3


def test_two_vertices():
    g = Graph(2, directed=False, weighted=True)
    g.add_edge(0, 1, 7)
    assert total_weight(g) == 7

from dsa.graphs.graph import Graph
from dsa.graphs.prim_mst import total_weight


def test_prim_matches_kruskal_weight():
    g = Graph(4, directed=False, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(2, 3, 3)
    g.add_edge(0, 3, 4)
    assert total_weight(g) == 6


def test_star_graph():
    g = Graph(4, directed=False, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(0, 2, 1)
    g.add_edge(0, 3, 1)
    assert total_weight(g) == 3


def test_single_vertex():
    g = Graph(1, directed=False, weighted=False)
    assert total_weight(g) == 0

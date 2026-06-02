from dsa.graphs.boruvka_mst import total_weight
from dsa.graphs.graph import Graph


def test_boruvka_total_weight():
    g = Graph(4, directed=False, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(2, 3, 3)
    g.add_edge(0, 3, 4)
    assert total_weight(g) == 6


def test_chain_graph():
    g = Graph(3, directed=False, weighted=True)
    g.add_edge(0, 1, 2)
    g.add_edge(1, 2, 3)
    assert total_weight(g) == 5


def test_equal_weight_triangle():
    g = Graph(3, directed=False, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 1)
    g.add_edge(0, 2, 1)
    assert total_weight(g) == 2

from dsa.graphs.graph import Graph


def test_undirected_unweighted_edges():
    g = Graph(3, directed=False, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(1, 2)
    assert g.vertices() == 3
    assert any(e.to == 1 for e in g.neighbors(0))
    assert any(e.to == 0 for e in g.neighbors(1))


def test_directed_weighted():
    g = Graph(2, directed=True, weighted=True)
    g.add_edge(0, 1, 5)
    assert g.neighbors(0)[0].weight == 5
    assert g.neighbors(1) == []


def test_all_edges_deduplicates_undirected():
    g = Graph(3, directed=False, weighted=True)
    g.add_edge(0, 1, 2)
    g.add_edge(1, 2, 3)
    edges = g.all_edges()
    assert len(edges) == 2
    assert (0, 1, 2) in edges

from dsa.graphs import bipartite_check, graph


def test_is_bipartite():
    g = graph.Graph(2, False, False)
    g.add_edge(0, 1)
    assert bipartite_check.is_bipartite(g)

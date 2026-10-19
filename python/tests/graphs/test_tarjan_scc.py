from dsa.graphs import graph, tarjan_scc


def test_strongly_connected_components():
    g = graph.Graph(3, True, False)
    g.add_edge(0, 1)
    g.add_edge(1, 2)
    g.add_edge(2, 0)
    assert len(tarjan_scc.strongly_connected_components(g)[0]) == 3

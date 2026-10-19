from dsa.graphs import graph, kosaraju


def test_strongly_connected_components():
    g = graph.Graph(3, True, False)
    g.add_edge(0, 1)
    g.add_edge(1, 2)
    g.add_edge(2, 0)
    assert len(kosaraju.strongly_connected_components(g)[0]) == 3

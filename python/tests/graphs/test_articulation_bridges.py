from dsa.graphs import articulation_bridges, graph


def test_find():
    g = graph.Graph(2, False, False)
    g.add_edge(0, 1)
    assert articulation_bridges.find(g).bridges == [(0, 1)]

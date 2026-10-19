from dsa.graphs import graph
from dsa.graphs.a_star import shortest_path_length


def test_shortest_path_length():
    g = graph.Graph(2, True, True)
    g.add_edge(0, 1, 1)
    assert shortest_path_length(g, 0, 1) == 1

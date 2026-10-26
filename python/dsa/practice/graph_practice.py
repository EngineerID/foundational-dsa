from dsa.graphs.graph import Graph


def build_graph(n: int, directed: bool, weighted: bool, edges: list[list[int]]) -> Graph:
    g = Graph(n, directed, weighted)
    for e in edges:
        if len(e) == 2:
            g.add_edge(e[0], e[1])
        else:
            g.add_edge(e[0], e[1], e[2])
    return g

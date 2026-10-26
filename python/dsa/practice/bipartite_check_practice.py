from dsa.graphs.bipartite_check import is_bipartite
from dsa.practice.graph_practice import build_graph


def check_bipartite(n: int, edges: list[list[int]]) -> bool:
    g = build_graph(n, False, False, edges)
    return is_bipartite(g)

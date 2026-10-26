from dsa.graphs.boruvka_mst import total_weight
from dsa.practice.graph_practice import build_graph


def mst_total_weight(n: int, edges: list[list[int]]) -> int:
    g = build_graph(n, False, True, edges)
    return total_weight(g)

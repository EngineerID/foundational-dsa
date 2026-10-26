# Practice — MST total weight (Kruskal + union-find)

from dsa.graphs.graph import Graph
from dsa.graphs.kruskal_mst import total_weight


def mst_total_weight(n: int, edges: list[list[int]]) -> int:
    """Undirected weighted graph: return Kruskal MST total weight.

    Each edge is [u, v, weight]. Time: O(E log E); Space O(V).
    """
    g = Graph(n, False, True)
    for u, v, w in edges:
        g.add_edge(u, v, w)
    return total_weight(g)

from dsa.graphs.tarjan_scc import strongly_connected_components
from dsa.practice.graph_practice import build_graph


def component_sizes_sorted(n: int, edges: list[list[int]]) -> list[int]:
    g = build_graph(n, True, False, edges)
    comps = strongly_connected_components(g)
    sizes = sorted(len(c) for c in comps)
    return sizes

from dsa.graphs.floyd_warshall import all_pairs_shortest_paths
from dsa.practice.graph_practice import build_graph


def all_pairs_distances(n: int, edges: list[list[int]]) -> list[list[int]]:
    g = build_graph(n, True, True, edges)
    return all_pairs_shortest_paths(g)

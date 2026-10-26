from dsa.graphs.a_star import shortest_path_length
from dsa.practice.graph_practice import build_graph


def path_length(n: int, edges: list[list[int]], source: int, goal: int) -> int:
    g = build_graph(n, True, True, edges)
    return shortest_path_length(g, source, goal)

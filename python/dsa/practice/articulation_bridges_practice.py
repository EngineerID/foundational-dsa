from dsa.graphs.articulation_bridges import find
from dsa.practice.graph_practice import build_graph


def articulation_and_bridges(n: int, edges: list[list[int]]) -> tuple[list[int], list[list[int]]]:
    g = build_graph(n, False, False, edges)
    result = find(g)
    bridges = [[b[0], b[1]] for b in result.bridges]
    return result.articulation_points, bridges

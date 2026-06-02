# Graphs — Floyd-Warshall

"""All-pairs shortest paths via dynamic programming.

Technique: Floyd-Warshall
Invariant: dist[k][i][j] = shortest path using vertices {1..k} as intermediates.
allPairs: Time O(V³); Space O(V²).
"""

from dsa.graphs.graph import Graph

_INF = 2**30 - 1


def all_pairs_shortest_paths(graph: Graph) -> list[list[int]]:
    """Returns distance matrix; dist[i][j] is shortest path length.

    Time: O(V³); Space: O(V²).
    """
    n = graph.vertices()
    dist = [[_INF] * n for _ in range(n)]
    for i in range(n):
        dist[i][i] = 0
    for u in range(n):
        for edge in graph.neighbors(u):
            dist[u][edge.to] = min(dist[u][edge.to], edge.weight)
    for k in range(n):
        for i in range(n):
            if dist[i][k] == _INF:
                continue
            for j in range(n):
                if dist[k][j] != _INF:
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    return dist

# Graphs — Adjacency list representation

"""Adjacency-list directed/undirected weighted graph representation.

Technique: Adjacency list
Invariant: Edges stored from source to neighbors with weights.
addEdge/neighbors: Time O(1) amortized; Space O(V+E).
"""

from __future__ import annotations


class Edge:
    """Weighted directed edge."""

    __slots__ = ("to", "weight")

    def __init__(self, to: int, weight: int) -> None:
        self.to = to
        self.weight = weight


class Graph:
    """Graph with adjacency list representation."""

    def __init__(self, vertices: int, directed: bool, weighted: bool) -> None:
        """Creates a graph with vertices vertices (0..V-1).

        Time: O(V); Space: O(V).
        """
        self._vertices = vertices
        self._directed = directed
        self._weighted = weighted
        self._adj: list[list[Edge]] = [[] for _ in range(vertices)]

    def add_edge(self, from_v: int, to_v: int, weight: int = 1) -> None:
        """Adds an edge; unweighted graphs use weight 1.

        Time: O(1); Space: O(1).
        """
        w = weight if self._weighted else 1
        self._adj[from_v].append(Edge(to_v, w))
        if not self._directed:
            self._adj[to_v].append(Edge(from_v, w))

    def vertices(self) -> int:
        """Returns the number of vertices.

        Time: O(1); Space: O(1).
        """
        return self._vertices

    def neighbors(self, v: int) -> list[Edge]:
        """Returns adjacency list of vertex v.

        Time: O(1); Space: O(1).
        """
        return self._adj[v]

    def all_edges(self) -> list[tuple[int, int, int]]:
        """Returns all edges as (from, to, weight) for algorithms like Kruskal.

        Time: O(V+E); Space: O(E).
        """
        edges: list[tuple[int, int, int]] = []
        for u in range(self._vertices):
            for e in self._adj[u]:
                if self._directed or u < e.to:
                    edges.append((u, e.to, e.weight))
        return edges

    def is_directed(self) -> bool:
        return self._directed

    def is_weighted(self) -> bool:
        return self._weighted

# Graphs — Kruskal MST

"""Minimum spanning tree via Kruskal (sort edges + union-find).

Time: O(E log E); Space: O(E).
"""

from __future__ import annotations

from dataclasses import dataclass

from dsa.graphs.graph import Graph
from dsa.unionfind.union_find import UnionFind


@dataclass(frozen=True)
class MstEdge:
    """MST edge record."""

    from_v: int
    to_v: int
    weight: int


def mst(graph: Graph) -> list[MstEdge]:
    """Returns MST edges for a connected undirected weighted graph.

    Time: O(E log E); Space: O(E).
    """
    edges = sorted(graph.all_edges(), key=lambda e: e[2])
    uf = UnionFind(graph.vertices())
    result: list[MstEdge] = []
    for u, v, w in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            result.append(MstEdge(u, v, w))
    return result


def total_weight(graph: Graph) -> int:
    """Returns total MST weight.

    Time: O(E log E); Space: O(E).
    """
    return sum(e.weight for e in mst(graph))

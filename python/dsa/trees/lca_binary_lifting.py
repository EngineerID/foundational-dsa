# Trees — LCA via binary lifting

"""Lowest common ancestor on a rooted tree.

Technique: Binary lifting
Invariant: up[k][v] is 2^k-th ancestor of v.
query: Time O(log n); Space O(n log n).
"""

from __future__ import annotations


class LCABinaryLifting:
    """LCA on a tree defined by a parent array (root's parent is itself)."""

    def __init__(self, parent: list[int]) -> None:
        """Builds lifting table from parent[i] = parent of vertex i.

        Time: O(n log n); Space: O(n log n).
        """
        n = len(parent)
        if n == 0:
            self._up: list[list[int]] = []
            self._depth = []
            return
        depth = [0] * n
        for v in range(n):
            p = parent[v]
            if p != v and 0 <= p < n:
                depth[v] = depth[p] + 1
        log = max(1, (max(depth).bit_length() if n else 0))
        up = [[v for v in range(n)] for _ in range(log)]
        for v in range(n):
            p = parent[v]
            if p != v and 0 <= p < n:
                up[0][v] = p
        for k in range(1, log):
            row = up[k]
            prev = up[k - 1]
            for v in range(n):
                row[v] = prev[prev[v]]
        self._up = up
        self._depth = depth

    def query(self, u: int, v: int) -> int:
        """Returns LCA of u and v. Time O(log n)."""
        if not self._up:
            raise IndexError(u)
        du = self._depth[u]
        dv = self._depth[v]
        if du < dv:
            u, v = v, u
            du, dv = dv, du
        diff = du - dv
        bit = 0
        while diff:
            if diff & 1:
                u = self._up[bit][u]
            diff >>= 1
            bit += 1
        if u == v:
            return u
        for k in range(len(self._up) - 1, -1, -1):
            if self._up[k][u] != self._up[k][v]:
                u = self._up[k][u]
                v = self._up[k][v]
        return self._up[0][u]

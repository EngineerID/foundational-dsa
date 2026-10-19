# Dynamic Programming — TSP (bitmask)

"""Minimum Hamiltonian cycle cost (complete graph, start at 0).

Technique: Bitmask DP
Invariant: dp[mask][i] is min cost to visit mask ending at i.
min_cost: Time O(n^2 2^n); Space O(n 2^n).
"""

_INF = 10**15


def min_cost(dist: list[list[int]]) -> int:
    """Returns min tour visiting all cities from city 0. Time: O(n^2 2^n)."""
    n = len(dist)
    if n <= 1:
        return 0
    size = 1 << n
    dp = [[_INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        if not (mask & 1):
            continue
        for u in range(n):
            if dp[mask][u] >= _INF:
                continue
            if not (mask >> u) & 1:
                continue
            for v in range(n):
                if mask & (1 << v):
                    continue
                nmask = mask | (1 << v)
                nd = dp[mask][u] + dist[u][v]
                if nd < dp[nmask][v]:
                    dp[nmask][v] = nd
    full = size - 1
    best = _INF
    for u in range(1, n):
        if dp[full][u] < _INF:
            best = min(best, dp[full][u] + dist[u][0])
    return best if best < _INF else -1

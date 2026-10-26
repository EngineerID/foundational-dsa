# Dynamic Programming — Matrix chain multiplication

"""Minimum scalar multiplications for a matrix product chain.

Technique: Matrix-chain DP
Invariant: dp[i][j] is optimal cost for subchain i..j.
minMultiplications: Time O(n³); Space O(n²).
"""


def min_multiplications(dimensions: list[int]) -> int:
    """``dimensions`` has length n+1 for n matrices (rows/cols chain).

    Time: O(n^3); Space O(n^2).
    """
    n = len(dimensions) - 1
    if n <= 0:
        return 0
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            best = 10**18
            for k in range(i, j):
                cost = (
                    dp[i][k] + dp[k + 1][j] + dimensions[i] * dimensions[k + 1] * dimensions[j + 1]
                )
                best = min(best, cost)
            dp[i][j] = best
    return dp[0][n - 1]

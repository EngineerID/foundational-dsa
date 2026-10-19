# Dynamic Programming — Matrix chain multiplication

"""Minimum scalar multiplications to multiply a chain of matrices.

Technique: Matrix-chain DP
Invariant: dp[i][j] is optimal cost for matrices i..j.
min_multiplications: Time O(n^3); Space O(n^2).
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

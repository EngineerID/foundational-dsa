# Dynamic Programming — Longest palindromic subsequence

"""Longest palindromic subsequence length.

Technique: Interval DP
Invariant: dp[i][j] is LPS length in s[i..j].
length: Time O(n²); Space O(n²).
"""


def length(s: str) -> int:
    """Time: O(n^2); Space O(n^2)."""
    n = len(s)
    if n == 0:
        return 0
    dp = [[0] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i + 1, n):
            if s[i] == s[j]:
                dp[i][j] = 2 + (dp[i + 1][j - 1] if i + 1 <= j - 1 else 0)
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
    return dp[0][n - 1]

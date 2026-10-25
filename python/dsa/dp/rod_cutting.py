# Dynamic Programming — Rod cutting

"""Maximum revenue cutting a rod of length n.

Technique: Unbounded knapsack DP
Invariant: dp[l] is best revenue for length l.
max_profit: Time O(n^2); Space O(n).
"""


def max_profit(prices: list[int], length: int) -> int:
    """``prices[i]`` is price for length i+1. Time: O(n·length); Space O(length)."""
    if length < 0:
        raise ValueError("length must be non-negative")
    if length == 0:
        return 0
    if not prices:
        return 0
    dp = [0] * (length + 1)
    for l in range(1, length + 1):
        best = 0
        for i, p in enumerate(prices, start=1):
            if i <= l:
                best = max(best, p + dp[l - i])
        dp[l] = best
    return dp[length]

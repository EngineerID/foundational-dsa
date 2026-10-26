# Dynamic Programming — 0/1 Knapsack

"""0/1 knapsack maximum value for a weight capacity.

Technique: 1D knapsack DP
Invariant: dp[w] is best value using capacity w.
maxValue: Time O(n·W); Space O(W).
"""


def max_value(weights: list[int], values: list[int], capacity: int) -> int:
    """Returns max achievable value (0 if impossible).

    Time: O(n·W); Space O(W).
    """
    if capacity < 0:
        raise ValueError("capacity must be non-negative")
    if len(weights) != len(values):
        raise ValueError("weights and values length mismatch")
    dp = [0] * (capacity + 1)
    for w, v in zip(weights, values, strict=True):
        if w < 0 or v < 0:
            raise ValueError("negative weight or value")
        for c in range(capacity, w - 1, -1):
            dp[c] = max(dp[c], dp[c - w] + v)
    return dp[capacity]

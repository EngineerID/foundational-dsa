# Dynamic Programming — 0/1 Knapsack

"""Maximum value with weight capacity (0/1 items).

Technique: 1D knapsack DP
Invariant: dp[w] is best value with capacity w.
max_value: Time O(n·W); Space O(W).
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

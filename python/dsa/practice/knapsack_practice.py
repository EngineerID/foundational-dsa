# Practice — 0/1 Knapsack maximum value

from dsa.dp import knapsack


def max_value(weights: list[int], values: list[int], capacity: int) -> int:
    """Time O(n·W); Space O(W)."""
    return knapsack.max_value(weights, values, capacity)

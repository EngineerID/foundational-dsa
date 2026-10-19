# Dynamic Programming — Coin Change (fewest coins)

"""Minimum coins to make amount (or -1).

Technique: Unbounded knapsack DP
Invariant: dp[a] is min coins for amount a.
min_coins: Time O(n·amount); Space O(amount).
"""


def min_coins(coins: list[int], amount: int) -> int:
    """Fewest coins to sum to ``amount``, or -1 if impossible.

    Time: O(n·amount); Space O(amount).
    """
    if amount < 0:
        raise ValueError("amount must be non-negative")
    if amount == 0:
        return 0
    if not coins:
        return -1
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if c <= 0:
                raise ValueError("coin must be positive")
            if c <= a and dp[a - c] + 1 < dp[a]:
                dp[a] = dp[a - c] + 1
    return dp[amount] if dp[amount] <= amount else -1

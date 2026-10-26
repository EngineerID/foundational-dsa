# Practice — Coin change (fewest coins)


def coin_change(coins: list[int], amount: int) -> int:
    """Minimum coins to make amount, or -1 if impossible.

    Time: O(n·amount); Space O(amount).
    """
    if amount == 0:
        return 0
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a:
                dp[a] = min(dp[a], dp[a - c] + 1)
    return dp[amount] if dp[amount] <= amount else -1

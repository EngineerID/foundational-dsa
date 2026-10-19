# Dynamic Programming — Partition equal subset sum

"""Whether nums can be partitioned into two equal-sum subsets.

Technique: Subset-sum DP
Invariant: dp[s] reachable with elements processed so far.
can_partition: Time O(n·sum); Space O(sum).
"""


def can_partition(nums: list[int]) -> bool:
    """Time: O(n·sum); Space O(sum)."""
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for x in nums:
        if x < 0:
            raise ValueError("negative value")
        for s in range(target, x - 1, -1):
            dp[s] = dp[s] or dp[s - x]
    return dp[target]

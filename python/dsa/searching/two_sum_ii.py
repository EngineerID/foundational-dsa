# Searching — Two Sum II (sorted array)

"""
Two-pointer pair sum on a sorted array; returns 1-based indices.
Technique: Two pointers
Invariant: Answer lies in the current [lo, hi] window if it exists.
two_sum_sorted: Time O(n); Space O(1).
"""


def two_sum_sorted(nums: list[int], target: int) -> list[int]:
    """Return 1-based indices i < j with nums[i-1] + nums[j-1] == target."""
    if len(nums) < 2:
        raise ValueError("nums must have at least two elements")
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        s = nums[lo] + nums[hi]
        if s == target:
            return [lo + 1, hi + 1]
        if s < target:
            lo += 1
        else:
            hi -= 1
    raise ValueError("no solution")

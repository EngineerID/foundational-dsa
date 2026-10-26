# Dynamic Programming — Maximum subarray (Kadane)

"""Largest sum of any contiguous subarray (Kadane).

Technique: Kadane's algorithm
Invariant: cur is the best sum ending at the current index.
maxSubarray: Time O(n); Space O(1).
"""


def max_subarray(nums: list[int]) -> int:
    """Returns maximum contiguous subarray sum (nums must be non-empty).

    Time: O(n); Space O(1).
    """
    if not nums:
        raise ValueError("nums must be non-empty")
    best = cur = nums[0]
    for x in nums[1:]:
        cur = max(x, cur + x)
        best = max(best, cur)
    return best

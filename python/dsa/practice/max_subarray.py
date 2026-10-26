# Practice — Maximum subarray (Kadane)


def max_subarray(nums: list[int]) -> int:
    """Largest sum of any contiguous subarray.

    Time: O(n); Space O(1).
    """
    if not nums:
        raise ValueError("nums must be non-empty")
    best = cur = nums[0]
    for x in nums[1:]:
        cur = max(x, cur + x)
        best = max(best, cur)
    return best

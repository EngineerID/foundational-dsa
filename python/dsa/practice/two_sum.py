# Practice — Two Sum II (sorted array, 1-based indices)


def two_sum_sorted(nums: list[int], target: int) -> list[int]:
    """Returns 1-based indices i < j with nums[i-1] + nums[j-1] == target.

    Time: O(n); Space O(1).
    """
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

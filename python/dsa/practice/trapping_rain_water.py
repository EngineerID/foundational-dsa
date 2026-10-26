# Practice — Trapping rain water (two pointers)


def trap(height: list[int]) -> int:
    """Total trapped water between bars.

    Time: O(n); Space O(1).
    """
    n = len(height)
    if n < 3:
        return 0
    left, right = 0, n - 1
    left_max = right_max = 0
    water = 0
    while left < right:
        if height[left] <= height[right]:
            left_max = max(left_max, height[left])
            water += left_max - height[left]
            left += 1
        else:
            right_max = max(right_max, height[right])
            water += right_max - height[right]
            right -= 1
    return water

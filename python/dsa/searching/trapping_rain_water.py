# Searching — Trapping rain water

"""
Trapped water between elevation bars using two pointers.
Technique: Two pointers
Invariant: Process the lower side of the current window.
trap: Time O(n); Space O(1).
"""


def trap(height: list[int] | None) -> int:
    """Return total trapped water; None or len < 3 yields 0."""
    if not height or len(height) < 3:
        return 0
    left, right = 0, len(height) - 1
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

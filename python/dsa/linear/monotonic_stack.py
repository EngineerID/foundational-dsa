# Linear — Monotonic stack (next greater element)

"""Next strictly greater element to the right for each index.

Technique: Monotonic decreasing stack
Invariant: Stack holds indices with strictly decreasing values.
nextGreaterElement: Time O(n); Space O(n).
"""


def next_greater_element(nums: list[int]) -> list[int]:
    """Return next strictly greater value to the right per index, or -1."""
    if not nums:
        raise ValueError("nums must be non-empty")
    n = len(nums)
    out = [-1] * n
    stack: list[int] = []
    for i, val in enumerate(nums):
        while stack and nums[stack[-1]] < val:
            out[stack.pop()] = val
        stack.append(i)
    return out

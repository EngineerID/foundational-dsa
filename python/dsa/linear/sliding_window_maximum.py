# Linear — Sliding window maximum

"""Maximum in each window of size k using a deque.

Technique: Monotonic deque
Invariant: Deque stores indices with decreasing values.
max_sliding_window: Time O(n); Space O(k).
"""

from collections import deque


def max_sliding_window(nums: list[int], k: int) -> list[int]:
    """Time: O(n); Space O(k)."""
    if k <= 0:
        raise ValueError("k must be positive")
    n = len(nums)
    if n == 0:
        return []
    dq: deque[int] = deque()
    out: list[int] = []
    for i, x in enumerate(nums):
        while dq and nums[dq[-1]] <= x:
            dq.pop()
        dq.append(i)
        while dq[0] <= i - k:
            dq.popleft()
        if i >= k - 1:
            out.append(nums[dq[0]])
    return out

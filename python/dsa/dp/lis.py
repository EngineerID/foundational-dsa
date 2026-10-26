# Dynamic Programming — Longest Increasing Subsequence

"""Length of longest strictly increasing subsequence.

Technique: Patience sorting / tails DP
Invariant: tails[k] is minimum tail of an increasing subsequence of length k+1.
length: Time O(n log n); Space O(n).
"""


def length(arr: list[int] | None) -> int:
    """Returns LIS length (0 for empty).

    Time: O(n log n); Space O(n).
    """
    if not arr:
        return 0
    tails: list[int] = []
    for x in arr:
        lo, hi = 0, len(tails)
        while lo < hi:
            mid = (lo + hi) // 2
            if tails[mid] < x:
                lo = mid + 1
            else:
                hi = mid
        if lo == len(tails):
            tails.append(x)
        else:
            tails[lo] = x
    return len(tails)

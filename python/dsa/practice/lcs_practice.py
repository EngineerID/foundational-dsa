# Practice — Longest common subsequence length

from dsa.dp import lcs


def lcs_length(a: str, b: str) -> int:
    """Time O(n·m); Space O(min(n,m)) in catalog implementation."""
    return lcs.length(a, b)

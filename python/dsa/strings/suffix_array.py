# Strings — Suffix array (O(n log n))

"""Suffix array construction by doubling ranks.

Technique: Suffix array doubling
Invariant: Ranks sort prefixes of length 2^k.
build: Time O(n log n); Space O(n).
"""


def build(s: str) -> list[int]:
    """Returns suffix array (starting indices sorted lexicographically).

    Time: O(n log n); Space: O(n).
    """
    n = len(s)
    if n == 0:
        return []
    sa = list(range(n))
    rank = [ord(c) for c in s]
    k = 1
    while k < n:
        sa.sort(key=lambda i: (rank[i], rank[i + k] if i + k < n else -1))
        new_rank = [0] * n
        new_rank[sa[0]] = 0
        for i in range(1, n):
            prev, cur = sa[i - 1], sa[i]
            prev_key = (rank[prev], rank[prev + k] if prev + k < n else -1)
            cur_key = (rank[cur], rank[cur + k] if cur + k < n else -1)
            new_rank[cur] = new_rank[prev] + (1 if cur_key != prev_key else 0)
        rank = new_rank
        k <<= 1
    return sa

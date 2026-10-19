# Dynamic Programming — Longest Common Subsequence

"""LCS length for two strings.

Technique: 2D DP
Invariant: dp[i][j] is LCS of prefixes a[:i], b[:j].
length: Time O(nm); Space O(min(n,m)).
"""


def length(a: str | None, b: str | None) -> int:
    """LCS length; ``None`` treated as empty.

    Time: O(nm); Space: O(min(n,m)).
    """
    if a is None:
        a = ""
    if b is None:
        b = ""
    if len(a) < len(b):
        a, b = b, a
    prev = [0] * (len(b) + 1)
    for ch in a:
        cur = [0]
        for j, ch_b in enumerate(b, start=1):
            if ch == ch_b:
                cur.append(prev[j - 1] + 1)
            else:
                cur.append(max(prev[j], cur[-1]))
        prev = cur
    return prev[-1]

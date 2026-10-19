# Dynamic Programming — Edit Distance (Levenshtein)

"""Minimum insert/delete/replace ops to match strings.

Technique: Levenshtein DP
Invariant: dp[i][j] is edit distance between prefixes.
distance: Time O(nm); Space O(min(n,m)).
"""


def distance(a: str | None, b: str | None) -> int:
    """Edit distance; ``None`` as empty string.

    Time: O(nm); Space O(min(n,m)).
    """
    if a is None:
        a = ""
    if b is None:
        b = ""
    if len(a) < len(b):
        a, b = b, a
    prev = list(range(len(b) + 1))
    for i, ch_a in enumerate(a, start=1):
        cur = [i]
        for j, ch_b in enumerate(b, start=1):
            cost = 0 if ch_a == ch_b else 1
            cur.append(min(prev[j] + 1, cur[-1] + 1, prev[j - 1] + cost))
        prev = cur
    return prev[-1]

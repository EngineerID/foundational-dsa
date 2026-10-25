# Strings — Manacher (longest palindrome)

"""Longest palindromic substring length.

Technique: Manacher's algorithm
Invariant: Radius array mirrors palindrome centers.
longest_palindrome_length: Time O(n); Space O(n).
"""


def longest_palindrome_length(s: str) -> int:
    """Returns length of longest palindromic substring.

    Time: O(n); Space O(n).
    """
    if not s:
        return 0
    t = "|" + "|".join(s) + "|"
    n = len(t)
    p = [0] * n
    center = right = 0
    best = 0
    for i in range(n):
        mirror = 2 * center - i
        if i < right:
            p[i] = min(right - i, p[mirror])
        while i + p[i] + 1 < n and i - p[i] - 1 >= 0 and t[i + p[i] + 1] == t[i - p[i] - 1]:
            p[i] += 1
        if i + p[i] > right:
            center, right = i, i + p[i]
        best = max(best, p[i])
    return best

# Strings — Z-Algorithm

"""Z-array construction and pattern search.

Technique: Z-algorithm
Invariant: Z[i] is LCP of s[i:] and s.
z_array/search: Time O(n + m); Space O(n).
"""


def z_array(s: str) -> list[int]:
    """Returns Z-array for ``s`` (Z[0] is length of s).

    Time: O(n); Space: O(n).
    """
    n = len(s)
    if n == 0:
        return []
    z = [0] * n
    z[0] = n
    l = r = 0
    for i in range(1, n):
        if i <= r:
            z[i] = min(r - i + 1, z[i - l])
        while i + z[i] < n and s[z[i]] == s[i + z[i]]:
            z[i] += 1
        if i + z[i] - 1 > r:
            l, r = i, i + z[i] - 1
    return z


def search(text: str | None, pattern: str | None) -> int:
    """First occurrence of ``pattern`` in ``text``, or -1.

    Empty pattern returns 0 (``str.find`` convention).
    Time: O(n + m); Space: O(n).
    """
    if text is None or pattern is None:
        return -1
    if pattern == "":
        return 0
    if len(pattern) > len(text):
        return -1
    concat = pattern + "$" + text
    z = z_array(concat)
    m = len(pattern)
    for i in range(m + 1, len(concat)):
        if z[i] == m:
            return i - m - 1
    return -1

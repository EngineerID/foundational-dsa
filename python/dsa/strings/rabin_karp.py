# Strings — Rabin-Karp

"""Substring search via rolling hash.

Technique: Rabin-Karp
Invariant: Hash collision resolved by direct compare.
search: Time O(n + m) average; Space O(1).
"""

_BASE = 256
_MOD = 1_000_000_007


def search(text: str | None, pattern: str | None) -> int:
    """First index of ``pattern`` in ``text``, or -1.

    Empty pattern returns 0.
    Time: O(n + m) average; Space: O(1).
    """
    if text is None or pattern is None:
        return -1
    if pattern == "":
        return 0
    n, m = len(text), len(pattern)
    if m > n:
        return -1
    h = 1
    for _ in range(m - 1):
        h = (h * _BASE) % _MOD
    pat_hash = 0
    win_hash = 0
    for i in range(m):
        pat_hash = (pat_hash * _BASE + ord(pattern[i])) % _MOD
        win_hash = (win_hash * _BASE + ord(text[i])) % _MOD
    for i in range(n - m + 1):
        if pat_hash == win_hash and text[i : i + m] == pattern:
            return i
        if i < n - m:
            win_hash = (win_hash - ord(text[i]) * h) % _MOD
            win_hash = (win_hash * _BASE + ord(text[i + m])) % _MOD
            if win_hash < 0:
                win_hash += _MOD
    return -1

# Strings — Knuth-Morris-Pratt

"""Find first occurrence of a pattern in text.

Technique: Knuth-Morris-Pratt
Invariant: LPS table encodes longest borders of pattern prefixes.
search: Time O(n + m); Space O(m).
"""


def search(text: str | None, pattern: str | None) -> int:
    """Returns first index of pattern in text, or -1.

    Time: O(n + m); Space: O(m).
    """
    if text is None or pattern is None:
        return -1
    if pattern == "":
        return 0
    if len(text) < len(pattern):
        return -1
    lps = _build_lps(pattern)
    i = j = 0
    while i < len(text):
        if text[i] == pattern[j]:
            i += 1
            j += 1
            if j == len(pattern):
                return i - j
        elif j > 0:
            j = lps[j - 1]
        else:
            i += 1
    return -1


def _build_lps(pattern: str) -> list[int]:
    lps = [0] * len(pattern)
    length = 0
    i = 1
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length > 0:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps

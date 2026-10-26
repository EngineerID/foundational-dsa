# Strings — Longest substring without repeating characters

"""Length of the longest substring with all distinct characters.

Technique: Sliding window with last-seen index
Invariant: Window [start, i] has all distinct characters.
length_of_longest_substring: Time O(n); Space O(min(n, alphabet)).
"""


def length_of_longest_substring(s: str | None) -> int:
    """Returns longest substring length (None treated as empty).

    Time: O(n); Space O(min(n, alphabet)).
    """
    if not s:
        return 0
    last: dict[str, int] = {}
    best = 0
    start = 0
    for i, ch in enumerate(s):
        if ch in last and last[ch] >= start:
            start = last[ch] + 1
        last[ch] = i
        best = max(best, i - start + 1)
    return best

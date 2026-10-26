# Practice — Longest substring without repeating characters


def length_of_longest_substring(s: str) -> int:
    """Length of the longest substring with all distinct characters.

    Time: O(n); Space O(min(n, alphabet)).
    """
    last: dict[str, int] = {}
    best = 0
    start = 0
    for i, ch in enumerate(s):
        if ch in last and last[ch] >= start:
            start = last[ch] + 1
        last[ch] = i
        best = max(best, i - start + 1)
    return best

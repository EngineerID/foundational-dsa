# Practice — KMP first occurrence

from dsa.strings.kmp import search


def first_index(text: str, pattern: str) -> int:
    """Time O(n + m); Space O(m)."""
    return search(text, pattern)

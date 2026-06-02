# Searching — Linear Search

"""Find a target value in an array by sequential scan.

Technique: Linear search
Invariant: Scan index increases; all indices before current are not the target (if searching for first match).
search: Time O(n); Space O(1).
"""


def index_of(arr: list[int] | None, key: int) -> int:
    """Returns the index of key in arr, or -1 if absent.

    Time: O(n); Space: O(1).
    """
    if arr is None:
        return -1
    for i, value in enumerate(arr):
        if value == key:
            return i
    return -1

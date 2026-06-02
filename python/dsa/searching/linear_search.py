# Searching — Linear Search

"""Linear search over an array. Time: O(n) per search; Space: O(1)."""


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

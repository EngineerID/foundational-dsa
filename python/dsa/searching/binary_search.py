# Searching — Binary Search

"""Iterative binary search on sorted arrays, including duplicate boundary variants.

Time: O(log n); Space: O(1).
"""


def search(arr: list[int] | None, key: int) -> int:
    """Returns any index of key in sorted arr, or -1.

    Time: O(log n); Space: O(1).
    """
    if arr is None or len(arr) == 0:
        return -1
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] == key:
            return mid
        if arr[mid] < key:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1


def first_occurrence(arr: list[int] | None, key: int) -> int:
    """Returns the leftmost index of key in sorted arr, or -1.

    Time: O(log n); Space: O(1).
    """
    if arr is None or len(arr) == 0:
        return -1
    lo, hi = 0, len(arr) - 1
    result = -1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] == key:
            result = mid
            hi = mid - 1
        elif arr[mid] < key:
            lo = mid + 1
        else:
            hi = mid - 1
    return result


def last_occurrence(arr: list[int] | None, key: int) -> int:
    """Returns the rightmost index of key in sorted arr, or -1.

    Time: O(log n); Space: O(1).
    """
    if arr is None or len(arr) == 0:
        return -1
    lo, hi = 0, len(arr) - 1
    result = -1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] == key:
            result = mid
            lo = mid + 1
        elif arr[mid] < key:
            lo = mid + 1
        else:
            hi = mid - 1
    return result

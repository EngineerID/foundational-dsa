# Sorting — Radix Sort

"""LSD radix sort for non-negative integers using counting sort per digit.

Technique: LSD radix sort
Invariant: After digit d, sorted by lower d digits.
sort: Time O(d * n); Space O(n).
"""

from dsa.sorting.counting_sort import sort_by_digit


def sort(arr: list[int] | None) -> None:
    """Sorts arr in place (non-negative integers).

    Time: O(d * n); Space O(n).
    """
    if arr is None or len(arr) < 2:
        return
    if any(v < 0 for v in arr):
        raise ValueError("Radix sort requires non-negative keys")
    max_val = max(arr)
    exp = 1
    while max_val // exp > 0:
        sort_by_digit(arr, exp)
        exp *= 10

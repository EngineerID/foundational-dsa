# Sorting — QuickSort

"""Sort in place via Lomuto partition, optional random pivot, or 3-way partition.

Technique: Lomuto partition; randomized pivot; 3-way Dutch national flag
Invariant: 3-way: arr[lo..lt-1] < v, arr[lt..gt] == v, arr[gt+1..hi] > v.
sort/sort3Way: Time O(n log n) average; Space O(log n).
"""

import random


def sort(arr: list[int] | None, randomized_pivot: bool = False) -> None:
    """Sorts arr in ascending order in place (Lomuto, last-element pivot by default).

    Time: O(n log n) average; Space: O(log n).
    """
    if arr is None or len(arr) < 2:
        return
    _quick_sort(arr, 0, len(arr) - 1, randomized_pivot)


def sort_3way(arr: list[int] | None) -> None:
    """Sorts arr in place using 3-way partition (duplicate-heavy inputs).

    Time: O(n log n) average, O(n) with few distinct values; Space: O(log n).
    """
    if arr is None or len(arr) < 2:
        return
    _sort_3way(arr, 0, len(arr) - 1)


def _quick_sort(arr: list[int], left: int, right: int, randomized_pivot: bool) -> None:
    if left >= right:
        return
    if randomized_pivot:
        r = random.randint(left, right)
        arr[r], arr[right] = arr[right], arr[r]
    p = _partition(arr, left, right)
    _quick_sort(arr, left, p - 1, randomized_pivot)
    _quick_sort(arr, p + 1, right, randomized_pivot)


def _sort_3way(arr: list[int], lo: int, hi: int) -> None:
    if lo >= hi:
        return
    v = arr[lo]
    lt, gt, i = lo, hi, lo + 1
    while i <= gt:
        if arr[i] < v:
            arr[lt], arr[i] = arr[i], arr[lt]
            lt += 1
            i += 1
        elif arr[i] > v:
            arr[i], arr[gt] = arr[gt], arr[i]
            gt -= 1
        else:
            i += 1
    _sort_3way(arr, lo, lt - 1)
    _sort_3way(arr, gt + 1, hi)


def _partition(arr: list[int], left: int, right: int) -> int:
    pivot = arr[right]
    i = left
    for j in range(left, right):
        if arr[j] <= pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[right] = arr[right], arr[i]
    return i

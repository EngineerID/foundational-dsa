# Sorting — QuickSort

"""QuickSort with optional randomized pivot to avoid O(n²) on sorted input.

Time: O(n log n) average, O(n²) worst; Space: O(log n) stack.
"""

import random


def sort(arr: list[int] | None, randomized_pivot: bool = False) -> None:
    """Sorts arr in ascending order in place.

    If randomized_pivot is True, picks a random pivot — avoids worst-case on sorted arrays.
    Time: O(n log n) average; Space: O(log n).
    """
    if arr is None or len(arr) < 2:
        return
    _quick_sort(arr, 0, len(arr) - 1, randomized_pivot)


def _quick_sort(arr: list[int], left: int, right: int, randomized_pivot: bool) -> None:
    if left >= right:
        return
    if randomized_pivot:
        r = random.randint(left, right)
        arr[r], arr[right] = arr[right], arr[r]
    p = _partition(arr, left, right)
    _quick_sort(arr, left, p - 1, randomized_pivot)
    _quick_sort(arr, p + 1, right, randomized_pivot)


def _partition(arr: list[int], left: int, right: int) -> int:
    pivot = arr[right]
    i = left
    for j in range(left, right):
        if arr[j] <= pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[right] = arr[right], arr[i]
    return i

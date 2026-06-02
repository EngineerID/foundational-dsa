# Sorting — Bubble Sort

"""Bubble sort with early-exit when no swaps occur.

Time: O(n²) worst/average, O(n) best; Space: O(1).
"""


def sort(arr: list[int] | None) -> None:
    """Sorts arr in ascending order in place.

    Time: O(n²) worst; Space: O(1).
    """
    if arr is None or len(arr) < 2:
        return
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break

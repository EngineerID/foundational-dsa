# Sorting — Insertion Sort

"""Insertion sort — efficient on nearly sorted input (O(n) best case).

Time: O(n²) worst/average, O(n) best; Space: O(1).
"""


def sort(arr: list[int] | None) -> None:
    """Sorts arr in ascending order in place.

    Time: O(n²) worst; O(n) best when nearly sorted; Space: O(1).
    """
    if arr is None or len(arr) < 2:
        return
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

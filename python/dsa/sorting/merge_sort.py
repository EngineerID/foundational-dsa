# Sorting — Merge Sort

"""Return a stably sorted copy via top-down or bottom-up merge passes.

Technique: Top-down mergesort; bottom-up mergesort
Invariant: Merged subarrays are sorted; equal elements keep relative order.
sort/sortBottomUp: Time O(n log n); Space O(n).
"""


def sort(arr: list[int] | None) -> list[int]:
    """Returns a new sorted copy of arr (top-down).

    Time: O(n log n); Space: O(n).
    """
    if arr is None:
        return []
    if len(arr) < 2:
        return list(arr)
    copy = list(arr)
    _sort_in_place(copy, 0, len(copy) - 1)
    return copy


def sort_bottom_up(arr: list[int] | None) -> list[int]:
    """Returns a new sorted copy using bottom-up iterative merge passes.

    Time: O(n log n); Space: O(n).
    """
    if arr is None:
        return []
    if len(arr) < 2:
        return list(arr)
    copy = list(arr)
    n = len(copy)
    size = 1
    while size < n:
        left = 0
        while left < n - size:
            mid = left + size - 1
            right = min(left + 2 * size - 1, n - 1)
            _merge_range(copy, left, mid, right)
            left += 2 * size
        size *= 2
    return copy


def _sort_in_place(arr: list[int], left: int, right: int) -> None:
    if left >= right:
        return
    mid = left + (right - left) // 2
    _sort_in_place(arr, left, mid)
    _sort_in_place(arr, mid + 1, right)
    _merge(arr, left, mid, right)


def _merge(arr: list[int], left: int, mid: int, right: int) -> None:
    temp: list[int] = []
    i, j = left, mid + 1
    while i <= mid and j <= right:
        if arr[i] <= arr[j]:
            temp.append(arr[i])
            i += 1
        else:
            temp.append(arr[j])
            j += 1
    while i <= mid:
        temp.append(arr[i])
        i += 1
    while j <= right:
        temp.append(arr[j])
        j += 1
    for k, value in enumerate(temp):
        arr[left + k] = value


def _merge_range(arr: list[int], left: int, mid: int, right: int) -> None:
    temp: list[int] = []
    i, j = left, mid + 1
    while i <= mid and j <= right:
        if arr[i] <= arr[j]:
            temp.append(arr[i])
            i += 1
        else:
            temp.append(arr[j])
            j += 1
    while i <= mid:
        temp.append(arr[i])
        i += 1
    while j <= right:
        temp.append(arr[j])
        j += 1
    for k, value in enumerate(temp):
        arr[left + k] = value

# Sorting — Merge Sort

"""Stable merge sort (divide and conquer). Time: O(n log n); Space: O(n) auxiliary."""


def sort(arr: list[int] | None) -> list[int]:
    """Returns a new sorted copy of arr in ascending order.

    Time: O(n log n); Space: O(n).
    """
    if arr is None:
        return []
    if len(arr) < 2:
        return list(arr)
    copy = list(arr)
    _sort_in_place(copy, 0, len(copy) - 1)
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

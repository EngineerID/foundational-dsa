# Searching — QuickSelect (order statistics)

"""Find the k-th smallest element in an unordered array.

Technique: Quickselect (Hoare partition)
Invariant: Pivot partition places pivot at final rank; recurse on one side only.
select: Time O(n) average, O(n²) worst; Space O(1).
"""


def kth_smallest(arr: list[int] | None, k: int) -> int:
    """Returns the k-th smallest value in arr (1-based: k=1 is minimum).

    Does not mutate the caller's array.
    Time: O(n) average; Space: O(n) for the defensive copy.
    """
    if arr is None or len(arr) == 0:
        raise ValueError("Array must be non-empty")
    if k < 1 or k > len(arr):
        raise ValueError("k out of range")
    copy = list(arr)
    return _select(copy, 0, len(copy) - 1, k - 1)


def _select(arr: list[int], left: int, right: int, k_index: int) -> int:
    if left == right:
        return arr[left]
    pivot_index = _partition(arr, left, right)
    if k_index == pivot_index:
        return arr[pivot_index]
    if k_index < pivot_index:
        return _select(arr, left, pivot_index - 1, k_index)
    return _select(arr, pivot_index + 1, right, k_index)


def _partition(arr: list[int], left: int, right: int) -> int:
    pivot = arr[right]
    i = left
    for j in range(left, right):
        if arr[j] <= pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[right] = arr[right], arr[i]
    return i

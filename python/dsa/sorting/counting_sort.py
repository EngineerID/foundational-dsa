# Sorting — Counting Sort

"""Stable sort for non-negative integers in bounded range.

Technique: Counting sort
Invariant: Prefix counts place keys in stable order.
sort/sortByDigit: Time O(n + k); Space O(k).
"""


def sort(arr: list[int] | None) -> None:
    """Sorts arr in place (non-negative keys).

    Time: O(n + k); Space O(k).
    """
    if arr is None or len(arr) < 2:
        return
    if any(v < 0 for v in arr):
        raise ValueError("Counting sort requires non-negative keys")
    max_val = max(arr)
    _sort_range(arr, max_val)


def sort_by_digit(arr: list[int], exp: int) -> None:
    """Stable sort by digit at exp (1, 10, 100...) for radix sort.

    Time: O(n + 10); Space O(n).
    """
    if arr is None or len(arr) < 2:
        return
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    for v in arr:
        count[(v // exp) % 10] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]
    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1
    for i in range(n):
        arr[i] = output[i]


def _sort_range(arr: list[int], max_val: int) -> None:
    n = len(arr)
    output = [0] * n
    count = [0] * (max_val + 1)
    for v in arr:
        count[v] += 1
    for i in range(1, max_val + 1):
        count[i] += count[i - 1]
    for i in range(n - 1, -1, -1):
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]] -= 1
    for i in range(n):
        arr[i] = output[i]

# Sorting — Heapsort

"""Sort an array in ascending order in place using a binary max-heap.

Technique: Heapsort
Invariant: Max-heap on active prefix; largest moved to sorted suffix.
sort: Time O(n log n); Space O(1).
"""


def sort(arr: list[int] | None) -> None:
    """Sorts arr in ascending order in place.

    Time: O(n log n); Space: O(1).
    """
    if arr is None or len(arr) < 2:
        return
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        _sift_down(arr, n, i)
    for end in range(n - 1, 0, -1):
        arr[0], arr[end] = arr[end], arr[0]
        _sift_down(arr, end, 0)


def _sift_down(arr: list[int], heap_size: int, i: int) -> None:
    while True:
        left = 2 * i + 1
        right = 2 * i + 2
        largest = i
        if left < heap_size and arr[left] > arr[largest]:
            largest = left
        if right < heap_size and arr[right] > arr[largest]:
            largest = right
        if largest == i:
            break
        arr[i], arr[largest] = arr[largest], arr[i]
        i = largest

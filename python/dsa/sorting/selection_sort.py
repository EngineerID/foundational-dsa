# Sorting — Selection Sort

"""Sort an array in ascending order in place.

Technique: Selection sort
Invariant: Prefix [0..i) is sorted and contains the i smallest elements.
sort: Time O(n²); Space O(1).
"""


def sort(arr: list[int] | None) -> None:
    """Sorts arr in ascending order in place.

    Time: O(n²); Space: O(1).
    """
    if arr is None or len(arr) < 2:
        return
    for i in range(len(arr) - 1):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]

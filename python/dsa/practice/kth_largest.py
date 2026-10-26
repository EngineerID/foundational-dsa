# Practice — Kth largest element

from dsa.searching.quick_select import kth_smallest


def kth_largest(nums: list[int], k: int) -> int:
    """Returns the k-th largest element (1-based).

    Time: O(n) average; Space O(n) copy.
    """
    return kth_smallest(nums, len(nums) - k + 1)

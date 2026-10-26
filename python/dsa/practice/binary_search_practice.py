# Practice — Binary search in a sorted array

from dsa.searching.binary_search import search


def find_index(nums: list[int], target: int) -> int:
    """Index of target in sorted nums, or -1. Time O(log n); Space O(1)."""
    return search(nums, target)

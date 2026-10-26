# Heaps — Top K frequent elements

"""
K most frequent integers (frequency desc, then value asc).
Technique: Size-k min-heap by frequency
Invariant: Heap holds the k best candidates seen so far.
top_k_frequent: Time O(n log k); Space O(n).
"""

from __future__ import annotations

import heapq
from collections import Counter


def top_k_frequent(nums: list[int], k: int) -> list[int]:
    """Return k most frequent elements; k must be in 1..distinct count."""
    if not nums or k <= 0:
        raise ValueError("invalid input")
    counts = Counter(nums)
    if k > len(counts):
        raise ValueError("k exceeds distinct count")
    heap: list[tuple[int, int]] = []
    for num, freq in counts.items():
        heapq.heappush(heap, (freq, num))
        if len(heap) > k:
            heapq.heappop(heap)
    out = [num for _, num in heap]
    out.sort(key=lambda n: (-counts[n], n))
    return out

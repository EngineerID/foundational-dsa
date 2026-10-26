# Practice — Top K frequent elements

from __future__ import annotations

import heapq
from collections import Counter


def top_k_frequent(nums: list[int], k: int) -> list[int]:
    """Returns the k most frequent elements (sorted by frequency desc, then value asc).

    Time: O(n log k); Space O(n).
    """
    counts = Counter(nums)
    heap: list[tuple[int, int]] = []
    for num, freq in counts.items():
        heapq.heappush(heap, (freq, num))
        if len(heap) > k:
            heapq.heappop(heap)
    out = [num for _, num in heap]
    out.sort(key=lambda n: (-counts[n], n))
    return out

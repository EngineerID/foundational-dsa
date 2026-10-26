# Practice — Top K frequent elements

from __future__ import annotations

from collections import Counter


def top_k_frequent(nums: list[int], k: int) -> list[int]:
    """Returns the k most frequent elements (sorted by frequency desc, then value asc).

    Time: O(n log n); Space O(n).
    """
    counts = Counter(nums)
    entries = sorted(counts.items(), key=lambda x: (-x[1], x[0]))
    return [num for num, _ in entries[:k]]

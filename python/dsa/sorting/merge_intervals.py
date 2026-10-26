# Sorting — Merge intervals

"""
Merge overlapping closed intervals [start, end].
Technique: Sort by start, linear merge
Invariant: Merged list is sorted and pairwise non-overlapping.
merge_intervals: Time O(n log n); Space O(n).
"""


def merge_intervals(intervals: list[list[int]] | None) -> list[list[int]]:
    """Return merged intervals sorted by start; None treated as empty."""
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0][:]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged

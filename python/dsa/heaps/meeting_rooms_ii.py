# Heaps — Meeting rooms II

"""
Minimum conference rooms for overlapping [start, end) meetings.
Technique: Sort by start + min-heap of end times
Invariant: Heap size is concurrent meetings after each event.
min_meeting_rooms: Time O(n log n); Space O(n).
"""

import heapq


def min_meeting_rooms(intervals: list[list[int]] | None) -> int:
    """Return minimum rooms; None or empty → 0."""
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[0])
    ends: list[int] = []
    for start, end in intervals:
        if ends and ends[0] <= start:
            heapq.heappop(ends)
        heapq.heappush(ends, end)
    return len(ends)

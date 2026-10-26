# Practice — Meeting rooms II

from __future__ import annotations

import heapq


def min_meeting_rooms(intervals: list[list[int]]) -> int:
    """Minimum conference rooms for non-overlapping meetings.

    Time: O(n log n); Space O(n).
    """
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[0])
    ends: list[int] = []
    for start, end in intervals:
        if ends and ends[0] <= start:
            heapq.heapreplace(ends, end)
        else:
            heapq.heappush(ends, end)
    return len(ends)

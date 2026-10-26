# Graphs — Number of islands

"""
Count 4-connected land components in a binary grid ('1' land, '0' water).
Technique: BFS flood fill
Invariant: Each unvisited '1' starts one new component.
num_islands: Time O(rows·cols); Space O(rows·cols).
"""

from __future__ import annotations

from collections import deque


def num_islands(grid: list[list[str]] | None) -> int:
    """Return island count; works on a copy of grid."""
    if not grid or not grid[0]:
        return 0
    work = [row[:] for row in grid]
    rows, cols = len(work), len(work[0])
    count = 0
    for r in range(rows):
        for c in range(cols):
            if work[r][c] != "1":
                continue
            count += 1
            q: deque[tuple[int, int]] = deque([(r, c)])
            work[r][c] = "0"
            while q:
                cr, cc = q.popleft()
                for nr, nc in ((cr - 1, cc), (cr + 1, cc), (cr, cc - 1), (cr, cc + 1)):
                    if 0 <= nr < rows and 0 <= nc < cols and work[nr][nc] == "1":
                        work[nr][nc] = "0"
                        q.append((nr, nc))
    return count

# Practice — Number of islands

from __future__ import annotations

from collections import deque


def num_islands(grid: list[list[str]]) -> int:
    """Count 4-connected land components ('1' vs '0').

    Time: O(rows * cols); Space O(rows * cols).
    """
    if not grid or not grid[0]:
        return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] != "1":
                continue
            count += 1
            q: deque[tuple[int, int]] = deque([(r, c)])
            grid[r][c] = "0"
            while q:
                cr, cc = q.popleft()
                for nr, nc in ((cr - 1, cc), (cr + 1, cc), (cr, cc - 1), (cr, cc + 1)):
                    if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == "1":
                        grid[nr][nc] = "0"
                        q.append((nr, nc))
    return count

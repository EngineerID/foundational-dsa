// Graphs — Number of islands

/**
 * Count 4-connected land components in a binary grid ('1' land, '0' water).
 * Technique: BFS flood fill
 * Invariant: Each unvisited '1' starts one new component.
 * numIslands: Time O(rows·cols); Space O(rows·cols).
 */

function numIslands(grid) {
  if (!grid || !grid.length || !grid[0].length) return 0;
  const work = grid.map((row) => row.slice());
  const rows = work.length;
  const cols = work[0].length;
  let count = 0;
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (work[r][c] !== '1') continue;
      count += 1;
      const q = [[r, c]];
      work[r][c] = '0';
      while (q.length) {
        const [cr, cc] = q.shift();
        for (const [dr, dc] of dirs) {
          const nr = cr + dr;
          const nc = cc + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && work[nr][nc] === '1') {
            work[nr][nc] = '0';
            q.push([nr, nc]);
          }
        }
      }
    }
  }
  return count;
}

module.exports = { numIslands };

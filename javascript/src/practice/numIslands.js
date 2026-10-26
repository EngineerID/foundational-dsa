// Practice — Number of islands

/** @param {string[][]} grid */
function numIslands(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (grid[r][c] !== '1') {
        continue;
      }
      count += 1;
      const q = [[r, c]];
      grid[r][c] = '0';
      while (q.length) {
        const [cr, cc] = q.pop();
        for (const [dr, dc] of dirs) {
          const nr = cr + dr;
          const nc = cc + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === '1') {
            grid[nr][nc] = '0';
            q.push([nr, nc]);
          }
        }
      }
    }
  }
  return count;
}

module.exports = { numIslands };

// Practice — Word search

/** @param {string[][]} board @param {string} word */
function wordSearch(board, word) {
  if (!word) {
    return true;
  }
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c, i) {
    if (i === word.length) {
      return true;
    }
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) {
      return false;
    }
    const tmp = board[r][c];
    board[r][c] = '#';
    const found =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    board[r][c] = tmp;
    return found;
  }

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }
  return false;
}

module.exports = { wordSearch };

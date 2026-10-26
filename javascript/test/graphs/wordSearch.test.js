const { wordSearch } = require('../../src/graphs/wordSearch');

describe('word search', () => {
  test('dfs backtracking', () => {
    const board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
    expect(wordSearch(board.map((r) => r.slice()), 'ABCCED')).toBe(true);
    expect(wordSearch(board.map((r) => r.slice()), 'ABCD')).toBe(false);
  });
});

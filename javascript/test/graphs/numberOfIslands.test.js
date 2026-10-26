const { numIslands } = require('../../src/graphs/numberOfIslands');

describe('number of islands', () => {
  test('bfs flood fill', () => {
    const grid = [['1', '1', '0'], ['0', '1', '0'], ['0', '0', '1']];
    expect(numIslands(grid.map((r) => r.slice()))).toBe(2);
    expect(grid[0][0]).toBe('1');
  });
});

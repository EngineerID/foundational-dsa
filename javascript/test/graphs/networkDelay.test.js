const { networkDelay } = require('../../src/graphs/networkDelay');

describe('network delay', () => {
  test('dijkstra max distance', () => {
    expect(networkDelay(4, [[1, 0, 1], [1, 2, 1], [2, 3, 1]], 1)).toBe(2);
  });
});

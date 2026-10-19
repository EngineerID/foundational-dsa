const { maxFlow } = require('../../src/graphs/edmondsKarp');

describe('Edmonds-Karp', () => {
  test('max flow', () => {
    expect(
      maxFlow(4, [[0, 1, 3], [1, 2, 2], [1, 3, 3], [2, 3, 1]], 0, 3),
    ).toBe(3);
  });
});

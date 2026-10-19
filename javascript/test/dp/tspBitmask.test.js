const { minCost } = require('../../src/dp/tspBitmask');

describe('TSP bitmask', () => {
  test('min tour cost', () => {
    const dist = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]];
    expect(minCost(dist)).toBe(80);
  });
});

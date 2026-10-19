const { minCost } = require('../../src/graphs/hungarian');

describe('Hungarian', () => {
  test('min assignment cost', () => {
    expect(minCost([[4, 1, 3], [2, 0, 5], [3, 2, 1]])).toBe(4);
  });
});

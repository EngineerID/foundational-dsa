const { maxValue } = require('../../src/dp/knapsack');

test('knapsack', () => {
  expect(maxValue([1, 2, 3], [6, 10, 12], 5)).toBe(22);
});

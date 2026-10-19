const { minCoins } = require('../../src/dp/coinChange');

test('coin change', () => {
  expect(minCoins([1, 2, 5], 11)).toBe(3);
  expect(minCoins([2], 3)).toBe(-1);
});

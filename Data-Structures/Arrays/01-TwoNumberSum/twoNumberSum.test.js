const twoNumberSum = require('./twoNumberSum.js');

test('finds a valid pair that sums to target', () => {
  const result = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  expect(result.sort()).toEqual([11, -1].sort());
});

test('returns empty array if no pair exists', () => {
  const result = twoNumberSum([1, 2, 3, 4], 100);
  expect(result).toEqual([]);
});

test('handles short array with no pair', () => {
  const result = twoNumberSum([5], 5);
  expect(result).toEqual([]);
});

test('finds pair with negative numbers', () => {
  const result = twoNumberSum([-3, 4, 1, 2], 1);
  expect(result.sort()).toEqual([-3, 4].sort());
});

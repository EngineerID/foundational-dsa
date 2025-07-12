const sortedSquaredArray = require('./sortedSquaredArray.js');

test('squares and sorts the array', () => {
  expect(sortedSquaredArray([-7, -3, 1, 4, 8])).toEqual([1, 9, 16, 49, 64]);
});

test('handles all negatives', () => {
  expect(sortedSquaredArray([-5, -4, -2])).toEqual([4, 16, 25]);
});

test('handles all positives', () => {
  expect(sortedSquaredArray([2, 3, 5])).toEqual([4, 9, 25]);
});

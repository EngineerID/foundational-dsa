const { maxSlidingWindow } = require('../../src/linear/slidingWindowMaximum');

describe('sliding window maximum', () => {
  test('max sliding window', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
  });
});

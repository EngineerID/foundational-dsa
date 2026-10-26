const { twoSumSorted } = require('../../src/practice/twoSumSorted');
const { maxSubarray } = require('../../src/practice/maxSubarray');
const { isValidParentheses } = require('../../src/practice/validParentheses');
const { minMeetingRooms } = require('../../src/practice/meetingRooms');
const { numIslands } = require('../../src/practice/numIslands');
const { topKFrequent } = require('../../src/practice/topKFrequent');
const { canFinish } = require('../../src/practice/courseSchedule');
const { lengthOfLongestSubstring } = require('../../src/practice/longestSubstring');
const { coinChange } = require('../../src/practice/coinChange');
const { LRUCacheDesign } = require('../../src/practice/lruDesign');

describe('practice problems', () => {
  test('two sum sorted', () => {
    expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test('max subarray', () => {
    expect(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('valid parentheses', () => {
    expect(isValidParentheses('()[]{}')).toBe(true);
    expect(isValidParentheses('(]')).toBe(false);
  });

  test('meeting rooms', () => {
    expect(
      minMeetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
      ]),
    ).toBe(2);
  });

  test('num islands', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    expect(numIslands(grid.map((row) => row.slice()))).toBe(3);
  });

  test('top k frequent', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test('course schedule', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });

  test('longest substring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('coin change', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  test('lru design', () => {
    const cache = new LRUCacheDesign(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(3);
  });
});

const fs = require('fs');
const path = require('path');

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
const { mergeIntervals } = require('../../src/practice/mergeIntervals');
const { levelOrder } = require('../../src/practice/levelOrder');
const { wordSearch } = require('../../src/practice/wordSearch');
const { kthLargest } = require('../../src/practice/kthLargest');
const { trap } = require('../../src/practice/trappingRainWater');
const { editDistance } = require('../../src/practice/editDistancePractice');
const { serialize, deserialize } = require('../../src/practice/treeCodec');
const { networkDelay } = require('../../src/practice/networkDelay');
const { maxSlidingWindow } = require('../../src/practice/slidingWindowMax');

const tools = path.join(__dirname, '../../../tools');

function cases(name) {
  return JSON.parse(fs.readFileSync(path.join(tools, name), 'utf8'));
}

describe('practice interview goldens', () => {
  test('two-sum-ii-goldens.json', () => {
    for (const row of cases('two-sum-ii-goldens.json')) {
      if (row.expectError) {
        expect(() => twoSumSorted(row.nums, row.target)).toThrow();
      } else {
        expect(twoSumSorted(row.nums, row.target)).toEqual(row.expected);
      }
    }
  });

  test('maximum-subarray-goldens.json', () => {
    for (const row of cases('maximum-subarray-goldens.json')) {
      if (row.expectError) {
        expect(() => maxSubarray(row.nums)).toThrow();
      } else {
        expect(maxSubarray(row.nums)).toBe(row.expected);
      }
    }
  });

  test('valid-parentheses-goldens.json', () => {
    for (const row of cases('valid-parentheses-goldens.json')) {
      expect(isValidParentheses(row.s)).toBe(row.expected);
    }
  });

  test('meeting-rooms-ii-goldens.json', () => {
    for (const row of cases('meeting-rooms-ii-goldens.json')) {
      expect(minMeetingRooms(row.intervals)).toBe(row.expected);
    }
  });

  test('number-of-islands-goldens.json', () => {
    for (const row of cases('number-of-islands-goldens.json')) {
      const grid = (row.grid || []).map((r) => r.slice());
      expect(numIslands(grid)).toBe(row.expected);
    }
  });

  test('top-k-frequent-elements-goldens.json', () => {
    for (const row of cases('top-k-frequent-elements-goldens.json')) {
      if (row.expectError) {
        expect(() => topKFrequent(row.nums, row.k)).toThrow();
      } else {
        expect(topKFrequent(row.nums, row.k)).toEqual(row.expected);
      }
    }
  });

  test('course-schedule-goldens.json', () => {
    for (const row of cases('course-schedule-goldens.json')) {
      expect(canFinish(row.numCourses, row.prerequisites)).toBe(row.expected);
    }
  });

  test('longest-substring-without-repeating-goldens.json', () => {
    for (const row of cases('longest-substring-without-repeating-goldens.json')) {
      expect(lengthOfLongestSubstring(row.s)).toBe(row.expected);
    }
  });

  test('coin-change-goldens.json', () => {
    for (const row of cases('coin-change-goldens.json')) {
      expect(coinChange(row.coins, row.amount)).toBe(row.expected);
    }
  });

  test('lru-cache-goldens.json', () => {
    for (const { capacity, steps } of cases('lru-cache-goldens.json')) {
      const cache = new LRUCacheDesign(capacity);
      for (const step of steps) {
        if (step.op === 'put') {
          cache.put(step.key, step.value);
        } else if (step.op === 'get') {
          expect(cache.get(step.key)).toBe(step.expected);
        }
      }
    }
  });

  test('merge-intervals-goldens.json', () => {
    for (const row of cases('merge-intervals-goldens.json')) {
      expect(mergeIntervals(row.intervals)).toEqual(row.expected);
    }
  });

  test('level-order-traversal-goldens.json', () => {
    for (const row of cases('level-order-traversal-goldens.json')) {
      expect(levelOrder(row.values)).toEqual(row.expected);
    }
  });

  test('word-search-goldens.json', () => {
    for (const row of cases('word-search-goldens.json')) {
      const board = (row.board || []).map((r) => r.slice());
      expect(wordSearch(board, row.word)).toBe(row.expected);
    }
  });

  test('quick-select-goldens.json', () => {
    for (const row of cases('quick-select-goldens.json')) {
      if (row.expectError) {
        expect(() => kthLargest(row.arr, row.k)).toThrow();
      } else {
        const kLargest = row.arr.length - row.k + 1;
        expect(kthLargest(row.arr, kLargest)).toBe(row.expected);
      }
    }
  });

  test('trapping-rain-water-goldens.json', () => {
    for (const row of cases('trapping-rain-water-goldens.json')) {
      expect(trap(row.height)).toBe(row.expected);
    }
  });

  test('edit-distance-goldens.json', () => {
    for (const row of cases('edit-distance-goldens.json')) {
      expect(editDistance(row.a, row.b)).toBe(row.expected);
    }
  });

  test('serialize-binary-tree-goldens.json', () => {
    for (const row of cases('serialize-binary-tree-goldens.json')) {
      expect(deserialize(serialize(row.values))).toEqual(row.expected);
    }
  });

  test('network-delay-goldens.json', () => {
    for (const row of cases('network-delay-goldens.json')) {
      expect(networkDelay(row.n, row.times, row.source)).toBe(row.expected);
    }
  });

  test('sliding-window-maximum-goldens.json', () => {
    for (const row of cases('sliding-window-maximum-goldens.json')) {
      expect(maxSlidingWindow(row.nums, row.k)).toEqual(row.expected);
    }
  });
});

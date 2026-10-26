// practice-edge-theme-topics: binary-heap binary-search bubble-sort counting-sort dynamic-array linear-search maximum-subarray merge-sort monotonic-stack stack
const LARGE_N = 256;

const { bubbleSort } = require('../../src/practice/bubbleSortPractice');
const { mergeSort } = require('../../src/practice/mergeSortPractice');
const { countingSort } = require('../../src/practice/countingSortPractice');
const { findIndex: linearFindIndex } = require('../../src/practice/linearSearchPractice');
const { findIndex: binaryFindIndex } = require('../../src/practice/binarySearchPractice');
const { maxSubarray } = require('../../src/practice/maxSubarray');
const { DynamicArrayPractice } = require('../../src/practice/dynamicArrayPractice');
const { StackPractice } = require('../../src/practice/stackPractice');
const { extractOrder } = require('../../src/practice/binaryHeapPractice');
const { nextGreater } = require('../../src/practice/monotonicStackPractice');

function sortCopyBattery(sortFn, allowNegative = true) {
  expect(sortFn([])).toEqual([]);
  expect(sortFn([7])).toEqual([7]);
  expect(sortFn([2, 2, 1])).toEqual([1, 2, 2]);
  expect(sortFn(Array.from({ length: LARGE_N }, (_, i) => LARGE_N - i))).toEqual(
    Array.from({ length: LARGE_N }, (_, i) => i + 1),
  );
  if (!allowNegative) expect(() => sortFn([-1])).toThrow();
}

describe('practice edge themes', () => {
  test('sorting empty single duplicate large invalid', () => {
    sortCopyBattery(bubbleSort);
    sortCopyBattery(mergeSort);
    expect(() => countingSort([2, -1])).toThrow();
  });

  test('searching edge themes', () => {
    expect(linearFindIndex([], 1)).toBe(-1);
    expect(linearFindIndex([5], 5)).toBe(0);
    expect(linearFindIndex([1, 1, 2], 1)).toBe(0);
    expect(linearFindIndex(Array.from({ length: LARGE_N }, (_, i) => i), LARGE_N - 1)).toBe(
      LARGE_N - 1,
    );
    expect(linearFindIndex([1, 2, 3], 9)).toBe(-1);
    expect(binaryFindIndex([], 1)).toBe(-1);
    expect(binaryFindIndex([3], 3)).toBe(0);
    expect(binaryFindIndex([3, 1], 1)).toBe(-1);
    expect(binaryFindIndex(Array.from({ length: LARGE_N }, (_, i) => i), LARGE_N - 1)).toBe(
      LARGE_N - 1,
    );
  });

  test('maximum subarray edge themes', () => {
    expect(maxSubarray([4])).toBe(4);
    expect(maxSubarray([-2, -1])).toBe(-1);
    expect(maxSubarray(Array.from({ length: LARGE_N }, () => 1))).toBe(LARGE_N);
    expect(() => maxSubarray([])).toThrow();
  });

  test('dynamic array edge themes', () => {
    const da = new DynamicArrayPractice();
    expect(da.size()).toBe(0);
    da.add(1);
    expect(da.get(0)).toBe(1);
    da.add(1);
    expect(() => da.get(-1)).toThrow();
    for (let i = 0; i < LARGE_N; i += 1) da.add(i);
    expect(da.size()).toBe(2 + LARGE_N);
  });

  test('stack edge themes', () => {
    const st = new StackPractice();
    expect(st.isEmpty()).toBe(true);
    st.push(1);
    expect(st.peek()).toBe(1);
    st.push(1);
    expect(st.pop()).toBe(1);
    for (let i = 0; i < LARGE_N; i += 1) st.push(1);
    expect(() => new StackPractice().pop()).toThrow();
  });

  test('binary heap extractOrder edge themes', () => {
    expect(extractOrder([])).toEqual([]);
    expect(extractOrder([7])).toEqual([7]);
    expect(extractOrder([2, 2, 1])).toEqual([1, 2, 2]);
    expect(extractOrder(Array.from({ length: LARGE_N }, (_, i) => LARGE_N - i))).toEqual(
      Array.from({ length: LARGE_N }, (_, i) => i + 1),
    );
  });

  test('monotonic stack nextGreater edge themes', () => {
    expect(() => nextGreater([])).toThrow();
    expect(nextGreater([7])).toEqual([-1]);
    expect(nextGreater([2, 2, 1])).toEqual([-1, -1, -1]);
    expect(nextGreater(Array.from({ length: LARGE_N }, (_, i) => i + 1))).toEqual(
      Array.from({ length: LARGE_N }, (_, i) => (i < LARGE_N - 1 ? i + 2 : -1)),
    );
  });
});

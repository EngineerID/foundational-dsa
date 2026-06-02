const { kthSmallest } = require('../../src/searching/quickSelect');

describe('quickSelect', () => {
  test('kth smallest typical', () => {
    expect(kthSmallest([7, 10, 4, 3, 20, 15], 3)).toBe(7);
  });

  test('min and max', () => {
    const arr = [5, 1, 4, 2, 3];
    expect(kthSmallest(arr, 1)).toBe(1);
    expect(kthSmallest(arr, 5)).toBe(5);
  });

  test('single element', () => {
    expect(kthSmallest([9], 1)).toBe(9);
  });

  test('duplicates', () => {
    expect(kthSmallest([2, 2, 2, 1], 2)).toBe(2);
  });

  test('invalid k', () => {
    expect(() => kthSmallest([1], 0)).toThrow('k out of range');
    expect(() => kthSmallest([], 1)).toThrow('Array must be non-empty');
  });
});

const { firstOccurrence, lastOccurrence, search } = require('../../src/searching/binarySearch');

describe('binarySearch', () => {
  test('search typical', () => {
    const arr = [1, 3, 5, 7, 9];
    expect(search(arr, 5)).toBe(2);
    expect(search(arr, 4)).toBe(-1);
  });

  test('empty and single', () => {
    expect(search([], 1)).toBe(-1);
    expect(search([5], 5)).toBe(0);
  });

  test('first and last occurrence with duplicates', () => {
    const arr = [1, 2, 2, 2, 3];
    expect(firstOccurrence(arr, 2)).toBe(1);
    expect(lastOccurrence(arr, 2)).toBe(3);
    expect(firstOccurrence(arr, 4)).toBe(-1);
  });

  test('even length array', () => {
    expect(search([2, 4, 6, 8], 4)).toBe(1);
  });
});

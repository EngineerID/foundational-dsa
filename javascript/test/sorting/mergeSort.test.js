const { sort } = require('../../src/sorting/mergeSort');

describe('mergeSort', () => {
  test('typical array', () => {
    expect(sort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('empty array', () => {
    expect(sort([])).toEqual([]);
  });

  test('duplicates', () => {
    expect(sort([2, 2])).toEqual([2, 2]);
  });

  test('null returns empty', () => {
    expect(sort(null)).toEqual([]);
  });
});

const { sort, sortBottomUp } = require('../../src/sorting/mergeSort');

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

  test('bottom-up', () => {
    expect(sortBottomUp([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
  });
});

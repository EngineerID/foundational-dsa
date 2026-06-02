const { sort } = require('../../src/sorting/heapSort');

describe('heapSort', () => {
  test('typical', () => {
    const arr = [5, 1, 4, 2, 3];
    sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('empty', () => {
    const arr = [];
    sort(arr);
    expect(arr).toEqual([]);
  });

  test('duplicates', () => {
    const arr = [2, 2, 1];
    sort(arr);
    expect(arr).toEqual([1, 2, 2]);
  });
});

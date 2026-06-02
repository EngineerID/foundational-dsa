const { sort } = require('../../src/sorting/insertionSort');

describe('insertionSort', () => {
  test('nearly sorted', () => {
    const arr = [1, 2, 3, 5, 4];
    sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('typical array', () => {
    const arr = [5, 1, 4, 2, 3];
    sort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('empty array', () => {
    const arr = [];
    sort(arr);
    expect(arr).toEqual([]);
  });
});

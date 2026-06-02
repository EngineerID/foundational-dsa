const { sort } = require('../../src/sorting/radixSort');

describe('radixSort', () => {
  test('typical', () => {
    const arr = [170, 45, 75, 90, 802, 24, 2, 66];
    sort(arr);
    expect(arr).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
  });

  test('empty', () => {
    const arr = [];
    sort(arr);
    expect(arr).toEqual([]);
  });

  test('zeros', () => {
    const arr = [0, 0, 1];
    sort(arr);
    expect(arr).toEqual([0, 0, 1]);
  });
});

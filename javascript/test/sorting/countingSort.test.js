const { sort, sortByDigit } = require('../../src/sorting/countingSort');

describe('countingSort', () => {
  test('typical', () => {
    const arr = [4, 2, 2, 8, 3, 3, 1];
    sort(arr);
    expect(arr).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  test('single', () => {
    const arr = [1];
    sort(arr);
    expect(arr).toEqual([1]);
  });

  test('negative throws', () => {
    expect(() => sort([-1, 0])).toThrow();
  });

  test('sortByDigit', () => {
    const arr = [170, 45, 75, 90, 802, 24, 2, 66];
    const expected = [...arr].sort((a, b) => a - b);
    for (const exp of [1, 10, 100]) {
      sortByDigit(arr, exp);
    }
    expect(arr).toEqual(expected);
  });
});

const { indexOf } = require('../../src/searching/linearSearch');

describe('linearSearch', () => {
  test('finds existing key', () => {
    expect(indexOf([3, 7, 7, 1], 7)).toBe(1);
  });

  test('returns -1 when absent', () => {
    expect(indexOf([1, 2, 3], 5)).toBe(-1);
  });

  test('empty array', () => {
    expect(indexOf([], 1)).toBe(-1);
  });

  test('null array', () => {
    expect(indexOf(null, 1)).toBe(-1);
  });

  test('duplicates return first match', () => {
    expect(indexOf([1, 2, 2, 3], 2)).toBe(1);
  });
});

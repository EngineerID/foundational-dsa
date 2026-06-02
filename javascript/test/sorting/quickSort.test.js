const { sort, sort3Way } = require('../../src/sorting/quickSort');

function assertSorted(input, randomizedPivot = false) {
  const arr = input.slice();
  sort(arr, randomizedPivot);
  expect(arr).toEqual([...input].sort((a, b) => a - b));
}

describe('quickSort', () => {
  test('randomized pivot', () => {
    assertSorted([9, 8, 7, 6, 5], true);
  });

  test('single element', () => {
    const arr = [1];
    sort(arr);
    expect(arr).toEqual([1]);
  });

  test('deterministic pivot', () => {
    assertSorted([5, 1, 4, 2, 3]);
  });

  test('three-way duplicates', () => {
    const arr = [2, 2,  2, 1, 1];
    sort3Way(arr);
    expect(arr).toEqual([1, 1, 2, 2, 2]);
  });
});

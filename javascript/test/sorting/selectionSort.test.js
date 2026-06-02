const { sort } = require('../../src/sorting/selectionSort');

function assertSorted(input) {
  const arr = input.slice();
  sort(arr);
  expect(arr).toEqual([...input].sort((a, b) => a - b));
}

describe('selectionSort', () => {
  test('typical array', () => {
    assertSorted([5, 1, 4, 2, 3]);
  });

  test('single element', () => {
    const arr = [1];
    sort(arr);
    expect(arr).toEqual([1]);
  });

  test('empty array', () => {
    const arr = [];
    sort(arr);
    expect(arr).toEqual([]);
  });
});

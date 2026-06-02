const { sort } = require('../../src/sorting/bubbleSort');

function assertSorted(input) {
  const arr = input.slice();
  sort(arr);
  expect(arr).toEqual([...input].sort((a, b) => a - b));
}

describe('bubbleSort', () => {
  test('typical array', () => {
    assertSorted([5, 1, 4, 2, 3]);
  });

  test('empty and single', () => {
    const empty = [];
    sort(empty);
    expect(empty).toEqual([]);
    const single = [1];
    sort(single);
    expect(single).toEqual([1]);
  });

  test('duplicates', () => {
    assertSorted([2, 2, 1]);
  });
});

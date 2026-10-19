const fc = require('fast-check');
const { sort: bubbleSort } = require('../../src/sorting/bubbleSort');
const { sort: mergeSort } = require('../../src/sorting/mergeSort');
const { indexOf } = require('../../src/searching/linearSearch');
const { search: binarySearch } = require('../../src/searching/binarySearch');
const { Stack } = require('../../src/linear/stack');

describe('property search/sort/core structures', () => {
  test('bubble sort sorts', () => {
    fc.assert(
      fc.property(fc.array(fc.integer({ min: 0, max: 40 }), { maxLength: 25 }), (xs) => {
        const arr = [...xs];
        bubbleSort(arr);
        expect(arr).toEqual([...xs].sort((a, b) => a - b));
      }),
    );
  });

  test('merge sort sorts', () => {
    fc.assert(
      fc.property(fc.array(fc.integer({ min: 0, max: 40 }), { maxLength: 25 }), (xs) => {
        expect(mergeSort([...xs])).toEqual([...xs].sort((a, b) => a - b));
      }),
    );
  });

  test('binary search on sorted unique array', () => {
    fc.assert(
      fc.property(
        fc.uniqueArray(fc.integer({ min: -30, max: 30 }), { maxLength: 25 }),
        fc.integer({ min: -30, max: 30 }),
        (xs, target) => {
          const arr = [...xs].sort((a, b) => a - b);
          const idx = binarySearch(arr, target);
          if (idx >= 0) expect(arr[idx]).toBe(target);
          else expect(arr.includes(target)).toBe(false);
        },
      ),
    );
  });

  test('linear search matches scan', () => {
    fc.assert(
      fc.property(
        fc.array(fc.integer({ min: -20, max: 20 }), { maxLength: 30 }),
        fc.integer(),
        (xs, target) => {
          const idx = indexOf(xs, target);
          if (idx >= 0) expect(xs[idx]).toBe(target);
          else expect(xs.includes(target)).toBe(false);
        },
      ),
    );
  });

  test('stack push pop', () => {
    fc.assert(
      fc.property(fc.array(fc.integer({ min: 0, max: 10 }), { maxLength: 20 }), (xs) => {
        const st = new Stack();
        xs.forEach((v) => st.push(v));
        const out = [];
        while (!st.isEmpty()) out.push(st.pop());
        expect(out).toEqual([...xs].reverse());
      }),
    );
  });
});

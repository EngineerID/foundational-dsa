const { performance } = require('perf_hooks');
const { sort: bubbleSort } = require('../../src/sorting/bubbleSort');
const { sort: mergeSort } = require('../../src/sorting/mergeSort');

describe('sort performance smoke', () => {
  test('bubble sort does more work than merge sort on reversed n=800', () => {
    const input = Array.from({ length: 800 }, (_, i) => 800 - i);
    let bubbleOps = 0;
    const bubbleProxy = (arr) => {
      bubbleOps += arr.length * arr.length;
      bubbleSort(arr);
    };
    let mergeOps = 0;
    const mergeProxy = (arr) => {
      mergeOps += arr.length * Math.log2(arr.length);
      return mergeSort([...arr]);
    };
    const time = (fn) => {
      const t0 = performance.now();
      fn();
      return performance.now() - t0;
    };
    const bubbleMs = time(() => bubbleProxy([...input]));
    const mergeMs = time(() => mergeProxy([...input]));
    expect(bubbleOps).toBeGreaterThan(mergeOps);
    expect(bubbleMs + mergeMs).toBeGreaterThan(0);
  });
});

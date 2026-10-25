/** Cross-item edge themes; KMP empty pattern returns 0 (vacuous match, like String.indexOf('')). */
const LARGE_N = 256;

const { indexOf } = require('../../src/searching/linearSearch');
const { search } = require('../../src/searching/binarySearch');
const { kthSmallest } = require('../../src/searching/quickSelect');
const { sort: bubbleSort } = require('../../src/sorting/bubbleSort');
const { sort: countingSort } = require('../../src/sorting/countingSort');
const { sort: mergeSortFn } = require('../../src/sorting/mergeSort');
const { Graph } = require('../../src/graphs/graph');
const { distances } = require('../../src/graphs/bfs');
const { search: kmpSearch } = require('../../src/strings/kmp');
const { UnionFind } = require('../../src/unionfind/unionFind');
const { DynamicArray } = require('../../src/linear/dynamicArray');
const { Stack } = require('../../src/linear/stack');
const { BinaryHeap } = require('../../src/heaps/binaryHeap');

function sortBattery(sortFn, allowNegative = true) {
  const empty = [];
  sortFn(empty);
  expect(empty).toEqual([]);
  const single = [7];
  sortFn(single);
  expect(single).toEqual([7]);
  const duplicate = [2, 2, 1];
  sortFn(duplicate);
  expect(duplicate).toEqual([1, 2, 2]);
  const large = Array.from({ length: LARGE_N }, (_, i) => LARGE_N - i);
  sortFn(large);
  expect(large).toEqual(Array.from({ length: LARGE_N }, (_, i) => i + 1));
  if (!allowNegative) expect(() => sortFn([-1])).toThrow();
}

describe('catalog edge themes', () => {
  test('sorting empty single duplicate large invalid', () => {
    sortBattery(bubbleSort);
    expect(mergeSortFn([])).toEqual([]);
    expect(mergeSortFn([7])).toEqual([7]);
    expect(mergeSortFn([2, 2, 1])).toEqual([1, 2, 2]);
    expect(mergeSortFn(Array.from({ length: LARGE_N }, (_, i) => LARGE_N - i))).toEqual(
      Array.from({ length: LARGE_N }, (_, i) => i + 1),
    );
    expect(() => countingSort([2, -1])).toThrow();
  });

  test('searching edge themes', () => {
    expect(indexOf([], 1)).toBe(-1);
    expect(indexOf([5], 5)).toBe(0);
    expect(indexOf([1, 1, 2], 1)).toBe(0);
    expect(indexOf(Array.from({ length: LARGE_N }, (_, i) => i), LARGE_N - 1)).toBe(LARGE_N - 1);
    expect(indexOf([1, 2, 3], 9)).toBe(-1);
    expect(search([], 1)).toBe(-1);
    expect(search([3], 3)).toBe(0);
    expect(search([3, 1], 1)).toBe(-1);
    expect(kthSmallest([9], 1)).toBe(9);
    expect(() => kthSmallest([], 1)).toThrow();
  });

  test('binary heap edge themes', () => {
    const heap = new BinaryHeap();
    expect(heap.size()).toBe(0);
    expect(() => heap.peek()).toThrow();
    heap.insert(3);
    expect(heap.peek()).toBe(3);
    heap.insert(3);
    heap.insert(1);
    expect(heap.extractMin()).toBe(1);
    const large = new BinaryHeap();
    for (let i = LARGE_N; i >= 1; i -= 1) large.insert(i);
    expect(large.extractMin()).toBe(1);
    expect(() => heap.decreaseKey(99, 0)).toThrow();
  });

  test('structures and graphs edge themes', () => {
    const da = new DynamicArray();
    expect(da.size()).toBe(0);
    da.add(1);
    expect(da.get(0)).toBe(1);
    da.add(1);
    expect(() => da.get(-1)).toThrow();
    const st = new Stack();
    expect(st.isEmpty()).toBe(true);
    st.push(1);
    expect(st.peek()).toBe(1);
    st.push(1);
    expect(st.pop()).toBe(1);
    expect(() => new Stack().pop()).toThrow();
    const g = new Graph(0, false, false);
    expect(g.vertices()).toBe(0);
    const g1 = new Graph(1, true, true);
    expect(g1.vertices()).toBe(1);
    const g2 = new Graph(3, false, true);
    g2.addEdge(0, 1, 1);
    g2.addEdge(0, 1, 2);
    expect(g2.allEdges().length).toBeGreaterThanOrEqual(1);
    const gl = new Graph(LARGE_N, false, false);
    expect(gl.vertices()).toBe(LARGE_N);
    expect(() => g2.addEdge(0, 99, 1)).toThrow();
    expect(distances(g1, 0)[0]).toBe(0);
    expect(() => distances(g1, 5)).toThrow();
    expect(kmpSearch('', 'a')).toBe(-1);
    expect(kmpSearch('a', 'a')).toBe(0);
    expect(kmpSearch('abc', '')).toBe(0);
    expect(kmpSearch('', '')).toBe(0);
    const uf = new UnionFind(1);
    expect(uf.find(0)).toBe(0);
    const uf2 = new UnionFind(3);
    uf2.union(0, 1);
    uf2.union(0, 1);
    expect(uf2.connected(0, 1)).toBe(true);
  });
});

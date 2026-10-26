const LARGE_N = 256;

const { firstOccurrence, lastOccurrence, search } = require('../../src/searching/binarySearch');
const { sort: selectionSort } = require('../../src/sorting/selectionSort');
const { sort: insertionSort } = require('../../src/sorting/insertionSort');
const { sort: heapSort } = require('../../src/sorting/heapSort');
const { sort: radixSort } = require('../../src/sorting/radixSort');
const { SinglyLinkedList } = require('../../src/linear/singlyLinkedList');
const { DoublyLinkedList } = require('../../src/linear/doublyLinkedList');
const { Queue } = require('../../src/linear/queue');
const { Deque } = require('../../src/linear/deque');
const { PriorityQueue } = require('../../src/heaps/priorityQueue');
const { BST } = require('../../src/trees/bst');
const { inOrderRecursive } = require('../../src/trees/treeTraversals');
const { AVLTree } = require('../../src/trees/avlTree');
const { OrderStatisticTree } = require('../../src/trees/orderStatisticTree');
const { IntervalTree, Interval } = require('../../src/trees/intervalTree');
const { BTree } = require('../../src/trees/bTree');
const { Trie } = require('../../src/trees/trie');
const { HashTableChaining } = require('../../src/hashing/separateChaining');
const { HashTableOpenAddressing } = require('../../src/hashing/openAddressing');
const { BloomFilter } = require('../../src/hashing/bloomFilter');
const { Graph } = require('../../src/graphs/graph');
const { traverseRecursive, traverseIterative } = require('../../src/graphs/dfs');
const { kahn } = require('../../src/graphs/topologicalSort');
const { shortestPaths: dijkstra } = require('../../src/graphs/dijkstra');
const { shortestPaths: bellmanFord } = require('../../src/graphs/bellmanFord');
const { allPairsShortestPaths } = require('../../src/graphs/floydWarshall');
const { totalWeight: kruskalWeight } = require('../../src/graphs/kruskalMst');
const { totalWeight: primWeight } = require('../../src/graphs/primMst');
const { totalWeight: boruvkaWeight } = require('../../src/graphs/boruvkaMst');
const { distances } = require('../../src/graphs/bfs');
const { SegmentTree } = require('../../src/trees/segmentTree');
const { FenwickTree } = require('../../src/trees/fenwickTree');
const { search: zSearch } = require('../../src/strings/zAlgorithm');
const { search: rkSearch } = require('../../src/strings/rabinKarp');
const { lengthOfLongestSubstring } = require('../../src/strings/longestSubstringWithoutRepeating');
const { length: lisLen } = require('../../src/dp/lis');
const { length: lcsLen } = require('../../src/dp/lcs');
const { maxValue: knapVal } = require('../../src/dp/knapsack');
const { distance: editDist } = require('../../src/dp/editDistance');
const { minCoins } = require('../../src/dp/coinChange');
const { maxSubarray } = require('../../src/dp/maxSubarray');
const { nextGreaterElement } = require('../../src/linear/monotonicStack');
const { isValidParentheses } = require('../../src/linear/validParentheses');
const { shortestPathLength } = require('../../src/graphs/aStar');
const { stronglyConnectedComponents: tarjanScc } = require('../../src/graphs/tarjanScc');
const { stronglyConnectedComponents: kosarajuScc } = require('../../src/graphs/kosaraju');
const { isBipartite } = require('../../src/graphs/bipartiteCheck');
const { find: articulationFind } = require('../../src/graphs/articulationBridges');
const { maxFlow } = require('../../src/graphs/edmondsKarp');
const { minCost: hungarianCost } = require('../../src/graphs/hungarian');
const { RedBlackTree } = require('../../src/trees/redBlackTree');
const { LCABinaryLifting } = require('../../src/trees/lcaBinaryLifting');
const { Treap } = require('../../src/trees/treap');
const { SparseTable } = require('../../src/trees/sparseTable');
const { longestPalindromeLength } = require('../../src/strings/manacher');
const { build: suffixArrayBuild } = require('../../src/strings/suffixArray');
const { search: ahoSearch } = require('../../src/strings/ahoCorasick');
const { minMultiplications } = require('../../src/dp/matrixChain');
const { length: lpsLen } = require('../../src/dp/longestPalindromicSubsequence');
const { canPartition } = require('../../src/dp/partitionEqualSubset');
const { maxProfit: rodProfit } = require('../../src/dp/rodCutting');
const { minCost: tspCost } = require('../../src/dp/tspBitmask');
const { sample: reservoirSample } = require('../../src/searching/reservoirSampling');
const { maxSlidingWindow } = require('../../src/linear/slidingWindowMaximum');
const { LRUCache } = require('../../src/linear/lruCache');

function sortBattery(sortFn) {
  const empty = [];
  sortFn(empty);
  expect(empty).toEqual([]);
  const single = [7];
  sortFn(single);
  expect(single).toEqual([7]);
  const dup = [2, 2, 1];
  sortFn(dup);
  expect(dup).toEqual([1, 2, 2]);
  const large = Array.from({ length: LARGE_N }, (_, i) => LARGE_N - i);
  sortFn(large);
  expect(large).toEqual(Array.from({ length: LARGE_N }, (_, i) => i + 1));
}

describe('catalog item edges', () => {
  test('remaining sorts', () => {
    sortBattery(selectionSort);
    sortBattery(insertionSort);
    sortBattery(heapSort);
    const radix = [170, 45, 75, 90, 802, 24, 2, 66];
    radixSort(radix);
    expect(radix).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
  });

  test('binary search boundaries', () => {
    expect(firstOccurrence([], 1)).toBe(-1);
    expect(firstOccurrence([2], 2)).toBe(0);
    expect(firstOccurrence([1, 2, 2, 3], 2)).toBe(1);
    expect(lastOccurrence([1, 2, 2, 3], 2)).toBe(2);
    expect(search([3, 1], 1)).toBe(-1);
  });

  test('linear structures', () => {
    const sll = new SinglyLinkedList();
    expect(sll.size()).toBe(0);
    sll.addFirst(1);
    sll.addLast(1);
    for (let i = 0; i < LARGE_N; i += 1) sll.addLast(i);
    expect(() => sll.get(-1)).toThrow();

    const dll = new DoublyLinkedList();
    dll.addFirst(1);
    dll.addLast(2);
    expect(dll.remove(0)).toBe(1);
    for (let i = 0; i < LARGE_N; i += 1) dll.addLast(i);
    expect(() => dll.get(dll.size())).toThrow();

    const q = new Queue();
    q.enqueue(1);
    q.enqueue(1);
    expect(q.dequeue()).toBe(1);
    for (let i = 0; i < LARGE_N; i += 1) q.enqueue(i);
    expect(() => new Queue().dequeue()).toThrow();

    const dq = new Deque();
    dq.addLast(1);
    dq.addFirst(2);
    expect(dq.removeFirst()).toBe(2);
    for (let i = 0; i < LARGE_N; i += 1) dq.addLast(i);
    expect(() => new Deque().removeLast()).toThrow();
  });

  test('priority queue', () => {
    const pq = new PriorityQueue();
    pq.insert(3);
    pq.insert(1);
    expect(pq.peek()).toBe(1);
    pq.insert(1);
    expect(pq.extractMin()).toBe(1);
    for (let i = 0; i < LARGE_N; i += 1) pq.insert(i);
    expect(() => new PriorityQueue().extractMin()).toThrow();
  });

  test('trees and hashing', () => {
    const tree = new BST();
    expect(tree.search(1)).toBeNull();
    tree.insert(5, 'v');
    tree.insert(5, 'dup');
    expect(tree.search(5)).toBe('dup');
    for (let i = 0; i < 16; i += 1) tree.insert(i, 'v');
    expect(inOrderRecursive(tree.getRoot()).length).toBeGreaterThan(0);

    const avl = new AVLTree();
    avl.insert(10, 'a');
    avl.insert(5, 'dup');
    expect(avl.search(5)).toBe('dup');

    const ost = new OrderStatisticTree();
    ost.insert(3, 'x');
    expect(ost.select(1)).toBe(3);
    expect(() => ost.select(0)).toThrow();

    const it = new IntervalTree();
    it.insert(new Interval(0, 10));
    expect(it.overlapSearch(new Interval(5, 5)).length).toBeGreaterThan(0);

    const bt = new BTree(2);
    bt.insert(1);
    expect(bt.search(1)).toBe(true);

    const trie = new Trie();
    expect(trie.search('')).toBe(false);
    trie.insert('a');
    const longWord = 'a'.repeat(8);
    trie.insert(longWord);
    expect(trie.search(longWord)).toBe(true);

    const ht = new HashTableChaining();
    ht.put('a', 1);
    ht.put('a', 2);
    expect(ht.get('a')).toBe(2);

    const oa = new HashTableOpenAddressing();
    oa.put('k', 1);
    expect(oa.get('k')).toBe(1);

    const bf = new BloomFilter(10, 0.01);
    expect(bf.mightContain('missing')).toBe(false);
    bf.add('x');
    expect(bf.mightContain('x')).toBe(true);
  });

  test('new trees strings dp', () => {
    const st = new SegmentTree([1, 2, 3]);
    expect(st.rangeSum(0, 2)).toBe(6);
    const ft = new FenwickTree(2);
    ft.add(0, 1);
    ft.add(1, 2);
    expect(ft.rangeSum(0, 1)).toBe(3);
    expect(zSearch('abc', '')).toBe(0);
    expect(rkSearch('abc', 'b')).toBe(1);
    expect(lengthOfLongestSubstring('abc')).toBe(3);
    expect(lisLen([1, 2, 3])).toBe(3);
    expect(lcsLen('ab', 'a')).toBe(1);
    expect(knapVal([1], [5], 1)).toBe(5);
    expect(editDist('a', 'b')).toBe(1);
    expect(minCoins([1], 0)).toBe(0);
    expect(maxSubarray([1, -2, 3])).toBe(3);
    expect(nextGreaterElement([1, 2])).toEqual([2, -1]);
    expect(isValidParentheses('()')).toBe(true);
  });

  test('graph algorithms', () => {
    const g0 = new Graph(0, false, false);
    expect(() => traverseRecursive(g0, 0)).toThrow();

    const g1 = new Graph(1, false, false);
    expect(traverseIterative(g1, 0).discovery.length).toBe(1);

    const dag = new Graph(3, true, false);
    dag.addEdge(0, 1);
    dag.addEdge(1, 2);
    expect(kahn(dag)).toEqual([0, 1, 2]);

    const cyclic = new Graph(2, true, false);
    cyclic.addEdge(0, 1);
    cyclic.addEdge(1, 0);
    expect(kahn(cyclic)).toEqual([]);

    const wg = new Graph(3, false, true);
    wg.addEdge(0, 1, 1);
    wg.addEdge(1, 2, 2);
    expect(dijkstra(wg, 0)[2]).toBe(3);

    const neg = new Graph(2, true, true);
    neg.addEdge(0, 1, -1);
    const bf = bellmanFord(neg, 0);
    expect(bf.hasNegativeCycle).toBe(false);
    expect(bf.distances[1]).toBe(-1);

    expect(allPairsShortestPaths(wg)[0][2]).toBe(3);

    const mstG = new Graph(3, false, true);
    mstG.addEdge(0, 1, 1);
    mstG.addEdge(1, 2, 2);
    mstG.addEdge(0, 2, 4);
    expect(kruskalWeight(mstG)).toBe(3);
    expect(primWeight(mstG)).toBe(3);
    expect(boruvkaWeight(mstG)).toBe(3);

    const gl = new Graph(LARGE_N, false, false);
    for (let i = 0; i < LARGE_N - 1; i += 1) gl.addEdge(i, i + 1);
    expect(distances(gl, 0)[LARGE_N - 1]).toBe(LARGE_N - 1);
    expect(() => distances(g1, 5)).toThrow();
  });

  test('wave2 catalog item edges', () => {
    const g = new Graph(2, true, true);
    g.addEdge(0, 1, 1);
    expect(shortestPathLength(g, 0, 1)).toBe(1);
    const sccG = new Graph(3, true, false);
    sccG.addEdge(0, 1);
    sccG.addEdge(1, 2);
    sccG.addEdge(2, 0);
    expect(tarjanScc(sccG)[0].length).toBe(3);
    expect(kosarajuScc(sccG)[0].length).toBe(3);
    const bi = new Graph(2, false, false);
    bi.addEdge(0, 1);
    expect(isBipartite(bi)).toBe(true);
    const line = new Graph(3, false, false);
    line.addEdge(0, 1);
    line.addEdge(1, 2);
    expect(articulationFind(line).articulationPoints).toEqual([1]);
    expect(maxFlow(2, [[0, 1, 5]], 0, 1)).toBe(5);
    expect(hungarianCost([[1, 2], [3, 4]])).toBeGreaterThanOrEqual(5);
    const rb = new RedBlackTree();
    rb.insert(1, 1);
    expect(rb.search(1)).toBe(1);
    expect(new LCABinaryLifting([0, 0]).query(1, 0)).toBe(0);
    const tr = new Treap(0);
    tr.insert(2, 2);
    expect(tr.search(2)).toBe(2);
    expect(new SparseTable([2, 1]).query(0, 1)).toBe(1);
    expect(longestPalindromeLength('aa')).toBe(2);
    expect(suffixArrayBuild('ab')[0]).toBe(0);
    expect(ahoSearch('aba', ['a'])).toEqual([0, 2]);
    expect(minMultiplications([1, 2, 3])).toBe(6);
    expect(lpsLen('a')).toBe(1);
    expect(canPartition([2, 2])).toBe(true);
    expect(rodProfit([2], 1)).toBe(2);
    expect(tspCost([[0, 1], [1, 0]])).toBe(2);
    expect(reservoirSample([1, 2, 3], 2, 1).length).toBe(2);
    expect(maxSlidingWindow([1, 2], 1)).toEqual([1, 2]);
    const cache = new LRUCache(1);
    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);
  });
});

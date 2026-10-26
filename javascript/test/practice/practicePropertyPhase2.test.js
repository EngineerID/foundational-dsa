const {
  PRACTICE_PROPERTY_TRIALS,
  seededRng,
  randomIntArray,
  randomNonNegative,
} = require('./_practicePropertyHelpers');
const bf = require('./practiceBruteforcePhase2');

const { isValidParentheses } = require('../../src/practice/validParentheses');
const { minMeetingRooms } = require('../../src/practice/meetingRooms');
const { topKFrequent } = require('../../src/practice/topKFrequent');
const { lengthOfLongestSubstring } = require('../../src/practice/longestSubstring');
const { LRUCacheDesign } = require('../../src/practice/lruDesign');
const { mergeIntervals } = require('../../src/practice/mergeIntervals');
const { levelOrder } = require('../../src/practice/levelOrder');
const { wordSearch } = require('../../src/practice/wordSearch');
const { serialize, deserialize } = require('../../src/practice/treeCodec');
const { maxSlidingWindow } = require('../../src/practice/slidingWindowMax');
const { firstIndex: kmpFirst } = require('../../src/practice/kmpPractice');
const { TriePractice } = require('../../src/practice/triePractice');
const { extractOrder: heapExtractOrder } = require('../../src/practice/binaryHeapPractice');
const { traverse: dfsTraverse } = require('../../src/practice/dfsPractice');
const { extractOrder: pqExtractOrder } = require('../../src/practice/priorityQueuePractice');
const { nextGreater } = require('../../src/practice/monotonicStackPractice');
const { BstPractice } = require('../../src/practice/bstPractice');
const { StackPractice } = require('../../src/practice/stackPractice');
const { QueuePractice } = require('../../src/practice/queuePractice');
const { DequePractice } = require('../../src/practice/dequePractice');
const { firstIndex: rabinFirst } = require('../../src/practice/rabinKarpPractice');
const { SegmentTreePractice } = require('../../src/practice/segmentTreePractice');
const { FenwickTreePractice } = require('../../src/practice/fenwickTreePractice');
const { buildGraph } = require('../../src/practice/graphPractice');
const { componentSizesSorted: tarjanSizes } = require('../../src/practice/tarjanSccPractice');
const { componentSizesSorted: kosarajuSizes } = require('../../src/practice/kosarajuPractice');
const { maxFlowValue } = require('../../src/practice/edmondsKarpPractice');
const { DynamicArrayPractice } = require('../../src/practice/dynamicArrayPractice');
const { findIndex: zFindIndex, zValues } = require('../../src/practice/zAlgorithmPractice');
const { longestPalindromeLength } = require('../../src/practice/manacherPractice');
const { findHits } = require('../../src/practice/ahoCorasickPractice');
const { AvlTreePractice } = require('../../src/practice/avlTreePractice');
const { RedBlackTreePractice } = require('../../src/practice/redBlackTreePractice');
const { SinglyLinkedListPractice } = require('../../src/practice/singlyLinkedListPractice');
const { DoublyLinkedListPractice } = require('../../src/practice/doublyLinkedListPractice');
const { TreeTraversalsPractice } = require('../../src/practice/treeTraversalsPractice');
const { SeparateChainingPractice } = require('../../src/practice/separateChainingPractice');
const { OpenAddressingPractice } = require('../../src/practice/openAddressingPractice');
const { suffixArray } = require('../../src/practice/suffixArrayPractice');
const { TreapPractice } = require('../../src/practice/treapPractice');
const { OrderStatisticTreePractice } = require('../../src/practice/orderStatisticTreePractice');
const { IntervalTreePractice } = require('../../src/practice/intervalTreePractice');
const { BTreePractice } = require('../../src/practice/bTreePractice');
const { BloomFilterPractice } = require('../../src/practice/bloomFilterPractice');
const { mstTotalWeight: boruvkaMst } = require('../../src/practice/boruvkaMstPractice');
const { pathLength: aStarPathLength } = require('../../src/practice/aStarPractice');
const { articulationAndBridges } = require('../../src/practice/articulationBridgesPractice');
const { assignmentMinCost } = require('../../src/practice/hungarianPractice');
const { LcaBinaryLiftingPractice } = require('../../src/practice/lcaBinaryLiftingPractice');
const { SparseTablePractice } = require('../../src/practice/sparseTablePractice');
const { reservoirSample } = require('../../src/practice/reservoirSamplingPractice');

function randomString(rng, maxLen = 8) {
  const n = Math.floor(rng() * (maxLen + 1));
  let s = '';
  for (let i = 0; i < n; i += 1) s += String.fromCharCode(97 + Math.floor(rng() * 3));
  return s;
}

function randomParen(rng) {
  const pool = '()[]{}';
  const n = Math.floor(rng() * 10);
  let s = '';
  for (let i = 0; i < n; i += 1) s += pool[Math.floor(rng() * pool.length)];
  return s;
}

function randomIntervals(rng, maxN = 6) {
  const n = Math.floor(rng() * (maxN + 1));
  const out = [];
  for (let i = 0; i < n; i += 1) {
    const a = Math.floor(rng() * 10);
    const b = a + 1 + Math.floor(rng() * 8);
    out.push([a, b]);
  }
  return out;
}

function randomTreeValues(rng) {
  const n = 1 + Math.floor(rng() * 7);
  const vals = [];
  for (let i = 0; i < n; i += 1) {
    vals.push(rng() < 0.25 ? null : Math.floor(rng() * 20));
  }
  if (vals[0] == null) vals[0] = Math.floor(rng() * 10) + 1;
  return vals;
}

function randomBoard(rng) {
  const rows = 2 + Math.floor(rng() * 2);
  const cols = 2 + Math.floor(rng() * 2);
  const letters = 'ABCDEF';
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => letters[Math.floor(rng() * letters.length)]),
  );
}

function randomParentTree(rng, n) {
  const parent = new Array(n);
  parent[0] = 0;
  for (let i = 1; i < n; i += 1) parent[i] = Math.floor(rng() * i);
  return parent;
}

// practice-property-topics: valid-parentheses meeting-rooms-ii top-k-frequent-elements longest-substring-without-repeating lru-cache merge-intervals level-order-traversal word-search serialize-binary-tree sliding-window-maximum kmp trie binary-heap dfs priority-queue monotonic-stack bst stack queue deque rabin-karp segment-tree fenwick-tree graph tarjan-scc kosaraju edmonds-karp dynamic-array z-algorithm manacher aho-corasick avl-tree red-black-tree singly-linked-list doubly-linked-list tree-traversals separate-chaining open-addressing suffix-array treap order-statistic-tree interval-tree b-tree bloom-filter boruvka-mst a-star articulation-bridges hungarian lca-binary-lifting sparse-table reservoir-sampling
describe('practice property phase 2 vs brute force', () => {
  describe('valid-parentheses', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const s = randomParen(rng);
        expect(isValidParentheses(s)).toBe(bf.refValidParentheses(s));
      }
    });
  });

  describe('meeting-rooms-ii', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const intervals = randomIntervals(rng);
        expect(minMeetingRooms(intervals.map((x) => x.slice()))).toBe(bf.refMinMeetingRooms(intervals));
      }
    });
  });

  describe('top-k-frequent-elements', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const nums = randomIntArray(rng, 12);
        if (!nums.length) continue;
        const k = 1 + Math.floor(rng() * Math.min(3, nums.length));
        expect(topKFrequent(nums, k)).toEqual(bf.refTopKFrequent(nums, k));
      }
    });
  });

  describe('longest-substring-without-repeating', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const s = randomString(rng, 10);
        expect(lengthOfLongestSubstring(s)).toBe(bf.refLengthOfLongestSubstring(s));
      }
    });
  });

  describe('lru-cache', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const cap = 1 + Math.floor(rng() * 4);
        const ref = new bf.RefLRU(cap);
        const cache = new LRUCacheDesign(cap);
        const ops = 4 + Math.floor(rng() * 8);
        for (let i = 0; i < ops; i += 1) {
          if (rng() < 0.55) {
            const k = Math.floor(rng() * 6);
            const v = Math.floor(rng() * 20);
            ref.put(k, v);
            cache.put(k, v);
          } else {
            const k = Math.floor(rng() * 6);
            expect(cache.get(k)).toBe(ref.get(k));
          }
        }
      }
    });
  });

  describe('merge-intervals', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const intervals = randomIntervals(rng);
        expect(mergeIntervals(intervals.map((x) => x.slice()))).toEqual(bf.refMergeIntervals(intervals));
      }
    });
  });

  describe('level-order-traversal', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const values = randomTreeValues(rng);
        expect(levelOrder(values)).toEqual(bf.refLevelOrder(values));
      }
    });
  });

  describe('word-search', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const board = randomBoard(rng);
        const word =
          rng() < 0.5
            ? board[0][0] + (board[0][1] ?? '')
            : randomString(rng, 4).toUpperCase();
        expect(wordSearch(board.map((r) => r.slice()), word)).toBe(
          bf.refWordSearch(board, word),
        );
      }
    });
  });

  describe('serialize-binary-tree', () => {
    test('matches reference round trip', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const values = randomTreeValues(rng);
        const data = serialize(values);
        expect(deserialize(data)).toEqual(bf.refSerializeDeserialize(values));
      }
    });
  });

  describe('sliding-window-maximum', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const nums = randomNonNegative(rng, 10);
        if (!nums.length) continue;
        const k = 1 + Math.floor(rng() * nums.length);
        expect(maxSlidingWindow(nums, k)).toEqual(bf.refMaxSlidingWindow(nums, k));
      }
    });
  });

  describe('kmp', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const text = randomString(rng, 12);
        const pattern = randomString(rng, 5);
        expect(kmpFirst(text, pattern)).toBe(bf.refKmpFirst(text, pattern));
      }
    });
  });

  describe('trie', () => {
    test('search and startsWith match Set reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const words = [];
        const n = Math.floor(rng() * 6);
        for (let i = 0; i < n; i += 1) words.push(randomString(rng, 4));
        const trie = new TriePractice();
        for (const w of words) trie.insert(w);
        const probe = randomString(rng, 3);
        expect(trie.search(probe)).toBe(bf.refTrieSearch(words, probe));
        expect(trie.startsWith(probe)).toBe(bf.refTrieStartsWith(words, probe));
      }
    });
  });

  describe('binary-heap', () => {
    test('extract order matches sorted reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const inserts = randomIntArray(rng, 10);
        expect(heapExtractOrder(inserts)).toEqual(bf.refBinaryHeapExtractOrder(inserts));
      }
    });
  });

  describe('dfs', () => {
    test('discovery and finish match reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 2 + Math.floor(rng() * 5);
        const directed = rng() < 0.5;
        const edges = [];
        for (let i = 1; i < n; i += 1) edges.push([i - 1, i]);
        if (rng() < 0.3 && n > 2) edges.push([0, n - 1]);
        const source = Math.floor(rng() * n);
        const got = dfsTraverse(n, edges, source, directed);
        const want = bf.refDfsTimes(n, edges, source, directed);
        expect(got.discovery).toEqual(want.discovery);
        expect(got.finish).toEqual(want.finish);
      }
    });
  });

  describe('priority-queue', () => {
    test('extract order matches sorted reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const inserts = randomIntArray(rng, 10);
        expect(pqExtractOrder(inserts)).toEqual(bf.refPriorityQueueExtractOrder(inserts));
      }
    });
  });

  describe('monotonic-stack', () => {
    test('next greater matches O(n^2) reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const nums = randomIntArray(rng, 10);
        if (!nums.length) continue;
        expect(nextGreater(nums)).toEqual(bf.refNextGreater(nums));
      }
    });
  });

  describe('bst', () => {
    test('inorder and search match reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 1 + Math.floor(rng() * 8);
        const inserts = [];
        for (let i = 0; i < n; i += 1) {
          const key = Math.floor(rng() * 15);
          inserts.push([key, `v${key}`]);
        }
        const searchKey = Math.floor(rng() * 15);
        const tree = new BstPractice();
        for (const [k, v] of inserts) tree.insert(k, v);
        const want = bf.refBstState(inserts, searchKey);
        expect(tree.inOrderKeys()).toEqual(want.inOrderKeys);
        expect(tree.search(searchKey)).toBe(want.searchValue);
      }
    });
  });

  describe('stack', () => {
    test('simulation matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const push = randomIntArray(rng, 8);
        const popCount = Math.min(push.length, Math.floor(rng() * (push.length + 1)));
        const want = bf.refStackSim(push, popCount);
        const stack = new StackPractice();
        for (const v of push) stack.push(v);
        for (const expected of want.pops) expect(stack.pop()).toBe(expected);
        if (want.empty) {
          expect(stack.isEmpty()).toBe(true);
          expect(() => stack.peek()).toThrow();
        } else {
          expect(stack.peek()).toBe(want.peek);
        }
      }
    });
  });

  describe('queue', () => {
    test('simulation matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const enqueue = randomIntArray(rng, 8);
        const dequeueCount = Math.min(enqueue.length, Math.floor(rng() * (enqueue.length + 1)));
        const want = bf.refQueueSim(enqueue, dequeueCount);
        const q = new QueuePractice();
        for (const v of enqueue) q.enqueue(v);
        for (const expected of want.dequeues) expect(q.dequeue()).toBe(expected);
        if (want.empty) {
          expect(q.isEmpty()).toBe(true);
          expect(() => q.peek()).toThrow();
        } else {
          expect(q.peek()).toBe(want.peek);
        }
      }
    });
  });

  describe('deque', () => {
    test('simulation matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const addLast = randomIntArray(rng, 4);
        const addFirst = randomIntArray(rng, 4);
        const removeFirst = addLast.length + addFirst.length > 0 && rng() < 0.7;
        const removeLast = addLast.length + addFirst.length > 1 && rng() < 0.7;
        const want = bf.refDequeSim(addLast, addFirst, removeFirst, removeLast);
        const dq = new DequePractice();
        for (const v of addLast) dq.addLast(v);
        for (const v of addFirst) dq.addFirst(v);
        if (removeFirst) expect(dq.removeFirst()).toBe(want.removeFirst);
        if (removeLast) expect(dq.removeLast()).toBe(want.removeLast);
        if (want.remainingValue != null) expect(dq.removeFirst()).toBe(want.remainingValue);
        expect(dq.isEmpty()).toBe(want.empty);
      }
    });
  });

  describe('rabin-karp', () => {
    test('matches naive find reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const text = randomString(rng, 12);
        const pattern = randomString(rng, 5);
        expect(rabinFirst(text, pattern)).toBe(bf.refRabinFirst(text, pattern));
      }
    });
  });

  describe('segment-tree', () => {
    test('range sums match naive reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const initial = randomIntArray(rng, 8);
        if (initial.length < 2) continue;
        const st = new SegmentTreePractice(initial);
        const queries = [];
        for (let q = 0; q < 3; q += 1) {
          const l = Math.floor(rng() * initial.length);
          const r = l + Math.floor(rng() * (initial.length - l));
          queries.push([l, r]);
        }
        const arr = initial.slice();
        for (const [l, r] of queries) {
          let s = 0;
          for (let i = l; i <= r; i += 1) s += arr[i];
          expect(st.rangeSum(l, r)).toBe(s);
        }
        const idx = Math.floor(rng() * arr.length);
        const val = Math.floor(rng() * 10);
        st.update(idx, val);
        arr[idx] = val;
        for (const [l, r] of queries) {
          let s = 0;
          for (let i = l; i <= r; i += 1) s += arr[i];
          expect(st.rangeSum(l, r)).toBe(s);
        }
      }
    });
  });

  describe('fenwick-tree', () => {
    test('prefix and range match naive reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 2 + Math.floor(rng() * 8);
        const ft = new FenwickTreePractice(n);
        const adds = [];
        for (let i = 0; i < 4; i += 1) {
          adds.push([Math.floor(rng() * n), Math.floor(rng() * 5)]);
        }
        const arr = new Array(n).fill(0);
        for (const [idx, delta] of adds) {
          ft.add(idx, delta);
          arr[idx] += delta;
        }
        for (let i = 0; i < 3; i += 1) {
          const at = Math.floor(rng() * n);
          let s = 0;
          for (let j = 0; j <= at; j += 1) s += arr[j];
          expect(ft.prefixSum(at)).toBe(s);
        }
        for (let i = 0; i < 3; i += 1) {
          const l = Math.floor(rng() * n);
          const r = l + Math.floor(rng() * (n - l));
          let s = 0;
          for (let j = l; j <= r; j += 1) s += arr[j];
          expect(ft.rangeSum(l, r)).toBe(s);
        }
      }
    });
  });

  describe('graph', () => {
    test('neighbor lists match reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 2 + Math.floor(rng() * 5);
        const directed = rng() < 0.5;
        const weighted = rng() < 0.5;
        const edges = [];
        for (let i = 1; i < n; i += 1) {
          edges.push(weighted ? [i - 1, i, 1 + Math.floor(rng() * 3)] : [i - 1, i]);
        }
        const g = buildGraph(n, directed, weighted, edges);
        const want = bf.refGraphNeighbors(n, directed, weighted, edges);
        for (let v = 0; v < n; v += 1) {
          const got = g.neighbors(v).map((e) => (weighted ? [e.to, e.weight] : [e.to]));
          const exp = want[v].map((e) => (weighted ? [e.to, e.weight] : [e.to]));
          expect(got).toEqual(exp);
        }
      }
    });
  });

  describe('tarjan-scc', () => {
    test('component sizes match Kosaraju reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 2 + Math.floor(rng() * 5);
        const edges = [];
        for (let i = 1; i < n; i += 1) edges.push([i - 1, i]);
        if (rng() < 0.35) edges.push([n - 1, 0]);
        const want = bf.refKosarajuComponentSizes(n, edges);
        expect(tarjanSizes(n, edges)).toEqual(want);
      }
    });
  });

  describe('kosaraju', () => {
    test('component sizes match reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 2 + Math.floor(rng() * 5);
        const edges = [];
        for (let i = 1; i < n; i += 1) edges.push([i - 1, i]);
        if (rng() < 0.35) edges.push([n - 1, 0]);
        const want = bf.refKosarajuComponentSizes(n, edges);
        expect(kosarajuSizes(n, edges)).toEqual(want);
      }
    });
  });

  describe('edmonds-karp', () => {
    test('max flow matches BFS Ford-Fulkerson reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 3 + Math.floor(rng() * 3);
        const source = 0;
        const sink = n - 1;
        const edges = [[0, 1, 2 + Math.floor(rng() * 3)]];
        if (n > 2) edges.push([1, 2, 1 + Math.floor(rng() * 3)]);
        if (rng() < 0.4) edges.push([0, sink, 1 + Math.floor(rng() * 2)]);
        expect(maxFlowValue(n, edges, source, sink)).toBe(
          bf.refMaxFlow(n, edges, source, sink),
        );
      }
    });
  });

  describe('dynamic-array', () => {
    test('matches array reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const values = randomIntArray(rng, 10);
        const arr = new DynamicArrayPractice();
        for (const v of values) arr.add(v);
        const getPairs = [];
        for (let i = 0; i < Math.min(3, values.length); i += 1) {
          getPairs.push({ index: Math.floor(rng() * values.length) });
        }
        const want = bf.refDynamicArray(values, getPairs);
        expect(arr.size()).toBe(want.size);
        getPairs.forEach((pair, i) => {
          expect(arr.get(pair.index)).toBe(want.gets[i]);
        });
      }
    });
  });

  describe('z-algorithm', () => {
    test('index and Z array match reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const text = randomString(rng, 10);
        const pattern = randomString(rng, 4);
        const want = bf.refZIndex(text, pattern);
        expect(zFindIndex(text, pattern)).toBe(want.index);
        expect(zValues(text)).toEqual(want.z);
      }
    });
  });

  describe('manacher', () => {
    test('matches reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const s = randomString(rng, 10);
        expect(longestPalindromeLength(s)).toBe(bf.refLongestPalindromeLength(s));
      }
    });
  });

  describe('aho-corasick', () => {
    test('hits match naive reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const text = randomString(rng, 10);
        const patterns = [];
        const pn = 1 + Math.floor(rng() * 3);
        for (let i = 0; i < pn; i += 1) patterns.push(randomString(rng, 3));
        expect(findHits(text, patterns)).toEqual(bf.refAhoHits(text, patterns));
      }
    });
  });

  describe('avl-tree', () => {
    test('inorder and search match reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const inserts = [];
        for (let i = 0; i < 6; i += 1) {
          const key = Math.floor(rng() * 12);
          inserts.push([key, `v${key}`]);
        }
        const searchKey = Math.floor(rng() * 12);
        const tree = new AvlTreePractice();
        for (const [k, v] of inserts) tree.insert(k, v);
        const want = bf.refTreeMapSearch(inserts, searchKey);
        expect(tree.inOrderKeys()).toEqual(want.inOrderKeys);
        expect(tree.search(searchKey)).toBe(want.searchValue);
      }
    });
  });

  describe('red-black-tree', () => {
    test('search matches reference after inserts', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const inserts = [];
        for (let i = 0; i < 6; i += 1) {
          const key = Math.floor(rng() * 12);
          inserts.push([key, `v${key}`]);
        }
        const tree = new RedBlackTreePractice();
        for (const [k, v] of inserts) tree.insert(k, v);
        for (let i = 0; i < 3; i += 1) {
          const key = Math.floor(rng() * 12);
          const want = bf.refTreeMapSearch(inserts, key);
          expect(tree.search(key)).toBe(want.searchValue);
        }
      }
    });
  });

  describe('singly-linked-list', () => {
    test('ops match array reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const addLast = randomIntArray(rng, 6);
        if (!addLast.length) continue;
        const getIndex = Math.floor(rng() * addLast.length);
        const removeIndex = Math.floor(rng() * addLast.length);
        const want = bf.refArrayListOps(addLast, [], getIndex, removeIndex);
        const list = new SinglyLinkedListPractice();
        for (const v of addLast) list.addLast(v);
        expect(list.get(getIndex)).toBe(want.getValue);
        expect(list.remove(removeIndex)).toBe(want.removeValue);
        expect(list.size()).toBe(want.sizeAfter);
      }
    });
  });

  describe('doubly-linked-list', () => {
    test('ops match array reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const addLast = randomIntArray(rng, 4);
        const addFirst = randomIntArray(rng, 4);
        if (!addLast.length && !addFirst.length) continue;
        const combined = [...addFirst, ...addLast];
        const getIndex = Math.floor(rng() * combined.length);
        const removeIndex = Math.floor(rng() * combined.length);
        const want = bf.refArrayListOps(addLast, addFirst, getIndex, removeIndex);
        const list = new DoublyLinkedListPractice();
        for (const v of addLast) list.addLast(v);
        for (const v of addFirst) list.addFirst(v);
        expect(list.get(getIndex)).toBe(want.getValue);
        expect(list.remove(removeIndex)).toBe(want.removeValue);
        expect(list.size()).toBe(want.sizeAfter);
      }
    });
  });

  describe('tree-traversals', () => {
    test('match recursive reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const inserts = [];
        for (let i = 0; i < 6; i += 1) {
          const key = Math.floor(rng() * 12);
          inserts.push([key, `v${key}`]);
        }
        const tree = new TreeTraversalsPractice();
        for (const [k, v] of inserts) tree.insert(k, v);
        const want = bf.refTreeTraversals(inserts);
        expect(tree.inOrder()).toEqual(want.inOrder);
        expect(tree.preOrder()).toEqual(want.preOrder);
        expect(tree.postOrder()).toEqual(want.postOrder);
      }
    });
  });

  describe('separate-chaining', () => {
    test('get matches Map reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const ops = [];
        for (let i = 0; i < 5; i += 1) {
          ops.push(['put', Math.floor(rng() * 8), Math.floor(rng() * 20)]);
        }
        const getKey = Math.floor(rng() * 8);
        const removeKey = Math.floor(rng() * 8);
        const table = new SeparateChainingPractice();
        for (const op of ops) table.put(op[1], op[2]);
        const want = bf.refHashMapOps(ops, getKey, removeKey);
        if (want.getVal == null) expect(table.get(getKey)).toBeNull();
        else expect(table.get(getKey)).toBe(want.getVal);
      }
    });
  });

  describe('open-addressing', () => {
    test('get/remove matches Map reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const ops = [];
        for (let i = 0; i < 5; i += 1) {
          ops.push(['put', Math.floor(rng() * 6), Math.floor(rng() * 20)]);
        }
        const getKey = ops.length ? ops[ops.length - 1][1] : 0;
        const removeKey = getKey;
        const table = new OpenAddressingPractice();
        for (const op of ops) table.put(op[1], op[2]);
        const want = bf.refHashMapOps(ops, getKey, removeKey);
        expect(table.get(getKey)).toBe(want.getVal);
        expect(table.remove(removeKey)).toBe(want.hadRemove);
        expect(table.get(getKey)).toBeNull();
      }
    });
  });

  describe('suffix-array', () => {
    test('matches naive reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const s = randomString(rng, 8);
        expect(suffixArray(s)).toEqual(bf.refSuffixArray(s));
      }
    });
  });

  describe('treap', () => {
    test('search matches reference after same inserts', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const seed = Math.floor(rng() * 1000);
        const inserts = [];
        for (let i = 0; i < 6; i += 1) {
          const key = Math.floor(rng() * 12);
          inserts.push([key, `v${key}`]);
        }
        const searchKeys = [Math.floor(rng() * 12), Math.floor(rng() * 12)];
        const treap = new TreapPractice(seed);
        for (const [k, v] of inserts) treap.insert(k, v);
        const want = bf.refTreapSearch(inserts, seed, searchKeys);
        for (const key of searchKeys) {
          expect(treap.search(key)).toBe(want[key]);
        }
      }
    });
  });

  describe('order-statistic-tree', () => {
    test('select and rank match sorted reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const inserts = [];
        for (let i = 0; i < 6; i += 1) {
          inserts.push([Math.floor(rng() * 10), 'x']);
        }
        const selectK = 1 + Math.floor(rng() * 5);
        const rankKeys = [5, Math.floor(rng() * 10)];
        const tree = new OrderStatisticTreePractice();
        for (const [k, v] of inserts) tree.insert(k, v);
        const want = bf.refOrderStatistic(inserts, selectK, rankKeys);
        if (want.selectKey == null) expect(() => tree.select(selectK)).toThrow();
        else expect(tree.select(selectK)).toBe(want.selectKey);
        for (const rk of rankKeys) expect(tree.rank(rk)).toBe(want.ranks[rk]);
      }
    });
  });

  describe('interval-tree', () => {
    test('overlap query matches naive reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const intervals = randomIntervals(rng, 5);
        const qLow = Math.floor(rng() * 8);
        const qHigh = qLow + Math.floor(rng() * 6);
        const tree = new IntervalTreePractice();
        for (const [lo, hi] of intervals) tree.insert(lo, hi);
        expect(tree.overlapSorted(qLow, qHigh)).toEqual(
          bf.refIntervalOverlap(intervals, qLow, qHigh),
        );
      }
    });
  });

  describe('b-tree', () => {
    test('search after inserts matches reference (t=3)', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const tree = new BTreePractice(3);
        const keys = [];
        for (let i = 0; i < 8; i += 1) {
          const key = Math.floor(rng() * 20);
          keys.push(key);
          tree.insert(key);
        }
        const searchKeys = [keys[0], Math.floor(rng() * 25)];
        const want = bf.refBTreeSearch(keys, 3, searchKeys);
        for (const key of searchKeys) expect(tree.search(key)).toBe(want[key]);
      }
    });
  });

  describe('bloom-filter', () => {
    test('mightContain true for added keys', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const added = [];
        for (let i = 0; i < 4; i += 1) added.push(`item${Math.floor(rng() * 20)}`);
        const bfFilter = new BloomFilterPractice(32, 0.01);
        for (const item of added) bfFilter.add(item);
        const addedSet = bf.refBloomAddedKeys(added);
        for (const item of addedSet) expect(bfFilter.mightContain(item)).toBe(true);
      }
    });
  });

  describe('boruvka-mst', () => {
    test('weight matches Kruskal reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 2 + Math.floor(rng() * 5);
        const edges = [];
        for (let i = 1; i < n; i += 1) {
          edges.push([i - 1, i, 1 + Math.floor(rng() * 5)]);
        }
        const want = bf.refMstWeight(n, edges);
        expect(boruvkaMst(n, edges)).toBe(want);
      }
    });
  });

  describe('a-star', () => {
    test('path length matches Dijkstra reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 2 + Math.floor(rng() * 4);
        const edges = [];
        for (let i = 1; i < n; i += 1) {
          edges.push([i - 1, i, 1 + Math.floor(rng() * 4)]);
        }
        const source = 0;
        const goal = n - 1;
        expect(aStarPathLength(n, edges, source, goal)).toBe(
          bf.refAStarPathLength(n, edges, source, goal),
        );
      }
    });
  });

  describe('articulation-bridges', () => {
    test('matches brute remove vertex/edge reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 3 + Math.floor(rng() * 3);
        const edges = [];
        for (let i = 1; i < n; i += 1) edges.push([i - 1, i]);
        if (rng() < 0.4 && n >= 4) edges.push([1, 3]);
        const got = articulationAndBridges(n, edges);
        const want = bf.refArticulationBridges(n, edges);
        expect(got.articulationPoints).toEqual(want.articulationPoints);
        const sortBridge = (a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
        expect([...got.bridges].sort(sortBridge)).toEqual(want.bridges);
      }
    });
  });

  describe('hungarian', () => {
    test('min cost matches brute reference (n<=4)', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 2 + Math.floor(rng() * 3);
        const cost = Array.from({ length: n }, () =>
          Array.from({ length: n }, () => Math.floor(rng() * 9) + 1),
        );
        const got = assignmentMinCost(cost);
        const want = bf.refHungarianMinCost(cost);
        expect(Object.is(got, -0) ? 0 : got).toBe(want);
      }
    });
  });

  describe('lca-binary-lifting', () => {
    test('matches naive parent-array reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const n = 2 + Math.floor(rng() * 5);
        const parent = randomParentTree(rng, n);
        const lca = new LcaBinaryLiftingPractice(parent);
        const u = Math.floor(rng() * n);
        const v = Math.floor(rng() * n);
        expect(lca.query(u, v)).toBe(bf.refLca(parent, u, v));
      }
    });
  });

  describe('sparse-table', () => {
    test('range min matches naive reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const initial = randomIntArray(rng, 10);
        if (initial.length < 2) continue;
        const st = new SparseTablePractice(initial);
        const queries = [];
        for (let i = 0; i < 4; i += 1) {
          const l = Math.floor(rng() * initial.length);
          const r = l + Math.floor(rng() * (initial.length - l));
          queries.push([l, r]);
        }
        const want = bf.refSparseTableMin(initial, queries);
        queries.forEach(([l, r], i) => {
          expect(st.query(l, r)).toBe(want[i]);
        });
      }
    });
  });

  describe('reservoir-sampling', () => {
    test('matches DSA reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t += 1) {
        const stream = randomIntArray(rng, 12);
        const k = stream.length ? Math.floor(rng() * Math.min(4, stream.length + 1)) : 0;
        const seed = Math.floor(rng() * 1000);
        expect(reservoirSample(stream, k, seed)).toEqual(
          bf.refReservoirSample(stream, k, seed),
        );
      }
    });
  });
});

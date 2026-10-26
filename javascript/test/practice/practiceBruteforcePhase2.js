/** Small-n brute-force references for practice property phase 2 tests. */

const bf1 = require('./practiceBruteforce');
const { GRAPH_UNREACHABLE: INF } = require('../../src/graphs/graphInf');
const { sample: reservoirSampleRef } = require('../../src/searching/reservoirSampling');
const { traverseRecursive } = require('../../src/graphs/dfs');
const { Graph } = require('../../src/graphs/graph');
const {
  inOrderRecursive,
  preOrderRecursive,
  postOrderRecursive,
} = require('../../src/trees/treeTraversals');
const { BST } = require('../../src/trees/bst');

const PAIRS = { ')': '(', ']': '[', '}': '{' };

function refValidParentheses(s) {
  const stack = [];
  for (const ch of s) {
    if ('([{'.includes(ch)) stack.push(ch);
    else if (')]}'.includes(ch)) {
      if (stack.pop() !== PAIRS[ch]) return false;
    } else return false;
  }
  return stack.length === 0;
}

function refMinMeetingRooms(intervals) {
  if (!intervals.length) return 0;
  const starts = intervals.map((x) => x[0]).sort((a, b) => a - b);
  const ends = intervals.map((x) => x[1]).sort((a, b) => a - b);
  let rooms = 0;
  let maxRooms = 0;
  let i = 0;
  let j = 0;
  while (i < starts.length) {
    if (starts[i] < ends[j]) {
      rooms += 1;
      i += 1;
    } else {
      rooms -= 1;
      j += 1;
    }
    maxRooms = Math.max(maxRooms, rooms);
  }
  return maxRooms;
}

function refTopKFrequent(nums, k) {
  const counts = new Map();
  for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);
  const entries = [...counts.entries()].map(([num, freq]) => ({ num, freq }));
  entries.sort((a, b) => (b.freq - a.freq) || (a.num - b.num));
  return entries.slice(0, k).map((x) => x.num);
}

function refLengthOfLongestSubstring(s) {
  let best = 0;
  for (let i = 0; i < s.length; i += 1) {
    const seen = new Set();
    for (let j = i; j < s.length; j += 1) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      best = Math.max(best, j - i + 1);
    }
  }
  return best;
}

class RefLRU {
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    else if (this.map.size >= this.cap) {
      const first = this.map.keys().next().value;
      this.map.delete(first);
    }
    this.map.set(key, value);
  }
}

function refMergeIntervals(intervals) {
  if (!intervals.length) return [];
  const sorted = intervals.map((x) => x.slice()).sort((a, b) => a[0] - b[0]);
  const merged = [sorted[0].slice()];
  for (let i = 1; i < sorted.length; i += 1) {
    const [start, end] = sorted[i];
    const last = merged[merged.length - 1];
    if (start <= last[1]) last[1] = Math.max(last[1], end);
    else merged.push([start, end]);
  }
  return merged;
}

function refLevelOrder(values) {
  if (!values.length || values[0] == null) return [];
  const root = { val: values[0], left: null, right: null };
  const q = [root];
  let i = 1;
  while (q.length && i < values.length) {
    const node = q.shift();
    if (i < values.length && values[i] != null) {
      node.left = { val: values[i], left: null, right: null };
      q.push(node.left);
    }
    i += 1;
    if (i < values.length && values[i] != null) {
      node.right = { val: values[i], left: null, right: null };
      q.push(node.right);
    }
    i += 1;
  }
  const out = [];
  const bfs = [root];
  while (bfs.length) {
    const level = [];
    const size = bfs.length;
    for (let k = 0; k < size; k += 1) {
      const node = bfs.shift();
      level.push(node.val);
      if (node.left) bfs.push(node.left);
      if (node.right) bfs.push(node.right);
    }
    out.push(level);
  }
  return out;
}

function refWordSearch(board, word) {
  if (!word) return true;
  const rows = board.length;
  const cols = board[0].length;
  const g = board.map((r) => r.slice());

  function dfs(r, c, i) {
    if (i === word.length) return true;
    if (r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] !== word[i]) return false;
    const tmp = g[r][c];
    g[r][c] = '#';
    const ok =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    g[r][c] = tmp;
    return ok;
  }

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
}

function refSerializeDeserialize(values) {
  const parts = values.map((v) => (v == null ? '#' : String(v)));
  while (parts.length && parts[parts.length - 1] === '#') parts.pop();
  const data = parts.join(',');
  if (!data) return [];
  const vals = data.split(',').map((t) => (t === '#' ? null : Number(t)));
  return refLevelOrderFlat(vals);
}

function refLevelOrderFlat(values) {
  if (!values.length || values[0] == null) return [];
  const root = { val: values[0], left: null, right: null };
  const q = [root];
  let i = 1;
  while (q.length && i < values.length) {
    const node = q.shift();
    if (i < values.length && values[i] != null) {
      node.left = { val: values[i], left: null, right: null };
      q.push(node.left);
    }
    i += 1;
    if (i < values.length && values[i] != null) {
      node.right = { val: values[i], left: null, right: null };
      q.push(node.right);
    }
    i += 1;
  }
  const out = [];
  const bfs = [root];
  while (bfs.length) {
    const node = bfs.shift();
    if (!node) {
      out.push(null);
      continue;
    }
    out.push(node.val);
    bfs.push(node.left);
    bfs.push(node.right);
  }
  while (out.length && out[out.length - 1] == null) out.pop();
  return out;
}

function refMaxSlidingWindow(nums, k) {
  if (k <= 0) throw new Error('k must be positive');
  const n = nums.length;
  if (n === 0) return [];
  const out = [];
  for (let i = k - 1; i < n; i += 1) {
    let best = nums[i - k + 1];
    for (let j = i - k + 2; j <= i; j += 1) best = Math.max(best, nums[j]);
    out.push(best);
  }
  return out;
}

function refKmpFirst(text, pattern) {
  if (!pattern.length) return 0;
  const idx = text.indexOf(pattern);
  return idx;
}

function refTrieSearch(words, word) {
  return words.includes(word);
}

function refTrieStartsWith(words, prefix) {
  for (const w of words) {
    if (w.startsWith(prefix)) return true;
  }
  return prefix.length === 0;
}

function refBinaryHeapExtractOrder(inserts) {
  return [...inserts].sort((a, b) => a - b);
}

function refDfsTimes(n, edges, source, directed) {
  const g = new Graph(n, directed, false);
  for (const [u, v] of edges) g.addEdge(u, v);
  return traverseRecursive(g, source);
}

function refPriorityQueueExtractOrder(inserts) {
  return [...inserts].sort((a, b) => a - b);
}

function refNextGreater(nums) {
  const n = nums.length;
  const out = new Array(n).fill(-1);
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      if (nums[j] > nums[i]) {
        out[i] = nums[j];
        break;
      }
    }
  }
  return out;
}

function refBstState(inserts, searchKey) {
  const map = new Map();
  for (const [key, value] of inserts) map.set(key, value);
  const inOrderKeys = [...map.keys()].sort((a, b) => a - b);
  const searchValue = map.has(searchKey) ? map.get(searchKey) : null;
  return { inOrderKeys, searchValue };
}

function refStackSim(push, popCount) {
  const stack = [];
  for (const v of push) stack.push(v);
  const pops = [];
  for (let i = 0; i < popCount; i += 1) pops.push(stack.pop());
  return { pops, empty: stack.length === 0, peek: stack.length ? stack[stack.length - 1] : null };
}

function refQueueSim(enqueue, dequeueCount) {
  const q = [];
  for (const v of enqueue) q.push(v);
  const dequeues = [];
  for (let i = 0; i < dequeueCount; i += 1) dequeues.push(q.shift());
  return { dequeues, empty: q.length === 0, peek: q.length ? q[0] : null };
}

function refDequeSim(addLast, addFirst, removeFirst, removeLast) {
  const dq = [];
  for (const v of addLast) dq.push(v);
  for (const v of addFirst) dq.unshift(v);
  const rf = removeFirst ? dq.shift() : null;
  const rl = removeLast ? dq.pop() : null;
  const remaining = dq.length ? dq.shift() : null;
  return { removeFirst: rf, removeLast: rl, remainingValue: remaining, empty: dq.length === 0 };
}

function refRabinFirst(text, pattern) {
  return text.indexOf(pattern);
}

function refSegmentRangeSums(initial, updates, queries) {
  const arr = initial.slice();
  const sums = [];
  for (const [l, r] of queries) {
    let s = 0;
    for (let i = l; i <= r; i += 1) s += arr[i];
    sums.push(s);
  }
  for (const [idx, val] of updates) arr[idx] = val;
  const sumsAfter = [];
  for (const [l, r] of updates.length ? queries : []) {
    let s = 0;
    for (let i = l; i <= r; i += 1) s += arr[i];
    sumsAfter.push(s);
  }
  return { sums, sumsAfter, arr };
}

function refFenwickState(n, adds, prefixAt, rangeQueries) {
  const arr = new Array(n).fill(0);
  for (const [idx, delta] of adds) arr[idx] += delta;
  const prefix = prefixAt.map((i) => {
    let s = 0;
    for (let j = 0; j <= i; j += 1) s += arr[j];
    return s;
  });
  const ranges = rangeQueries.map(([l, r]) => {
    let s = 0;
    for (let j = l; j <= r; j += 1) s += arr[j];
    return s;
  });
  return { prefix, ranges };
}

function refGraphNeighbors(n, directed, weighted, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const e of edges) {
    const u = e[0];
    const v = e[1];
    const w = e.length === 3 ? e[2] : 1;
    adj[u].push(weighted ? { to: v, weight: w } : { to: v });
    if (!directed) adj[v].push(weighted ? { to: u, weight: w } : { to: u });
  }
  for (const list of adj) {
    list.sort((a, b) => a.to - b.to);
  }
  return adj;
}

function refKosarajuComponentSizes(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) adj[u].push(v);
  const visited = new Array(n).fill(false);
  const order = [];
  function dfs1(v) {
    visited[v] = true;
    for (const w of adj[v]) if (!visited[w]) dfs1(w);
    order.push(v);
  }
  for (let v = 0; v < n; v += 1) if (!visited[v]) dfs1(v);
  const rev = Array.from({ length: n }, () => []);
  for (let u = 0; u < n; u += 1) {
    for (const w of adj[u]) rev[w].push(u);
  }
  visited.fill(false);
  const sizes = [];
  function dfs2(v, comp) {
    visited[v] = true;
    comp.push(v);
    for (const w of rev[v]) if (!visited[w]) dfs2(w, comp);
  }
  for (let i = order.length - 1; i >= 0; i -= 1) {
    const v = order[i];
    if (!visited[v]) {
      const c = [];
      dfs2(v, c);
      sizes.push(c.length);
    }
  }
  return sizes.sort((a, b) => a - b);
}

function refMaxFlow(n, edges, source, sink) {
  if (source === sink) return 0;
  const cap = Array.from({ length: n }, () => new Array(n).fill(0));
  for (const [u, v, c] of edges) cap[u][v] += c;
  let flow = 0;
  while (true) {
    const parent = new Array(n).fill(-1);
    parent[source] = source;
    const q = [source];
    for (let qi = 0; qi < q.length && parent[sink] === -1; qi += 1) {
      const u = q[qi];
      for (let v = 0; v < n; v += 1) {
        if (parent[v] === -1 && cap[u][v] > 0) {
          parent[v] = u;
          q.push(v);
        }
      }
    }
    if (parent[sink] === -1) break;
    let add = 1e18;
    for (let v = sink; v !== source; v = parent[v]) {
      add = Math.min(add, cap[parent[v]][v]);
    }
    for (let v = sink; v !== source; v = parent[v]) {
      const u = parent[v];
      cap[u][v] -= add;
      cap[v][u] += add;
    }
    flow += add;
  }
  return flow;
}

function refDynamicArray(values, getPairs) {
  const arr = values.slice();
  const gets = getPairs.map(({ index }) => arr[index]);
  return { size: arr.length, gets };
}

function refZIndex(text, pattern) {
  const idx = pattern.length ? text.indexOf(pattern) : 0;
  const z = refZArray(text);
  return { index: idx, z };
}

function refZArray(text) {
  const n = text.length;
  if (n === 0) return [];
  const z = new Array(n).fill(0);
  z[0] = n;
  let l = 0;
  let r = 0;
  for (let i = 1; i < n; i += 1) {
    if (i <= r) z[i] = Math.min(r - i + 1, z[i - l]);
    while (i + z[i] < n && text[z[i]] === text[i + z[i]]) z[i] += 1;
    if (i + z[i] - 1 > r) {
      l = i;
      r = i + z[i] - 1;
    }
  }
  return z;
}

function refLongestPalindromeLength(s) {
  let best = 0;
  for (let i = 0; i < s.length; i += 1) {
    for (let lo = i, hi = i; lo >= 0 && hi < s.length && s[lo] === s[hi]; lo -= 1, hi += 1) {
      best = Math.max(best, hi - lo + 1);
    }
    for (let lo = i, hi = i + 1; lo >= 0 && hi < s.length && s[lo] === s[hi]; lo -= 1, hi += 1) {
      best = Math.max(best, hi - lo + 1);
    }
  }
  return best;
}

function refAhoHits(text, patterns) {
  const hits = new Set();
  for (let p = 0; p < patterns.length; p += 1) {
    const pat = patterns[p];
    if (!pat) continue;
    for (let i = 0; i + pat.length <= text.length; i += 1) {
      if (text.slice(i, i + pat.length) === pat) hits.add(i);
    }
  }
  return [...hits].sort((a, b) => a - b);
}

function refTreeMapSearch(inserts, searchKey) {
  const map = new Map(inserts);
  return {
    inOrderKeys: [...map.keys()].sort((a, b) => a - b),
    searchValue: map.has(searchKey) ? map.get(searchKey) : null,
  };
}

function refArrayListOps(addLast, addFirst, getIndex, removeIndex) {
  const arr = [];
  for (const v of addLast) arr.push(v);
  for (const v of addFirst) arr.unshift(v);
  const getValue = arr[getIndex];
  const removeValue = arr.splice(removeIndex, 1)[0];
  return { getValue, removeValue, sizeAfter: arr.length };
}

function refTreeTraversals(inserts) {
  const tree = new BST();
  for (const [key, value] of inserts) tree.insert(key, value);
  return {
    inOrder: inOrderRecursive(tree.root),
    preOrder: preOrderRecursive(tree.root),
    postOrder: postOrderRecursive(tree.root),
  };
}

function refHashMapOps(ops, getKey, removeKey) {
  const map = new Map();
  for (const op of ops) map.set(op[1], op[2]);
  const getVal = map.has(getKey) ? map.get(getKey) : null;
  const hadRemove = map.delete(removeKey);
  const afterRemove = map.has(getKey) ? map.get(getKey) : null;
  return { getVal, hadRemove, afterRemove };
}

function refSuffixArray(s) {
  const suffixes = [];
  for (let i = 0; i < s.length; i += 1) suffixes.push(i);
  suffixes.sort((a, b) => {
    const sa = s.slice(a);
    const sb = s.slice(b);
    if (sa < sb) return -1;
    if (sa > sb) return 1;
    return 0;
  });
  return suffixes;
}

function refTreapSearch(inserts, seed, searchKeys) {
  const map = new Map();
  for (const [key, value] of inserts) map.set(key, value);
  const out = {};
  for (const key of searchKeys) {
    out[key] = map.has(key) ? map.get(key) : null;
  }
  return out;
}

function refOrderStatistic(inserts, selectK, rankKeys) {
  const map = new Map();
  for (const [k, v] of inserts) map.set(k, v);
  const keys = [...map.keys()].sort((a, b) => a - b);
  const selectKey = selectK >= 1 && selectK <= keys.length ? keys[selectK - 1] : null;
  const ranks = {};
  for (const rk of rankKeys) {
    if (!keys.length) ranks[rk] = 0;
    else {
      let count = 0;
      for (const key of keys) {
        if (key <= rk) count += 1;
      }
      ranks[rk] = count;
    }
  }
  return { selectKey, ranks };
}

function refIntervalOverlap(intervals, qLow, qHigh) {
  const overlaps = [];
  for (const [low, high] of intervals) {
    if (low <= qHigh && qLow <= high) overlaps.push([low, high]);
  }
  overlaps.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  return overlaps;
}

function refBTreeSearch(keys, t, searchKeys) {
  const set = new Set(keys);
  const out = {};
  for (const key of searchKeys) out[key] = set.has(key);
  return out;
}

function refBloomAddedKeys(added) {
  return new Set(added);
}

function refAStarPathLength(n, edges, source, goal) {
  const dist = bf1.refDijkstra(n, edges, source);
  const d = dist[goal];
  return d >= INF ? -1 : d;
}

function refArticulationBridges(n, edges) {
  const norm = edges.map(([u, v]) => [Math.min(u, v), Math.max(u, v)]);

  function connectedWithoutEdge(ban) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of norm) {
      if (ban && u === ban[0] && v === ban[1]) continue;
      adj[u].push(v);
      adj[v].push(u);
    }
    const seen = new Array(n).fill(false);
    const q = [0];
    seen[0] = true;
    for (let qi = 0; qi < q.length; qi += 1) {
      for (const w of adj[q[qi]]) {
        if (!seen[w]) {
          seen[w] = true;
          q.push(w);
        }
      }
    }
    return seen;
  }

  function connectedWithoutVertex(skip) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of norm) {
      if (u === skip || v === skip) continue;
      adj[u].push(v);
      adj[v].push(u);
    }
    let comps = 0;
    const seen = new Array(n).fill(false);
    if (skip >= 0) seen[skip] = true;
    for (let i = 0; i < n; i += 1) {
      if (seen[i]) continue;
      comps += 1;
      const q = [i];
      seen[i] = true;
      for (let qi = 0; qi < q.length; qi += 1) {
        for (const w of adj[q[qi]]) {
          if (!seen[w]) {
            seen[w] = true;
            q.push(w);
          }
        }
      }
    }
    return comps;
  }

  const baseComps = connectedWithoutVertex(-1);
  const ap = [];
  for (let v = 0; v < n; v += 1) {
    if (connectedWithoutVertex(v) > baseComps) ap.push(v);
  }
  const bridges = [];
  for (const [u, v] of norm) {
    const seen = connectedWithoutEdge([u, v]);
    if (!seen[u] || !seen[v]) bridges.push([u, v]);
  }
  bridges.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  return { articulationPoints: ap, bridges };
}

function refHungarianMinCost(cost) {
  const n = cost.length;
  let best = Infinity;
  const perm = Array.from({ length: n }, (_, i) => i);
  const visit = (k) => {
    if (k === n) {
      let sum = 0;
      for (let i = 0; i < n; i += 1) sum += cost[i][perm[i]];
      best = Math.min(best, sum);
      return;
    }
    for (let i = k; i < n; i += 1) {
      [perm[k], perm[i]] = [perm[i], perm[k]];
      visit(k + 1);
      [perm[k], perm[i]] = [perm[i], perm[k]];
    }
  };
  visit(0);
  return best;
}

function refLca(parent, u, v) {
  const ancestors = new Set();
  let x = u;
  while (true) {
    ancestors.add(x);
    if (x === parent[x]) break;
    x = parent[x];
  }
  let y = v;
  while (!ancestors.has(y)) y = parent[y];
  return y;
}

function refSparseTableMin(initial, queries) {
  return queries.map(([l, r]) => {
    let best = initial[l];
    for (let i = l + 1; i <= r; i += 1) best = Math.min(best, initial[i]);
    return best;
  });
}

function refReservoirSample(stream, k, seed) {
  return reservoirSampleRef(stream, k, seed);
}

module.exports = {
  refValidParentheses,
  refMinMeetingRooms,
  refTopKFrequent,
  refLengthOfLongestSubstring,
  RefLRU,
  refMergeIntervals,
  refLevelOrder,
  refWordSearch,
  refSerializeDeserialize,
  refMaxSlidingWindow,
  refKmpFirst,
  refTrieSearch,
  refTrieStartsWith,
  refBinaryHeapExtractOrder,
  refDfsTimes,
  refPriorityQueueExtractOrder,
  refNextGreater,
  refBstState,
  refStackSim,
  refQueueSim,
  refDequeSim,
  refRabinFirst,
  refSegmentRangeSums,
  refFenwickState,
  refGraphNeighbors,
  refKosarajuComponentSizes,
  refMaxFlow,
  refDynamicArray,
  refZIndex,
  refLongestPalindromeLength,
  refAhoHits,
  refTreeMapSearch,
  refArrayListOps,
  refTreeTraversals,
  refHashMapOps,
  refSuffixArray,
  refTreapSearch,
  refOrderStatistic,
  refIntervalOverlap,
  refBTreeSearch,
  refBloomAddedKeys,
  refMstWeight: bf1.refMstWeight,
  refAStarPathLength,
  refArticulationBridges,
  refHungarianMinCost,
  refLca,
  refSparseTableMin,
  refReservoirSample,
};

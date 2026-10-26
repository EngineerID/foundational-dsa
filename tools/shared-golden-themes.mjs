/** Edge themes for shared tools/*-goldens.json (aligned with catalog edge-case themes). */
import { ITEMS } from './items.mjs';

export const THEMES = ['empty', 'single', 'duplicate', 'boundary', 'invalid'];

const NO_SINGLE = new Set([]);
const NO_DUPLICATE = new Set([
  'dijkstra',
  'bellman-ford',
  'floyd-warshall',
  'a-star',
  'edmonds-karp',
  'hungarian',
  'matrix-chain',
  'tsp-bitmask',
  'lca-binary-lifting',
  'graph',
  'bfs',
  'dfs',
  'topological-sort',
  'tarjan-scc',
  'kosaraju',
  'articulation-bridges',
  'boruvka-mst',
  'kruskal-mst',
  'prim-mst',
  'bipartite-check',
  'manacher',
  'suffix-array',
  'z-algorithm',
  'aho-corasick',
  'rod-cutting',
  'coin-change',
  'knapsack',
  'lis',
  'lcs',
  'longest-palindromic-subsequence',
  'partition-equal-subset',
  'edit-distance',
  'matrix-chain',
]);

const NEEDS_INVALID = new Set([
  'rod-cutting',
  'interval-tree',
  'b-tree',
  'maximum-subarray',
  'monotonic-stack',
  'two-sum-ii',
]);

const NO_BOUNDARY = new Set(['hungarian', 'quick-select', 'two-sum-ii']);

const NO_EMPTY_EXTRA = new Set(['quick-select', 'segment-tree']);

const NO_EMPTY = new Set([
  'tsp-bitmask',
  'union-find',
  'binary-search-boundary',
  'lca-binary-lifting',
  'sparse-table',
]);

const itemById = new Map(ITEMS.map((i) => [i.id, i]));

export function requiredThemes(id) {
  const item = itemById.get(id);
  const topic = item?.topic ?? 'extra';
  const req = new Set();
  const graphTopic = topic === 'graphs';
  if (!NO_EMPTY.has(id) && !NO_EMPTY_EXTRA.has(id) && !graphTopic) req.add('empty');
  if (!NO_SINGLE.has(id)) req.add('single');
  if (
    !NO_DUPLICATE.has(id) &&
    (topic === 'sorting' || topic === 'hashing' || topic === 'searching' || topic === 'strings')
  ) {
    req.add('duplicate');
  }
  if (
    !NO_BOUNDARY.has(id) &&
    (topic === 'graphs' || topic === 'searching' || id === 'binary-search-boundary' || id === 'sliding-window-maximum')
  ) {
    req.add('boundary');
  }
  if (NEEDS_INVALID.has(id)) req.add('invalid');
  return THEMES.filter((t) => req.has(t));
}

export function themesInCases(cases) {
  const found = new Set();
  const blob = JSON.stringify(cases);
  if (
    /\[\s*\]/.test(blob) ||
    /"s"\s*:\s*""/.test(blob) ||
    /"length"\s*:\s*0/.test(blob) ||
    /"empty"\s*:\s*true/.test(blob) ||
    /"edges"\s*:\s*\[\s*\]/.test(blob)
  ) {
    found.add('empty');
  }
  if (
    /"n"\s*:\s*1[,}]/.test(blob) ||
    /"arr"\s*:\s*\[\s*-?\d+\s*\]/.test(blob) ||
    /"input"\s*:\s*\[\s*-?\d+\s*\]/.test(blob) ||
    /"stream"\s*:\s*\[\s*\d+\s*\]/.test(blob) ||
    /"initial"\s*:\s*\[\s*\d+\s*\]/.test(blob) ||
    /"prices"\s*:\s*\[\s*\d+\s*\]/.test(blob) ||
    /"s"\s*:\s*"[^"]{1}"/.test(blob)
  ) {
    found.add('single');
  }
  if (
    /(\d+),\s*\1/.test(blob) ||
    /"2"\s*,\s*"2"/.test(blob) ||
    /"3"\s*,\s*"3"/.test(blob) ||
    /"(text|pattern|s)"\s*:\s*"[^"]*(\w)\2[^"]*"/.test(blob)
  ) {
    found.add('duplicate');
  }
  if (
    /"expected"\s*:\s*-1/.test(blob) ||
    /"first"\s*:\s*-1/.test(blob) ||
    /"last"\s*:\s*-1/.test(blob) ||
    /hasNegativeCycle/.test(blob) ||
    /searchMiss/.test(blob) ||
    /"found"\s*:\s*false/.test(blob) ||
    /"peek"\s*:\s*null/.test(blob) ||
    /"maxFlow"\s*:\s*0[,}]/.test(blob) ||
    /"length"\s*:\s*1e18/.test(blob) ||
    /"componentCount"\s*:\s*[2-9]/.test(blob)
  ) {
    found.add('boundary');
  }
  if (/expectError|"errorType"/.test(blob)) {
    found.add('invalid');
  }
  for (const c of cases) {
    if (c.expectError === true || c.errorType) found.add('invalid');
    if (c.hasNegativeCycle === true) found.add('boundary');
    if (c.searchMiss !== undefined) found.add('boundary');
    if (c.empty === true) found.add('empty');
    if (c.s === '' || c.text === '' || c.a === '' || c.b === '') found.add('empty');
    if (typeof c.a === 'string' && c.a.length === 1) found.add('single');
    if (typeof c.b === 'string' && c.b.length === 1) found.add('single');
    if (typeof c.s === 'string' && c.s.length === 1) found.add('single');
    if (typeof c.text === 'string' && c.text.length === 1) found.add('single');
    if (Array.isArray(c.inserts) && c.inserts.length === 0) found.add('empty');
    if (Array.isArray(c.inserts) && c.inserts.length === 1) found.add('single');
    if (Array.isArray(c.parent) && c.parent.length === 1) found.add('single');
    if (Array.isArray(c.initial) && c.initial.length === 1) found.add('single');
    if (Array.isArray(c.dist) && c.dist.length === 1) found.add('single');
    if (Array.isArray(c.cost) && c.cost.length === 1) found.add('single');
    if (Array.isArray(c.push) && c.push.length === 1) found.add('single');
    if (Array.isArray(c.enqueue) && c.enqueue.length === 1) found.add('single');
    if (Array.isArray(c.coins) && c.coins.length === 0) found.add('empty');
    if (Array.isArray(c.nums) && c.nums.length === 1) found.add('single');
    if (Array.isArray(c.intervals) && c.intervals.length === 1) found.add('single');
    if (Array.isArray(c.height) && c.height.length === 1) found.add('single');
    if (Array.isArray(c.weights) && c.weights.length === 1) found.add('single');
    if (c.maxFlow === 0) found.add('boundary');
    if (Array.isArray(c.articulationPoints) && c.articulationPoints.length > 0) found.add('boundary');
    if (Array.isArray(c.bridges) && c.bridges.length > 0) found.add('boundary');
    if (c.amount === 0) found.add('empty');
    if (c.expected === -1) found.add('boundary');
    if (Array.isArray(c.distances) && c.distances.some((d) => d === -1 || (typeof d === 'number' && d > 1e8))) {
      found.add('boundary');
    }
    if (typeof c.length === 'number' && (c.length === -1 || c.length > 1e15)) found.add('boundary');
    if (typeof c.n === 'number' && c.n >= 2 && c.totalWeight === 0) found.add('boundary');
    if (Array.isArray(c.coins) && c.coins.length === 1 && c.amount === 1) found.add('single');
    if (
      Array.isArray(c.expectedOrder) &&
      c.expectedOrder.length === 0 &&
      typeof c.n === 'number' &&
      c.n > 1
    ) {
      found.add('boundary');
    }
    if (Array.isArray(c.ops)) {
      const putKeys = c.ops.filter((row) => Array.isArray(row) && row[0] === 'put').map((row) => row[1]);
      if (putKeys.length >= 2 && new Set(putKeys).size < putKeys.length) found.add('duplicate');
    }
    if (Array.isArray(c.add) && c.add.length === 1) found.add('single');
    if (Array.isArray(c.add) && new Set(c.add).size < c.add.length) found.add('duplicate');
    if (Array.isArray(c.steps) && c.steps.length === 1 && c.steps[0]?.op === 'get') found.add('empty');
    if (Array.isArray(c.steps) && c.steps.some((s) => s.expected === -1)) found.add('boundary');
    if (
      Array.isArray(c.steps) &&
      c.steps.some((s) => s.op === 'put') &&
      c.steps.some((s) => s.op === 'get' && s.expected !== -1)
    ) {
      found.add('single');
    }
    if (typeof c.stream !== 'undefined' && typeof c.k === 'number' && c.k > c.stream.length) {
      found.add('boundary');
    }
    if (Array.isArray(c.nums) && typeof c.k === 'number' && c.k > c.nums.length) {
      found.add('boundary');
    }
    if (c.expected === false) found.add('boundary');
    if (/(.)\1{2,}/.test(c.text ?? '')) found.add('duplicate');
    if (c.neighborCount && Object.values(c.neighborCount).some((v) => v === 0)) found.add('boundary');
    if (Array.isArray(c.addLast) && c.addLast.length === 1) found.add('single');
    if (Array.isArray(c.append) && c.append.length === 1) found.add('single');
    if (Array.isArray(c.dimensions) && c.dimensions.length === 1) found.add('single');
    if (Array.isArray(c.ops) && c.ops.length === 1) found.add('single');
    if (typeof c.kruskalWeight === 'number' && c.kruskalWeight === 0 && typeof c.n === 'number' && c.n >= 2) {
      found.add('boundary');
    }
    if (Array.isArray(c.pairs) && c.pairs.some((p) => Array.isArray(p) && p[2] > 1e8)) {
      found.add('boundary');
    }
    if (Array.isArray(c.discovery) && c.discovery.some((d) => d === -1)) found.add('boundary');
  }
  return found;
}

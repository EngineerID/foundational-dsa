# Worked examples

Short, language-neutral walkthroughs for six core topics. Implementations live under `java/`, `python/dsa/`, and `javascript/src/` with the same behavior. For a broader interview map, see [interview-prep.md](interview-prep.md).

## Binary search on a sorted array

**Goal:** Find index of key `7` in `[1, 3, 5, 7, 9, 11]`.

| Step | `lo` | `hi` | `mid` | `arr[mid]` | Action |
|------|------|------|-------|------------|--------|
| 1 | 0 | 5 | 2 | 5 | `5 < 7` → search right half (`lo = 3`) |
| 2 | 3 | 5 | 4 | 11 | `11 > 7` → search left half (`hi = 3`) |
| 3 | 3 | 3 | 3 | 7 | Match → return index **3** |

If the key were `8`, step 2 would set `lo = 5`, step 3 would have `lo > hi` → return **-1**.

**API:** `search(sortedArray, key)` in each language (see [binary-search](items/searching/binary-search.md)).

## Merge sort (top-down)

**Input:** `[38, 27, 43, 3]`

1. Split: `[38, 27]` and `[43, 3]`
2. Split leaves: `[38]`, `[27]`, `[43]`, `[3]`
3. Merge pairs: `[27, 38]`, `[3, 43]`
4. Merge halves: `[3, 27, 38, 43]`

Merge of `[27, 38]` with `[3, 43]` compares fronts (`3` vs `27`, take `3`; …) producing the sorted four-element array.

**API:** `sort(array)` returns a new sorted array (Python/JS) or sorts in place depending on algorithm module; merge sort returns a copy in all three ports.

## KMP pattern search

**Text:** `ababcababa`  
**Pattern:** `aba`

Build LPS for `aba` → `[0, 0, 1]` (longest proper prefix that is also suffix).

Scan highlights:

- Match `aba` at index 0, then continue; mismatch after partial `ab` uses LPS to shift pattern without moving text index backward.
- Next full match at index **5** (substring `ababa` contains `aba` at offset 5).

**Empty pattern:** By convention in this repo, `search(text, "")` returns **0** (vacuous match), same as `str.find` / `String.indexOf`.

**API:** `search(text, pattern)` → first index or `-1` (see [kmp](items/strings/kmp.md)).

## Dijkstra (non-negative weights)

**Graph:** directed, weighted (same as `GraphsTest.dijkstra` in Java).

| Edge | Weight |
|------|--------|
| 0 → 1 | 1 |
| 1 → 2 | 2 |
| 0 → 2 | 4 |

**Source:** vertex `0`.

| Step | Extract | Relax | `dist[0..2]` after |
|------|---------|-------|---------------------|
| init | — | — | `[0, ∞, ∞]` |
| 1 | 0 | 0→1 (1), 0→2 (4) | `[0, 1, 4]` |
| 2 | 1 | 1→2 (1+2=3) | `[0, 1, 3]` |
| 3 | 2 | no improvement | `[0, 1, 3]` |

Shortest distance to vertex **2** is **3** (path 0→1→2), better than the direct edge of weight 4.

**API:** `shortestPaths(graph, source)` → distance array; unreachable vertices use a large sentinel (see [dijkstra](items/graphs/dijkstra.md)).

`npm run demo -- dijkstra`

## Union–find (connectivity)

**Structure:** `n = 5` elements labeled `0..4`, all separate.

| Operation | Effect | Components |
|-----------|--------|------------|
| `union(0, 1)` | merge {0} and {1} | 4 |
| `union(2, 3)` | merge {2} and {3} | 3 |
| `union(1, 2)` | merge {0,1} and {2,3} | 2 |
| `connected(0, 3)` | same set as 1 and 2 | **true** |
| `connected(0, 4)` | 4 still alone | **false** |

Path compression flattens trees on `find`; union by rank keeps trees shallow. Amortized time per operation is **O(α(n))**.

**API:** `find(x)`, `union(a, b)`, `connected(a, b)` (see [union-find](items/unionfind/union-find.md)).

`npm run demo -- union-find`

## LRU cache (capacity 2)

Classic LeetCode-style eviction (matches `LRUCacheTest.getAndPut`):

| Step | Action | Cache state (MRU → LRU) | `get` result |
|------|--------|-------------------------|--------------|
| 1 | `put(1,1)`, `put(2,2)` | `{1:1, 2:2}` | — |
| 2 | `get(1)` | `{1:1, 2:2}` (1 promoted) | **1** |
| 3 | `put(3,3)` | evicts key **2** → `{3:3, 1:1}` | — |
| 4 | `get(2)` | — | **-1** (missing) |
| 5 | `put(4,4)` | evicts key **1** → `{4:4, 3:3}` | — |
| 6 | `get(1)`, `get(3)`, `get(4)` | — | **-1**, **3**, **4** |

**API:** `get(key)`, `put(key, value)` in O(1) time (see [lru-cache](items/linear/lru-cache.md)).

`npm run demo -- lru-cache`

## Topic index

One-line walkthroughs for every catalog topic. Full tables above cover binary search, merge sort, KMP, Dijkstra, union–find, and LRU cache.

### linear-search

Scan `[4, 2, 7, 2]` for `2`: index **1** (first occurrence). For `9` → **-1**.

`npm run demo -- linear-search`

### binary-search

See [binary-search-on-a-sorted-array](#binary-search-on-a-sorted-array) above.

### quick-select

Array `[3, 1, 4, 1, 5]`, `k=2` (1-based): partition around a pivot until rank `2` is found → **1** (second smallest).

`npm run demo -- quick-select`

### bubble-sort

Pass adjacent swaps on `[3, 1, 2]` → `[1, 2, 3]` in place after sufficient passes.

`npm run demo -- bubble-sort`

### selection-sort

Sort an array in ascending order in place.

`npm run demo -- selection-sort`

### insertion-sort

Sort an array in ascending order in place (efficient on nearly sorted input).

`npm run demo -- insertion-sort`

### merge-sort

See [merge-sort-top-down](#merge-sort-top-down) above.

### quick-sort

Sort in place via Lomuto partition, optional random pivot, or 3-way partition.

`npm run demo -- quick-sort`

### heapsort

Sort an array in ascending order in place using a binary max-heap.

`npm run demo -- heapsort`

### counting-sort

Stable sort for non-negative integers in bounded range.

`npm run demo -- counting-sort`

### radix-sort

LSD radix sort for non-negative integers using counting sort per digit.

`npm run demo -- radix-sort`

### kmp

See [kmp-pattern-search](#kmp-pattern-search) above.

### dynamic-array

Resizable array-backed list with amortized append.

`npm run demo -- dynamic-array`

### singly-linked-list

Singly linked list with head insertion and traversal.

`npm run demo -- singly-linked-list`

### doubly-linked-list

Doubly linked list supporting O(1) removal given a node reference.

`npm run demo -- doubly-linked-list`

### stack

LIFO stack backed by dynamic array.

`npm run demo -- stack`

### queue

FIFO queue backed by circular buffer.

`npm run demo -- queue`

### deque

Double-ended queue with O(1) push/pop at both ends.

`npm run demo -- deque`

### binary-heap

Array-based binary heap (min or max) with heapify operations.

`npm run demo -- binary-heap`

### priority-queue

Min-priority queue for scheduling by priority.

`npm run demo -- priority-queue`

### bst

Binary search tree for ordered key storage.

`npm run demo -- bst`

### tree-traversals

In-order, pre-order, post-order, and level-order tree walks.

`npm run demo -- tree-traversals`

### avl-tree

Self-balancing BST with height-balance after insert/delete.

`npm run demo -- avl-tree`

### order-statistic-tree

BST augmented with subtree sizes for rank and select.

`npm run demo -- order-statistic-tree`

### interval-tree

Store intervals and query overlaps with a point or interval.

`npm run demo -- interval-tree`

### trie

Prefix tree for string keys with prefix search.

`npm run demo -- trie`

### b-tree

Disk-oriented multi-way search tree with bounded node fanout.

`npm run demo -- b-tree`

### separate-chaining

Hash map with linked-list buckets and load-factor resize.

`npm run demo -- separate-chaining`

### open-addressing

Hash map with probing collision resolution and tombstones.

`npm run demo -- open-addressing`

### bloom-filter

Probabilistic set membership with false positives possible.

`npm run demo -- bloom-filter`

### union-find

Disjoint-set connectivity with union and find.

`npm run demo -- union-find`

### graph

Adjacency-list directed/undirected weighted graph representation.

`npm run demo -- graph`

### bfs

Breadth-first traversal and unweighted shortest paths.

`npm run demo -- bfs`

### dfs

Depth-first traversal, cycle detection, and connectivity.

`npm run demo -- dfs`

### topological-sort

Linear ordering of a DAG respecting all edges.

`npm run demo -- topological-sort`

### dijkstra

Single-source shortest paths on non-negative edge weights.

`npm run demo -- dijkstra`

### bellman-ford

Single-source shortest paths with negative edges; detect negative cycles.

`npm run demo -- bellman-ford`

### floyd-warshall

All-pairs shortest paths via dynamic programming.

`npm run demo -- floyd-warshall`

### kruskal-mst

Minimum spanning tree via sorted edges and union-find.

`npm run demo -- kruskal-mst`

### prim-mst

Minimum spanning tree growing from a start vertex.

`npm run demo -- prim-mst`

### boruvka-mst

Minimum spanning tree via repeated cheapest outgoing edge per component.

`npm run demo -- boruvka-mst`

## Try it locally

Run the demo runner (all three languages by default):

```bash
npm run demo -- binary-search
npm run demo -- merge-sort
npm run demo -- kmp
npm run demo -- dijkstra
npm run demo -- union-find
npm run demo -- lru-cache
```

Optional language filter: `npm run demo -- kmp python`.

See also [`docs/running-ci-locally.md`](running-ci-locally.md) and [`AGENTS.md`](../AGENTS.md) for full verification commands.

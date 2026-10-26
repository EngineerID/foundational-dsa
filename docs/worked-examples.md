# Worked examples

Short, language-neutral walkthroughs for thirty-three interview-heavy topics. Implementations live under `java/`, `python/dsa/`, and `javascript/src/` with the same behavior. For a broader interview map, see [interview-prep.md](interview-prep.md). Trilingual **catalog tests** mirror the step-table scenarios above (`WorkedInterviewExamplesTest`, `test_worked_interview_examples.py`, `workedInterviewExamples.test.js`).

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

## Topological sort (Kahn, course schedule)

**DAG edges:** `0→1`, `0→2`, `1→3` (four vertices).

| Step | Zero in-degree queue | Pop | Order so far |
|------|----------------------|-----|--------------|
| init | `[0]` | — | `[]` |
| 1 | — | 0 | `[0]` → enqueue 1, 2 |
| 2 | `[1, 2]` | 1 | `[0, 1]` → enqueue 3 |
| 3 | `[2, 3]` | 2 | `[0, 1, 2]` |
| 4 | `[3]` | 3 | `[0, 1, 2, 3]` |

Any valid order must place **0** before **3**. If a cycle exists, Kahn’s algorithm returns an **empty** list.

**API:** `kahn(graph)` → vertex order (see [topological-sort](items/graphs/topological-sort.md)).

`npm run demo -- topological-sort`

## Binary search on the answer

**Pattern:** monotone predicate `feasible(x)` on an integer range; find the **minimum** `x` with `feasible(x) = true`.

**Example:** ship with capacity `c` in `[1..10]`; `feasible(c)` true exactly when `c ≥ 6`.

| Step | `lo` | `hi` | `mid` | `feasible(mid)` | Action |
|------|------|------|-------|-----------------|--------|
| 1 | 1 | 10 | 5 | false | answer > 5 → `lo = 6` |
| 2 | 6 | 10 | 8 | true | try smaller → `hi = 7` |
| 3 | 6 | 7 | 6 | true | try smaller → `hi = 6` |
| 4 | 6 | 6 | — | — | minimum feasible **6** |

When the “answer space” is a sorted array, the same boundary idea appears as **`firstOccurrence(sorted, key)`** — e.g. `[1, 3, 5, 7, 9, 11]` and key `7` → index **3**.

**API:** predicate search is an interview pattern; boundary search uses `firstOccurrence` / `lastOccurrence` on sorted arrays (see [binary-search](items/searching/binary-search.md)).

`npm run demo -- binary-search`

## Sliding window maximum

**Array:** `[1, 3, -1, -3, 5, 3, 6, 7]`, **window** `k = 3`.

| Window indices | Values | Max |
|----------------|--------|-----|
| 0–2 | 1, 3, -1 | **3** |
| 1–3 | 3, -1, -3 | **3** |
| 2–4 | -1, -3, 5 | **5** |
| 3–5 | -3, 5, 3 | **5** |
| 4–6 | 5, 3, 6 | **6** |
| 5–7 | 3, 6, 7 | **7** |

**Output:** `[3, 3, 5, 5, 6, 7]`. A deque tracks candidates in decreasing value so each step is **O(1)** amortized.

**API:** `maxSlidingWindow(nums, k)` (see [sliding-window-maximum](items/linear/sliding-window-maximum.md)).

`npm run demo -- sliding-window-maximum`

## BFS (unweighted shortest paths)

**Graph:** undirected, unweighted, 5 vertices (same shape as `GraphsTest.bfsUnweighted`).

**Edges:** `0—1`, `0—2`, `1—3` (vertex **4** isolated).

**Source:** `0`.

| Vertex | BFS distance from 0 | Why |
|--------|---------------------|-----|
| 0 | **0** | source |
| 1 | **1** | edge 0—1 |
| 2 | **1** | edge 0—2 |
| 3 | **2** | path 0—1—3 |
| 4 | **-1** | unreachable |

**API:** `distances(graph, source)` → distance array; unreachable **-1** (see [bfs](items/graphs/bfs.md)).

`npm run demo -- bfs`

## Edit distance (kitten to sitting)

**Strings:** `kitten` → `sitting` (Levenshtein). Classic answer: **3** edits (replace `k→s`, insert `g`, replace `e→i` — other optimal sequences exist).

DP sketch (rows/cols = prefixes): fill table where cell = min of delete/insert/replace neighbors; bottom-right cell = **3**.

**API:** `distance(a, b)` (see [edit-distance](items/dp/edit-distance.md)).

`npm run demo -- edit-distance`

## Knapsack (0/1 classic)

**Items:** weights `[1, 2, 3]`, values `[6, 10, 12]`, **capacity** `5` (same as `Knapsack01Test` in Java).

| Item | Weight | Value | Take? |
|------|--------|-------|-------|
| A | 1 | 6 | optional |
| B | 2 | 10 | **yes** |
| C | 3 | 12 | **yes** |

Best choice: B + C → weight **5**, total value **22**. Each item at most once; fill capacity with DP over weight.

**API:** `maxValue(weights, values, capacity)` (see [knapsack](items/dp/knapsack.md)).

`npm run demo -- knapsack`

## Longest common subsequence

**Strings:** `abcde` and `ace`.

Longest subsequence appearing in both in order: **`ace`** (length **3**). Classic 2D DP fills prefix table; bottom-right cell is the answer.

**API:** `length(a, b)` (see [lcs](items/dp/lcs.md)).

`npm run demo -- lcs`

## Two Sum II (sorted pair)

**Input:** sorted `nums = [2, 7, 11, 15]`, `target = 9` (1-based indices in the answer).

| Step | `left` | `right` | `sum` | Action |
|------|--------|---------|-------|--------|
| 1 | 0 → 2 | 3 → 15 | 17 | `17 > 9` → move `right` left |
| 2 | 0 → 2 | 2 → 11 | 13 | `13 > 9` → move `right` left |
| 3 | 0 → 2 | 1 → 7 | **9** | match → return **`[1, 2]`** |

Two pointers never cross; each index moves at most once → **O(n)** time, **O(1)** extra space.

**API:** `twoSumSorted(nums, target)` → 1-based `[i, j]` (see [two-sum-ii](items/searching/two-sum-ii.md)).

`npm run demo -- two-sum-ii`

## Maximum subarray (Kadane)

**Input:** `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`

Track running sum `cur` and best `best`:

| Index | Value | `cur` after | `best` after |
|-------|-------|-------------|--------------|
| 0 | -2 | -2 | -2 |
| 1 | 1 | 1 | 1 |
| 2 | -3 | -2 | 1 |
| 3 | 4 | 4 | 4 |
| 4 | -1 | 3 | 4 |
| 5 | 2 | 5 | 5 |
| 6 | 1 | **6** | **6** |
| 7 | -5 | 1 | 6 |
| 8 | 4 | 5 | 6 |

Maximum contiguous sum is **6** (subarray `[4, -1, 2, 1]`).

**API:** `maxSubarray(nums)` (see [maximum-subarray](items/dp/maximum-subarray.md)).

`npm run demo -- maximum-subarray`

## Valid parentheses (stack)

**Input:** `s = "({[]})"`

| Step | Read | Stack (bottom → top) |
|------|------|----------------------|
| 1 | `(` | `(` |
| 2 | `{` | `(`, `{` |
| 3 | `[` | `(`, `{`, `[` |
| 4 | `]` | `(`, `{` |
| 5 | `}` | `(` |
| 6 | `)` | *(empty)* |

Stack empty at end → **valid**. For `"(]"`, step 2 leaves `(` vs `]` → **false**.

**API:** `isValidParentheses(s)` (see [valid-parentheses](items/linear/valid-parentheses.md)).

`npm run demo -- valid-parentheses`

## Meeting rooms II (min heap)

**Intervals:** `[0,30)`, `[5,10)`, `[15,20)` (classic LeetCode shape).

Sort by start. Min-heap stores **end times** of meetings still in progress:

| Interval | Heap before | Action | Heap after | rooms needed |
|----------|-------------|--------|------------|--------------|
| `[0,30)` | `[]` | start meeting | `[30]` | 1 |
| `[5,10)` | `[30]` | `5 < 30` → need new room | `[10,30]` | 2 |
| `[15,20)` | `[10,30]` | `15 ≥ 10` → reuse room ending at 10 | `[20,30]` | 2 |

Answer: **2** concurrent rooms.

**API:** `minMeetingRooms(intervals)` (see [meeting-rooms-ii](items/heaps/meeting-rooms-ii.md)).

`npm run demo -- meeting-rooms-ii`

## Number of islands (grid DFS)

**Grid (4×5):** land `1`, water `0`; count connected 4-neighbor land components.

```
1 1 0 0 0
1 1 0 0 0
0 0 1 0 0
0 0 0 1 1
```

| Flood from | Cells visited | New islands total |
|------------|---------------|-------------------|
| (0,0) | top-left 2×2 block | 1 |
| (2,2) | single land | 2 |
| (3,3) | right pair | **3** |

Each unvisited `1` starts one DFS/BFS and marks its component.

**API:** `numIslands(grid)` (see [number-of-islands](items/graphs/number-of-islands.md)).

`npm run demo -- number-of-islands`

## Top K frequent elements

**Input:** `nums = [1,1,1,2,2,3]`, `k = 2`.

| Phase | Result |
|-------|--------|
| Count frequencies | `1→3`, `2→2`, `3→1` |
| Min-heap of size `k` by frequency | keep keys `{1,2}` |
| Extract order (any tie ok) | **`[1, 2]`** |

Frequency map is **O(n)**; heap operations **O(n log k)**.

**API:** `topKFrequent(nums, k)` (see [top-k-frequent-elements](items/heaps/top-k-frequent-elements.md)).

`npm run demo -- top-k-frequent-elements`

## Longest substring without repeating

**Input:** `s = "pwwkew"`

| Step | Window | Set / map | Best length |
|------|--------|-----------|-------------|
| expand to `pw` | `pw` | `{p,w}` | 2 |
| duplicate `w` | shrink from left → `w` | `{w}` | 2 |
| expand `wk`, `wke` | `wke` | `{w,k,e}` | 3 |
| duplicate `w` at end | shrink → `kew` | `{k,e,w}` | **3** |

Answer: **3** (`"wke"`).

**API:** `lengthOfLongestSubstring(s)` (see [longest-substring-without-repeating](items/strings/longest-substring-without-repeating.md)).

`npm run demo -- longest-substring-without-repeating`

## Merge intervals

**Input:** `[[1,3],[2,6],[8,10],[15,18]]` (sorted by start).

| Step | Current merged | Next interval | Action |
|------|----------------|---------------|--------|
| 1 | `[]` | `[1,3]` | append |
| 2 | `[[1,3]]` | `[2,6]` | overlap → `[1,6]` |
| 3 | `[[1,6]]` | `[8,10]` | append |
| 4 | `[[1,6],[8,10]]` | `[15,18]` | append |

Result: **`[[1,6],[8,10],[15,18]]`**.

**API:** `mergeIntervals(intervals)` (see [merge-intervals](items/sorting/merge-intervals.md)).

`npm run demo -- merge-intervals`

## Coin change (min coins)

**Coins:** `[1, 2, 5]`, **amount:** `11`.

Unbounded knapsack DP — `dp[a]` = min coins to make amount `a`:

| Amount `a` | Best last coin | `dp[a]` |
|------------|----------------|---------|
| 0 | — | 0 |
| 1 | 1 | 1 |
| 2 | 2 | 1 |
| 3 | 1+2 | 2 |
| … | … | … |
| 11 | 5+5+1 | **3** |

Impossible amounts stay at sentinel **-1** (e.g. coins `[2]`, amount `3`).

**API:** `minCoins(coins, amount)` (see [coin-change](items/dp/coin-change.md)).

`npm run demo -- coin-change`

## Trapping rain water (two pointers)

**Heights:** `[0,1,0,2,1,0,1,3,2,1,2,1]`

Two pointers `left` / `right` with running prefix maxes; water at index `i` is `min(leftMax, rightMax) - height[i]` when positive.

| Index | Height | `leftMax` | `rightMax` | Water at `i` |
|-------|--------|-----------|------------|--------------|
| 2 | 0 | 1 | 3 | 1 |
| 5 | 0 | 2 | 3 | 2 |
| … | … | … | … | … |

Total trapped: **6** units (classic LeetCode trace).

**API:** `trap(height)` (see [trapping-rain-water](items/searching/trapping-rain-water.md)).

`npm run demo -- trapping-rain-water`

## Course schedule (canFinish)

**Input:** `numCourses = 2`, prerequisites `[[1,0],[0,1]]` (0 must come before 1 **and** 1 before 0).

| Step | In-degree after build | Queue (zero in-degree) | Can finish all? |
|------|----------------------|------------------------|-----------------|
| init | `[0, 0]` (cycle) | `[]` | — |
| Kahn | no vertex with in-degree 0 | — | **false** |

For DAG `0→1`, in-degrees `[0,1]` → process `0`, then `1` → **true**.

**API:** `canFinish(numCourses, prerequisites)` (see [course-schedule](items/graphs/course-schedule.md)).

`npm run demo -- course-schedule`

## Word search (grid backtracking)

**Board:**

```
A B C E
S F C S
A D E E
```

**Word:** `ABCCED`

| Step | Cell | Action |
|------|------|--------|
| 1 | (0,0) `A` | match, mark visited |
| 2 | (0,1) `B` | match |
| 3 | (0,2) `C` | match |
| 4 | (1,2) `C` | match |
| 5 | (2,2) `E` | match |
| 6 | (2,3) `D` | match → **found** |

Backtrack unmarks on failure; `ABCD` dies at `(0,3)` → **false**.

**API:** `wordSearch(board, word)` (see [word-search](items/graphs/word-search.md)).

`npm run demo -- word-search`

## Network delay time

**Graph:** `n = 4`, source **1**, edges `(1→0, w=1)`, `(1→2, w=1)`, `(2→3, w=1)`.

| Node | Shortest time from 1 |
|------|----------------------|
| 0 | 1 |
| 1 | 0 |
| 2 | 1 |
| 3 | 2 |

Answer: max distance **2** (all nodes reached). Unreachable node → **-1**.

**API:** `networkDelay(n, times, source)` (see [network-delay](items/graphs/network-delay.md)).

`npm run demo -- network-delay`

## Kruskal MST (union–find)

**Undirected weighted edges:** `(0–1,1)`, `(1–2,2)`, `(2–3,3)`, `(0–3,4)`.

Sort by weight, greedily add if endpoints not yet connected:

| Edge | Weight | Union? | Running weight |
|------|--------|--------|----------------|
| 0–1 | 1 | yes | 1 |
| 1–2 | 2 | yes | 3 |
| 2–3 | 3 | yes | **6** |
| 0–3 | 4 | skip (0 and 3 already connected) | 6 |

**API:** `totalWeight(graph)` / `mst(graph)` (see [kruskal-mst](items/graphs/kruskal-mst.md)).

`npm run demo -- kruskal-mst`

## Level order traversal (heap array)

**Level array:** `[3, 9, 20, null, null, 15, 7]` (`null` = missing child).

| Level | Values (left → right) |
|-------|------------------------|
| 0 | 3 |
| 1 | 9, 20 |
| 2 | 15, 7 |

BFS with level boundaries; empty or `values[0] == null` → `[]`.

**API:** `levelOrder(values)` (see [level-order-traversal](items/trees/level-order-traversal.md)).

`npm run demo -- level-order-traversal`

## Serialize binary tree (level-order codec)

**Input values:** `[1, 2, 3, null, null, 4, 5]`

| Phase | Result |
|-------|--------|
| Serialize | `"1,2,3,#,#,4,5"` (`#` = null, trim trailing `#`) |
| Deserialize + level-order | `[1, 2, 3, null, null, 4, 5]` |

Round-trip restores the same heap-style level array.

**API:** `serialize(values)`, `deserialize(data)` (see [serialize-binary-tree](items/trees/serialize-binary-tree.md)).

`npm run demo -- serialize-binary-tree`

## Quick select (k-th order statistic)

**Array:** `[3, 1, 4, 1, 5]`, **k = 2** (1-based smallest rank).

Partition around pivot until rank 2 lands:

| Pivot pass | Partition around | k-th smallest |
|------------|------------------|---------------|
| … | … | **1** |

For **k-th largest** with `k = 2`, use rank `n - k + 1 = 4` → **4** (second largest).

**API:** `kthSmallest(arr, k)` (see [quick-select](items/searching/quick-select.md)).

`npm run demo -- quick-select`

## DFS discovery times

**Graph:** 4 vertices, edges `0–1`, `0–2`, `1–3`, source **0** (undirected).

| Vertex | Discovery time | Finish time |
|--------|--------------|-------------|
| 0 | 0 | 7 |
| 1 | 1 | 4 |
| 3 | 2 | 3 |
| 2 | 5 | 6 |

Tree edges explore deeper before backtracking; matches `DFS.traverseRecursive` stamps.

**API:** `traverseRecursive(graph, source)` (see [dfs](items/graphs/dfs.md)).

`npm run demo -- dfs`

## Longest increasing subsequence

**Array:** `[10, 9, 2, 5, 3, 7, 101, 18]`

Patience-sorting **tails** table (length of LIS ending with ≤ tail):

| i | x | tails after |
|---|----|-------------|
| … | … | … |
| end | — | length **4** (e.g. `2, 3, 7, 18`) |

**API:** `length(arr)` (see [lis](items/dp/lis.md)).

`npm run demo -- lis`

## BST search and in-order walk

Insert keys **5, 2, 7, 1** (values arbitrary):

```
    5
   / \
  2   7
 /
1
```

In-order keys: **`[1, 2, 5, 7]`**; search **2** hits the left child of 5.

**API:** `insert(key, value)`, `search(key)`, `inOrder()` (see [bst](items/trees/bst.md)).

`npm run demo -- bst`

## Topic index

One-line walkthroughs for every catalog topic. Step tables above cover interview-heavy patterns (search, graphs, DP, caches, strings, and practice-problem staples).

### linear-search

Scan `[4, 2, 7, 2]` for `2`: index **1** (first occurrence). For `9` → **-1**.

`npm run demo -- linear-search`

### binary-search

See the [detailed walkthrough](#binary-search-on-a-sorted-array) above.

`npm run demo -- binary-search`

### quick-select

See the [detailed walkthrough](#quick-select-k-th-order-statistic) above.

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

See the [detailed walkthrough](#merge-sort-top-down) above.

`npm run demo -- merge-sort`

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

See the [detailed walkthrough](#kmp-pattern-search) above.

`npm run demo -- kmp`

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

See the [detailed walkthrough](#bst-search-and-in-order-walk) above.

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

### segment-tree

Range aggregate queries with point updates on an array.

`npm run demo -- segment-tree`

### fenwick-tree

Prefix sums and range sums with point updates.

`npm run demo -- fenwick-tree`

### z-algorithm

Linear-time Z-array and pattern search.

`npm run demo -- z-algorithm`

### rabin-karp

Substring search via rolling hash.

`npm run demo -- rabin-karp`

### lis

See the [detailed walkthrough](#longest-increasing-subsequence) above.

`npm run demo -- lis`

### lcs

See the [detailed walkthrough](#longest-common-subsequence) above.

`npm run demo -- lcs`

### knapsack

See the [detailed walkthrough](#knapsack-01-classic) above.

`npm run demo -- knapsack`

### edit-distance

See the [detailed walkthrough](#edit-distance-kitten-to-sitting) above.

`npm run demo -- edit-distance`

### coin-change

See the [detailed walkthrough](#coin-change-min-coins) above.

`npm run demo -- coin-change`

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

See the [detailed walkthrough](#union-find-connectivity) above.

`npm run demo -- union-find`

### graph

Adjacency-list directed/undirected weighted graph representation.

`npm run demo -- graph`

### bfs

See the [detailed walkthrough](#bfs-unweighted-shortest-paths) above.

`npm run demo -- bfs`

### dfs

See the [detailed walkthrough](#dfs-discovery-times) above.

`npm run demo -- dfs`

### topological-sort

See the [detailed walkthrough](#topological-sort-kahn-course-schedule) above.

`npm run demo -- topological-sort`

### dijkstra

See the [detailed walkthrough](#dijkstra-non-negative-weights) above.

`npm run demo -- dijkstra`

### bellman-ford

Single-source shortest paths with negative edges; detect negative cycles.

`npm run demo -- bellman-ford`

### floyd-warshall

All-pairs shortest paths via dynamic programming.

`npm run demo -- floyd-warshall`

### kruskal-mst

See the [detailed walkthrough](#kruskal-mst-unionfind) above.

`npm run demo -- kruskal-mst`

### prim-mst

Minimum spanning tree growing from a start vertex.

`npm run demo -- prim-mst`

### boruvka-mst

Minimum spanning tree via repeated cheapest outgoing edge per component.

`npm run demo -- boruvka-mst`

### a-star

Shortest path length with nonnegative weights (heuristic h=0).

`npm run demo -- a-star`

### tarjan-scc

Strongly connected components in a directed graph.

`npm run demo -- tarjan-scc`

### kosaraju

Strongly connected components via two-pass DFS.

`npm run demo -- kosaraju`

### bipartite-check

Test whether an undirected graph is 2-colorable.

`npm run demo -- bipartite-check`

### articulation-bridges

Articulation points and bridges in an undirected graph.

`npm run demo -- articulation-bridges`

### edmonds-karp

Maximum s-t flow in a capacitated network.

`npm run demo -- edmonds-karp`

### hungarian

Minimum-cost assignment on a square cost matrix.

`npm run demo -- hungarian`

### red-black-tree

Balanced BST with red-black invariants.

`npm run demo -- red-black-tree`

### lca-binary-lifting

Lowest common ancestor on a rooted tree.

`npm run demo -- lca-binary-lifting`

### treap

Randomized BST via heap priorities on keys.

`npm run demo -- treap`

### sparse-table

Static range minimum queries on an array.

`npm run demo -- sparse-table`

### manacher

Longest palindromic substring length.

`npm run demo -- manacher`

### suffix-array

Lexicographically sorted suffix starting indices.

`npm run demo -- suffix-array`

### aho-corasick

Find all occurrences of multiple patterns in text.

`npm run demo -- aho-corasick`

### matrix-chain

Minimum scalar multiplications for a matrix product chain.

`npm run demo -- matrix-chain`

### longest-palindromic-subsequence

Longest palindromic subsequence length.

`npm run demo -- longest-palindromic-subsequence`

### partition-equal-subset

Partition array into two equal-sum subsets.

`npm run demo -- partition-equal-subset`

### rod-cutting

Maximum revenue cutting a rod of given length.

`npm run demo -- rod-cutting`

### tsp-bitmask

Minimum Hamiltonian cycle from city 0 (small n).

`npm run demo -- tsp-bitmask`

### reservoir-sampling

Uniform random sample of size k from a stream.

`npm run demo -- reservoir-sampling`

### sliding-window-maximum

See the [detailed walkthrough](#sliding-window-maximum) above.

`npm run demo -- sliding-window-maximum`

### lru-cache

See the [detailed walkthrough](#lru-cache-capacity-2) above.

`npm run demo -- lru-cache`

## Try it locally

Run the demo runner (all three languages by default):

```bash
npm run demo -- binary-search
npm run demo -- merge-sort
npm run demo -- kmp
npm run demo -- dijkstra
npm run demo -- knapsack
```

Optional language filter: `npm run demo -- kmp python`.

See also [`docs/running-ci-locally.md`](running-ci-locally.md) and [`AGENTS.md`](../AGENTS.md) for full verification commands.

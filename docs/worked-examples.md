# Worked examples

Short, language-neutral walkthroughs for sixty-one interview-heavy topics. Implementations live under `java/`, `python/dsa/`, and `javascript/src/` with the same behavior. For a broader interview map, see [interview-prep.md](interview-prep.md). Trilingual **catalog tests** mirror the step-table scenarios above (`WorkedInterviewExamplesTest`, `test_worked_interview_examples.py`, `workedInterviewExamples.test.js`).

## Binary search on a sorted array

**Complexity:** search/firstOccurrence/lastOccurrence: Time O(log n); Space O(1).

**Goal:** Find index of key `7` in `[1, 3, 5, 7, 9, 11]`.

| Step | `lo` | `hi` | `mid` | `arr[mid]` | Action |
|------|------|------|-------|------------|--------|
| 1 | 0 | 5 | 2 | 5 | `5 < 7` → search right half (`lo = 3`) |
| 2 | 3 | 5 | 4 | 11 | `11 > 7` → search left half (`hi = 3`) |
| 3 | 3 | 3 | 3 | 7 | Match → return index **3** |

If the key were `8`, step 2 would set `lo = 5`, step 3 would have `lo > hi` → return **-1**.

**API:** `search(sortedArray, key)` in each language (see [binary-search](items/searching/binary-search.md)).

## Merge sort (top-down)

**Complexity:** sort/sortBottomUp: Time O(n log n); Space O(n).

**Input:** `[38, 27, 43, 3]`

1. Split: `[38, 27]` and `[43, 3]`
2. Split leaves: `[38]`, `[27]`, `[43]`, `[3]`
3. Merge pairs: `[27, 38]`, `[3, 43]`
4. Merge halves: `[3, 27, 38, 43]`

Merge of `[27, 38]` with `[3, 43]` compares fronts (`3` vs `27`, take `3`; …) producing the sorted four-element array.

**API:** `sort(array)` returns a new sorted array (Python/JS) or sorts in place depending on algorithm module; merge sort returns a copy in all three ports.

## KMP pattern search

**Complexity:** search: Time O(n + m); Space O(m).

**Text:** `ababcababa`  
**Pattern:** `aba`

Build LPS for `aba` → `[0, 0, 1]` (longest proper prefix that is also suffix).

Scan highlights:

- Match `aba` at index 0, then continue; mismatch after partial `ab` uses LPS to shift pattern without moving text index backward.
- Next full match at index **5** (substring `ababa` contains `aba` at offset 5).

**Empty pattern:** By convention in this repo, `search(text, "")` returns **0** (vacuous match), same as `str.find` / `String.indexOf`.

**API:** `search(text, pattern)` → first index or `-1` (see [kmp](items/strings/kmp.md)).

## Dijkstra (non-negative weights)

**Complexity:** shortestPaths: Time O(E log V); Space O(V).

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

**Complexity:** find/union/connected: Time O(α(n)) amortized; Space O(n).

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

**Complexity:** get/put: Time O(1); Space O(capacity).

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

**Complexity:** sort: Time O(V+E); Space O(V).

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

**Complexity:** maxSlidingWindow: Time O(n); Space O(k).

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

**Complexity:** distances/traverse: Time O(V+E); Space O(V).

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

**Complexity:** distance: Time O(nm); Space O(min(n,m)).

**Strings:** `kitten` → `sitting` (Levenshtein). Classic answer: **3** edits (replace `k→s`, insert `g`, replace `e→i` — other optimal sequences exist).

DP sketch (rows/cols = prefixes): fill table where cell = min of delete/insert/replace neighbors; bottom-right cell = **3**.

**API:** `distance(a, b)` (see [edit-distance](items/dp/edit-distance.md)).

`npm run demo -- edit-distance`

## Knapsack (0/1 classic)

**Complexity:** maxValue: Time O(n·W); Space O(W).

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

**Complexity:** length: Time O(nm); Space O(min(n,m)).

**Strings:** `abcde` and `ace`.

Longest subsequence appearing in both in order: **`ace`** (length **3**). Classic 2D DP fills prefix table; bottom-right cell is the answer.

**API:** `length(a, b)` (see [lcs](items/dp/lcs.md)).

`npm run demo -- lcs`

## Two Sum II (sorted pair)

**Complexity:** twoSumSorted: Time O(n); Space O(1).

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

**Complexity:** maxSubarray: Time O(n); Space O(1).

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

**Complexity:** isValidParentheses: Time O(n); Space O(n).

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

**Complexity:** minMeetingRooms: Time O(n log n); Space O(n).

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

**Complexity:** numIslands: Time O(rows·cols); Space O(rows·cols).

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

**Complexity:** topKFrequent: Time O(n log k); Space O(n).

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

**Complexity:** lengthOfLongestSubstring: Time O(n); Space O(min(n, alphabet)).

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

**Complexity:** mergeIntervals: Time O(n log n); Space O(n).

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

**Complexity:** minCoins: Time O(n·amount); Space O(amount).

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

**Complexity:** trap: Time O(n); Space O(1).

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

**Complexity:** canFinish: Time O(V+E); Space O(V).

**Input:** `numCourses = 2`, prerequisites `[[1,0],[0,1]]` (0 must come before 1 **and** 1 before 0).

| Step | In-degree after build | Queue (zero in-degree) | Can finish all? |
|------|----------------------|------------------------|-----------------|
| init | `[0, 0]` (cycle) | `[]` | — |
| Kahn | no vertex with in-degree 0 | — | **false** |

For DAG `0→1`, in-degrees `[0,1]` → process `0`, then `1` → **true**.

**API:** `canFinish(numCourses, prerequisites)` (see [course-schedule](items/graphs/course-schedule.md)).

`npm run demo -- course-schedule`

## Word search (grid backtracking)

**Complexity:** wordSearch: Time O(rows·cols·4^L); Space O(L).

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

**Complexity:** networkDelay: Time O((V+E) log V); Space O(V).

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

**Complexity:** mstWeight: Time O(E log E); Space O(V).

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

## Prim MST (greedy grow)

**Complexity:** mstWeight: Time O(E log V); Space O(V).

Same undirected graph as [Kruskal](#kruskal-mst-union-find): edges `(0–1,1)`, `(1–2,2)`, `(2–3,3)`, `(0–3,4)`. Grow the tree from vertex **0** with a **min-priority queue** of `(weight, neighbor)` frontier edges:

| Step | Tree vertices | Pop edge | Add to MST | Total weight |
|------|---------------|----------|------------|--------------|
| start | `{0}` | — | — | 0 |
| 1 | `{0,1}` | 0–1 (1) | yes | **1** |
| 2 | `{0,1,2}` | 1–2 (2) | yes | **3** |
| 3 | `{0,1,2,3}` | 2–3 (3) | yes | **6** |

Edge 0–3 (weight 4) enters the frontier but is never chosen because 3 is already connected. **MST weight = 6** (matches shared `mst-goldens.json` `primWeight`).

**API:** `totalWeight(graph)` (see [prim-mst](items/graphs/prim-mst.md)).

`npm run demo -- prim-mst`

## Level order traversal (heap array)

**Complexity:** levelOrder: Time O(n); Space O(n).

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

**Complexity:** serialize/deserialize: Time O(n); Space O(n).

**Input values:** `[1, 2, 3, null, null, 4, 5]`

| Phase | Result |
|-------|--------|
| Serialize | `"1,2,3,#,#,4,5"` (`#` = null, trim trailing `#`) |
| Deserialize + level-order | `[1, 2, 3, null, null, 4, 5]` |

Round-trip restores the same heap-style level array.

**API:** `serialize(values)`, `deserialize(data)` (see [serialize-binary-tree](items/trees/serialize-binary-tree.md)).

`npm run demo -- serialize-binary-tree`

## Quick select (k-th order statistic)

**Complexity:** select: Time O(n) average, O(n²) worst; Space O(1).

**Array:** `[3, 1, 4, 1, 5]`, **k = 2** (1-based smallest rank).

Partition around pivot until rank 2 lands:

| Pivot pass | Partition around | k-th smallest |
|------------|------------------|---------------|
| … | … | **1** |

For **k-th largest** with `k = 2`, use rank `n - k + 1 = 4` → **4** (second largest).

**API:** `kthSmallest(arr, k)` (see [quick-select](items/searching/quick-select.md)).

`npm run demo -- quick-select`

## DFS discovery times

**Complexity:** traverse/hasCycle: Time O(V+E); Space O(V).

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

**Complexity:** length: Time O(n log n); Space O(n).

**Array:** `[10, 9, 2, 5, 3, 7, 101, 18]`

Patience-sorting **tails** table (length of LIS ending with ≤ tail):

| i | x | tails after |
|---|----|-------------|
| … | … | … |
| end | — | length **4** (e.g. `2, 3, 7, 18`) |

**API:** `length(arr)` (see [lis](items/dp/lis.md)).

`npm run demo -- lis`

## BST search and in-order walk

**Complexity:** search/insert/delete: Time O(h) height; Space O(n).

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

## Binary min-heap (insert and extract)

**Complexity:** insert/extract/peek: Time O(log n); buildHeap O(n); Space O(n).

**Operations:** start empty, **insert** `5, 2, 8, 1, 2` (duplicates allowed), then repeatedly **extractMin**.

After inserts, the array heap satisfies **parent ≤ children** (min-heap). Extract always removes index `0`, moves the last leaf to the root, and **siftDown**:

| Extract # | Removed | Remaining extract order |
|-----------|---------|-------------------------|
| 1 | **1** | — |
| 2 | **2** | (second `2` may appear before or after the first depending on tie-breaking) |
| 3 | **2** | |
| 4 | **5** | |
| 5 | **8** | done |

Full sorted extract sequence: **`[1, 2, 2, 5, 8]`** (matches shared goldens).

**Heapify** on `[9, 4, 7, 1, 3]` in one **O(n)** pass leaves **peek = 1** and **extractMin = 1**. Empty heap: **peek/extract** throw (invalid operation).

**API:** `insert`, `extractMin`, `peek`, `heapify` (see [binary-heap](items/heaps/binary-heap.md)).

`npm run demo -- binary-heap`

## Priority queue (min scheduling)

**Complexity:** insert/extractMin/peek: Time O(log n); Space O(n).

Same underlying min-heap as [binary-heap](#binary-min-heap-insert-and-extract), framed as **tasks ordered by priority** (the priority is the stored value).

**Insert** priorities `5, 3, 7, 1, 3`, then drain with **extractMin**:

| Step | extractMin | Interpretation |
|------|------------|----------------|
| 1 | **1** | highest-priority (smallest) task runs first |
| 2 | **3** | next task |
| 3 | **3** | duplicate priority OK |
| 4 | **5** | |
| 5 | **7** | queue empty |

Order: **`[1, 3, 3, 5, 7]`**. Used by Dijkstra, Prim, and meeting-room schedulers in this repo.

**API:** `insert`, `peek`, `extractMin`, `decreaseKey` (see [priority-queue](items/heaps/priority-queue.md)).

`npm run demo -- priority-queue`

## Heapsort (in-place)

**Complexity:** sort: Time O(n log n); Space O(1).

**Input:** `[5, 2, 8, 1, 2]` (sorted copy returned by practice code).

Heapsort builds a **max-heap** on the active prefix, then repeatedly swaps the root with the last unsorted position and **siftDown** on the shrinking heap:

| Phase | Idea | Result on this input |
|-------|------|----------------------|
| Heapify | Max-heap on full array | largest `8` at root |
| Extract rounds | Swap root ↔ tail, heapify prefix | tail fills from the right: `…, 8`, then `…, 5, 8`, … |
| Done | Prefix empty | sorted **`[1, 2, 2, 5, 8]`** |

Empty input → `[]`; single element → unchanged. Same sorted outputs as [merge sort](#merge-sort-top-down) on these keys, but **O(1)** extra space aside from the copy.

**API:** `sort(arr)` in place (see [heapsort](items/sorting/heapsort.md)).

`npm run demo -- heapsort`

## Trie (prefix search)

**Complexity:** insert/search/startsWith: Time O(L) key length; Space O(total chars).

**Insert** words `cat`, `car`, `dog` (character edges from the root).

| Query | Type | Result | Why |
|-------|------|--------|-----|
| `cat` | `search` | **true** | full key ends at a word node |
| `ca` | `search` | **false** | prefix exists but not a complete word |
| `ca` | `startsWith` | **true** | `cat` / `car` share prefix |
| `cab` | `search` | **false** | no such path |
| `do` | `startsWith` | **true** | leads to `dog` |
| `z` | `startsWith` | **false** | missing branch |

Empty trie: every query is **false**. Single key `"a"`: both `search("a")` and `startsWith("a")` are **true**.

**API:** `insert(word)`, `search(word)`, `startsWith(prefix)` (see [trie](items/trees/trie.md)).

`npm run demo -- trie`

## Backtracking (choose, explore, undo)

**Template** for search problems (grid paths, subsets, permutations):

1. **Choose** — pick a next decision (cell, element, …).
2. **Explore** — recurse if constraints still satisfied.
3. **Undo** — revert the choice (unmark visited, pop from path) before trying alternatives.

**Word search** on the standard board (`ABCCED` walkthrough above) is one instance: at each step, choose a 4-neighbor matching the next character; on dead ends, undo the visited mark.

| Check | Word | Expected |
|-------|------|----------|
| Full path | `ABCCED` | **true** |
| Dead end at `(0,3)` | `ABCD` | **false** |
| Single cell | `A` on `[["A"]]` | **true** |
| Empty word | `""` | **true** (vacuous) |
| No matching path | `ABCG` | **false** |

**API:** `wordSearch(board, word)` (see [word-search](items/graphs/word-search.md)); tree/graph DFS uses the same undo discipline (see [dfs](items/graphs/dfs.md)).

`npm run demo -- word-search`

## Sliding window patterns (fixed and variable)

Two interview shapes share **two pointers** over a sequence:

| Pattern | Goal | Window size | Example in this repo |
|---------|------|-------------|----------------------|
| **Fixed** | aggregate per window of length `k` | constant `k` | [Sliding window maximum](#sliding-window-maximum) → `[3,3,5,5,6,7]` for `k=3` |
| **Variable** | optimize subarray/substring with a constraint | grows/shrinks | [Longest substring without repeating](#longest-substring-without-repeating) → **3** for `"pwwkew"` |

**Fixed-window edges:** `k = 1` on `[1,2]` → `[1,2]`; `k > n` → `[]`; empty `nums` → `[]`.

**Variable-window edges:** `""` → length **0**; `"bbbbb"` → **1**; shrink left pointer when a duplicate would enter the set/map.

**API:** `maxSlidingWindow(nums, k)` ([sliding-window-maximum](items/linear/sliding-window-maximum.md)); `lengthOfLongestSubstring(s)` ([longest-substring-without-repeating](items/strings/longest-substring-without-repeating.md)).

`npm run demo -- sliding-window-maximum`

## Queue (FIFO enqueue and dequeue)

**Complexity:** enqueue/dequeue: Time O(1) amortized; Space O(n).

**Operations:** start empty, **enqueue** `1, 2, 3`, **dequeue** twice, then **peek** the front.

| Step | Queue (front → back) | Action |
|------|----------------------|--------|
| enqueue 1,2,3 | `1, 2, 3` | back insertions |
| dequeue | `2, 3` | remove **1** |
| dequeue | `3` | remove **2** |
| peek | `3` | front is **3** |

Empty queue: **dequeue/peek** throw. Matches shared `queue-goldens.json`.

**API:** `enqueue`, `dequeue`, `peek` (see [queue](items/linear/queue.md)).

`npm run demo -- queue`

## Deque (two-ended operations)

**Complexity:** pushFront/pushBack/pop: Time O(1) amortized; Space O(n).

**Operations:** **addLast** `1, 2`, **addFirst** `0`, **removeFirst** → `0`, **removeLast** → `2`, one element **`1`** remains.

| Step | Deque (front → back) |
|------|----------------------|
| addLast 1,2 | `1, 2` |
| addFirst 0 | `0, 1, 2` |
| removeFirst | `1, 2` |
| removeLast | `1` |

Empty deque: **removeFirst/removeLast** throw. Matches shared `deque-goldens.json`.

**API:** `addFirst`, `addLast`, `removeFirst`, `removeLast` (see [deque](items/linear/deque.md)).

`npm run demo -- deque`

## Counting sort (non-negative keys)

**Complexity:** sort/sortByDigit: Time O(n + k); Space O(k).

**Input:** `[4, 2, 0, 2, 1, 3, 2, 2]` — keys must be **non-negative**.

Count occurrences, prefix-sum the buckets, then place keys stably:

| Key | Count | After stable placement |
|-----|-------|------------------------|
| 0 | 1 | one `0` |
| 1 | 1 | one `1` |
| 2 | 4 | four `2`s |
| 3 | 1 | one `3` |
| 4 | 1 | one `4` |

**Output:** `[0, 1, 2, 2, 2, 2, 3, 4]`. Time **O(n + k)** for max key `k`.

**API:** `sort(arr)` in place (see [counting-sort](items/sorting/counting-sort.md)).

`npm run demo -- counting-sort`

## Radix sort (LSD by digit)

**Complexity:** sort: Time O(d * n); Space O(n).

**Input:** `[170, 45, 75, 90, 802, 24, 2, 66]` (non-negative integers).

LSD passes use stable **counting sort by digit** (ones, then tens, …):

| Pass | Ordering idea | After pass |
|------|---------------|------------|
| 1s digit | bucket by last digit | `2, 24, 45, 66, 75, 90, 170, 802` |
| 10s digit | bucket by tens | … |
| 100s digit | bucket by hundreds | **`[2, 24, 45, 66, 75, 90, 170, 802]`** |

**API:** `sort(arr)` in place (see [radix-sort](items/sorting/radix-sort.md)).

`npm run demo -- radix-sort`

## Rabin-Karp (rolling hash)

**Complexity:** search: Time O(n + m) average; Space O(1).

**Text:** `"ababcababa"`, **pattern:** `"aba"` (same shape as [KMP](#kmp-pattern-search)).

Rolling hash compares pattern hash to each length-`m` window; confirm with character checks on collisions:

| Window start | Match? |
|--------------|--------|
| 0 | **yes** → return **0** |
| 1 | no |
| 2 | yes (but first match already found) |

**API:** `search(text, pattern)` → first index or **-1** (see [rabin-karp](items/strings/rabin-karp.md)).

`npm run demo -- rabin-karp`

## Bellman-Ford (negative edges)

**Complexity:** shortestPaths: Time O(VE); Space O(V).

**Directed graph:** `0 → 1` weight **1**, `1 → 2` weight **-2**, source **0**.

Relax all edges up to `n-1` rounds:

| Round | dist[0] | dist[1] | dist[2] |
|-------|---------|---------|---------|
| init | 0 | ∞ | ∞ |
| after relax | 0 | 1 | -1 |

**Distances:** `[0, 1, -1]`. No negative cycle on this instance.

If edges form a **negative cycle** reachable from the source (e.g. `0→1→2→0` with net negative weight), **`hasNegativeCycle`** is **true** and distances are undefined.

**API:** `shortestPaths(graph, source)` (see [bellman-ford](items/graphs/bellman-ford.md)).

`npm run demo -- bellman-ford`

## Segment tree (range sum)

**Complexity:** update/rangeSum: Time O(log n); Space O(n).

**Initial array:** `[1, 3, 5, 7]`.

| Query / update | Range / index | Result |
|----------------|---------------|--------|
| range sum | `[0, 2]` | **9** (`1+3+5`) |
| point update | index **1** → **10** | array becomes `[1,10,5,7]` |
| range sum | `[0, 1]` | **11** (`1+10`) |

Build **O(n)**, query/update **O(log n)**. Matches shared `segment-tree-goldens.json`.

**API:** `rangeSum(left, right)`, `update(index, value)` (see [segment-tree](items/trees/segment-tree.md)).

`npm run demo -- segment-tree`

## Floyd-Warshall (all-pairs shortest paths)

**Complexity:** allPairs: Time O(V³); Space O(V²).

**Directed weighted graph:** `0→1 (1)`, `1→2 (2)`, `0→2 (10)`.

DP table `dist[i][j]` after relaxation:

| Pair | Shortest distance |
|------|-------------------|
| 0 → 0 | **0** |
| 0 → 1 | **1** |
| 0 → 2 | **3** (via 1, not direct 10) |
| 1 → 2 | **2** |

**O(V³)** all-pairs table; matches `floyd-warshall-goldens.json` `pairs`.

**API:** `allPairsShortestPaths(graph)` (see [floyd-warshall](items/graphs/floyd-warshall.md)).

`npm run demo -- floyd-warshall`

## Fenwick tree (prefix sums)

**Complexity:** add/prefixSum/rangeSum: Time O(log n); Space O(n).

**Size `n = 5`**, point adds: index **1** +3, index **3** +2.

| Query | Result |
|-------|--------|
| prefix through index **3** | **5** (`3+2`) |
| range sum **[1, 3]** | **5** |

**O(log n)** add and prefix/range sum. Matches `fenwick-tree-goldens.json`.

**API:** `add(index, delta)`, `prefixSum(index)`, `rangeSum(left, right)` (see [fenwick-tree](items/trees/fenwick-tree.md)).

`npm run demo -- fenwick-tree`

## Graph (adjacency list)

**Complexity:** addEdge/neighbors: Time O(1) amortized; Space O(V+E).

**4 vertices**, directed weighted edges `(0→1,2)`, `(1→2,3)`, `(0→3,1)`.

| Vertex | Out-neighbors (to) | Out-degree |
|--------|-------------------|------------|
| 0 | 1, 3 | **2** |
| 1 | 2 | 1 |
| 2 | — | **0** |

**API:** `vertices()`, `neighbors(v)` (see [graph](items/graphs/graph.md)).

`npm run demo -- graph`

## Bipartite check (2-coloring)

**Complexity:** isBipartite: Time O(V+E); Space O(V).

**Undirected 4-cycle** `0—1—2—3—0`: alternate colors succeed → **bipartite**.

**Triangle** on three vertices with all edges: odd cycle → **not bipartite**.

**API:** `isBipartite(graph)` (see [bipartite-check](items/graphs/bipartite-check.md)).

`npm run demo -- bipartite-check`

## Tarjan SCC (strongly connected components)

**Complexity:** stronglyConnectedComponents: Time O(V+E); Space O(V).

**Directed cycle** `0→1→2→0`: one SCC of size **3**.

Two isolated vertices with no edges → **two** SCCs of size **1** each.

**API:** `stronglyConnectedComponents(graph)` (see [tarjan-scc](items/graphs/tarjan-scc.md)).

`npm run demo -- tarjan-scc`

## Kosaraju SCC (strongly connected components)

**Complexity:** stronglyConnectedComponents: Time O(V+E); Space O(V).

Same 3-cycle as [Tarjan](#tarjan-scc-strongly-connected-components): **one** component of size **3**; empty edges on two vertices → sizes **`[1, 1]`**.

Two-pass DFS + reverse graph. Matches `kosaraju-goldens.json`.

**API:** `stronglyConnectedComponents(graph)` (see [kosaraju](items/graphs/kosaraju.md)).

`npm run demo -- kosaraju`

## Edmonds-Karp (max flow)

**Complexity:** maxFlow: Time O(VE²); Space O(V²).

**Flow network** (source **0**, sink **3**) from shared goldens: augmenting BFS paths until no residual capacity.

**Max flow value: 5** (matches `edmonds-karp-goldens.json`).

**API:** `maxFlow(n, edges, source, sink)` (see [edmonds-karp](items/graphs/edmonds-karp.md)).

`npm run demo -- edmonds-karp`

## Matrix chain (min scalar multiplications)

**Complexity:** minMultiplications: Time O(n³); Space O(n²).

**Dimensions:** `[10, 30, 5, 60]` (three matrices **10×30**, **30×5**, **5×60**).

Parenthesize to minimize scalar multiplications:

| Split | Cost intuition |
|-------|----------------|
| Optimal grouping | **4500** total multiplications |

Empty dimension list or single dimension → **0**. Matches `matrix-chain-goldens.json`.

**API:** `minMultiplications(dimensions)` (see [matrix-chain](items/dp/matrix-chain.md)).

`npm run demo -- matrix-chain`

## Rod cutting (max revenue)

**Complexity:** maxProfit: Time O(n·length); Space O(length).

**Prices** for lengths `1..8`: `[1,5,8,9,10,17,17,20]`, cut rod length **4**.

Unbounded knapsack-style DP over length → best revenue **10** (matches goldens).

Invalid negative length → error.

**API:** `maxProfit(prices, length)` (see [rod-cutting](items/dp/rod-cutting.md)).

`npm run demo -- rod-cutting`

## Partition equal subset (0/1 knapsack)

**Complexity:** canPartition: Time O(n·sum); Space O(sum).

**Nums:** `[1, 5, 11, 5]` — total **22**, target half **11** → subset `{11}` vs `{1,5,5}` → **true**.

`[1,2,3,5]` → total 11 (odd) → **false**. Empty array → **true**.

**API:** `canPartition(nums)` (see [partition-equal-subset](items/dp/partition-equal-subset.md)).

`npm run demo -- partition-equal-subset`

## Longest palindromic subsequence (length)

**Complexity:** length: Time O(n²); Space O(n²).

**String:** `"bbbab"` — longest palindromic **subsequence** (not substring) has length **4** (e.g. `"bbbb"`).

`"cbbd"` → **2**; empty → **0**.

**API:** `length(s)` (see [longest-palindromic-subsequence](items/dp/longest-palindromic-subsequence.md)).

`npm run demo -- longest-palindromic-subsequence`

## Dynamic array (append and get)

**Complexity:** append/get/set: Time O(1) amortized; resize O(n); Space O(n).

**Append** `10, 20, 30` → **size 3**; **get(0)=10**, **get(2)=30**.

Empty append → size **0**. Matches `dynamic-array-goldens.json`.

**API:** `add(value)`, `get(index)`, `size()` (see [dynamic-array](items/linear/dynamic-array.md)).

`npm run demo -- dynamic-array`

## Linear search (first match index)

**Complexity:** search: Time O(n); Space O(1).

Scan left-to-right for **first** index of `target`:

| Array | Target | Result |
|-------|--------|--------|
| `[1,2,2,3]` | `2` | **1** (first `2`) |
| `[4,5,6]` | `1` | **-1** |
| `[]` | `1` | **-1** |

**API:** `indexOf(arr, key)` (see [linear-search](items/searching/linear-search.md)).

`npm run demo -- linear-search`

## Bubble sort (in-place ascending)

**Complexity:** sort: Time O(n²); Space O(1).

**Input:** `[5, 2, 8, 1, 2]` → sorted copy **`[1, 2, 2, 5, 8]`** after adjacent swaps (matches `bubble-sort-goldens.json`).

**API:** `sort(arr)` in place on a copy (see [bubble-sort](items/sorting/bubble-sort.md)).

`npm run demo -- bubble-sort`

## Insertion sort (sorted copy)

**Complexity:** sort: Time O(n²) worst, O(n) best; Space O(1).

**Input:** `[5, 2, 8, 1, 2]` → sorted copy **`[1, 2, 2, 5, 8]`** (matches `insertion-sort-goldens.json`).

**API:** `sort(arr)` on a copy (see [insertion-sort](items/sorting/insertion-sort.md)).

`npm run demo -- insertion-sort`

## Selection sort (sorted copy)

**Complexity:** sort: Time O(n²); Space O(1).

**Input:** `[5, 2, 8, 1, 2]` → sorted copy **`[1, 2, 2, 5, 8]`** (matches `selection-sort-goldens.json`).

**API:** `sort(arr)` on a copy (see [selection-sort](items/sorting/selection-sort.md)).

`npm run demo -- selection-sort`

## Monotonic stack

**Complexity:** nextGreaterElement: Time O(n); Space O(n).

**Input:** `nums = [2, 1, 2, 4, 3]` → next greater to the right **`[4, 2, 4, -1, -1]`** (see `monotonic-stack-goldens.json`).

**API:** `nextGreaterElements(nums)` (see [monotonic-stack](items/linear/monotonic-stack.md)).

`npm run demo -- monotonic-stack`

## Quick sort

**Complexity:** sort/sort3Way: Time O(n log n) average; Space O(log n).

**Input:** `[3, 1, 2]` → sorted copy **`[1, 2, 3]`**; duplicate-heavy inputs use 3-way partition (see `quick-sort-goldens.json`).

**API:** `sort(arr)` / `sort3Way(arr)` on a copy (see [quick-sort](items/sorting/quick-sort.md)).

`npm run demo -- quick-sort`

## Z-algorithm (pattern search)

**Complexity:** zArray/search: Time O(n + m); Space O(n).

**Text:** `"aabaa"`, **pattern:** `"aa"` → first index **0**; Z-array **`[5, 1, 0, 2, 1]`** (see `z-algorithm-goldens.json`).

**API:** `search(text, pattern)` and `zArray(text)` (see [z-algorithm](items/strings/z-algorithm.md)).

`npm run demo -- z-algorithm`

## Manacher (longest palindrome length)

**Complexity:** longestPalindromeLength: Time O(n); Space O(n).

**Input:** `"babad"` → longest palindromic substring length **3** (`"bab"` or `"aba"`).

**API:** `longestPalindromeLength(s)` (see [manacher](items/strings/manacher.md)).

`npm run demo -- manacher`

## Aho-Corasick (multi-pattern hits)

**Complexity:** search: Time O(n+m+z); Space O(m).

**Text:** `"ushers"`, **patterns:** `he`, `she`, `his`, `hers` → hit start indices **`[1, 2]`** (matches `aho-corasick-goldens.json`).

**API:** `search(text, patterns)` → list of indices (see [aho-corasick](items/strings/aho-corasick.md)).

`npm run demo -- aho-corasick`

## AVL tree (insert and search)

**Complexity:** search/insert/delete: Time O(log n); Space O(n).

Insert `(5,"a")`, `(2,"b")`, `(7,"c")`, `(1,"d")`, overwrite `(2,"e")` → in-order keys **`[1, 2, 5, 7]`**, `search(2)` → **`"e"`** (see `avl-tree-goldens.json`).

**API:** `insert`, `inOrder`, `search` on `AVLTree` (see [avl-tree](items/trees/avl-tree.md)).

`npm run demo -- avl-tree`

## Red-black tree (insert and search)

**Complexity:** search/insert: Time O(log n); Space O(n).

Insert keys **1, 2, 5, 7** with paired values; all searches hit; **`search(9)`** → **null** (see `red-black-tree-goldens.json`).

**API:** `insert(key, value)`, `search(key)` (see [red-black-tree](items/trees/red-black-tree.md)).

`npm run demo -- red-black-tree`

## Singly linked list (add, get, remove)

**Complexity:** prepend/search: Time O(1)/O(n); Space O(n).

**Ops:** `addLast(2,3,4)` → `get(1)` = **3** → `remove(0)` returns **2** → size **2** (see `singly-linked-list-goldens.json`).

**API:** `addLast`, `get`, `remove`, `size` (see [singly-linked-list](items/linear/singly-linked-list.md)).

`npm run demo -- singly-linked-list`

## Doubly linked list (add first and last)

**Complexity:** prepend/append/remove: Time O(1) at known node; Space O(n).

**Ops:** `addLast(2,3,4)`, `addFirst(1)` → in-order index **2** is **3**; remove index **0** drops **1** (see `doubly-linked-list-goldens.json`).

**API:** `addFirst`, `addLast`, `get`, `remove` (see [doubly-linked-list](items/linear/doubly-linked-list.md)).

`npm run demo -- doubly-linked-list`

## Tree traversals (BST key orders)

**Complexity:** Each traversal: Time O(n); Space O(h) stack or O(w) queue.

Insert keys **5, 2, 7, 1** into a BST → **in-order** `[1,2,5,7]`, **pre-order** `[5,2,1,7]`, **post-order** `[1,2,7,5]` (`tree-traversals-goldens.json`).

**API:** recursive traversals on `BST` root (see [tree-traversals](items/trees/tree-traversals.md)).

`npm run demo -- tree-traversals`

## Separate chaining hash map

**Complexity:** put/get/remove: Time O(1) average; resize O(n); Space O(n).

**Ops:** `put("a",1)`, `put("b",2)`, `put("a",3)` → `get("a")` = **3**; missing key → **null** (`separate-chaining-goldens.json`).

**API:** `put`, `get` on `HashTableChaining` (see [separate-chaining](items/hashing/separate-chaining.md)).

`npm run demo -- separate-chaining`

## Open addressing hash map

**Complexity:** put/get/remove: Time O(1) average; Space O(n) slots.

**Ops:** `put(1,"one")`, `put(2,"two")`, update `put(1,"ONE")` → `get(1)` = **`"ONE"`**; `remove(2)` then `get(2)` = **null** (`open-addressing-goldens.json`, linear probing).

**API:** `put`, `get`, `remove` (see [open-addressing](items/hashing/open-addressing.md)).

`npm run demo -- open-addressing`

## Suffix array (sorted indices)

**Complexity:** build: Time O(n log n); Space O(n).

**Input:** `"banana"` → suffix array **`[5, 3, 1, 0, 4, 2]`** (lexicographic order of suffixes).

**API:** `build(s)` (see [suffix-array](items/strings/suffix-array.md)).

`npm run demo -- suffix-array`

## Treap (seeded insert and search)

**Complexity:** search/insert: Time O(log n); Space O(n).

**Seed 0**, inserts `(3,30)`, `(1,10)`, `(5,50)`, overwrite `(1,99)` → searches hit **30**, **99**, **50**; key **9** → **null** (`treap-goldens.json`).

**API:** `Treap(seed)`, `insert`, `search` (see [treap](items/trees/treap.md)).

`npm run demo -- treap`

## Order-statistic tree (rank and select)

**Complexity:** rank/select/insert/delete: Time O(log n); Space O(n).

Insert keys **1, 2, 5, 8, 9** → **`select(3) = 5`**, **`rank(5) = 3`** (`order-statistic-tree-goldens.json`).

**API:** augmented BST `select(k)`, `rank(key)` (see [order-statistic-tree](items/trees/order-statistic-tree.md)).

`npm run demo -- order-statistic-tree`

## Interval tree (overlap query)

**Complexity:** insert/query: Time O(log n + k) reported; Space O(n).

Intervals **`[15,20]`**, **`[10,12]`**, **`[1,5]`**; query point **`[11,11]`** → overlap **`[10,12]`** (`interval-tree-goldens.json`).

**API:** `insert`, `overlapSearch` (see [interval-tree](items/trees/interval-tree.md)).

`npm run demo -- interval-tree`

## B-tree (insert and search)

**Complexity:** search/insert/delete: Time O(log_t n); Space O(n).

**t = 2**, insert keys from goldens → **`search(6)`** true, **`search(15)`** false (`b-tree-goldens.json`).

**API:** `BTree(t)`, `insert`, `search` (see [b-tree](items/trees/b-tree.md)).

`npm run demo -- b-tree`

## Bloom filter (membership)

**Complexity:** add/mightContain: Time O(k); Space O(m) bits.

Add **`alpha`**, **`beta`**, **`gamma`** → **`mightContain("alpha")`** true, **`delta`** false (`bloom-filter-goldens.json`).

**API:** sized filter, `add`, `mightContain` (see [bloom-filter](items/hashing/bloom-filter.md)).

`npm run demo -- bloom-filter`

## Boruvka MST (total weight)

**Complexity:** mstWeight: Time O(E log V); Space O(V).

4-node chain plus shortcut edge → MST weight **6** (`boruvka-mst-goldens.json`).

**API:** `BoruvkaMST.totalWeight(graph)` (see [boruvka-mst](items/graphs/boruvka-mst.md)).

`npm run demo -- boruvka-mst`

## A-star shortest path length

**Complexity:** shortestPathLength: Time O(E log V); Space O(V).

Sample directed graph, source **0**, goal **3** → path length **4** (`a-star-goldens.json`; h = 0).

**API:** `shortestPathLength(graph, source, goal)` (see [a-star](items/graphs/a-star.md)).

`npm run demo -- a-star`

## Articulation points and bridges

**Complexity:** find: Time O(V+E); Space O(V).

Undirected graph from goldens → articulation **`[1, 2]`**, bridges **`[[1,2],[0,1]]`** (`articulation-bridges-goldens.json`).

**API:** `ArticulationBridges.find(graph)` (see [articulation-bridges](items/graphs/articulation-bridges.md)).

`npm run demo -- articulation-bridges`

## Hungarian (min assignment cost)

**Complexity:** minCost: Time O(n³); Space O(n²).

3×3 cost matrix → minimum assignment cost **5** (`hungarian-goldens.json`).

**API:** `Hungarian.minCost(matrix)` (see [hungarian](items/graphs/hungarian.md)).

`npm run demo -- hungarian`

## LCA binary lifting (queries)

**Complexity:** query: Time O(log n); Space O(n log n).

Parent array **`[0,0,0,1]`** → **`LCA(1,2)=0`**, **`LCA(1,3)=1`** (`lca-binary-lifting-goldens.json`).

**API:** `LCABinaryLifting(parent)`, `query(u,v)` (see [lca-binary-lifting](items/trees/lca-binary-lifting.md)).

`npm run demo -- lca-binary-lifting`

## Sparse table (range minimum)

**Complexity:** query: Time O(1); Space O(n log n).

Array **`[1,3,5,7,9,2]`** → range min queries match `sparse-table-goldens.json`.

**API:** `SparseTable(arr)`, `query(l,r)` (see [sparse-table](items/trees/sparse-table.md)).

`npm run demo -- sparse-table`

## TSP bitmask (min tour cost)

**Complexity:** minCost: Time O(n²·2^n); Space O(n·2^n).

4-city distance matrix → minimum tour cost **80** starting from city 0 (`tsp-bitmask-goldens.json`).

**API:** `TSPBitmask.minCost(dist)` (see [tsp-bitmask](items/dp/tsp-bitmask.md)).

`npm run demo -- tsp-bitmask`

## Reservoir sampling (size k)

**Complexity:** sample: Time O(n); Space O(k).

Stream **`[1..5]`**, **`k=0`** → **`[]`**; deterministic **`seed=0`** cases in `reservoir-sampling-goldens.json`.

**API:** `sample(stream, k, seed)` (see [reservoir-sampling](items/searching/reservoir-sampling.md)).

`npm run demo -- reservoir-sampling`

## Topic index

One-line walkthroughs for every catalog topic. Step tables above cover interview-heavy patterns (search, graphs, DP, caches, strings).

### linear-search

See the [detailed walkthrough](#linear-search-first-match-index) above.

`npm run demo -- linear-search`

### binary-search

See the [detailed walkthrough](#binary-search-on-a-sorted-array) above.

`npm run demo -- binary-search`

### two-sum-ii

See the [detailed walkthrough](#two-sum-ii-sorted-pair) above.

`npm run demo -- two-sum-ii`

### trapping-rain-water

See the [detailed walkthrough](#trapping-rain-water-two-pointers) above.

`npm run demo -- trapping-rain-water`

### quick-select

See the [detailed walkthrough](#quick-select-k-th-order-statistic) above.

`npm run demo -- quick-select`

### bubble-sort

See the [detailed walkthrough](#bubble-sort-in-place-ascending) above.

`npm run demo -- bubble-sort`

### selection-sort

See the [detailed walkthrough](#selection-sort-sorted-copy) above.

`npm run demo -- selection-sort`

### insertion-sort

See the [detailed walkthrough](#insertion-sort-sorted-copy) above.

`npm run demo -- insertion-sort`

### merge-sort

See the [detailed walkthrough](#merge-sort-top-down) above.

`npm run demo -- merge-sort`

### quick-sort

Sort in place via Lomuto partition, optional random pivot, or 3-way partition.

`npm run demo -- quick-sort`

### heapsort

See the [detailed walkthrough](#heapsort-in-place) above.

`npm run demo -- heapsort`

### counting-sort

See the [detailed walkthrough](#counting-sort-non-negative-keys) above.

`npm run demo -- counting-sort`

### radix-sort

See the [detailed walkthrough](#radix-sort-lsd-by-digit) above.

`npm run demo -- radix-sort`

### merge-intervals

See the [detailed walkthrough](#merge-intervals) above.

`npm run demo -- merge-intervals`

### kmp

See the [detailed walkthrough](#kmp-pattern-search) above.

`npm run demo -- kmp`

### dynamic-array

See the [detailed walkthrough](#dynamic-array-append-and-get) above.

`npm run demo -- dynamic-array`

### singly-linked-list

See the [detailed walkthrough](#singly-linked-list-add-get-remove) above.

`npm run demo -- singly-linked-list`

### doubly-linked-list

See the [detailed walkthrough](#doubly-linked-list-add-first-and-last) above.

`npm run demo -- doubly-linked-list`

### stack

LIFO stack backed by dynamic array.

`npm run demo -- stack`

### queue

See the [detailed walkthrough](#queue-fifo-enqueue-and-dequeue) above.

`npm run demo -- queue`

### deque

See the [detailed walkthrough](#deque-two-ended-operations) above.

`npm run demo -- deque`

### binary-heap

See the [detailed walkthrough](#binary-min-heap-insert-and-extract) above.

`npm run demo -- binary-heap`

### priority-queue

See the [detailed walkthrough](#priority-queue-min-scheduling) above.

`npm run demo -- priority-queue`

### meeting-rooms-ii

See the [detailed walkthrough](#meeting-rooms-ii-min-heap) above.

`npm run demo -- meeting-rooms-ii`

### top-k-frequent-elements

See the [detailed walkthrough](#top-k-frequent-elements) above.

`npm run demo -- top-k-frequent-elements`

### bst

See the [detailed walkthrough](#bst-search-and-in-order-walk) above.

`npm run demo -- bst`

### tree-traversals

See the [detailed walkthrough](#tree-traversals-bst-key-orders) above.

`npm run demo -- tree-traversals`

### level-order-traversal

See the [detailed walkthrough](#level-order-traversal-heap-array) above.

`npm run demo -- level-order-traversal`

### serialize-binary-tree

See the [detailed walkthrough](#serialize-binary-tree-level-order-codec) above.

`npm run demo -- serialize-binary-tree`

### avl-tree

See the [detailed walkthrough](#avl-tree-insert-and-search) above.

`npm run demo -- avl-tree`

### order-statistic-tree

See the [detailed walkthrough](#order-statistic-tree-rank-and-select) above.

`npm run demo -- order-statistic-tree`

### interval-tree

See the [detailed walkthrough](#interval-tree-overlap-query) above.

`npm run demo -- interval-tree`

### trie

See the [detailed walkthrough](#trie-prefix-search) above.

`npm run demo -- trie`

### b-tree

See the [detailed walkthrough](#b-tree-insert-and-search) above.

`npm run demo -- b-tree`

### segment-tree

See the [detailed walkthrough](#segment-tree-range-sum) above.

`npm run demo -- segment-tree`

### fenwick-tree

See the [detailed walkthrough](#fenwick-tree-prefix-sums) above.

`npm run demo -- fenwick-tree`

### z-algorithm

See the [detailed walkthrough](#z-algorithm-pattern-search) above.

`npm run demo -- z-algorithm`

### rabin-karp

See the [detailed walkthrough](#rabin-karp-rolling-hash) above.

`npm run demo -- rabin-karp`

### longest-substring-without-repeating

See the [detailed walkthrough](#longest-substring-without-repeating) above.

`npm run demo -- longest-substring-without-repeating`

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

### maximum-subarray

See the [detailed walkthrough](#maximum-subarray-kadane) above.

`npm run demo -- maximum-subarray`

### separate-chaining

See the [detailed walkthrough](#separate-chaining-hash-map) above.

`npm run demo -- separate-chaining`

### open-addressing

See the [detailed walkthrough](#open-addressing-hash-map) above.

`npm run demo -- open-addressing`

### bloom-filter

See the [detailed walkthrough](#bloom-filter-membership) above.

`npm run demo -- bloom-filter`

### union-find

See the [detailed walkthrough](#union-find-connectivity) above.

`npm run demo -- union-find`

### graph

See the [detailed walkthrough](#graph-adjacency-list) above.

`npm run demo -- graph`

### bfs

See the [detailed walkthrough](#bfs-unweighted-shortest-paths) above.

`npm run demo -- bfs`

### number-of-islands

See the [detailed walkthrough](#number-of-islands-grid-dfs) above.

`npm run demo -- number-of-islands`

### course-schedule

See the [detailed walkthrough](#course-schedule-canfinish) above.

`npm run demo -- course-schedule`

### word-search

See the [detailed walkthrough](#word-search-grid-backtracking) above.

`npm run demo -- word-search`

### dfs

See the [detailed walkthrough](#dfs-discovery-times) above.

`npm run demo -- dfs`

### topological-sort

See the [detailed walkthrough](#topological-sort-kahn-course-schedule) above.

`npm run demo -- topological-sort`

### dijkstra

See the [detailed walkthrough](#dijkstra-non-negative-weights) above.

`npm run demo -- dijkstra`

### network-delay

See the [detailed walkthrough](#network-delay-time) above.

`npm run demo -- network-delay`

### bellman-ford

See the [detailed walkthrough](#bellman-ford-negative-edges) above.

`npm run demo -- bellman-ford`

### floyd-warshall

See the [detailed walkthrough](#floyd-warshall-all-pairs-shortest-paths) above.

`npm run demo -- floyd-warshall`

### kruskal-mst

See the [detailed walkthrough](#kruskal-mst-union-find) above.

`npm run demo -- kruskal-mst`

### prim-mst

See the [detailed walkthrough](#prim-mst-greedy-grow) above.

`npm run demo -- prim-mst`

### boruvka-mst

See the [detailed walkthrough](#boruvka-mst-total-weight) above.

`npm run demo -- boruvka-mst`

### a-star

See the [detailed walkthrough](#a-star-shortest-path-length) above.

`npm run demo -- a-star`

### tarjan-scc

See the [detailed walkthrough](#tarjan-scc-strongly-connected-components) above.

`npm run demo -- tarjan-scc`

### kosaraju

See the [detailed walkthrough](#kosaraju-scc-strongly-connected-components) above.

`npm run demo -- kosaraju`

### bipartite-check

See the [detailed walkthrough](#bipartite-check-2-coloring) above.

`npm run demo -- bipartite-check`

### articulation-bridges

See the [detailed walkthrough](#articulation-points-and-bridges) above.

`npm run demo -- articulation-bridges`

### edmonds-karp

See the [detailed walkthrough](#edmonds-karp-max-flow) above.

`npm run demo -- edmonds-karp`

### hungarian

See the [detailed walkthrough](#hungarian-min-assignment-cost) above.

`npm run demo -- hungarian`

### red-black-tree

See the [detailed walkthrough](#red-black-tree-insert-and-search) above.

`npm run demo -- red-black-tree`

### lca-binary-lifting

See the [detailed walkthrough](#lca-binary-lifting-queries) above.

`npm run demo -- lca-binary-lifting`

### treap

See the [detailed walkthrough](#treap-seeded-insert-and-search) above.

`npm run demo -- treap`

### sparse-table

See the [detailed walkthrough](#sparse-table-range-minimum) above.

`npm run demo -- sparse-table`

### manacher

See the [detailed walkthrough](#manacher-longest-palindrome-length) above.

`npm run demo -- manacher`

### suffix-array

See the [detailed walkthrough](#suffix-array-sorted-indices) above.

`npm run demo -- suffix-array`

### aho-corasick

See the [detailed walkthrough](#aho-corasick-multi-pattern-hits) above.

`npm run demo -- aho-corasick`

### matrix-chain

See the [detailed walkthrough](#matrix-chain-min-scalar-multiplications) above.

`npm run demo -- matrix-chain`

### longest-palindromic-subsequence

See the [detailed walkthrough](#longest-palindromic-subsequence-length) above.

`npm run demo -- longest-palindromic-subsequence`

### partition-equal-subset

See the [detailed walkthrough](#partition-equal-subset-01-knapsack) above.

`npm run demo -- partition-equal-subset`

### rod-cutting

See the [detailed walkthrough](#rod-cutting-max-revenue) above.

`npm run demo -- rod-cutting`

### tsp-bitmask

See the [detailed walkthrough](#tsp-bitmask-min-tour-cost) above.

`npm run demo -- tsp-bitmask`

### reservoir-sampling

See the [detailed walkthrough](#reservoir-sampling-size-k) above.

`npm run demo -- reservoir-sampling`

### valid-parentheses

See the [detailed walkthrough](#valid-parentheses-stack) above.

`npm run demo -- valid-parentheses`

### monotonic-stack

Next strictly greater element to the right for each index.

`npm run demo -- monotonic-stack`

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

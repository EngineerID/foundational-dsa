# Practice problems (trilingual solutions)

Fifteen interview-style problems with reference solutions in Java, Python, and JavaScript. Use [pattern-recognition.md](pattern-recognition.md) to map each statement to catalog topics, then compare with these standalone implementations under `practice/`.

| # | Problem | Signals | Catalog topics |
|---|---------|---------|----------------|
| 1 | [Two Sum II](#1-two-sum-ii) | Sorted array, pair with target | `binary-search`, hash map pattern |
| 2 | [Maximum subarray](#2-maximum-subarray) | Contiguous subarray, max sum | DP / Kadane |
| 3 | [Valid parentheses](#3-valid-parentheses) | Matching brackets | `stack` |
| 4 | [Meeting rooms II](#4-meeting-rooms-ii) | Overlapping intervals, min rooms | `binary-heap`, sorting |
| 5 | [Number of islands](#5-number-of-islands) | Grid, connected components | `bfs`, `dfs` |
| 6 | [Top K frequent elements](#6-top-k-frequent-elements) | Frequency counts, top k | `binary-heap`, hashing |
| 7 | [Course schedule](#7-course-schedule) | Prerequisites, cycle | `topological-sort` |
| 8 | [Longest substring without repeating](#8-longest-substring-without-repeating-characters) | Window, all distinct | sliding window |
| 9 | [Coin change](#9-coin-change) | Min coins, unlimited supply | `coin-change` DP |
| 10 | [LRU cache design](#10-lru-cache-design) | get/put, capacity | `lru-cache` |
| 11 | [Merge intervals](#11-merge-intervals) | Overlapping ranges | sorting |
| 12 | [Level order traversal](#12-binary-tree-level-order-traversal) | Tree by levels | `bfs`, `tree-traversals` |
| 13 | [Word search](#13-word-search) | Grid path, reuse | backtracking / `dfs` |
| 14 | [Kth largest element](#14-kth-largest-element) | Order statistic | `quick-select` |
| 15 | [MST (Kruskal)](#15-minimum-spanning-tree-kruskal) | Min total weight | `kruskal-mst`, `union-find` |

Run tests: `npm run test:py -- python/tests/practice`, `npm run test:js -- --testPathPattern=practice`, Java `PracticeProblemsTest`.

---

## 1. Two Sum II

**Statement:** Given a **sorted** array of integers and a target, return 1-based indices `[i, j]` (`i < j`) such that `nums[i-1] + nums[j-1] == target`. Exactly one solution exists.

**Implementation:** `practice/two_sum*` — two pointers.

## 2. Maximum subarray

**Statement:** Given an integer array, return the largest sum of any contiguous subarray (Kadane).

**Implementation:** `practice/max_subarray*`.

## 3. Valid parentheses

**Statement:** Given a string containing `(`, `)`, `{`, `}`, `[`, `]`, determine if brackets are balanced and correctly nested.

**Implementation:** `practice/valid_parentheses*`.

## 4. Meeting rooms II

**Statement:** Given meeting intervals `[start, end)`, return the minimum number of conference rooms required so no meetings overlap.

**Implementation:** `practice/meeting_rooms*`.

## 5. Number of islands

**Statement:** Given a grid of `'1'` (land) and `'0'` (water), count connected land components (4-directionally).

**Implementation:** `practice/num_islands*`.

## 6. Top K frequent elements

**Statement:** Given an integer array and `k`, return the `k` most frequent elements. Break ties by **smaller value first** in the output order (after sorting by frequency descending).

**Implementation:** `practice/top_k_frequent*` — count + size-`k` min-heap by frequency.

## 7. Course schedule

**Statement:** There are `numCourses` labeled `0 .. numCourses-1`. Each prerequisite `[course, prereq]` means you must take `prereq` before `course`. Return whether you can finish all courses (no cycle).

**Implementation:** `practice/course_schedule*` — Kahn topological sort via catalog `graph` + `topological-sort`.

## 8. Longest substring without repeating characters

**Statement:** Given a string, return the length of the longest substring with all distinct characters.

**Implementation:** `practice/longest_substring*` — sliding window with last-seen index.

## 9. Coin change

**Statement:** Given coin denominations and an `amount`, return the **fewest** number of coins that sum to `amount`, or `-1` if impossible. Each coin may be used unlimited times.

**Implementation:** `practice/coin_change*` — unbounded knapsack DP (same shape as catalog `coin-change`).

## 10. LRU cache design

**Statement:** Design a cache with fixed capacity supporting `get(key)` (returns `-1` if missing) and `put(key, value)` in O(1) average time, evicting the least recently used entry when over capacity.

**Implementation:** `practice/lru_design*` — wraps catalog `lru-cache`.

## 11. Merge intervals

**Statement:** Given intervals `[start, end]` (inclusive), merge all overlapping intervals and return the result sorted by start.

**Implementation:** `practice/merge_intervals*`.

## 12. Binary tree level order traversal

**Statement:** Given a complete binary tree in heap-style array form (`null` = missing child), return values level by level (left to right).

**Implementation:** `practice/level_order*` / `levelOrder*`.

## 13. Word search

**Statement:** Given a 2D board of letters and a word, return whether the word can be built from sequentially adjacent cells without reusing a cell.

**Implementation:** `practice/word_search*`.

## 14. Kth largest element

**Statement:** Given an unsorted array and `k`, return the **k-th largest** element (not the k-th distinct).

**Implementation:** `practice/kth_largest*` — catalog `quick-select` on rank `n - k + 1`.

## 15. Minimum spanning tree (Kruskal)

**Statement:** Given `n` vertices and undirected weighted edges `[u, v, w]`, return the total weight of the minimum spanning tree (assume the graph is connected).

**Implementation:** `practice/mst_kruskal*` — catalog `kruskal-mst` + `union-find`.

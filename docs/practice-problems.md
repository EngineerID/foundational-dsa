# Practice problems (trilingual solutions)

Seventy-five interview-style problems with reference solutions in Java, Python, and JavaScript. Use [pattern-recognition.md](pattern-recognition.md) to map each statement to catalog topics, then compare with these standalone implementations under `practice/`. Each problem below links to a step-table **[worked example](worked-examples.md)** (CI: `npm run check:practice-walkthrough`).

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
| 16 | [Trapping rain water](#16-trapping-rain-water) | Two pointers, prefix max | two pointers |
| 17 | [Edit distance](#17-edit-distance) | String transform, DP | `edit-distance` |
| 18 | [Serialize binary tree](#18-serialize-and-deserialize-binary-tree) | Tree encoding | `serialize-binary-tree` |
| 19 | [Network delay time](#19-network-delay-time) | Weighted graph, farthest reach | `dijkstra` |
| 20 | [Sliding window maximum](#20-sliding-window-maximum) | Window max, deque | `sliding-window-maximum` |
| 21 | [Binary search](#21-binary-search) | Sorted array, index | `binary-search` |
| 22 | [0/1 Knapsack](#22-01-knapsack) | Weight limit, max value | `knapsack` |
| 23 | [Longest common subsequence](#23-longest-common-subsequence) | Two strings, DP | `lcs` |
| 24 | [KMP pattern search](#24-kmp-pattern-search) | Substring, linear | `kmp` |
| 25 | [Trie prefix tree](#25-trie-prefix-tree) | Insert, search, prefix | `trie` |
| 26 | [BFS shortest paths](#26-bfs-shortest-paths) | Unweighted graph | `bfs` |
| 27 | [Union–find connectivity](#27-union-find-connectivity) | Dynamic connectivity | `union-find` |
| 28 | [Binary min-heap](#28-binary-min-heap) | Insert / extractMin | `binary-heap` |
| 29 | [Dijkstra shortest paths](#29-dijkstra-shortest-paths) | Non-negative weights | `dijkstra` |
| 30 | [DFS discovery times](#30-dfs-discovery-times) | Graph traversal stamps | `dfs` |
| 31 | [Longest increasing subsequence](#31-longest-increasing-subsequence) | Patience / DP | `lis` |
| 32 | [Merge sort](#32-merge-sort) | Stable sort copy | `merge-sort` |
| 33 | [Topological sort](#33-topological-sort) | DAG ordering | `topological-sort` |
| 34 | [Priority queue scheduling](#34-priority-queue-scheduling) | Min-priority drain | `priority-queue` |
| 35 | [Next greater element](#35-next-greater-element) | Monotonic stack | `monotonic-stack` |
| 36 | [Quicksort](#36-quicksort) | In-place partition sort | `quick-sort` |
| 37 | [Binary search tree](#37-binary-search-tree) | Insert / search / in-order | `bst` |
| 38 | [Prim MST weight](#38-prim-mst-weight) | Greedy MST | `prim-mst` |
| 39 | [Stack operations](#39-stack-operations) | LIFO push/pop/peek | `stack` |
| 40 | [Heapsort](#40-heapsort) | In-place heap sort | `heapsort` |
| 41 | [Queue operations](#41-queue-operations) | FIFO enqueue/dequeue | `queue` |
| 42 | [Deque operations](#42-deque-operations) | Two-ended queue | `deque` |
| 43 | [Counting sort](#43-counting-sort) | Non-negative keys | `counting-sort` |
| 44 | [Radix sort](#44-radix-sort) | LSD by digit | `radix-sort` |
| 45 | [Rabin-Karp search](#45-rabin-karp-search) | Rolling hash | `rabin-karp` |
| 46 | [Bellman-Ford paths](#46-bellman-ford-paths) | Negative edges | `bellman-ford` |
| 47 | [Segment tree range sum](#47-segment-tree-range-sum) | Range query + update | `segment-tree` |
| 48 | [Floyd-Warshall distances](#48-floyd-warshall-distances) | All-pairs shortest paths | `floyd-warshall` |
| 49 | [Fenwick tree prefix sums](#49-fenwick-tree-prefix-sums) | Point add, prefix/range | `fenwick-tree` |
| 50 | [Graph adjacency](#50-graph-adjacency) | Build & query neighbors | `graph` |
| 51 | [Bipartite check](#51-bipartite-check) | 2-colorable? | `bipartite-check` |
| 52 | [Tarjan SCC sizes](#52-tarjan-scc-sizes) | Strongly connected components | `tarjan-scc` |
| 53 | [Kosaraju SCC sizes](#53-kosaraju-scc-sizes) | SCC via two-pass DFS | `kosaraju` |
| 54 | [Edmonds-Karp max flow](#54-edmonds-karp-max-flow) | s–t max flow | `edmonds-karp` |
| 55 | [Matrix chain min cost](#55-matrix-chain-min-cost) | Optimal parenthesization | `matrix-chain` |
| 56 | [Rod cutting max profit](#56-rod-cutting-max-profit) | Unbounded length DP | `rod-cutting` |
| 57 | [Partition equal subset](#57-partition-equal-subset) | 0/1 subset sum | `partition-equal-subset` |
| 58 | [Longest palindromic subsequence](#58-longest-palindromic-subsequence) | Interval DP | `longest-palindromic-subsequence` |
| 59 | [Dynamic array operations](#59-dynamic-array-operations) | Append / get / size | `dynamic-array` |
| 60 | [Linear search index](#60-linear-search-index) | First match scan | `linear-search` |
| 61 | [Bubble sort](#61-bubble-sort) | Adjacent swap sort | `bubble-sort` |
| 62 | [Insertion sort](#62-insertion-sort) | Growing sorted prefix | `insertion-sort` |
| 63 | [Selection sort](#63-selection-sort) | Repeated minimum pick | `selection-sort` |
| 64 | [Z-algorithm search](#64-z-algorithm) | Z-array pattern match | `z-algorithm` |
| 65 | [Manacher palindrome length](#65-manacher) | Longest palindrome | `manacher` |
| 66 | [Aho-Corasick hits](#66-aho-corasick) | Multi-pattern scan | `aho-corasick` |
| 67 | [AVL tree](#67-avl-tree) | Balanced BST insert/search | `avl-tree` |
| 68 | [Red-black tree](#68-red-black-tree) | RB insert/search | `red-black-tree` |
| 69 | [Singly linked list](#69-singly-linked-list) | addLast / get / remove | `singly-linked-list` |
| 70 | [Doubly linked list](#70-doubly-linked-list) | addFirst / addLast | `doubly-linked-list` |
| 71 | [Tree traversals](#71-tree-traversals) | in/pre/post-order keys | `tree-traversals` |
| 72 | [Separate chaining](#72-separate-chaining) | Chained hash put/get | `separate-chaining` |
| 73 | [Open addressing](#73-open-addressing) | Linear probing map | `open-addressing` |
| 74 | [Suffix array](#74-suffix-array) | Sorted suffix indices | `suffix-array` |
| 75 | [Treap](#75-treap) | Seeded insert/search | `treap` |

Run tests: `npm run test:py -- python/tests/practice`, `npm run test:js -- --testPathPattern=practice`, Java `PracticeProblemsTest`.

---

## 1. Two Sum II

**Statement:** Given a **sorted** array of integers and a target, return 1-based indices `[i, j]` (`i < j`) such that `nums[i-1] + nums[j-1] == target`. Exactly one solution exists.

**Implementation:** `practice/two_sum*` — two pointers (catalog [`two-sum-ii`](items/searching/two-sum-ii.md): `npm run demo -- two-sum-ii`).

**Walkthrough:** [Worked examples — Two Sum II](worked-examples.md#two-sum-ii-sorted-pair).

## 2. Maximum subarray

**Statement:** Given an integer array, return the largest sum of any contiguous subarray (Kadane).

**Implementation:** `practice/max_subarray*` (same algorithm as catalog [`maximum-subarray`](items/dp/maximum-subarray.md): `npm run demo -- maximum-subarray`).

**Walkthrough:** [Worked examples — Maximum subarray](worked-examples.md#maximum-subarray-kadane).

## 3. Valid parentheses

**Statement:** Given a string containing `(`, `)`, `{`, `}`, `[`, `]`, determine if brackets are balanced and correctly nested.

**Implementation:** `practice/valid_parentheses*` (catalog [`valid-parentheses`](items/linear/valid-parentheses.md): `npm run demo -- valid-parentheses`).

**Walkthrough:** [Worked examples — Valid parentheses](worked-examples.md#valid-parentheses-stack).

## 4. Meeting rooms II

**Statement:** Given meeting intervals `[start, end)`, return the minimum number of conference rooms required so no meetings overlap.

**Implementation:** `practice/meeting_rooms*` (catalog [`meeting-rooms-ii`](items/heaps/meeting-rooms-ii.md): `npm run demo -- meeting-rooms-ii`).

**Walkthrough:** [Worked examples — Meeting rooms II](worked-examples.md#meeting-rooms-ii-min-heap).

## 5. Number of islands

**Statement:** Given a grid of `'1'` (land) and `'0'` (water), count connected land components (4-directionally).

**Implementation:** `practice/num_islands*` (catalog [`number-of-islands`](items/graphs/number-of-islands.md): `npm run demo -- number-of-islands`).

**Walkthrough:** [Worked examples — Number of islands](worked-examples.md#number-of-islands-grid-dfs).

## 6. Top K frequent elements

**Statement:** Given an integer array and `k`, return the `k` most frequent elements. Break ties by **smaller value first** in the output order (after sorting by frequency descending).

**Implementation:** `practice/top_k_frequent*` — count + size-`k` min-heap (catalog [`top-k-frequent-elements`](items/heaps/top-k-frequent-elements.md): `npm run demo -- top-k-frequent-elements`).

**Walkthrough:** [Worked examples — Top K frequent](worked-examples.md#top-k-frequent-elements).

## 7. Course schedule

**Statement:** There are `numCourses` labeled `0 .. numCourses-1`. Each prerequisite `[course, prereq]` means you must take `prereq` before `course`. Return whether you can finish all courses (no cycle).

**Implementation:** `practice/course_schedule*` (catalog [`course-schedule`](items/graphs/course-schedule.md): `npm run demo -- course-schedule`).

**Walkthrough:** [Worked examples — Course schedule](worked-examples.md#course-schedule-canfinish).

## 8. Longest substring without repeating characters

**Statement:** Given a string, return the length of the longest substring with all distinct characters.

**Implementation:** `practice/longest_substring*` (catalog [`longest-substring-without-repeating`](items/strings/longest-substring-without-repeating.md): `npm run demo -- longest-substring-without-repeating`).

**Walkthrough:** [Worked examples — Longest substring](worked-examples.md#longest-substring-without-repeating) (see also [sliding window patterns](worked-examples.md#sliding-window-patterns-fixed-and-variable)).

## 9. Coin change

**Statement:** Given coin denominations and an `amount`, return the **fewest** number of coins that sum to `amount`, or `-1` if impossible. Each coin may be used unlimited times.

**Implementation:** `practice/coin_change*` — unbounded knapsack DP (catalog [`coin-change`](items/dp/coin-change.md): `npm run demo -- coin-change`).

**Walkthrough:** [Worked examples — Coin change](worked-examples.md#coin-change-min-coins).

## 10. LRU cache design

**Statement:** Design a cache with fixed capacity supporting `get(key)` (returns `-1` if missing) and `put(key, value)` in O(1) average time, evicting the least recently used entry when over capacity.

**Implementation:** `practice/lru_design*` — wraps catalog [`lru-cache`](items/linear/lru-cache.md): `npm run demo -- lru-cache`).

**Walkthrough:** [Worked examples — LRU cache](worked-examples.md#lru-cache-capacity-2).

## 11. Merge intervals

**Statement:** Given intervals `[start, end]` (inclusive), merge all overlapping intervals and return the result sorted by start.

**Implementation:** `practice/merge_intervals*` (catalog [`merge-intervals`](items/sorting/merge-intervals.md): `npm run demo -- merge-intervals`).

**Walkthrough:** [Worked examples — Merge intervals](worked-examples.md#merge-intervals).

## 12. Binary tree level order traversal

**Statement:** Given a complete binary tree in heap-style array form (`null` = missing child), return values level by level (left to right).

**Implementation:** `practice/level_order*` / `levelOrder*` (catalog [`level-order-traversal`](items/trees/level-order-traversal.md): `npm run demo -- level-order-traversal`).

**Walkthrough:** [Worked examples — Level order](worked-examples.md#level-order-traversal-heap-array).

## 13. Word search

**Statement:** Given a 2D board of letters and a word, return whether the word can be built from sequentially adjacent cells without reusing a cell.

**Implementation:** `practice/word_search*` (catalog [`word-search`](items/graphs/word-search.md): `npm run demo -- word-search`).

**Walkthrough:** [Worked examples — Word search](worked-examples.md#word-search-grid-backtracking) (see also [backtracking template](worked-examples.md#backtracking-choose-explore-undo)).

## 14. Kth largest element

**Statement:** Given an unsorted array and `k`, return the **k-th largest** element (not the k-th distinct).

**Implementation:** `practice/kth_largest*` — same order-statistic as catalog [`quick-select`](items/searching/quick-select.md) (`npm run demo -- quick-select`; rank `n - k + 1`).

**Walkthrough:** [Worked examples — Quick select](worked-examples.md#quick-select-k-th-order-statistic).

## 15. Minimum spanning tree (Kruskal)

**Statement:** Given `n` vertices and undirected weighted edges `[u, v, w]`, return the total weight of the minimum spanning tree (assume the graph is connected).

**Implementation:** `practice/mst_kruskal*` — catalog [`kruskal-mst`](items/graphs/kruskal-mst.md) + [`union-find`](items/unionfind/union-find.md): `npm run demo -- kruskal-mst`).

**Walkthrough:** [Worked examples — Kruskal MST](worked-examples.md#kruskal-mst-union-find) (see also [union–find](worked-examples.md#union-find-connectivity)).

## 16. Trapping rain water

**Statement:** Given non-negative bar heights, compute how much water can be trapped after raining.

**Implementation:** `practice/trapping_rain_water*` / `trappingRainWater*` — two pointers (catalog [`trapping-rain-water`](items/searching/trapping-rain-water.md): `npm run demo -- trapping-rain-water`).

**Walkthrough:** [Worked examples — Trapping rain water](worked-examples.md#trapping-rain-water-two-pointers).

## 17. Edit distance

**Statement:** Given strings `word1` and `word2`, return the minimum number of single-character insert, delete, or replace operations to transform `word1` into `word2`.

**Implementation:** `practice/edit_distance_practice*` / `editDistancePractice*` — Levenshtein DP (catalog [`edit-distance`](items/dp/edit-distance.md): `npm run demo -- edit-distance`).

**Walkthrough:** [Worked examples — Edit distance](worked-examples.md#edit-distance-kitten-to-sitting).

## 18. Serialize and deserialize binary tree

**Statement:** Encode a binary tree given in heap-style level order (`null` = missing child) into a compact string and decode back to the same level-order shape (trim trailing nulls).

**Implementation:** `practice/tree_codec*` / `treeCodec*` (catalog [`serialize-binary-tree`](items/trees/serialize-binary-tree.md): `npm run demo -- serialize-binary-tree`).

**Walkthrough:** [Worked examples — Serialize binary tree](worked-examples.md#serialize-binary-tree-level-order-codec).

## 19. Network delay time

**Statement:** There are `n` nodes `0 .. n-1` and directed edges `[u, v, w]` (travel time). Starting from node `k`, return the time until **all** nodes have received a signal, or `-1` if some node is unreachable.

**Implementation:** `practice/network_delay*` / `networkDelay*` (catalog [`network-delay`](items/graphs/network-delay.md): `npm run demo -- network-delay`).

**Walkthrough:** [Worked examples — Network delay](worked-examples.md#network-delay-time).

## 20. Sliding window maximum

**Statement:** Given an integer array and window size `k`, return the maximum value in each sliding window of size `k`.

**Implementation:** `practice/sliding_window_max*` / `slidingWindowMax*` — monotonic deque (catalog [`sliding-window-maximum`](items/linear/sliding-window-maximum.md): `npm run demo -- sliding-window-maximum`; related [`monotonic-stack`](items/linear/monotonic-stack.md): `npm run demo -- monotonic-stack`).

**Walkthrough:** [Worked examples — Sliding window maximum](worked-examples.md#sliding-window-maximum) (see also [sliding window patterns](worked-examples.md#sliding-window-patterns-fixed-and-variable)).

## 21. Binary search

**Statement:** Given a sorted integer array and a target, return the index of the target or **-1** if it is not present.

**Implementation:** `practice/binary_search*` / `binarySearchPractice*` — catalog [`binary-search`](items/searching/binary-search.md): `npm run demo -- binary-search`.

**Walkthrough:** [Worked examples — Binary search](worked-examples.md#binary-search-on-a-sorted-array).

## 22. 0/1 Knapsack

**Statement:** Given item weights, values, and a capacity, return the maximum total value using each item at most once.

**Implementation:** `practice/knapsack*` / `knapsackPractice*` — catalog [`knapsack`](items/dp/knapsack.md): `npm run demo -- knapsack`.

**Walkthrough:** [Worked examples — Knapsack](worked-examples.md#knapsack-01-classic).

## 23. Longest common subsequence

**Statement:** Given strings `text1` and `text2`, return the length of their longest common subsequence.

**Implementation:** `practice/lcs*` / `lcsPractice*` — catalog [`lcs`](items/dp/lcs.md): `npm run demo -- lcs`.

**Walkthrough:** [Worked examples — LCS](worked-examples.md#longest-common-subsequence).

## 24. KMP pattern search

**Statement:** Given text and pattern, return the index of the first occurrence of pattern in text, or **-1**.

**Implementation:** `practice/kmp*` / `kmpPractice*` — catalog [`kmp`](items/strings/kmp.md): `npm run demo -- kmp`.

**Walkthrough:** [Worked examples — KMP](worked-examples.md#kmp-pattern-search).

## 25. Trie prefix tree

**Statement:** Implement a trie supporting `insert(word)`, `search(word)`, and `startsWith(prefix)`.

**Implementation:** `practice/trie*` / `triePractice*` — catalog [`trie`](items/trees/trie.md): `npm run demo -- trie`.

**Walkthrough:** [Worked examples — Trie](worked-examples.md#trie-prefix-search).

## 26. BFS shortest paths

**Statement:** Given `n` nodes, undirected edges `[u, v]`, and a source, return the unweighted shortest distance from source to every node (**-1** if unreachable).

**Implementation:** `practice/bfs*` / `bfsPractice*` — catalog [`bfs`](items/graphs/bfs.md): `npm run demo -- bfs`.

**Walkthrough:** [Worked examples — BFS](worked-examples.md#bfs-unweighted-shortest-paths).

## 27. Union–find connectivity

**Statement:** Given `n` elements and a sequence of `union(a, b)` operations, answer whether `a` and `b` are in the same connected component after all unions.

**Implementation:** `practice/union_find*` / `unionFindPractice*` — catalog [`union-find`](items/unionfind/union-find.md): `npm run demo -- union-find`.

**Walkthrough:** [Worked examples — Union–find](worked-examples.md#union-find-connectivity).

## 28. Binary min-heap

**Statement:** Given a stream of insertions into a min-heap, return values in sorted order by repeatedly extracting the minimum.

**Implementation:** `practice/binary_heap*` / `binaryHeapPractice*` — catalog [`binary-heap`](items/heaps/binary-heap.md): `npm run demo -- binary-heap`.

**Walkthrough:** [Worked examples — Binary min-heap](worked-examples.md#binary-min-heap-insert-and-extract).

## 29. Dijkstra shortest paths

**Statement:** Given a directed weighted graph (non-negative edges) and source `s`, return shortest distances from `s` to every vertex (large sentinel if unreachable).

**Implementation:** `practice/dijkstra*` / `dijkstraPractice*` — catalog [`dijkstra`](items/graphs/dijkstra.md): `npm run demo -- dijkstra`.

**Walkthrough:** [Worked examples — Dijkstra](worked-examples.md#dijkstra-non-negative-weights).

## 30. DFS discovery times

**Statement:** On an undirected (or directed) graph, run DFS from `source` and return discovery and finish time arrays.

**Implementation:** `practice/dfs*` / `dfsPractice*` — catalog [`dfs`](items/graphs/dfs.md): `npm run demo -- dfs`.

**Walkthrough:** [Worked examples — DFS](worked-examples.md#dfs-discovery-times).

## 31. Longest increasing subsequence

**Statement:** Given an integer array, return the length of the longest strictly increasing subsequence.

**Implementation:** `practice/lis*` / `lisPractice*` — catalog [`lis`](items/dp/lis.md): `npm run demo -- lis`.

**Walkthrough:** [Worked examples — LIS](worked-examples.md#longest-increasing-subsequence).

## 32. Merge sort

**Statement:** Return a new array containing the input integers in ascending order using merge sort.

**Implementation:** `practice/merge_sort*` / `mergeSortPractice*` — catalog [`merge-sort`](items/sorting/merge-sort.md): `npm run demo -- merge-sort`.

**Walkthrough:** [Worked examples — Merge sort](worked-examples.md#merge-sort-top-down).

## 33. Topological sort

**Statement:** Given a DAG as directed edges, return a topological order of vertices, or an **empty** list if a cycle exists.

**Implementation:** `practice/topological_sort*` / `topologicalSortPractice*` — catalog [`topological-sort`](items/graphs/topological-sort.md): `npm run demo -- topological-sort`.

**Walkthrough:** [Worked examples — Topological sort](worked-examples.md#topological-sort-kahn-course-schedule).

## 34. Priority queue scheduling

**Statement:** Insert priorities into a min-priority queue and return them in nondecreasing order by repeatedly extracting the minimum.

**Implementation:** `practice/priority_queue*` / `priorityQueuePractice*` — catalog [`priority-queue`](items/heaps/priority-queue.md): `npm run demo -- priority-queue`.

**Walkthrough:** [Worked examples — Priority queue](worked-examples.md#priority-queue-min-scheduling).

## 35. Next greater element

**Statement:** For each index `i`, return the next strictly greater value to the right of `nums[i]`, or **-1** if none exists.

**Implementation:** `practice/monotonic_stack*` / `monotonicStackPractice*` — catalog [`monotonic-stack`](items/linear/monotonic-stack.md): `npm run demo -- monotonic-stack`.

**Walkthrough:** [Topic index — monotonic stack](worked-examples.md#monotonic-stack).

## 36. Quicksort

**Statement:** Return a sorted copy of the input array using in-place quicksort (standard or 3-way partition when duplicates dominate).

**Implementation:** `practice/quick_sort*` / `quickSortPractice*` — catalog [`quick-sort`](items/sorting/quick-sort.md): `npm run demo -- quick-sort`.

**Walkthrough:** [Topic index — quick sort](worked-examples.md#quick-sort) (see also [merge sort walkthrough](worked-examples.md#merge-sort-top-down)).

## 37. Binary search tree

**Statement:** Implement a BST with `insert(key, value)`, `search(key)`, and in-order key traversal.

**Implementation:** `practice/bst*` / `bstPractice*` — catalog [`bst`](items/trees/bst.md): `npm run demo -- bst`.

**Walkthrough:** [Worked examples — BST](worked-examples.md#bst-search-and-in-order-walk).

## 38. Prim MST weight

**Statement:** Given `n` vertices and undirected weighted edges `[u, v, w]`, return the total weight of the minimum spanning tree (assume connected).

**Implementation:** `practice/prim_mst*` / `primMstPractice*` — catalog [`prim-mst`](items/graphs/prim-mst.md): `npm run demo -- prim-mst`.

**Walkthrough:** [Worked examples — Prim MST](worked-examples.md#prim-mst-greedy-grow).

## 39. Stack operations

**Statement:** Implement a LIFO stack with `push`, `pop`, and `peek` (error on empty pop/peek).

**Implementation:** `practice/stack*` / `stackPractice*` — catalog [`stack`](items/linear/stack.md): `npm run demo -- stack`.

**Walkthrough:** [Worked examples — Valid parentheses (stack)](worked-examples.md#valid-parentheses-stack).

## 40. Heapsort

**Statement:** Return a sorted copy of the input using in-place heapsort on a clone.

**Implementation:** `practice/heapsort*` / `heapsortPractice*` — catalog [`heapsort`](items/sorting/heapsort.md): `npm run demo -- heapsort`.

**Walkthrough:** [Worked examples — Heapsort](worked-examples.md#heapsort-in-place).

## 41. Queue operations

**Statement:** Implement a FIFO queue with `enqueue`, `dequeue`, and `peek` (error on empty dequeue/peek).

**Implementation:** `practice/queue*` / `queuePractice*` — catalog [`queue`](items/linear/queue.md): `npm run demo -- queue`.

**Walkthrough:** [Worked examples — Queue](worked-examples.md#queue-fifo-enqueue-and-dequeue).

## 42. Deque operations

**Statement:** Implement a double-ended queue with `addFirst`, `addLast`, `removeFirst`, and `removeLast`.

**Implementation:** `practice/deque*` / `dequePractice*` — catalog [`deque`](items/linear/deque.md): `npm run demo -- deque`.

**Walkthrough:** [Worked examples — Deque](worked-examples.md#deque-two-ended-operations).

## 43. Counting sort

**Statement:** Return a sorted copy of non-negative integers using counting sort.

**Implementation:** `practice/counting_sort*` / `countingSortPractice*` — catalog [`counting-sort`](items/sorting/counting-sort.md): `npm run demo -- counting-sort`.

**Walkthrough:** [Worked examples — Counting sort](worked-examples.md#counting-sort-non-negative-keys).

## 44. Radix sort

**Statement:** Return a sorted copy of non-negative integers using LSD radix sort.

**Implementation:** `practice/radix_sort*` / `radixSortPractice*` — catalog [`radix-sort`](items/sorting/radix-sort.md): `npm run demo -- radix-sort`.

**Walkthrough:** [Worked examples — Radix sort](worked-examples.md#radix-sort-lsd-by-digit).

## 45. Rabin-Karp search

**Statement:** Return the first index of `pattern` in `text`, or **-1** if absent (rolling hash).

**Implementation:** `practice/rabin_karp*` / `rabinKarpPractice*` — catalog [`rabin-karp`](items/strings/rabin-karp.md): `npm run demo -- rabin-karp`.

**Walkthrough:** [Worked examples — Rabin-Karp](worked-examples.md#rabin-karp-rolling-hash).

## 46. Bellman-Ford paths

**Statement:** Given a directed weighted graph and source, return shortest-path distances and whether a reachable negative cycle exists.

**Implementation:** `practice/bellman_ford*` / `bellmanFordPractice*` — catalog [`bellman-ford`](items/graphs/bellman-ford.md): `npm run demo -- bellman-ford`.

**Walkthrough:** [Worked examples — Bellman-Ford](worked-examples.md#bellman-ford-negative-edges).

## 47. Segment tree range sum

**Statement:** On an initial array, support point updates and inclusive range-sum queries.

**Implementation:** `practice/segment_tree*` / `segmentTreePractice*` — catalog [`segment-tree`](items/trees/segment-tree.md): `npm run demo -- segment-tree`.

**Walkthrough:** [Worked examples — Segment tree](worked-examples.md#segment-tree-range-sum).

## 48. Floyd-Warshall distances

**Statement:** Given a directed weighted graph, return the all-pairs shortest-path distance matrix.

**Implementation:** `practice/floyd_warshall*` / `floydWarshallPractice*` — catalog [`floyd-warshall`](items/graphs/floyd-warshall.md): `npm run demo -- floyd-warshall`.

**Walkthrough:** [Worked examples — Floyd-Warshall](worked-examples.md#floyd-warshall-all-pairs-shortest-paths).

## 49. Fenwick tree prefix sums

**Statement:** On a fixed-size array (initially zero), support point additions and prefix or range sum queries.

**Implementation:** `practice/fenwick_tree*` / `fenwickTreePractice*` — catalog [`fenwick-tree`](items/trees/fenwick-tree.md): `npm run demo -- fenwick-tree`.

**Walkthrough:** [Worked examples — Fenwick tree](worked-examples.md#fenwick-tree-prefix-sums).

## 50. Graph adjacency

**Statement:** Build a directed or undirected (weighted) graph and query vertex count and out-neighbor lists.

**Implementation:** `practice/graph*` / `graphPractice*` — catalog [`graph`](items/graphs/graph.md): `npm run demo -- graph`.

**Walkthrough:** [Worked examples — Graph adjacency](worked-examples.md#graph-adjacency-list).

## 51. Bipartite check

**Statement:** Given an undirected graph, return whether it is bipartite (2-colorable).

**Implementation:** `practice/bipartite_check*` / `bipartiteCheckPractice*` — catalog [`bipartite-check`](items/graphs/bipartite-check.md): `npm run demo -- bipartite-check`.

**Walkthrough:** [Worked examples — Bipartite check](worked-examples.md#bipartite-check-2-coloring).

## 52. Tarjan SCC sizes

**Statement:** Given a directed graph, return the sorted sizes of strongly connected components.

**Implementation:** `practice/tarjan_scc*` / `tarjanSccPractice*` — catalog [`tarjan-scc`](items/graphs/tarjan-scc.md): `npm run demo -- tarjan-scc`.

**Walkthrough:** [Worked examples — Tarjan SCC](worked-examples.md#tarjan-scc-strongly-connected-components).

## 53. Kosaraju SCC sizes

**Statement:** Same as #52 using Kosaraju’s two-pass algorithm.

**Implementation:** `practice/kosaraju*` / `kosarajuPractice*` — catalog [`kosaraju`](items/graphs/kosaraju.md): `npm run demo -- kosaraju`.

**Walkthrough:** [Worked examples — Kosaraju SCC](worked-examples.md#kosaraju-scc-strongly-connected-components).

## 54. Edmonds-Karp max flow

**Statement:** Given a capacitated flow network, source, and sink, return the maximum s–t flow value.

**Implementation:** `practice/edmonds_karp*` / `edmondsKarpPractice*` — catalog [`edmonds-karp`](items/graphs/edmonds-karp.md): `npm run demo -- edmonds-karp`.

**Walkthrough:** [Worked examples — Edmonds-Karp](worked-examples.md#edmonds-karp-max-flow).

## 55. Matrix chain min cost

**Statement:** Given matrix dimension chain `dimensions`, return the minimum scalar multiplication cost to multiply the chain.

**Implementation:** `practice/matrix_chain*` / `matrixChainPractice*` — catalog [`matrix-chain`](items/dp/matrix-chain.md): `npm run demo -- matrix-chain`.

**Walkthrough:** [Worked examples — Matrix chain](worked-examples.md#matrix-chain-min-scalar-multiplications).

## 56. Rod cutting max profit

**Statement:** Given piece prices and a rod length, return maximum revenue from cutting the rod into pieces.

**Implementation:** `practice/rod_cutting*` / `rodCuttingPractice*` — catalog [`rod-cutting`](items/dp/rod-cutting.md): `npm run demo -- rod-cutting`.

**Walkthrough:** [Worked examples — Rod cutting](worked-examples.md#rod-cutting-max-revenue).

## 57. Partition equal subset

**Statement:** Return whether the array can be partitioned into two subsets with equal sum.

**Implementation:** `practice/partition_equal_subset*` / `partitionEqualSubsetPractice*` — catalog [`partition-equal-subset`](items/dp/partition-equal-subset.md): `npm run demo -- partition-equal-subset`.

**Walkthrough:** [Worked examples — Partition equal subset](worked-examples.md#partition-equal-subset-01-knapsack).

## 58. Longest palindromic subsequence

**Statement:** Return the length of the longest palindromic subsequence of `s`.

**Implementation:** `practice/longest_palindromic_subsequence*` / `longestPalindromicSubsequencePractice*` — catalog [`longest-palindromic-subsequence`](items/dp/longest-palindromic-subsequence.md): `npm run demo -- longest-palindromic-subsequence`.

**Walkthrough:** [Worked examples — LPS](worked-examples.md#longest-palindromic-subsequence-length).

## 59. Dynamic array operations

**Statement:** Implement a resizable array with `add`, `get`, and `size`.

**Implementation:** `practice/dynamic_array*` / `dynamicArrayPractice*` — catalog [`dynamic-array`](items/linear/dynamic-array.md): `npm run demo -- dynamic-array`.

**Walkthrough:** [Worked examples — Dynamic array](worked-examples.md#dynamic-array-append-and-get).

## 60. Linear search index

**Statement:** Return the first index of `target` in `arr`, or **-1** if absent.

**Implementation:** `practice/linear_search*` / `linearSearchPractice*` — catalog [`linear-search`](items/searching/linear-search.md): `npm run demo -- linear-search`.

**Walkthrough:** [Worked examples — Linear search](worked-examples.md#linear-search-first-match-index).

## 61. Bubble sort

**Statement:** Return a sorted copy of the input using bubble sort.

**Implementation:** `practice/bubble_sort*` / `bubbleSortPractice*` — catalog [`bubble-sort`](items/sorting/bubble-sort.md): `npm run demo -- bubble-sort`.

**Walkthrough:** [Worked examples — Bubble sort](worked-examples.md#bubble-sort-in-place-ascending).

## 62. Insertion sort

**Statement:** Return a sorted copy of the input using insertion sort.

**Implementation:** `practice/insertion_sort*` / `insertionSortPractice*` — catalog [`insertion-sort`](items/sorting/insertion-sort.md): `npm run demo -- insertion-sort`.

**Walkthrough:** [Worked examples — Insertion sort](worked-examples.md#insertion-sort-sorted-copy).

## 63. Selection sort

**Statement:** Return a sorted copy of the input using selection sort.

**Implementation:** `practice/selection_sort*` / `selectionSortPractice*` — catalog [`selection-sort`](items/sorting/selection-sort.md): `npm run demo -- selection-sort`.

**Walkthrough:** [Worked examples — Selection sort](worked-examples.md#selection-sort-sorted-copy).

## 64. Z-algorithm

**Statement:** Given text and pattern, return the first match index (or **-1**) and validate the Z-array for the text.

**Implementation:** `practice/z_algorithm*` / `zAlgorithmPractice*` — catalog [`z-algorithm`](items/strings/z-algorithm.md): `npm run demo -- z-algorithm`.

**Walkthrough:** [Worked examples — Z-algorithm](worked-examples.md#z-algorithm-pattern-search).

## 65. Manacher

**Statement:** Return the length of the longest palindromic substring in `s`.

**Implementation:** `practice/manacher*` / `manacherPractice*` — catalog [`manacher`](items/strings/manacher.md): `npm run demo -- manacher`.

**Walkthrough:** [Worked examples — Manacher](worked-examples.md#manacher-longest-palindrome-length).

## 66. Aho-Corasick

**Statement:** Given text and multiple patterns, return sorted start indices where any pattern ends (catalog hit list).

**Implementation:** `practice/aho_corasick*` / `ahoCorasickPractice*` — catalog [`aho-corasick`](items/strings/aho-corasick.md): `npm run demo -- aho-corasick`.

**Walkthrough:** [Worked examples — Aho-Corasick](worked-examples.md#aho-corasick-multi-pattern-hits).

## 67. AVL tree

**Statement:** Insert key/value pairs into an AVL tree; report in-order keys and search a key.

**Implementation:** `practice/avl_tree*` / `avlTreePractice*` — catalog [`avl-tree`](items/trees/avl-tree.md): `npm run demo -- avl-tree`.

**Walkthrough:** [Worked examples — AVL tree](worked-examples.md#avl-tree-insert-and-search).

## 68. Red-black tree

**Statement:** Insert integer key/value pairs; search present keys and confirm a miss returns null/none.

**Implementation:** `practice/red_black_tree*` / `redBlackTreePractice*` — catalog [`red-black-tree`](items/trees/red-black-tree.md): `npm run demo -- red-black-tree`.

**Walkthrough:** [Worked examples — Red-black tree](worked-examples.md#red-black-tree-insert-and-search).

## 69. Singly linked list

**Statement:** Build a singly linked list with `addLast`, indexed `get`, and `remove`; match golden size and values.

**Implementation:** `practice/singly_linked_list*` / `singlyLinkedListPractice*` — catalog [`singly-linked-list`](items/linear/singly-linked-list.md): `npm run demo -- singly-linked-list`.

**Walkthrough:** [Worked examples — Singly linked list](worked-examples.md#singly-linked-list-add-get-remove).

## 70. Doubly linked list

**Statement:** Build a doubly linked list with `addFirst`/`addLast`, indexed access, and removal.

**Implementation:** `practice/doubly_linked_list*` / `doublyLinkedListPractice*` — catalog [`doubly-linked-list`](items/linear/doubly-linked-list.md): `npm run demo -- doubly-linked-list`.

**Walkthrough:** [Worked examples — Doubly linked list](worked-examples.md#doubly-linked-list-add-first-and-last).

## 71. Tree traversals

**Statement:** Insert into a BST and return in-order, pre-order, and post-order key lists.

**Implementation:** `practice/tree_traversals*` / `treeTraversalsPractice*` — catalog [`tree-traversals`](items/trees/tree-traversals.md): `npm run demo -- tree-traversals`.

**Walkthrough:** [Worked examples — Tree traversals](worked-examples.md#tree-traversals-bst-key-orders).

## 72. Separate chaining

**Statement:** Apply `put` operations on a chained hash table and verify `get` / missing keys.

**Implementation:** `practice/separate_chaining*` / `separateChainingPractice*` — catalog [`separate-chaining`](items/hashing/separate-chaining.md): `npm run demo -- separate-chaining`.

**Walkthrough:** [Worked examples — Separate chaining](worked-examples.md#separate-chaining-hash-map).

## 73. Open addressing

**Statement:** Linear-probing hash table: `put`, `get`, `remove`, and lookup after delete.

**Implementation:** `practice/open_addressing*` / `openAddressingPractice*` — catalog [`open-addressing`](items/hashing/open-addressing.md): `npm run demo -- open-addressing`.

**Walkthrough:** [Worked examples — Open addressing](worked-examples.md#open-addressing-hash-map).

## 74. Suffix array

**Statement:** Return the suffix-array (sorted starting indices) for a string.

**Implementation:** `practice/suffix_array*` / `suffixArrayPractice*` — catalog [`suffix-array`](items/strings/suffix-array.md): `npm run demo -- suffix-array`.

**Walkthrough:** [Worked examples — Suffix array](worked-examples.md#suffix-array-sorted-indices).

## 75. Treap

**Statement:** With a fixed RNG seed, insert key/value pairs and search (including misses).

**Implementation:** `practice/treap*` / `treapPractice*` — catalog [`treap`](items/trees/treap.md): `npm run demo -- treap`.

**Walkthrough:** [Worked examples — Treap](worked-examples.md#treap-seeded-insert-and-search).

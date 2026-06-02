# Canonical API (trilingual)

Per-language public symbols are defined in `tools/api-manifest.mjs` (source of truth).
Null/empty: arrays may be `null` (Java/JS) or `None` (Python); sorts no-op; searches return `-1` or empty.

## linear-search

Find a target value in an array by sequential scan.

| Language | Module |
|----------|--------|
| Java | `LinearSearch` |
| Python | `linear_search` |
| JavaScript | `linearSearch` |

**Operations:**
- `indexOf` → Python `index_of`, JS `indexOf`

## binary-search

Find a key in a sorted array, including first/last duplicate boundaries.

| Language | Module |
|----------|--------|
| Java | `BinarySearch` |
| Python | `binary_search` |
| JavaScript | `binarySearch` |

**Operations:**
- `search` → Python `search`, JS `search`
- `firstOccurrence` → Python `first_occurrence`, JS `firstOccurrence`
- `lastOccurrence` → Python `last_occurrence`, JS `lastOccurrence`

## quick-select

Find the k-th smallest element in an unordered array.

| Language | Module |
|----------|--------|
| Java | `QuickSelect` |
| Python | `quick_select` |
| JavaScript | `quickSelect` |

**Operations:**
- `kthSmallest` → Python `kth_smallest`, JS `kthSmallest`

## bubble-sort

Sort an array in ascending order in place.

| Language | Module |
|----------|--------|
| Java | `BubbleSort` |
| Python | `bubble_sort` |
| JavaScript | `bubbleSort` |

**Operations:**
- `sort` → Python `sort`, JS `sort`

## selection-sort

Sort an array in ascending order in place.

| Language | Module |
|----------|--------|
| Java | `SelectionSort` |
| Python | `selection_sort` |
| JavaScript | `selectionSort` |

**Operations:**
- `sort` → Python `sort`, JS `sort`

## insertion-sort

Sort an array in ascending order in place (efficient on nearly sorted input).

| Language | Module |
|----------|--------|
| Java | `InsertionSort` |
| Python | `insertion_sort` |
| JavaScript | `insertionSort` |

**Operations:**
- `sort` → Python `sort`, JS `sort`

## merge-sort

Return a stably sorted copy via top-down or bottom-up merge passes.

| Language | Module |
|----------|--------|
| Java | `MergeSort` |
| Python | `merge_sort` |
| JavaScript | `mergeSort` |

**Operations:**
- `sort` → Python `sort`, JS `sort`
- `sortBottomUp` → Python `sort_bottom_up`, JS `sortBottomUp`

## quick-sort

Sort in place via Lomuto partition, optional random pivot, or 3-way partition.

| Language | Module |
|----------|--------|
| Java | `QuickSort` |
| Python | `quick_sort` |
| JavaScript | `quickSort` |

**Operations:**
- `sort` → Python `sort`, JS `sort`
- `sort3Way` → Python `sort_3way`, JS `sort3Way`

## heapsort

Sort an array in ascending order in place using a binary max-heap.

| Language | Module |
|----------|--------|
| Java | `HeapSort` |
| Python | `heap_sort` |
| JavaScript | `heapSort` |

**Operations:**
- `sort` → Python `sort`, JS `sort`

## counting-sort

Stable sort for non-negative integers in bounded range.

| Language | Module |
|----------|--------|
| Java | `CountingSort` |
| Python | `counting_sort` |
| JavaScript | `countingSort` |

**Operations:**
- `sort` → Python `sort`, JS `sort`
- `sortByDigit` → Python `sort_by_digit`, JS `sortByDigit`

## radix-sort

LSD radix sort for non-negative integers using counting sort per digit.

| Language | Module |
|----------|--------|
| Java | `RadixSort` |
| Python | `radix_sort` |
| JavaScript | `radixSort` |

**Operations:**
- `sort` → Python `sort`, JS `sort`

## kmp

Find first occurrence of a pattern in text.

| Language | Module |
|----------|--------|
| Java | `KMP` |
| Python | `kmp` |
| JavaScript | `kmp` |

**Operations:**
- `search` → Python `search`, JS `search`

## dynamic-array

Resizable array-backed list with amortized append.

| Language | Module |
|----------|--------|
| Java | `DynamicArray` |
| Python | `dynamic_array` |
| JavaScript | `dynamicArray` |

**Operations:**
- `size` → Python `size`, JS `size`
- `add` → Python `add`, JS `add`
- `get` → Python `get`, JS `get`
- `set` → Python `set`, JS `set`
- `remove` → Python `remove`, JS `remove`

## singly-linked-list

Singly linked list with head insertion and traversal.

| Language | Module |
|----------|--------|
| Java | `SinglyLinkedList` |
| Python | `singly_linked_list` |
| JavaScript | `singlyLinkedList` |

**Operations:**
- `size` → Python `size`, JS `size`
- `addFirst` → Python `add_first`, JS `addFirst`
- `addLast` → Python `add_last`, JS `addLast`
- `get` → Python `get`, JS `get`
- `remove` → Python `remove`, JS `remove`
- `reverse` → Python `reverse`, JS `reverse`

## doubly-linked-list

Doubly linked list supporting O(1) removal given a node reference.

| Language | Module |
|----------|--------|
| Java | `DoublyLinkedList` |
| Python | `doubly_linked_list` |
| JavaScript | `doublyLinkedList` |

**Operations:**
- `size` → Python `size`, JS `size`
- `addFirst` → Python `add_first`, JS `addFirst`
- `addLast` → Python `add_last`, JS `addLast`
- `get` → Python `get`, JS `get`
- `remove` → Python `remove`, JS `remove`
- `reverse` → Python `reverse`, JS `reverse`

## stack

LIFO stack backed by dynamic array.

| Language | Module |
|----------|--------|
| Java | `Stack` |
| Python | `stack` |
| JavaScript | `stack` |

**Operations:**
- `push` → Python `push`, JS `push`
- `pop` → Python `pop`, JS `pop`
- `peek` → Python `peek`, JS `peek`
- `isEmpty` → Python `is_empty`, JS `isEmpty`

## queue

FIFO queue backed by circular buffer.

| Language | Module |
|----------|--------|
| Java | `Queue` |
| Python | `queue` |
| JavaScript | `queue` |

**Operations:**
- `enqueue` → Python `enqueue`, JS `enqueue`
- `dequeue` → Python `dequeue`, JS `dequeue`
- `peek` → Python `peek`, JS `peek`
- `isEmpty` → Python `is_empty`, JS `isEmpty`

## deque

Double-ended queue with O(1) push/pop at both ends.

| Language | Module |
|----------|--------|
| Java | `Deque` |
| Python | `deque` |
| JavaScript | `deque` |

**Operations:**
- `addFirst` → Python `add_first`, JS `addFirst`
- `addLast` → Python `add_last`, JS `addLast`
- `removeFirst` → Python `remove_first`, JS `removeFirst`
- `removeLast` → Python `remove_last`, JS `removeLast`
- `isEmpty` → Python `is_empty`, JS `isEmpty`

## binary-heap

Array-based binary heap (min or max) with heapify operations.

| Language | Module |
|----------|--------|
| Java | `BinaryHeap` |
| Python | `binary_heap` |
| JavaScript | `binaryHeap` |

**Operations:**
- `size` → Python `size`, JS `size`
- `peek` → Python `peek`, JS `peek`
- `insert` → Python `insert`, JS `insert`
- `extractMin` → Python `extract_min`, JS `extractMin`
- `decreaseKey` → Python `decrease_key`, JS `decreaseKey`
- `indexOf` → Python `index_of`, JS `indexOf`
- `heapify` → Python `heapify`, JS `heapify`

## priority-queue

Min-priority queue for scheduling by priority.

| Language | Module |
|----------|--------|
| Java | `PriorityQueue` |
| Python | `priority_queue` |
| JavaScript | `priorityQueue` |

**Operations:**
- `insert` → Python `insert`, JS `insert`
- `peek` → Python `peek`, JS `peek`
- `extractMin` → Python `extract_min`, JS `extractMin`
- `decreaseKey` → Python `decrease_key`, JS `decreaseKey`
- `isEmpty` → Python `is_empty`, JS `isEmpty`
- `size` → Python `size`, JS `size`
- `heap` → Python `heap`, JS `heap`

## bst

Binary search tree for ordered key storage.

| Language | Module |
|----------|--------|
| Java | `BST` |
| Python | `bst` |
| JavaScript | `bst` |

**Operations:**
- `insert` → Python `insert`, JS `insert`
- `search` → Python `search`, JS `search`
- `delete` → Python `delete`, JS `delete`
- `successor` → Python `successor`, JS `successor`
- `predecessor` → Python `predecessor`, JS `predecessor`
- `inOrder` → Python `in_order`, JS `inOrder`
- `getRoot` → Python `get_root`, JS `getRoot`

## tree-traversals

In-order, pre-order, post-order, and level-order tree walks.

| Language | Module |
|----------|--------|
| Java | `TreeTraversals` |
| Python | `tree_traversals` |
| JavaScript | `treeTraversals` |

**Operations:**
- `inOrderRecursive` → Python `in_order_recursive`, JS `inOrderRecursive`
- `preOrderRecursive` → Python `pre_order_recursive`, JS `preOrderRecursive`
- `postOrderRecursive` → Python `post_order_recursive`, JS `postOrderRecursive`
- `inOrderIterative` → Python `in_order_iterative`, JS `inOrderIterative`
- `preOrderIterative` → Python `pre_order_iterative`, JS `preOrderIterative`
- `postOrderIterative` → Python `post_order_iterative`, JS `postOrderIterative`
- `levelOrder` → Python `level_order`, JS `levelOrder`

## avl-tree

Self-balancing BST with height-balance after insert/delete.

| Language | Module |
|----------|--------|
| Java | `AVLTree` |
| Python | `avl_tree` |
| JavaScript | `avlTree` |

**Operations:**
- `insert` → Python `insert`, JS `insert`
- `delete` → Python `delete`, JS `delete`

## order-statistic-tree

BST augmented with subtree sizes for rank and select.

| Language | Module |
|----------|--------|
| Java | `OrderStatisticTree` |
| Python | `order_statistic_tree` |
| JavaScript | `orderStatisticTree` |

**Operations:**
- `insert` → Python `insert`, JS `insert`
- `select` → Python `select`, JS `select`
- `rank` → Python `rank`, JS `rank`

## interval-tree

Store intervals and query overlaps with a point or interval.

| Language | Module |
|----------|--------|
| Java | `IntervalTree` |
| Python | `interval_tree` |
| JavaScript | `intervalTree` |

**Operations:**
- `insert` → Python `insert`, JS `insert`
- `overlapSearch` → Python `overlap_search`, JS `overlapSearch`

## trie

Prefix tree for string keys with prefix search.

| Language | Module |
|----------|--------|
| Java | `Trie` |
| Python | `trie` |
| JavaScript | `trie` |

**Operations:**
- `insert` → Python `insert`, JS `insert`
- `search` → Python `search`, JS `search`
- `startsWith` → Python `starts_with`, JS `startsWith`

## b-tree

Disk-oriented multi-way search tree with bounded node fanout.

| Language | Module |
|----------|--------|
| Java | `BTree` |
| Python | `b_tree` |
| JavaScript | `bTree` |

**Operations:**
- `search` → Python `search`, JS `search`
- `insert` → Python `insert`, JS `insert`

## separate-chaining

Hash map with linked-list buckets and load-factor resize.

| Language | Module |
|----------|--------|
| Java | `HashTableChaining` |
| Python | `separate_chaining` |
| JavaScript | `separateChaining` |

**Operations:**
- `put` → Python `put`, JS `put`
- `get` → Python `get`, JS `get`
- `remove` → Python `remove`, JS `remove`
- `size` → Python `size`, JS `size`

## open-addressing

Hash map with probing collision resolution and tombstones.

| Language | Module |
|----------|--------|
| Java | `HashTableOpenAddressing` |
| Python | `open_addressing` |
| JavaScript | `openAddressing` |

**Operations:**
- `put` → Python `put`, JS `put`
- `get` → Python `get`, JS `get`
- `remove` → Python `remove`, JS `remove`

## bloom-filter

Probabilistic set membership with false positives possible.

| Language | Module |
|----------|--------|
| Java | `BloomFilter` |
| Python | `bloom_filter` |
| JavaScript | `bloomFilter` |

**Operations:**
- `add` → Python `add`, JS `add`
- `mightContain` → Python `might_contain`, JS `mightContain`

## union-find

Disjoint-set connectivity with union and find.

| Language | Module |
|----------|--------|
| Java | `UnionFind` |
| Python | `union_find` |
| JavaScript | `unionFind` |

**Operations:**
- `find` → Python `find`, JS `find`
- `union` → Python `union`, JS `union`
- `connected` → Python `connected`, JS `connected`
- `countComponents` → Python `count_components`, JS `countComponents`

## graph

Adjacency-list directed/undirected weighted graph representation.

| Language | Module |
|----------|--------|
| Java | `Graph` |
| Python | `graph` |
| JavaScript | `graph` |

**Operations:**
- `addEdge` → Python `add_edge`, JS `addEdge`
- `vertices` → Python `vertices`, JS `vertices`
- `neighbors` → Python `neighbors`, JS `neighbors`
- `allEdges` → Python `all_edges`, JS `allEdges`
- `isDirected` → Python `is_directed`, JS `isDirected`
- `isWeighted` → Python `is_weighted`, JS `isWeighted`

## bfs

Breadth-first traversal and unweighted shortest paths.

| Language | Module |
|----------|--------|
| Java | `BFS` |
| Python | `bfs` |
| JavaScript | `bfs` |

**Operations:**
- `distances` → Python `distances`, JS `distances`

## dfs

Depth-first traversal, cycle detection, and connectivity.

| Language | Module |
|----------|--------|
| Java | `DFS` |
| Python | `dfs` |
| JavaScript | `dfs` |

**Operations:**
- `traverseRecursive` → Python `traverse_recursive`, JS `traverseRecursive`
- `traverseIterative` → Python `traverse_iterative`, JS `traverseIterative`

## topological-sort

Linear ordering of a DAG respecting all edges.

| Language | Module |
|----------|--------|
| Java | `TopologicalSort` |
| Python | `topological_sort` |
| JavaScript | `topologicalSort` |

**Operations:**
- `kahn` → Python `kahn`, JS `kahn`

## dijkstra

Single-source shortest paths on non-negative edge weights.

| Language | Module |
|----------|--------|
| Java | `Dijkstra` |
| Python | `dijkstra` |
| JavaScript | `dijkstra` |

**Operations:**
- `shortestPaths` → Python `shortest_paths`, JS `shortestPaths`

## bellman-ford

Single-source shortest paths with negative edges; detect negative cycles.

| Language | Module |
|----------|--------|
| Java | `BellmanFord` |
| Python | `bellman_ford` |
| JavaScript | `bellmanFord` |

**Operations:**
- `shortestPaths` → Python `shortest_paths`, JS `shortestPaths`

## floyd-warshall

All-pairs shortest paths via dynamic programming.

| Language | Module |
|----------|--------|
| Java | `FloydWarshall` |
| Python | `floyd_warshall` |
| JavaScript | `floydWarshall` |

**Operations:**
- `allPairsShortestPaths` → Python `all_pairs_shortest_paths`, JS `allPairsShortestPaths`

## kruskal-mst

Minimum spanning tree via sorted edges and union-find.

| Language | Module |
|----------|--------|
| Java | `KruskalMST` |
| Python | `kruskal_mst` |
| JavaScript | `kruskalMst` |

**Operations:**
- `mst` → Python `mst`, JS `mst`
- `totalWeight` → Python `total_weight`, JS `totalWeight`

## prim-mst

Minimum spanning tree growing from a start vertex.

| Language | Module |
|----------|--------|
| Java | `PrimMST` |
| Python | `prim_mst` |
| JavaScript | `primMst` |

**Operations:**
- `totalWeight` → Python `total_weight`, JS `totalWeight`

## boruvka-mst

Minimum spanning tree via repeated cheapest outgoing edge per component.

| Language | Module |
|----------|--------|
| Java | `BoruvkaMST` |
| Python | `boruvka_mst` |
| JavaScript | `boruvkaMst` |

**Operations:**
- `totalWeight` → Python `total_weight`, JS `totalWeight`

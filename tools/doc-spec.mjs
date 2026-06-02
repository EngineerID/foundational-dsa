/**
 * Module-level documentation specs for canonical DSA items (purpose, technique, invariant, complexity).
 * Used by tools/apply-item-docs.mjs — do not copy textbook prose.
 */

export const DOC_SPECS = {
  'linear-search': {
    purpose: 'Find a target value in an array by sequential scan.',
    technique: 'Linear search',
    invariant: 'Scan index increases; all indices before current are not the target (if searching for first match).',
    complexity: 'search: Time O(n); Space O(1).',
  },
  'binary-search': {
    purpose: 'Find a key in a sorted array, including first/last duplicate boundaries.',
    technique: 'Binary search',
    invariant: 'If key exists, it lies in [lo, hi]; bounds shrink each step.',
    complexity: 'search/firstOccurrence/lastOccurrence: Time O(log n); Space O(1).',
  },
  'quick-select': {
    purpose: 'Find the k-th smallest element in an unordered array.',
    technique: 'Quickselect (Hoare partition)',
    invariant: 'Pivot partition places pivot at final rank; recurse on one side only.',
    complexity: 'select: Time O(n) average, O(n²) worst; Space O(1).',
  },
  'bubble-sort': {
    purpose: 'Sort an array in ascending order in place.',
    technique: 'Bubble sort',
    invariant: 'After pass i, last i elements are in final sorted positions.',
    complexity: 'sort: Time O(n²); Space O(1).',
  },
  'selection-sort': {
    purpose: 'Sort an array in ascending order in place.',
    technique: 'Selection sort',
    invariant: 'Prefix [0..i) is sorted and contains the i smallest elements.',
    complexity: 'sort: Time O(n²); Space O(1).',
  },
  'insertion-sort': {
    purpose: 'Sort an array in ascending order in place (efficient on nearly sorted input).',
    technique: 'Insertion sort',
    invariant: 'Prefix [0..i) is sorted.',
    complexity: 'sort: Time O(n²) worst, O(n) best; Space O(1).',
  },
  'merge-sort': {
    purpose: 'Return a stably sorted copy via top-down or bottom-up merge passes.',
    technique: 'Top-down mergesort; bottom-up mergesort',
    invariant: 'Merged subarrays are sorted; equal elements keep relative order.',
    complexity: 'sort/sortBottomUp: Time O(n log n); Space O(n).',
  },
  'quick-sort': {
    purpose: 'Sort in place via Lomuto partition, optional random pivot, or 3-way partition.',
    technique: 'Lomuto partition; randomized pivot; 3-way Dutch national flag',
    invariant: '3-way: arr[lo..lt-1] < v, arr[lt..gt] == v, arr[gt+1..hi] > v.',
    complexity: 'sort/sort3Way: Time O(n log n) average; Space O(log n).',
  },
  heapsort: {
    purpose: 'Sort an array in ascending order in place using a binary max-heap.',
    technique: 'Heapsort',
    invariant: 'Max-heap on active prefix; largest moved to sorted suffix.',
    complexity: 'sort: Time O(n log n); Space O(1).',
  },
  'counting-sort': {
    purpose: 'Stable sort for non-negative integers in bounded range.',
    technique: 'Counting sort',
    invariant: 'Prefix counts place keys in stable order.',
    complexity: 'sort/sortByDigit: Time O(n + k); Space O(k).',
  },
  'radix-sort': {
    purpose: 'LSD radix sort for non-negative integers using counting sort per digit.',
    technique: 'LSD radix sort',
    invariant: 'After digit d, sorted by lower d digits.',
    complexity: 'sort: Time O(d * n); Space O(n).',
  },
  kmp: {
    purpose: 'Find first occurrence of a pattern in text.',
    technique: 'Knuth-Morris-Pratt',
    invariant: 'LPS table encodes longest borders of pattern prefixes.',
    complexity: 'search: Time O(n + m); Space O(m).',
  },
  'dynamic-array': {
    purpose: 'Resizable array-backed list with amortized append.',
    technique: 'Dynamic array doubling',
    invariant: 'size <= capacity; length tracks element count.',
    complexity: 'append/get/set: Time O(1) amortized; resize O(n); Space O(n).',
  },
  'singly-linked-list': {
    purpose: 'Singly linked list with head insertion and traversal.',
    technique: 'Singly linked list',
    invariant: 'Each node next points to successor or null.',
    complexity: 'prepend/search: Time O(1)/O(n); Space O(n).',
  },
  'doubly-linked-list': {
    purpose: 'Doubly linked list supporting O(1) removal given a node reference.',
    technique: 'Doubly linked list',
    invariant: 'prev/next links consistent on both sides of each node.',
    complexity: 'prepend/append/remove: Time O(1) at known node; Space O(n).',
  },
  stack: {
    purpose: 'LIFO stack backed by dynamic array.',
    technique: 'Array stack',
    invariant: 'Top index is size-1; pop only when non-empty.',
    complexity: 'push/pop/peek: Time O(1) amortized; Space O(n).',
  },
  queue: {
    purpose: 'FIFO queue backed by circular buffer.',
    technique: 'Circular array queue',
    invariant: 'head/tail delimit elements modulo capacity.',
    complexity: 'enqueue/dequeue: Time O(1) amortized; Space O(n).',
  },
  deque: {
    purpose: 'Double-ended queue with O(1) push/pop at both ends.',
    technique: 'Circular buffer deque',
    invariant: 'head/tail wrap in fixed or growing buffer.',
    complexity: 'pushFront/pushBack/pop: Time O(1) amortized; Space O(n).',
  },
  'binary-heap': {
    purpose: 'Array-based binary heap (min or max) with heapify operations.',
    technique: 'Binary heap',
    invariant: 'Parent <= children (min-heap) or >= (max-heap) at all indices.',
    complexity: 'insert/extract/peek: Time O(log n); buildHeap O(n); Space O(n).',
  },
  'priority-queue': {
    purpose: 'Min-priority queue for scheduling by priority.',
    technique: 'Binary min-heap priority queue',
    invariant: 'Heap property on underlying BinaryHeap.',
    complexity: 'insert/extractMin/peek: Time O(log n); Space O(n).',
  },
  bst: {
    purpose: 'Binary search tree for ordered key storage.',
    technique: 'Binary search tree',
    invariant: 'Left subtree keys < node < right subtree keys.',
    complexity: 'search/insert/delete: Time O(h) height; Space O(n).',
  },
  'tree-traversals': {
    purpose: 'In-order, pre-order, post-order, and level-order tree walks.',
    technique: 'DFS and BFS traversals',
    invariant: 'In-order visits left, node, right.',
    complexity: 'Each traversal: Time O(n); Space O(h) stack or O(w) queue.',
  },
  'avl-tree': {
    purpose: 'Self-balancing BST with height-balance after insert/delete.',
    technique: 'AVL tree (rotations)',
    invariant: 'Balance factor in {-1,0,1} at every node.',
    complexity: 'search/insert/delete: Time O(log n); Space O(n).',
  },
  'order-statistic-tree': {
    purpose: 'BST augmented with subtree sizes for rank and select.',
    technique: 'Order-statistic tree augmentation',
    invariant: 'size field equals 1 + left.size + right.size.',
    complexity: 'rank/select/insert/delete: Time O(log n); Space O(n).',
  },
  'interval-tree': {
    purpose: 'Store intervals and query overlaps with a point or interval.',
    technique: 'Centered interval tree',
    invariant: 'Intervals crossing center stored at node; left/right subtrees partition by center.',
    complexity: 'insert/query: Time O(log n + k) reported; Space O(n).',
  },
  trie: {
    purpose: 'Prefix tree for string keys with prefix search.',
    technique: 'Trie (R-way tree)',
    invariant: 'Path characters spell prefix to node.',
    complexity: 'insert/search/startsWith: Time O(L) key length; Space O(total chars).',
  },
  'b-tree': {
    purpose: 'Disk-oriented multi-way search tree with bounded node fanout.',
    technique: 'B-tree',
    invariant: 'All leaves same depth; keys per node between t and 2t-1 (except root).',
    complexity: 'search/insert/delete: Time O(log_t n); Space O(n).',
  },
  'separate-chaining': {
    purpose: 'Hash map with linked-list buckets and load-factor resize.',
    technique: 'Separate chaining',
    invariant: 'Load factor <= 0.75 before resize.',
    complexity: 'put/get/remove: Time O(1) average; resize O(n); Space O(n).',
  },
  'open-addressing': {
    purpose: 'Hash map with probing collision resolution and tombstones.',
    technique: 'Open addressing (linear/quadratic/double hashing)',
    invariant: 'Load factor <= 0.7; deleted slots tombstoned.',
    complexity: 'put/get/remove: Time O(1) average; Space O(n) slots.',
  },
  'bloom-filter': {
    purpose: 'Probabilistic set membership with false positives possible.',
    technique: 'Bloom filter (k hash functions)',
    invariant: 'All bits for an element set on insert; negative lookup => definitely absent.',
    complexity: 'add/mightContain: Time O(k); Space O(m) bits.',
  },
  'union-find': {
    purpose: 'Disjoint-set connectivity with union and find.',
    technique: 'Union-find (path compression, union by rank)',
    invariant: 'Parent pointers form forest; ranks approximate tree height.',
    complexity: 'find/union/connected: Time O(α(n)) amortized; Space O(n).',
  },
  graph: {
    purpose: 'Adjacency-list directed/undirected weighted graph representation.',
    technique: 'Adjacency list',
    invariant: 'Edges stored from source to neighbors with weights.',
    complexity: 'addEdge/neighbors: Time O(1) amortized; Space O(V+E).',
  },
  bfs: {
    purpose: 'Breadth-first traversal and unweighted shortest paths.',
    technique: 'BFS',
    invariant: 'Queue processes nodes in nondecreasing distance from source.',
    complexity: 'distances/traverse: Time O(V+E); Space O(V).',
  },
  dfs: {
    purpose: 'Depth-first traversal, cycle detection, and connectivity.',
    technique: 'DFS',
    invariant: 'Recursive/stack visit marks discovered nodes until backtrack.',
    complexity: 'traverse/hasCycle: Time O(V+E); Space O(V).',
  },
  'topological-sort': {
    purpose: 'Linear ordering of a DAG respecting all edges.',
    technique: 'Kahn topological sort (BFS in-degree)',
    invariant: 'Output order: for each edge u->v, pos[u] < pos[v].',
    complexity: 'sort: Time O(V+E); Space O(V).',
  },
  dijkstra: {
    purpose: 'Single-source shortest paths on non-negative edge weights.',
    technique: "Dijkstra's algorithm (indexed min-heap)",
    invariant: 'Extracted distances are final when weights nonnegative.',
    complexity: 'shortestPaths: Time O(E log V); Space O(V).',
  },
  'bellman-ford': {
    purpose: 'Single-source shortest paths with negative edges; detect negative cycles.',
    technique: 'Bellman-Ford relaxation',
    invariant: 'After i passes, shortest paths using <= i edges are correct.',
    complexity: 'shortestPaths: Time O(VE); Space O(V).',
  },
  'floyd-warshall': {
    purpose: 'All-pairs shortest paths via dynamic programming.',
    technique: 'Floyd-Warshall',
    invariant: 'dist[k][i][j] = shortest path using vertices {1..k} as intermediates.',
    complexity: 'allPairs: Time O(V³); Space O(V²).',
  },
  'kruskal-mst': {
    purpose: 'Minimum spanning tree via sorted edges and union-find.',
    technique: "Kruskal's MST",
    invariant: 'Selected edges form forest until connected; greedy safe for MST.',
    complexity: 'mstWeight: Time O(E log E); Space O(V).',
  },
  'prim-mst': {
    purpose: 'Minimum spanning tree growing from a start vertex.',
    technique: "Prim's MST (priority queue)",
    invariant: 'Cut property: min edge crossing cut is safe to add.',
    complexity: 'mstWeight: Time O(E log V); Space O(V).',
  },
  'boruvka-mst': {
    purpose: 'Minimum spanning tree via repeated cheapest outgoing edge per component.',
    technique: "Borůvka's MST",
    invariant: 'Each phase adds safe minimum edge per component.',
    complexity: 'mstWeight: Time O(E log V); Space O(V).',
  },
};

export function formatJavaDoc(spec) {
  return `/**
 * ${spec.purpose}
 * Technique: ${spec.technique}
 * Invariant: ${spec.invariant}
 * ${spec.complexity}
 */`;
}

export function formatPyDoc(spec) {
  return `"""${spec.purpose}

Technique: ${spec.technique}
Invariant: ${spec.invariant}
${spec.complexity}
"""`;
}

export function formatJsDoc(spec) {
  return `/**
 * ${spec.purpose}
 * Technique: ${spec.technique}
 * Invariant: ${spec.invariant}
 * ${spec.complexity}
 */`;
}

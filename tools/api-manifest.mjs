/**
 * Canonical public API per item: explicit java / python / javascript symbol names.
 */
import { ITEMS } from './matrix.mjs';

export const API_MANIFEST = {
  'linear-search': {
    type: 'static',
    java: ['indexOf'],
    python: ['index_of'],
    javascript: ['indexOf'],
  },
  'binary-search': {
    type: 'static',
    java: ['search', 'firstOccurrence', 'lastOccurrence'],
    python: ['search', 'first_occurrence', 'last_occurrence'],
    javascript: ['search', 'firstOccurrence', 'lastOccurrence'],
  },
  'quick-select': {
    type: 'static',
    java: ['kthSmallest'],
    python: ['kth_smallest'],
    javascript: ['kthSmallest'],
  },
  'bubble-sort': {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  'selection-sort': {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  'insertion-sort': {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  'merge-sort': {
    type: 'static',
    java: ['sort', 'sortBottomUp'],
    python: ['sort', 'sort_bottom_up'],
    javascript: ['sort', 'sortBottomUp'],
  },
  'quick-sort': {
    type: 'static',
    java: ['sort', 'sort3Way'],
    python: ['sort', 'sort_3way'],
    javascript: ['sort', 'sort3Way'],
  },
  heapsort: {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  'counting-sort': {
    type: 'static',
    java: ['sort', 'sortByDigit'],
    python: ['sort', 'sort_by_digit'],
    javascript: ['sort', 'sortByDigit'],
  },
  'radix-sort': {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  kmp: {
    type: 'static',
    java: ['search'],
    python: ['search'],
    javascript: ['search'],
  },
  'dynamic-array': {
    type: 'instance',
    java: ['size', 'add', 'get', 'set', 'remove'],
    python: ['size', 'add', 'get', 'set', 'remove'],
    javascript: ['size', 'add', 'get', 'set', 'remove'],
  },
  'singly-linked-list': {
    type: 'instance',
    java: ['size', 'addFirst', 'addLast', 'get', 'remove', 'reverse'],
    python: ['size', 'add_first', 'add_last', 'get', 'remove', 'reverse'],
    javascript: ['size', 'addFirst', 'addLast', 'get', 'remove', 'reverse'],
  },
  'doubly-linked-list': {
    type: 'instance',
    java: ['size', 'addFirst', 'addLast', 'get', 'remove', 'reverse'],
    python: ['size', 'add_first', 'add_last', 'get', 'remove', 'reverse'],
    javascript: ['size', 'addFirst', 'addLast', 'get', 'remove', 'reverse'],
  },
  stack: {
    type: 'instance',
    java: ['push', 'pop', 'peek', 'isEmpty'],
    python: ['push', 'pop', 'peek', 'is_empty'],
    javascript: ['push', 'pop', 'peek', 'isEmpty'],
  },
  queue: {
    type: 'instance',
    java: ['enqueue', 'dequeue', 'peek', 'isEmpty'],
    python: ['enqueue', 'dequeue', 'peek', 'is_empty'],
    javascript: ['enqueue', 'dequeue', 'peek', 'isEmpty'],
  },
  deque: {
    type: 'instance',
    java: ['addFirst', 'addLast', 'removeFirst', 'removeLast', 'isEmpty'],
    python: ['add_first', 'add_last', 'remove_first', 'remove_last', 'is_empty'],
    javascript: ['addFirst', 'addLast', 'removeFirst', 'removeLast', 'isEmpty'],
  },
  'binary-heap': {
    type: 'instance',
    java: ['size', 'peek', 'insert', 'extractMin', 'decreaseKey', 'indexOf', 'heapify'],
    python: ['size', 'peek', 'insert', 'extract_min', 'decrease_key', 'index_of', 'heapify'],
    javascript: ['size', 'peek', 'insert', 'extractMin', 'decreaseKey', 'indexOf', 'heapify'],
  },
  'priority-queue': {
    type: 'instance',
    java: ['insert', 'peek', 'extractMin', 'decreaseKey', 'isEmpty', 'size', 'heap'],
    python: ['insert', 'peek', 'extract_min', 'decrease_key', 'is_empty', 'size', 'heap'],
    javascript: ['insert', 'peek', 'extractMin', 'decreaseKey', 'isEmpty', 'size', 'heap'],
  },
  bst: {
    type: 'instance',
    java: ['insert', 'search', 'delete', 'successor', 'predecessor', 'inOrder', 'getRoot'],
    python: ['insert', 'search', 'delete', 'successor', 'predecessor', 'in_order', 'get_root'],
    javascript: ['insert', 'search', 'delete', 'successor', 'predecessor', 'inOrder', 'getRoot'],
  },
  'tree-traversals': {
    type: 'static',
    java: [
      'inOrderRecursive',
      'preOrderRecursive',
      'postOrderRecursive',
      'inOrderIterative',
      'preOrderIterative',
      'postOrderIterative',
      'levelOrder',
    ],
    python: [
      'in_order_recursive',
      'pre_order_recursive',
      'post_order_recursive',
      'in_order_iterative',
      'pre_order_iterative',
      'post_order_iterative',
      'level_order',
    ],
    javascript: [
      'inOrderRecursive',
      'preOrderRecursive',
      'postOrderRecursive',
      'inOrderIterative',
      'preOrderIterative',
      'postOrderIterative',
      'levelOrder',
    ],
  },
  'avl-tree': {
    type: 'instance',
    java: ['insert', 'delete'],
    python: ['insert', 'delete'],
    javascript: ['insert', 'delete'],
  },
  'order-statistic-tree': {
    type: 'instance',
    java: ['insert', 'select', 'rank'],
    python: ['insert', 'select', 'rank'],
    javascript: ['insert', 'select', 'rank'],
  },
  'interval-tree': {
    type: 'instance',
    java: ['insert', 'overlapSearch'],
    python: ['insert', 'overlap_search'],
    javascript: ['insert', 'overlapSearch'],
  },
  trie: {
    type: 'instance',
    java: ['insert', 'search', 'startsWith'],
    python: ['insert', 'search', 'starts_with'],
    javascript: ['insert', 'search', 'startsWith'],
  },
  'b-tree': {
    type: 'instance',
    java: ['search', 'insert'],
    python: ['search', 'insert'],
    javascript: ['search', 'insert'],
  },
  'separate-chaining': {
    type: 'instance',
    java: ['put', 'get', 'remove', 'size'],
    python: ['put', 'get', 'remove', 'size'],
    javascript: ['put', 'get', 'remove', 'size'],
  },
  'open-addressing': {
    type: 'instance',
    java: ['put', 'get', 'remove'],
    python: ['put', 'get', 'remove'],
    javascript: ['put', 'get', 'remove'],
  },
  'bloom-filter': {
    type: 'instance',
    java: ['add', 'mightContain'],
    python: ['add', 'might_contain'],
    javascript: ['add', 'mightContain'],
  },
  'union-find': {
    type: 'instance',
    java: ['find', 'union', 'connected', 'countComponents'],
    python: ['find', 'union', 'connected', 'count_components'],
    javascript: ['find', 'union', 'connected', 'countComponents'],
  },
  graph: {
    type: 'instance',
    java: ['addEdge', 'vertices', 'neighbors', 'allEdges', 'isDirected', 'isWeighted'],
    python: ['add_edge', 'vertices', 'neighbors', 'all_edges', 'is_directed', 'is_weighted'],
    javascript: ['addEdge', 'vertices', 'neighbors', 'allEdges', 'isDirected', 'isWeighted'],
  },
  bfs: {
    type: 'static',
    java: ['distances'],
    python: ['distances'],
    javascript: ['distances'],
  },
  dfs: {
    type: 'static',
    java: ['traverseRecursive', 'traverseIterative'],
    python: ['traverse_recursive', 'traverse_iterative'],
    javascript: ['traverseRecursive', 'traverseIterative'],
  },
  'topological-sort': {
    type: 'static',
    java: ['kahn'],
    python: ['kahn'],
    javascript: ['kahn'],
  },
  dijkstra: {
    type: 'static',
    java: ['shortestPaths'],
    python: ['shortest_paths'],
    javascript: ['shortestPaths'],
  },
  'bellman-ford': {
    type: 'static',
    java: ['shortestPaths'],
    python: ['shortest_paths'],
    javascript: ['shortestPaths'],
  },
  'floyd-warshall': {
    type: 'static',
    java: ['allPairsShortestPaths'],
    python: ['all_pairs_shortest_paths'],
    javascript: ['allPairsShortestPaths'],
  },
  'kruskal-mst': {
    type: 'static',
    java: ['mst', 'totalWeight'],
    python: ['mst', 'total_weight'],
    javascript: ['mst', 'totalWeight'],
  },
  'prim-mst': {
    type: 'static',
    java: ['totalWeight'],
    python: ['total_weight'],
    javascript: ['totalWeight'],
  },
  'boruvka-mst': {
    type: 'static',
    java: ['totalWeight'],
    python: ['total_weight'],
    javascript: ['totalWeight'],
  },
};

export function expectedJavaSymbols(item) {
  const spec = API_MANIFEST[item.id];
  if (!spec) return [];
  if (spec.type === 'static') {
    return spec.java.map((m) => `${item.java}.${m}`);
  }
  return spec.java.map((m) => `${item.java}#${m}`);
}

export function expectedPySymbols(item) {
  const spec = API_MANIFEST[item.id];
  if (!spec) return [];
  return spec.python;
}

export function expectedJsSymbols(item) {
  const spec = API_MANIFEST[item.id];
  if (!spec) return [];
  return spec.javascript;
}

export function allItemIds() {
  return ITEMS.map((i) => i.id);
}

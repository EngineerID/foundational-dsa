/**
 * Canonical practice-problem doc anchors and worked-examples walkthrough slugs.
 * Used by check-practice-walkthrough-coverage.mjs and check-readme-index.mjs.
 */
export const PRACTICE_WALKTHROUGH_EXEMPT = Object.freeze({
  /** docAnchor → human-readable reason (must appear in practice-problems.md). */
});

/** @type {{ n: number, docAnchor: string, walkthroughSlug: string }[]} */
export const PRACTICE_PROBLEMS = [
  { n: 1, docAnchor: '1-two-sum-ii', walkthroughSlug: 'two-sum-ii-sorted-pair' },
  { n: 2, docAnchor: '2-maximum-subarray', walkthroughSlug: 'maximum-subarray-kadane' },
  { n: 3, docAnchor: '3-valid-parentheses', walkthroughSlug: 'valid-parentheses-stack' },
  { n: 4, docAnchor: '4-meeting-rooms-ii', walkthroughSlug: 'meeting-rooms-ii-min-heap' },
  { n: 5, docAnchor: '5-number-of-islands', walkthroughSlug: 'number-of-islands-grid-dfs' },
  { n: 6, docAnchor: '6-top-k-frequent-elements', walkthroughSlug: 'top-k-frequent-elements' },
  { n: 7, docAnchor: '7-course-schedule', walkthroughSlug: 'course-schedule-canfinish' },
  { n: 8, docAnchor: '8-longest-substring-without-repeating-characters', walkthroughSlug: 'longest-substring-without-repeating' },
  { n: 9, docAnchor: '9-coin-change', walkthroughSlug: 'coin-change-min-coins' },
  { n: 10, docAnchor: '10-lru-cache-design', walkthroughSlug: 'lru-cache-capacity-2' },
  { n: 11, docAnchor: '11-merge-intervals', walkthroughSlug: 'merge-intervals' },
  { n: 12, docAnchor: '12-binary-tree-level-order-traversal', walkthroughSlug: 'level-order-traversal-heap-array' },
  { n: 13, docAnchor: '13-word-search', walkthroughSlug: 'word-search-grid-backtracking' },
  { n: 14, docAnchor: '14-kth-largest-element', walkthroughSlug: 'quick-select-k-th-order-statistic' },
  { n: 15, docAnchor: '15-minimum-spanning-tree-kruskal', walkthroughSlug: 'kruskal-mst-union-find' },
  { n: 16, docAnchor: '16-trapping-rain-water', walkthroughSlug: 'trapping-rain-water-two-pointers' },
  { n: 17, docAnchor: '17-edit-distance', walkthroughSlug: 'edit-distance-kitten-to-sitting' },
  { n: 18, docAnchor: '18-serialize-and-deserialize-binary-tree', walkthroughSlug: 'serialize-binary-tree-level-order-codec' },
  { n: 19, docAnchor: '19-network-delay-time', walkthroughSlug: 'network-delay-time' },
  { n: 20, docAnchor: '20-sliding-window-maximum', walkthroughSlug: 'sliding-window-maximum' },
];

export const PRACTICE_DOC_ANCHORS = PRACTICE_PROBLEMS.map((p) => p.docAnchor);

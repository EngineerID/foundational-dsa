/**
 * Numeric scenarios aligned with docs/worked-examples.md interview walkthroughs.
 */
const { Graph } = require('../../src/graphs/graph');
const { kahn } = require('../../src/graphs/topologicalSort');
const { maxSlidingWindow } = require('../../src/linear/slidingWindowMaximum');
const { firstOccurrence } = require('../../src/searching/binarySearch');

describe('worked interview examples (docs parity)', () => {
  test('topological sort — course schedule DAG', () => {
    const dag = new Graph(4, true, false);
    dag.addEdge(0, 1);
    dag.addEdge(0, 2);
    dag.addEdge(1, 3);
    expect(kahn(dag)).toEqual([0, 1, 2, 3]);
  });

  test('sliding window maximum — window size 3', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ]);
  });

  test('binary search on answer — first index with value >= 7', () => {
    const sorted = [1, 3, 5, 7, 9, 11];
    expect(firstOccurrence(sorted, 7)).toBe(3);
  });
});

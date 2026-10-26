/**
 * Numeric scenarios aligned with docs/worked-examples.md interview walkthroughs.
 */
const { Graph } = require('../../src/graphs/graph');
const { kahn } = require('../../src/graphs/topologicalSort');
const { maxSlidingWindow } = require('../../src/linear/slidingWindowMaximum');
const { firstOccurrence } = require('../../src/searching/binarySearch');
const { distances: bfsDistances } = require('../../src/graphs/bfs');
const { distance: editDistance } = require('../../src/dp/editDistance');

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

  test('BFS — unweighted distances from vertex 0', () => {
    const g = new Graph(5, false, false);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    expect(bfsDistances(g, 0)).toEqual([0, 1, 1, 2, -1]);
  });

  test('edit distance — kitten to sitting', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3);
  });
});

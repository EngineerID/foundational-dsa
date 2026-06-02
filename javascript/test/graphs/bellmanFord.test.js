const { Graph } = require('../../src/graphs/graph');
const { shortestPaths } = require('../../src/graphs/bellmanFord');

describe('BellmanFord', () => {
  test('negative edge relaxation', () => {
    const g = new Graph(3, true, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, -2);
    g.addEdge(0, 2, 3);
    const result = shortestPaths(g, 0);
    expect(result.hasNegativeCycle).toBe(false);
    expect(result.distances[2]).toBe(-1);
  });

  test('negative cycle detected', () => {
    const g = new Graph(3, true, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, -3);
    g.addEdge(2, 0, 1);
    expect(shortestPaths(g, 0).hasNegativeCycle).toBe(true);
  });

  test('single edge', () => {
    const g = new Graph(2, true, true);
    g.addEdge(0, 1, 5);
    expect(shortestPaths(g, 0).distances[1]).toBe(5);
  });
});

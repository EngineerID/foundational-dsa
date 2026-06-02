const { Graph } = require('../../src/graphs/graph');
const { shortestPaths, INF } = require('../../src/graphs/dijkstra');

describe('Dijkstra', () => {
  test('shortest paths', () => {
    const g = new Graph(4, true, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, 2);
    g.addEdge(0, 2, 4);
    const dist = shortestPaths(g, 0);
    expect(dist[0]).toBe(0);
    expect(dist[2]).toBe(3);
  });

  test('unreachable vertex', () => {
    const g = new Graph(3, true, true);
    g.addEdge(0, 1, 1);
    expect(shortestPaths(g, 0)[2]).toBe(INF);
  });

  test('zero weight edge', () => {
    const g = new Graph(2, true, true);
    g.addEdge(0, 1, 0);
    expect(shortestPaths(g, 0)[1]).toBe(0);
  });
});

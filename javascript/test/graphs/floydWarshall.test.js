const { Graph } = require('../../src/graphs/graph');
const { allPairsShortestPaths, INF } = require('../../src/graphs/floydWarshall');

describe('FloydWarshall', () => {
  test('all pairs path', () => {
    const g = new Graph(3, true, true);
    g.addEdge(0, 1, 2);
    g.addEdge(1, 2, 3);
    const dist = allPairsShortestPaths(g);
    expect(dist[0][2]).toBe(5);
  });

  test('no path inf', () => {
    const g = new Graph(2, true, true);
    g.addEdge(0, 1, 1);
    const dist = allPairsShortestPaths(g);
    expect(dist[1][0]).toBe(INF);
  });

  test('self distance zero', () => {
    const g = new Graph(2, false, false);
    g.addEdge(0, 1);
    const dist = allPairsShortestPaths(g);
    expect(dist[0][0]).toBe(0);
    expect(dist[1][1]).toBe(0);
  });
});

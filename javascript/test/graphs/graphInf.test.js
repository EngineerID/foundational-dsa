const { GRAPH_UNREACHABLE } = require('../../src/graphs/graphInf');
const { INF: dijkstraInf } = require('../../src/graphs/dijkstra');
const { shortestPaths: bellmanFord } = require('../../src/graphs/bellmanFord');
const { Graph } = require('../../src/graphs/graph');

describe('graph INF sentinel', () => {
  test('matches catalog golden unreachable distance', () => {
    expect(GRAPH_UNREACHABLE).toBe(536870911);
  });

  test('Dijkstra and Bellman-Ford export the same unreachable value', () => {
    expect(dijkstraInf).toBe(GRAPH_UNREACHABLE);
  });

  test('Bellman-Ford unreachable matches Dijkstra on disconnected vertex', () => {
    const g = new Graph(2, true, true);
    const dij = require('../../src/graphs/dijkstra').shortestPaths(g, 0);
    const bf = bellmanFord(g, 0);
    expect(bf.hasNegativeCycle).toBe(false);
    expect(bf.distances[1]).toBe(GRAPH_UNREACHABLE);
    expect(bf.distances[1]).toBe(dij[1]);
  });
});

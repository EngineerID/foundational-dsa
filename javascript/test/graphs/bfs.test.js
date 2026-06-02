const { Graph } = require('../../src/graphs/graph');
const { distances } = require('../../src/graphs/bfs');

describe('BFS', () => {
  test('unweighted distances', () => {
    const g = new Graph(5, false, false);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    const dist = distances(g, 0);
    expect(dist[0]).toBe(0);
    expect(dist[3]).toBe(2);
    expect(dist[4]).toBe(-1);
  });

  test('single vertex', () => {
    const g = new Graph(1, false, false);
    expect(distances(g, 0)).toEqual([0]);
  });

  test('disconnected component', () => {
    const g = new Graph(4, false, false);
    g.addEdge(0, 1);
    g.addEdge(2, 3);
    const dist = distances(g, 0);
    expect(dist[2]).toBe(-1);
  });
});

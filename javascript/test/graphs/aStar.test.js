const { Graph } = require('../../src/graphs/graph');
const { shortestPathLength } = require('../../src/graphs/aStar');

describe('A*', () => {
  test('shortest path length', () => {
    const g = new Graph(4, true, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, 2);
    g.addEdge(0, 2, 10);
    expect(shortestPathLength(g, 0, 2)).toBe(3);
  });

  test('unreachable goal', () => {
    const g = new Graph(3, true, true);
    g.addEdge(0, 1, 1);
    expect(shortestPathLength(g, 0, 2)).toBe(-1);
  });
});

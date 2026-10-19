const { Graph } = require('../../src/graphs/graph');
const { isBipartite } = require('../../src/graphs/bipartiteCheck');

describe('bipartite check', () => {
  test('path is bipartite', () => {
    const g = new Graph(4, false, false);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 3);
    expect(isBipartite(g)).toBe(true);
  });

  test('odd cycle is not bipartite', () => {
    const g = new Graph(3, false, false);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    expect(isBipartite(g)).toBe(false);
  });
});

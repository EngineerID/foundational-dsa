const { Graph } = require('../../src/graphs/graph');

describe('Graph', () => {
  test('undirected unweighted', () => {
    const g = new Graph(3, false, false);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    expect(g.vertices()).toBe(3);
    expect(g.neighbors(0).some((e) => e.to === 1)).toBe(true);
    expect(g.neighbors(1).some((e) => e.to === 0)).toBe(true);
  });

  test('directed weighted', () => {
    const g = new Graph(2, true, true);
    g.addEdge(0, 1, 5);
    expect(g.neighbors(0)[0].weight).toBe(5);
    expect(g.neighbors(1)).toHaveLength(0);
  });

  test('allEdges deduplicates undirected', () => {
    const g = new Graph(3, false, true);
    g.addEdge(0, 1, 2);
    g.addEdge(1, 2, 3);
    const edges = g.allEdges();
    expect(edges).toHaveLength(2);
  });
});

const { Graph } = require('../../src/graphs/graph');
const { mst, totalWeight } = require('../../src/graphs/kruskalMst');

describe('KruskalMST', () => {
  test('total weight', () => {
    const g = new Graph(4, false, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, 2);
    g.addEdge(2, 3, 3);
    g.addEdge(0, 3, 4);
    expect(totalWeight(g)).toBe(6);
  });

  test('edge count', () => {
    const g = new Graph(4, false, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, 2);
    g.addEdge(2, 3, 3);
    g.addEdge(0, 3, 4);
    expect(mst(g)).toHaveLength(3);
  });

  test('two vertices', () => {
    const g = new Graph(2, false, true);
    g.addEdge(0, 1, 7);
    expect(totalWeight(g)).toBe(7);
  });
});

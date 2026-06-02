const { Graph } = require('../../src/graphs/graph');
const { totalWeight } = require('../../src/graphs/primMst');

describe('PrimMST', () => {
  test('total weight matches kruskal', () => {
    const g = new Graph(4, false, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, 2);
    g.addEdge(2, 3, 3);
    g.addEdge(0, 3, 4);
    expect(totalWeight(g)).toBe(6);
  });

  test('star graph', () => {
    const g = new Graph(4, false, true);
    g.addEdge(0, 1, 1);
    g.addEdge(0, 2, 1);
    g.addEdge(0, 3, 1);
    expect(totalWeight(g)).toBe(3);
  });

  test('single vertex', () => {
    const g = new Graph(1, false, false);
    expect(totalWeight(g)).toBe(0);
  });
});

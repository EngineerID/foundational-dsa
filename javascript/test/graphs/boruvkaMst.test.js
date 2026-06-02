const { Graph } = require('../../src/graphs/graph');
const { totalWeight } = require('../../src/graphs/boruvkaMst');

describe('BoruvkaMST', () => {
  test('total weight', () => {
    const g = new Graph(4, false, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, 2);
    g.addEdge(2, 3, 3);
    g.addEdge(0, 3, 4);
    expect(totalWeight(g)).toBe(6);
  });

  test('chain graph', () => {
    const g = new Graph(3, false, true);
    g.addEdge(0, 1, 2);
    g.addEdge(1, 2, 3);
    expect(totalWeight(g)).toBe(5);
  });

  test('equal weight triangle', () => {
    const g = new Graph(3, false, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, 1);
    g.addEdge(0, 2, 1);
    expect(totalWeight(g)).toBe(2);
  });
});

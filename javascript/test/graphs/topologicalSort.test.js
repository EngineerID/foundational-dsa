const { Graph } = require('../../src/graphs/graph');
const { kahn } = require('../../src/graphs/topologicalSort');

describe('TopologicalSort', () => {
  test('dag order', () => {
    const dag = new Graph(4, true, false);
    dag.addEdge(0, 1);
    dag.addEdge(0, 2);
    dag.addEdge(1, 3);
    const order = kahn(dag);
    expect(order).toHaveLength(4);
    expect(order.indexOf(0)).toBeLessThan(order.indexOf(3));
  });

  test('cycle returns empty', () => {
    const g = new Graph(3, true, false);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    expect(kahn(g)).toEqual([]);
  });

  test('empty graph', () => {
    const g = new Graph(0, true, false);
    expect(kahn(g)).toEqual([]);
  });
});

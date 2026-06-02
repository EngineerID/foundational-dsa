const { Graph } = require('../../src/graphs/graph');
const { traverseRecursive, traverseIterative } = require('../../src/graphs/dfs');

describe('DFS', () => {
  test('recursive discovery finish', () => {
    const dag = new Graph(4, true, false);
    dag.addEdge(0, 1);
    dag.addEdge(0, 2);
    dag.addEdge(1, 3);
    const result = traverseRecursive(dag, 0);
    expect(result.discovery).toHaveLength(4);
    expect(result.discovery[0]).toBe(0);
    expect(result.finish[0]).toBeGreaterThan(result.discovery[0]);
  });

  test('iterative on chain', () => {
    const g = new Graph(3, true, false);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    const result = traverseIterative(g, 0);
    expect(result.discovery[0]).toBe(0);
    expect(result.discovery[1]).not.toBe(-1);
  });

  test('unreachable stays -1', () => {
    const g = new Graph(3, true, false);
    g.addEdge(0, 1);
    const result = traverseRecursive(g, 0);
    expect(result.discovery[2]).toBe(-1);
  });
});

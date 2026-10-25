const { Graph } = require('../../src/graphs/graph');
const { stronglyConnectedComponents } = require('../../src/graphs/tarjanScc');

describe('Tarjan SCC', () => {
  test('components', () => {
    const g = new Graph(5, true, false);
    g.addEdge(0, 1);
    g.addEdge(1, 0);
    g.addEdge(1, 2);
    g.addEdge(2, 1);
    g.addEdge(3, 4);
    const sorted = stronglyConnectedComponents(g).map((c) => [...c].sort()).sort((a, b) => a[0] - b[0]);
    expect(sorted).toEqual([[0, 1, 2], [3], [4]]);
  });
});

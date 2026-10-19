const { Graph } = require('../../src/graphs/graph');
const { stronglyConnectedComponents } = require('../../src/graphs/kosaraju');

describe('Kosaraju SCC', () => {
  test('matches tarjan shape', () => {
    const g = new Graph(5, true, false);
    g.addEdge(0, 1);
    g.addEdge(1, 0);
    g.addEdge(1, 2);
    g.addEdge(2, 1);
    g.addEdge(3, 4);
    const sizes = stronglyConnectedComponents(g).map((c) => c.length).sort();
    expect(sizes).toEqual([1, 1, 3]);
  });
});

const { Graph } = require('../../src/graphs/graph');
const { find } = require('../../src/graphs/articulationBridges');

describe('articulation bridges', () => {
  test('articulation point and bridge', () => {
    const g = new Graph(4, false, false);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(1, 3);
    const r = find(g);
    expect(r.articulationPoints).toEqual([1]);
    expect(r.bridges).toEqual([[1, 3]]);
  });
});

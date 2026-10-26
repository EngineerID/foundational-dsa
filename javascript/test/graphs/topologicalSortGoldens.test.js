const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { kahn } = require('../../src/graphs/topologicalSort');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/topological-sort-goldens.json'), 'utf8'),
);

describe('topological sort shared goldens', () => {
  for (const { n, directed, weighted, edges, expectedOrder } of goldens) {
    test(`n=${n} edges=${edges.length}`, () => {
      const g = new Graph(n, directed, weighted);
      for (const [u, v] of edges) {
        g.addEdge(u, v);
      }
      expect(kahn(g)).toEqual(expectedOrder);
    });
  }
});

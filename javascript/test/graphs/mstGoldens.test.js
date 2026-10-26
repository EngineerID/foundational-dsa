const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { mst, totalWeight: kruskalWeight } = require('../../src/graphs/kruskalMst');
const { totalWeight: primWeight } = require('../../src/graphs/primMst');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/mst-goldens.json'), 'utf8'),
);

describe('MST shared goldens', () => {
  for (const case_ of goldens) {
    test(`n=${case_.n}`, () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const [u, v, w] of case_.edges) {
        g.addEdge(u, v, w);
      }
      expect(kruskalWeight(g)).toBe(case_.kruskalWeight);
      expect(mst(g).length).toBe(case_.kruskalEdgeCount);
      expect(primWeight(g)).toBe(case_.primWeight);
    });
  }
});

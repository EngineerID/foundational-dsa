const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { totalWeight } = require('../../src/graphs/boruvkaMst');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/boruvka-mst-goldens.json'), 'utf8'));

describe('boruvka mst shared goldens', () => {
  for (const case_ of goldens) {
    test('weight', () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const [u, v, w] of case_.edges) g.addEdge(u, v, w);
      expect(totalWeight(g)).toBe(case_.totalWeight);
    });
  }
});

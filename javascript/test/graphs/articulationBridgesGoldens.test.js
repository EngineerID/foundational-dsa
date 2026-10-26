const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { find } = require('../../src/graphs/articulationBridges');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/articulation-bridges-goldens.json'), 'utf8'));

describe('articulation bridges shared goldens', () => {
  for (const case_ of goldens) {
    test('ap and bridges', () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const [u, v] of case_.edges) g.addEdge(u, v);
      const result = find(g);
      expect([...result.articulationPoints].sort((a, b) => a - b)).toEqual(case_.articulationPoints);
      expect(result.bridges.map((b) => [b[0], b[1]])).toEqual(case_.bridges);
    });
  }
});

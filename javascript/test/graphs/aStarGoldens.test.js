const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { shortestPathLength } = require('../../src/graphs/aStar');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/a-star-goldens.json'), 'utf8'));

describe('a-star shared goldens', () => {
  for (const case_ of goldens) {
    test('path length', () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const [u, v, w] of case_.edges) g.addEdge(u, v, w);
      expect(shortestPathLength(g, case_.source, case_.goal)).toBe(case_.length);
    });
  }
});

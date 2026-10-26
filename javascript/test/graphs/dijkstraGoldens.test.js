const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { shortestPaths } = require('../../src/graphs/dijkstra');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/dijkstra-goldens.json'), 'utf8'),
);

describe('dijkstra shared goldens', () => {
  for (const case_ of goldens) {
    test(`n=${case_.n} source=${case_.source}`, () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const [u, v, w] of case_.edges) {
        g.addEdge(u, v, w);
      }
      expect(shortestPaths(g, case_.source)).toEqual(case_.distances);
    });
  }
});

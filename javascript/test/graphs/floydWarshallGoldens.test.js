const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { allPairsShortestPaths } = require('../../src/graphs/floydWarshall');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/floyd-warshall-goldens.json'),
    'utf8',
  ),
);

describe('floyd-warshall shared goldens', () => {
  for (const case_ of goldens) {
    test('all pairs', () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const [u, v, w] of case_.edges) g.addEdge(u, v, w);
      const dist = allPairsShortestPaths(g);
      for (const [i, j, expected] of case_.pairs) {
        expect(dist[i][j]).toBe(expected);
      }
    });
  }
});

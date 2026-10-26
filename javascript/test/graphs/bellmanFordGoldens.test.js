const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { shortestPaths } = require('../../src/graphs/bellmanFord');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/bellman-ford-goldens.json'),
    'utf8',
  ),
);

describe('bellman-ford shared goldens', () => {
  for (const case_ of goldens) {
    test('shortest paths', () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const [u, v, w] of case_.edges) g.addEdge(u, v, w);
      const result = shortestPaths(g, case_.source);
      expect(result.hasNegativeCycle).toBe(case_.hasNegativeCycle);
      if (case_.distances) expect(result.distances).toEqual(case_.distances);
    });
  }
});

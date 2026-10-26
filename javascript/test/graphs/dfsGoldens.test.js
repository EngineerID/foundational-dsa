const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { traverseRecursive } = require('../../src/graphs/dfs');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/dfs-goldens.json'), 'utf8'),
);

describe('dfs shared goldens', () => {
  for (const case_ of goldens) {
    test(`n=${case_.n} source=${case_.source}`, () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const edge of case_.edges) {
        if (edge.length === 2) {
          g.addEdge(edge[0], edge[1], 1);
        } else {
          g.addEdge(edge[0], edge[1], edge[2]);
        }
      }
      const result = traverseRecursive(g, case_.source);
      expect(result.discovery).toEqual(case_.discovery);
      expect(result.finish).toEqual(case_.finish);
    });
  }
});

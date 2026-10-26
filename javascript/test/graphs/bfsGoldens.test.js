const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { distances } = require('../../src/graphs/bfs');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/bfs-goldens.json'), 'utf8'),
);

describe('bfs shared goldens', () => {
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
      expect(distances(g, case_.source)).toEqual(case_.distances);
    });
  }
});

const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/graph-goldens.json'), 'utf8'),
);

describe('graph shared goldens', () => {
  for (const case_ of goldens) {
    test(`n=${case_.n}`, () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const [u, v, w] of case_.edges) {
        g.addEdge(u, v, w);
      }
      expect(g.vertices()).toBe(case_.vertices);
      for (const [vertex, count] of Object.entries(case_.neighborCount)) {
        expect(g.neighbors(Number(vertex)).length).toBe(count);
      }
      for (const [vertex, toList] of Object.entries(case_.edgeTo)) {
        expect(g.neighbors(Number(vertex)).map((e) => e.to)).toEqual(toList);
      }
    });
  }
});

const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { isBipartite } = require('../../src/graphs/bipartiteCheck');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/bipartite-check-goldens.json'),
    'utf8',
  ),
);

function addEdge(g, edge) {
  if (edge.length === 2) g.addEdge(edge[0], edge[1]);
  else g.addEdge(edge[0], edge[1], edge[2]);
}

describe('bipartite check shared goldens', () => {
  for (const case_ of goldens) {
    test('is bipartite', () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const edge of case_.edges) addEdge(g, edge);
      expect(isBipartite(g)).toBe(case_.expected);
    });
  }
});

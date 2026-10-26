const fs = require('fs');
const path = require('path');
const { Graph } = require('../../src/graphs/graph');
const { stronglyConnectedComponents } = require('../../src/graphs/tarjanScc');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/tarjan-scc-goldens.json'), 'utf8'));

function sizes(g) {
  return stronglyConnectedComponents(g).map((c) => c.length).sort((a, b) => a - b);
}

describe('tarjan-scc shared goldens', () => {
  for (const case_ of goldens) {
    test('components', () => {
      const g = new Graph(case_.n, case_.directed, case_.weighted);
      for (const edge of case_.edges) {
        if (edge.length === 2) g.addEdge(edge[0], edge[1]);
        else g.addEdge(edge[0], edge[1], edge[2]);
      }
      expect(stronglyConnectedComponents(g).length).toBe(case_.componentCount);
      expect(sizes(g)).toEqual(case_.componentSizes);
    });
  }
});

const { stronglyConnectedComponents } = require('../graphs/kosaraju');
const { buildGraph } = require('./graphPractice');

function componentSizesSorted(n, edges) {
  const g = buildGraph(n, true, false, edges);
  const comps = stronglyConnectedComponents(g);
  return comps.map((c) => c.length).sort((a, b) => a - b);
}

module.exports = { componentSizesSorted };

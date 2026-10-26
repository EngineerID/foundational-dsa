const { find } = require('../graphs/articulationBridges');
const { buildGraph } = require('./graphPractice');

function articulationAndBridges(n, edges) {
  const g = buildGraph(n, false, false, edges);
  const result = find(g);
  return {
    articulationPoints: result.articulationPoints,
    bridges: result.bridges,
  };
}

module.exports = { articulationAndBridges };

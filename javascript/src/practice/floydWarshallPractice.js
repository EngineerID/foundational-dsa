const { allPairsShortestPaths } = require('../graphs/floydWarshall');
const { buildGraph } = require('./graphPractice');

function allPairsDistances(n, edges) {
  const g = buildGraph(n, true, true, edges);
  return allPairsShortestPaths(g);
}

module.exports = { allPairsDistances };

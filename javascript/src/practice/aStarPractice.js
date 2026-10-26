const { shortestPathLength } = require('../graphs/aStar');
const { buildGraph } = require('./graphPractice');

function pathLength(n, edges, source, goal) {
  const g = buildGraph(n, true, true, edges);
  return shortestPathLength(g, source, goal);
}

module.exports = { pathLength };

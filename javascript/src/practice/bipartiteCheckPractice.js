const { isBipartite } = require('../graphs/bipartiteCheck');
const { buildGraph } = require('./graphPractice');

function checkBipartite(n, edges) {
  const g = buildGraph(n, false, false, edges);
  return isBipartite(g);
}

module.exports = { checkBipartite };

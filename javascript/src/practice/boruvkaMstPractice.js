const { totalWeight } = require('../graphs/boruvkaMst');
const { buildGraph } = require('./graphPractice');

function mstTotalWeight(n, edges) {
  const g = buildGraph(n, false, true, edges);
  return totalWeight(g);
}

module.exports = { mstTotalWeight };

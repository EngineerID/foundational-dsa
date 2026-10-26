const { maxFlow } = require('../graphs/edmondsKarp');

function maxFlowValue(n, edges, source, sink) {
  return maxFlow(n, edges, source, sink);
}

module.exports = { maxFlowValue };

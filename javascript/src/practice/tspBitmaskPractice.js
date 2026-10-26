const { minCost } = require('../dp/tspBitmask');

function tspMinCost(dist) {
  return minCost(dist);
}

module.exports = { tspMinCost };

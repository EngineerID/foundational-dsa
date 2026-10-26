const { minMultiplications } = require('../dp/matrixChain');

function minCost(dimensions) {
  return minMultiplications(dimensions);
}

module.exports = { minCost };

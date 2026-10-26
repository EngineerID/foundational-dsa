const { minCost } = require('../graphs/hungarian');

function assignmentMinCost(cost) {
  return minCost(cost);
}

module.exports = { assignmentMinCost };

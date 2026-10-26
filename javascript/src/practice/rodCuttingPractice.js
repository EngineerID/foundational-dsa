const { maxProfit } = require('../dp/rodCutting');

function maxRevenue(prices, length) {
  return maxProfit(prices, length);
}

module.exports = { maxRevenue };

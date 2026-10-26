// Practice — 0/1 Knapsack maximum value

const { maxValue } = require('../dp/knapsack');

function knapsackMaxValue(weights, values, capacity) {
  return maxValue(weights, values, capacity);
}

module.exports = { knapsackMaxValue };

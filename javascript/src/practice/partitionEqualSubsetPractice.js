const { canPartition } = require('../dp/partitionEqualSubset');

function canSplitEqualSubset(nums) {
  return canPartition(nums);
}

module.exports = { canSplitEqualSubset };

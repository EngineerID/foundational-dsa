// Dynamic Programming — Maximum subarray (Kadane)

/**
 * Largest sum of any contiguous subarray (Kadane).
 * Technique: Kadane's algorithm
 * Invariant: cur is the best sum ending at the current index.
 * maxSubarray: Time O(n); Space O(1).
 */

/** @param {number[]} nums */
function maxSubarray(nums) {
  if (!nums || nums.length === 0) {
    throw new Error('nums must be non-empty');
  }
  let best = nums[0];
  let cur = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    cur = Math.max(nums[i], cur + nums[i]);
    best = Math.max(best, cur);
  }
  return best;
}

module.exports = { maxSubarray };

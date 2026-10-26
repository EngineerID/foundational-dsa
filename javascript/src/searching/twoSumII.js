// Searching — Two Sum II (sorted array)

/**
 * Two-pointer pair sum on a sorted array; returns 1-based indices.
 * Technique: Two pointers
 * Invariant: Answer lies in the current [lo, hi] window if it exists.
 * twoSumSorted: Time O(n); Space O(1).
 */

function twoSumSorted(nums, target) {
  if (!nums || nums.length < 2) throw new Error('nums must have at least two elements');
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const sum = nums[lo] + nums[hi];
    if (sum === target) return [lo + 1, hi + 1];
    if (sum < target) lo += 1;
    else hi -= 1;
  }
  throw new Error('no solution');
}

module.exports = { twoSumSorted };

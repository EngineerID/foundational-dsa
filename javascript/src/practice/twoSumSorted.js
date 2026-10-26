// Practice — Two Sum II (sorted array, 1-based indices)

/**
 * @param {number[]} nums sorted ascending
 * @param {number} target
 * @returns {number[]} 1-based indices [i, j], i < j
 */
function twoSumSorted(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const sum = nums[lo] + nums[hi];
    if (sum === target) {
      return [lo + 1, hi + 1];
    }
    if (sum < target) {
      lo += 1;
    } else {
      hi -= 1;
    }
  }
  throw new Error('no solution');
}

module.exports = { twoSumSorted };

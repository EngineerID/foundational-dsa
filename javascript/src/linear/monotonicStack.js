// Linear — Monotonic stack (next greater element)

/**
 * Next strictly greater element to the right for each index.
 * Technique: Monotonic decreasing stack
 * Invariant: Stack holds indices with strictly decreasing values.
 * nextGreaterElement: Time O(n); Space O(n).
 */

function nextGreaterElement(nums) {
  if (!nums || nums.length === 0) throw new Error('nums must be non-empty');
  const n = nums.length;
  const out = new Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n; i += 1) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      out[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return out;
}

module.exports = { nextGreaterElement };

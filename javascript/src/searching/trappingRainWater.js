// Searching — Trapping rain water

/**
 * Trapped water between elevation bars using two pointers.
 * Technique: Two pointers
 * Invariant: Process the lower side of the current window.
 * trap: Time O(n); Space O(1).
 */

function trap(height) {
  if (!height || height.length < 3) return 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left += 1;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right -= 1;
    }
  }
  return water;
}

module.exports = { trap };

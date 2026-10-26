// Practice — Trapping rain water (two pointers)

function trap(height) {
  const n = height.length;
  if (n < 3) return 0;
  let left = 0;
  let right = n - 1;
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

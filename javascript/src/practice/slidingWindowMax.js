// Practice — Sliding window maximum (monotonic deque)

function maxSlidingWindow(nums, k) {
  if (k <= 0) throw new Error('k must be positive');
  const n = nums.length;
  if (n === 0) return [];
  const dq = [];
  const out = [];
  for (let i = 0; i < n; i += 1) {
    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();
    dq.push(i);
    while (dq[0] <= i - k) dq.shift();
    if (i >= k - 1) out.push(nums[dq[0]]);
  }
  return out;
}

module.exports = { maxSlidingWindow };

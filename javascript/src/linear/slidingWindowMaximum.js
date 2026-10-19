// Linear — Sliding window maximum

/**
 * Maximum in each window of size k using a deque.
 * Technique: Monotonic deque
 * Invariant: Deque stores indices with decreasing values.
 * maxSlidingWindow: Time O(n); Space O(k).
 */

function maxSlidingWindow(nums, k) {
  if (k <= 0) throw new Error('k must be positive');
  if (!nums.length) return [];
  const dq = [];
  const out = [];
  for (let i = 0; i < nums.length; i += 1) {
    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();
    dq.push(i);
    while (dq[0] <= i - k) dq.shift();
    if (i >= k - 1) out.push(nums[dq[0]]);
  }
  return out;
}

module.exports = { maxSlidingWindow };

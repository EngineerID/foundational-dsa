function maxValue(weights, values, capacity) {
  if (capacity < 0) throw new Error('capacity must be non-negative');
  if (weights.length !== values.length) throw new Error('weights and values length mismatch');
  const dp = new Array(capacity + 1).fill(0);
  for (let i = 0; i < weights.length; i += 1) {
    const w = weights[i];
    const v = values[i];
    if (w < 0 || v < 0) throw new Error('negative weight or value');
    for (let c = capacity; c >= w; c -= 1) dp[c] = Math.max(dp[c], dp[c - w] + v);
  }
  return dp[capacity];
}

module.exports = { maxValue };

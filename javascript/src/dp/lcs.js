function length(a, b) {
  const s = a == null ? '' : a;
  const t = b == null ? '' : b;
  const prev = new Array(t.length + 1).fill(0);
  for (const ch of s) {
    const cur = [0];
    for (let j = 0; j < t.length; j += 1) {
      if (ch === t[j]) cur.push(prev[j] + 1);
      else cur.push(Math.max(prev[j + 1], cur[cur.length - 1]));
    }
    for (let j = 0; j <= t.length; j += 1) prev[j] = cur[j];
  }
  return prev[t.length];
}

module.exports = { length };

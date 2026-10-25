function distance(a, b) {
  const s = a == null ? '' : a;
  const t = b == null ? '' : b;
  const prev = Array.from({ length: t.length + 1 }, (_, i) => i);
  for (let i = 1; i <= s.length; i += 1) {
    const cur = [i];
    for (let j = 1; j <= t.length; j += 1) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      cur.push(Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost));
    }
    for (let j = 0; j <= t.length; j += 1) prev[j] = cur[j];
  }
  return prev[t.length];
}

module.exports = { distance };

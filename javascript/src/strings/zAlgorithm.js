// Strings — Z-Algorithm

function zArray(s) {
  const n = s.length;
  if (n === 0) return [];
  const z = new Array(n).fill(0);
  z[0] = n;
  let l = 0;
  let r = 0;
  for (let i = 1; i < n; i += 1) {
    if (i <= r) z[i] = Math.min(r - i + 1, z[i - l]);
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i] += 1;
    if (i + z[i] - 1 > r) {
      l = i;
      r = i + z[i] - 1;
    }
  }
  return z;
}

function search(text, pattern) {
  if (text == null || pattern == null) return -1;
  if (pattern.length === 0) return 0;
  if (pattern.length > text.length) return -1;
  const concat = `${pattern}$${text}`;
  const z = zArray(concat);
  const m = pattern.length;
  for (let i = m + 1; i < concat.length; i += 1) {
    if (z[i] === m) return i - m - 1;
  }
  return -1;
}

module.exports = { zArray, search };

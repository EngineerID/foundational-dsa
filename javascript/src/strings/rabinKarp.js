// Strings — Rabin-Karp

const BASE = 256;
const MOD = 1000000007;

function search(text, pattern) {
  if (text == null || pattern == null) return -1;
  if (pattern.length === 0) return 0;
  const n = text.length;
  const m = pattern.length;
  if (m > n) return -1;
  let h = 1;
  for (let i = 0; i < m - 1; i += 1) h = (h * BASE) % MOD;
  let patHash = 0;
  let winHash = 0;
  for (let i = 0; i < m; i += 1) {
    patHash = (patHash * BASE + pattern.charCodeAt(i)) % MOD;
    winHash = (winHash * BASE + text.charCodeAt(i)) % MOD;
  }
  for (let i = 0; i <= n - m; i += 1) {
    if (patHash === winHash && text.slice(i, i + m) === pattern) return i;
    if (i < n - m) {
      winHash = (winHash - text.charCodeAt(i) * h) % MOD;
      winHash = (winHash * BASE + text.charCodeAt(i + m)) % MOD;
      if (winHash < 0) winHash += MOD;
    }
  }
  return -1;
}

module.exports = { search };

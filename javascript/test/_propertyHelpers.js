const PROPERTY_TRIALS = 100;
const PROPERTY_SEED = 42;

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededRng() {
  return mulberry32(PROPERTY_SEED);
}

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

function isPermutation(original, result) {
  const count = (a) => {
    const m = new Map();
    for (const x of a) m.set(x, (m.get(x) || 0) + 1);
    return m;
  };
  const a = count(original);
  const b = count(result);
  if (a.size !== b.size) return false;
  for (const [k, v] of a) if (b.get(k) !== v) return false;
  return true;
}

function randomIntArray(rng, maxLen = 50) {
  const n = Math.floor(rng() * (maxLen + 1));
  return Array.from({ length: n }, () => Math.floor(rng() * 41) - 20);
}

function heapMinInvariant(heap) {
  for (let i = 0; i < heap.length; i++) {
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    if (l < heap.length && heap[l] < heap[i]) return false;
    if (r < heap.length && heap[r] < heap[i]) return false;
  }
  return true;
}

function bfsComponents(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  const seen = Array(n).fill(false);
  const comps = [];
  for (let start = 0; start < n; start++) {
    if (seen[start]) continue;
    const comp = new Set();
    const q = [start];
    seen[start] = true;
    while (q.length) {
      const u = q.shift();
      comp.add(u);
      for (const v of adj[u]) {
        if (!seen[v]) {
          seen[v] = true;
          q.push(v);
        }
      }
    }
    comps.push(comp);
  }
  return comps;
}

function bruteMstWeight(n, edges) {
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };
  let total = 0;
  let used = 0;
  const sorted = [...edges].sort((a, b) => a[2] - b[2]);
  for (const [u, v, w] of sorted) {
    const pu = find(u);
    const pv = find(v);
    if (pu !== pv) {
      parent[pu] = pv;
      total += w;
      used++;
      if (used === n - 1) return total;
    }
  }
  return 1e9;
}

module.exports = {
  PROPERTY_TRIALS,
  seededRng,
  isSorted,
  isPermutation,
  randomIntArray,
  heapMinInvariant,
  bfsComponents,
  bruteMstWeight,
};

// Graphs — Boruvka MST

const { UnionFind } = require('../unionfind/unionFind');

const INF = Math.floor(Number.MAX_SAFE_INTEGER / 4);

function totalWeight(graph) {
  const n = graph.vertices();
  const uf = new UnionFind(n);
  let total = 0;
  let components = n;
  const edges = graph.allEdges();
  while (components > 1) {
    const bestWeight = new Array(n).fill(INF);
    const bestTo = new Array(n).fill(-1);
    for (const [u, v, w] of edges) {
      const cu = uf.find(u);
      const cv = uf.find(v);
      if (cu === cv) {
        continue;
      }
      if (w < bestWeight[cu]) {
        bestWeight[cu] = w;
        bestTo[cu] = v;
      }
      if (w < bestWeight[cv]) {
        bestWeight[cv] = w;
        bestTo[cv] = u;
      }
    }
    let merged = false;
    for (let c = 0; c < n; c++) {
      if (bestTo[c] >= 0) {
        const u = c;
        const v = bestTo[c];
        if (!uf.connected(u, v)) {
          uf.union(u, v);
          total += bestWeight[c];
          components -= 1;
          merged = true;
        }
      }
    }
    if (!merged) {
      break;
    }
  }
  return total;
}

module.exports = { totalWeight };

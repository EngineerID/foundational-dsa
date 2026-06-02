const { UnionFind } = require('../../src/unionfind/unionFind');
const { PROPERTY_TRIALS, seededRng, bfsComponents } = require('../_propertyHelpers');

describe('property union-find', () => {
  test('connected vs BFS components', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const n = 2 + Math.floor(rng() * 10);
      const edges = [];
      for (let e = 0; e < Math.floor(rng() * n * 2); e++) {
        const u = Math.floor(rng() * n);
        const v = Math.floor(rng() * n);
        if (u !== v) edges.push([u, v]);
      }
      const uf = new UnionFind(n);
      for (const [u, v] of edges) uf.union(u, v);
      const comps = bfsComponents(n, edges);
      const compOf = Array(n).fill(-1);
      comps.forEach((comp, i) => comp.forEach((v) => { compOf[v] = i; }));
      for (let u = 0; u < n; u++) {
        for (let v = 0; v < n; v++) {
          const same = compOf[u] === compOf[v] && compOf[u] >= 0;
          expect(uf.connected(u, v)).toBe(same);
        }
      }
    }
  });
});

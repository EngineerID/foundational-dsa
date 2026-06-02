const { Graph } = require('../../src/graphs/graph');
const { distances: bfsDistances } = require('../../src/graphs/bfs');
const { shortestPaths: dijkstra, INF } = require('../../src/graphs/dijkstra');
const { shortestPaths: bellmanFord } = require('../../src/graphs/bellmanFord');
const { allPairsShortestPaths } = require('../../src/graphs/floydWarshall');
const { totalWeight: kruskalWeight } = require('../../src/graphs/kruskalMst');
const { totalWeight: primWeight } = require('../../src/graphs/primMst');
const { totalWeight: boruvkaWeight } = require('../../src/graphs/boruvkaMst');
const { kahn } = require('../../src/graphs/topologicalSort');
const {
  PROPERTY_TRIALS,
  seededRng,
  bruteMstWeight,
} = require('../_propertyHelpers');

function randomConnected(rng, n, weighted) {
  const g = new Graph(n, false, weighted);
  for (let i = 1; i < n; i++) {
    const u = Math.floor(rng() * i);
    const w = weighted ? 1 + Math.floor(rng() * 9) : 1;
    g.addEdge(u, i, w);
  }
  for (let e = 0; e < n; e++) {
    const u = Math.floor(rng() * n);
    const v = Math.floor(rng() * n);
    if (u !== v) g.addEdge(u, v, weighted ? 1 + Math.floor(rng() * 9) : 1);
  }
  return g;
}

describe('property graphs', () => {
  test('BFS matches Dijkstra unweighted', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const n = 2 + Math.floor(rng() * 8);
      const g = randomConnected(rng, n, true);
      for (let u = 0; u < n; u++) {
        for (const e of g.neighbors(u)) e.weight = 1;
      }
      const src = Math.floor(rng() * n);
      const bfs = bfsDistances(g, src);
      const dij = dijkstra(g, src);
      for (let v = 0; v < n; v++) {
        if (bfs[v] === -1) expect(dij[v]).toBe(INF);
        else expect(dij[v]).toBe(bfs[v]);
      }
    }
  });

  test('Dijkstra matches Bellman-Ford', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const n = 2 + Math.floor(rng() * 6);
      const g = new Graph(n, true, true);
      for (let i = 1; i < n; i++) g.addEdge(i - 1, i, 1 + Math.floor(rng() * 5));
      const src = 0;
      const dij = dijkstra(g, src);
      const bf = bellmanFord(g, src);
      expect(bf.hasNegativeCycle).toBe(false);
      for (let v = 0; v < n; v++) expect(dij[v]).toBe(bf.distances[v]);
    }
  });

  test('Bellman-Ford negative cycle', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const g = new Graph(3, true, true);
      g.addEdge(0, 1, 1);
      g.addEdge(1, 2, -2);
      g.addEdge(2, 0, -2);
      expect(bellmanFord(g, 0).hasNegativeCycle).toBe(true);
    }
  });

  test('Floyd matches Dijkstra', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const n = 2 + Math.floor(rng() * 5);
      const g = randomConnected(rng, n, true);
      const fw = allPairsShortestPaths(g);
      for (let s = 0; s < n; s++) {
        const dij = dijkstra(g, s);
        for (let v = 0; v < n; v++) expect(fw[s][v]).toBe(dij[v]);
      }
    }
  });

  test('MST same weight', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const n = 3 + Math.floor(rng() * 6);
      const g = randomConnected(rng, n, true);
      const k = kruskalWeight(g);
      const p = primWeight(g);
      const b = boruvkaWeight(g);
      const brute = bruteMstWeight(n, g.allEdges());
      expect(k).toBe(p);
      expect(p).toBe(b);
      expect(b).toBe(brute);
    }
  });

  test('topological order', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const n = 2 + Math.floor(rng() * 8);
      const g = new Graph(n, true, false);
      for (let u = 0; u < n; u++) {
        for (let v = u + 1; v < n; v++) {
          if (rng() < 0.4) g.addEdge(u, v);
        }
      }
      const order = kahn(g);
      if (!order.length) continue;
      const pos = Object.fromEntries(order.map((v, i) => [v, i]));
      for (let u = 0; u < n; u++) {
        for (const e of g.neighbors(u)) {
          if (pos[u] !== undefined && pos[e.to] !== undefined) {
            expect(pos[u]).toBeLessThan(pos[e.to]);
          }
        }
      }
    }
  });
});

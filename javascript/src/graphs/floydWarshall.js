// Graphs — Floyd-Warshall

const INF = Math.floor(Number.MAX_SAFE_INTEGER / 4);

function allPairsShortestPaths(graph) {
  const n = graph.vertices();
  const dist = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 0 : INF)),
  );
  for (let u = 0; u < n; u++) {
    for (const edge of graph.neighbors(u)) {
      dist[u][edge.to] = Math.min(dist[u][edge.to], edge.weight);
    }
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      if (dist[i][k] === INF) {
        continue;
      }
      for (let j = 0; j < n; j++) {
        if (dist[k][j] !== INF) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  }
  return dist;
}

module.exports = { allPairsShortestPaths, INF };

// Graphs — Adjacency list representation

/** Graph with adjacency list representation. */

class Edge {
  constructor(to, weight) {
    this.to = to;
    this.weight = weight;
  }
}

class Graph {
  constructor(vertices, directed, weighted) {
    this._vertices = vertices;
    this._directed = directed;
    this._weighted = weighted;
    this._adj = Array.from({ length: vertices }, () => []);
  }

  addEdge(from, to, weight = 1) {
    const w = this._weighted ? weight : 1;
    this._adj[from].push(new Edge(to, w));
    if (!this._directed) {
      this._adj[to].push(new Edge(from, w));
    }
  }

  vertices() {
    return this._vertices;
  }

  neighbors(v) {
    return this._adj[v];
  }

  allEdges() {
    const edges = [];
    for (let u = 0; u < this._vertices; u++) {
      for (const e of this._adj[u]) {
        if (this._directed || u < e.to) {
          edges.push([u, e.to, e.weight]);
        }
      }
    }
    return edges;
  }

  isDirected() {
    return this._directed;
  }

  isWeighted() {
    return this._weighted;
  }
}

module.exports = { Graph, Edge };

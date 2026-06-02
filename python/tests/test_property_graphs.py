"""Property tests: graph algorithm oracles (100 seeded trials each)."""

from dsa.graphs.bellman_ford import shortest_paths as bellman_ford
from dsa.graphs.bfs import distances as bfs_distances
from dsa.graphs.boruvka_mst import total_weight as boruvka_weight
from dsa.graphs.dijkstra import _INF, shortest_paths as dijkstra
from dsa.graphs.floyd_warshall import all_pairs_shortest_paths
from dsa.graphs.graph import Graph
from dsa.graphs.kruskal_mst import total_weight as kruskal_weight
from dsa.graphs.prim_mst import total_weight as prim_weight
from dsa.graphs.topological_sort import kahn

from _property_helpers import PROPERTY_TRIALS, brute_mst_weight, seeded_rng


def _random_connected_graph(rng, n: int, weighted: bool, directed: bool) -> Graph:
    g = Graph(n, directed=directed, weighted=weighted)
    for i in range(1, n):
        u = rng.randint(0, i - 1)
        w = rng.randint(1, 9) if weighted else 1
        g.add_edge(u, i, w)
    for _ in range(rng.randint(0, n)):
        u, v = rng.randint(0, n - 1), rng.randint(0, n - 1)
        if u != v:
            w = rng.randint(1, 9) if weighted else 1
            g.add_edge(u, v, w)
    return g


def test_bfs_matches_dijkstra_unweighted():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        n = rng.randint(2, 10)
        g = _random_connected_graph(rng, n, weighted=True, directed=False)
        for w in range(n):
            for e in g.neighbors(w):
                e.weight = 1
        src = rng.randint(0, n - 1)
        bfs = bfs_distances(g, src)
        dij = dijkstra(g, src)
        for v in range(n):
            if bfs[v] == -1:
                assert dij[v] == _INF
            else:
                assert dij[v] == bfs[v]


def test_dijkstra_matches_bellman_ford_nonnegative():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        n = rng.randint(2, 8)
        g = _random_connected_graph(rng, n, weighted=True, directed=True)
        src = rng.randint(0, n - 1)
        dij = dijkstra(g, src)
        bf = bellman_ford(g, src)
        assert not bf.has_negative_cycle
        for v in range(n):
            assert dij[v] == bf.distances[v]


def test_bellman_ford_negative_cycle():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        g = Graph(3, directed=True, weighted=True)
        g.add_edge(0, 1, 1)
        g.add_edge(1, 2, -2)
        g.add_edge(2, 0, -2)
        bf = bellman_ford(g, 0)
        assert bf.has_negative_cycle


def test_floyd_matches_dijkstra_all_pairs():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        n = rng.randint(2, 7)
        g = _random_connected_graph(rng, n, weighted=True, directed=False)
        fw = all_pairs_shortest_paths(g)
        for s in range(n):
            dij = dijkstra(g, s)
            for t in range(n):
                assert fw[s][t] == dij[t]


def test_mst_algorithms_same_weight():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        n = rng.randint(3, 9)
        g = _random_connected_graph(rng, n, weighted=True, directed=False)
        k = kruskal_weight(g)
        p = prim_weight(g)
        b = boruvka_weight(g)
        brute = brute_mst_weight(n, g.all_edges())
        assert k == p == b == brute


def test_topological_order_valid():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        n = rng.randint(2, 10)
        g = Graph(n, directed=True, weighted=False)
        for u in range(n):
            for v in range(u + 1, n):
                if rng.random() < 0.4:
                    g.add_edge(u, v)
        order = kahn(g)
        if not order:
            continue
        pos = {v: i for i, v in enumerate(order)}
        for u in range(n):
            for e in g.neighbors(u):
                if e.to in pos and u in pos:
                    assert pos[u] < pos[e.to]

from dsa.dp import (
    longest_palindromic_subsequence,
    matrix_chain,
    partition_equal_subset,
    rod_cutting,
    tsp_bitmask,
)
from dsa.graphs import (
    a_star,
    articulation_bridges,
    bipartite_check,
    edmonds_karp,
    graph,
    hungarian,
    kosaraju,
    tarjan_scc,
)
from dsa.linear import lru_cache, sliding_window_maximum
from dsa.searching import reservoir_sampling
from dsa.strings import aho_corasick, manacher, suffix_array
from dsa.trees import lca_binary_lifting, red_black_tree, sparse_table, treap


def test_a_star_path():
    g = graph.Graph(3, directed=True, weighted=True)
    g.add_edge(0, 1, 2)
    g.add_edge(1, 2, 3)
    assert a_star.shortest_path_length(g, 0, 2) == 5


def test_scc_algorithms():
    g = graph.Graph(5, directed=True, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(1, 2)
    g.add_edge(2, 0)
    g.add_edge(1, 3)
    g.add_edge(3, 4)
    t = tarjan_scc.strongly_connected_components(g)
    k = kosaraju.strongly_connected_components(g)
    assert sorted(len(c) for c in t) == sorted(len(c) for c in k)


def test_bipartite_and_articulation():
    g = graph.Graph(4, directed=False, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(1, 2)
    g.add_edge(2, 3)
    g.add_edge(3, 0)
    assert bipartite_check.is_bipartite(g)
    g2 = graph.Graph(3, directed=False, weighted=False)
    g2.add_edge(0, 1)
    g2.add_edge(1, 2)
    res = articulation_bridges.find(g2)
    assert 1 in res.articulation_points


def test_flow_and_assignment():
    flow = edmonds_karp.max_flow(4, [(0, 1, 3), (1, 2, 2), (0, 2, 1), (2, 3, 3)], 0, 3)
    assert flow == 3
    cost = hungarian.min_cost([[4, 1], [2, 3]])
    assert cost == 3


def test_trees_wave2():
    rb = red_black_tree.RedBlackTree()
    rb.insert(5, 50)
    assert rb.search(5) == 50
    tr = treap.Treap(seed=1)
    tr.insert(3, 30)
    assert tr.search(3) == 30
    lca = lca_binary_lifting.LCABinaryLifting([0, 0, 1])
    assert lca.query(2, 1) == 1
    st = sparse_table.SparseTable([1, 3, 2, 5])
    assert st.query(1, 3) == 2


def test_strings_wave2():
    assert manacher.longest_palindrome_length("babad") == 3
    sa = suffix_array.build("banana")
    assert sa[0] == 5
    hits = aho_corasick.search("ushers", ["he", "she", "his", "hers"])
    assert 1 in hits


def test_dp_wave2():
    assert matrix_chain.min_multiplications([10, 30, 5, 60]) == 4500
    assert longest_palindromic_subsequence.length("bbbab") == 4
    assert partition_equal_subset.can_partition([1, 5, 11, 5])
    assert rod_cutting.max_profit([1, 5, 8, 9], 4) == 10
    dist = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]]
    assert tsp_bitmask.min_cost(dist) == 80


def test_misc_wave2():
    assert len(reservoir_sampling.sample(list(range(10)), 3, seed=42)) == 3
    assert sliding_window_maximum.max_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3) == [
        3,
        3,
        5,
        5,
        6,
        7,
    ]
    cache = lru_cache.LRUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)
    assert cache.get(1) == 1
    cache.put(3, 3)
    assert cache.get(2) == -1

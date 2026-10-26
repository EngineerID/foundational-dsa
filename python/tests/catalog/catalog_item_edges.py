"""Per-item edge themes for catalog items not covered in test_edge_case_themes.py."""

from __future__ import annotations

import pytest

from dsa.dp import (
    coin_change,
    max_subarray,
    edit_distance,
    knapsack,
    lcs,
    lis,
    longest_palindromic_subsequence,
    matrix_chain,
    partition_equal_subset,
    rod_cutting,
    tsp_bitmask,
)
from dsa.graphs import (
    a_star,
    articulation_bridges,
    bellman_ford,
    bipartite_check,
    boruvka_mst,
    dfs,
    dijkstra,
    edmonds_karp,
    floyd_warshall,
    graph,
    hungarian,
    kosaraju,
    kruskal_mst,
    network_delay,
    number_of_islands,
    prim_mst,
    tarjan_scc,
    course_schedule,
    topological_sort,
    word_search,
)
from dsa.hashing import bloom_filter, open_addressing, separate_chaining
from dsa.heaps import meeting_rooms_ii, priority_queue, top_k_frequent_elements
from dsa.linear import (
    deque,
    doubly_linked_list,
    lru_cache,
    monotonic_stack,
    valid_parentheses,
    queue,
    singly_linked_list,
    sliding_window_maximum,
)
from dsa.searching import binary_search, reservoir_sampling, trapping_rain_water, two_sum_ii
from dsa.sorting import heap_sort, insertion_sort, merge_intervals, radix_sort, selection_sort
from dsa.strings import (
    aho_corasick,
    longest_substring_without_repeating,
    manacher,
    rabin_karp,
    suffix_array,
    z_algorithm,
)
from dsa.trees import (
    avl_tree,
    b_tree,
    bst,
    fenwick_tree,
    interval_tree,
    lca_binary_lifting,
    order_statistic_tree,
    red_black_tree,
    segment_tree,
    sparse_table,
    treap,
    level_order_traversal,
    serialize_binary_tree,
    tree_traversals,
    trie,
)
from dsa.trees.interval_tree import Interval

LARGE_N = 256


def _inplace_sort_battery(sort_fn):
    empty = []
    sort_fn(empty)
    assert empty == []
    single = [7]
    sort_fn(single)
    assert single == [7]
    dup = [2, 2, 1]
    sort_fn(dup)
    assert dup == [1, 2, 2]
    large = list(range(LARGE_N, 0, -1))
    sort_fn(large)
    assert large == list(range(1, LARGE_N + 1))


def test_remaining_sorts_edge_themes():
    _inplace_sort_battery(selection_sort.sort)
    _inplace_sort_battery(insertion_sort.sort)
    _inplace_sort_battery(heap_sort.sort)
    arr = [170, 45, 75, 90, 802, 24, 2, 66]
    radix_sort.sort(arr)
    assert arr == sorted([170, 45, 75, 90, 802, 24, 2, 66])


def test_binary_search_boundary_edge_themes():
    assert binary_search.first_occurrence([], 1) == -1
    assert binary_search.first_occurrence([2], 2) == 0
    assert binary_search.first_occurrence([1, 2, 2, 3], 2) == 1
    assert binary_search.first_occurrence(list(range(LARGE_N)), LARGE_N - 1) == LARGE_N - 1
    assert binary_search.last_occurrence([1, 2, 2, 3], 2) == 2
    assert binary_search.search([3, 1], 1) == -1


def test_singly_linked_list_edge_themes():
    lst = singly_linked_list.SinglyLinkedList()
    assert lst.size() == 0
    lst.add_first(1)
    assert lst.get(0) == 1
    lst.add_last(1)
    assert lst.size() == 2
    for i in range(LARGE_N):
        lst.add_last(i)
    with pytest.raises(IndexError):
        lst.get(-1)


def test_doubly_linked_list_edge_themes():
    lst = doubly_linked_list.DoublyLinkedList()
    assert lst.size() == 0
    lst.add_first(1)
    lst.add_last(2)
    assert lst.size() == 2
    assert lst.remove(0) == 1
    assert lst.size() == 1
    for i in range(LARGE_N):
        lst.add_last(i)
    with pytest.raises(IndexError):
        lst.get(lst.size())


def test_queue_and_deque_edge_themes():
    q = queue.Queue()
    assert q.is_empty()
    q.enqueue(1)
    assert q.peek() == 1
    q.enqueue(1)
    assert q.dequeue() == 1
    for i in range(LARGE_N):
        q.enqueue(i)
    with pytest.raises(RuntimeError):
        queue.Queue().dequeue()
    dq = deque.Deque()
    assert dq.is_empty()
    dq.add_last(1)
    dq.add_first(2)
    assert dq.remove_first() == 2
    for i in range(LARGE_N):
        dq.add_last(i)
    with pytest.raises(RuntimeError):
        deque.Deque().remove_last()


def test_priority_queue_edge_themes():
    pq = priority_queue.PriorityQueue()
    assert pq.is_empty()
    pq.insert(3)
    pq.insert(1)
    assert pq.peek() == 1
    pq.insert(1)
    assert pq.extract_min() == 1
    for i in range(LARGE_N):
        pq.insert(i)
    with pytest.raises(RuntimeError):
        priority_queue.PriorityQueue().extract_min()


def test_bst_and_traversals_edge_themes():
    tree = bst.BST()
    assert tree.search(1) is None
    tree.insert(5, "v")
    tree.insert(5, "dup")
    assert tree.search(5) == "dup"
    for i in range(LARGE_N):
        tree.insert(i, i)
    keys = tree_traversals.in_order_recursive(tree.root)
    assert keys[0] <= keys[-1]
    assert tree_traversals.in_order_recursive(None) == []


def test_avl_and_augmented_trees_edge_themes():
    avl = avl_tree.AVLTree()
    assert avl.search(99) is None
    avl.insert(10, "a")
    avl.insert(5, "b")
    avl.insert(5, "dup")
    assert avl.search(5) == "dup"
    for i in range(32):
        avl.insert(i, i)
    ost = order_statistic_tree.OrderStatisticTree()
    ost.insert(3, "x")
    assert ost.select(1) == 3
    with pytest.raises(ValueError):
        ost.select(0)
    itree = interval_tree.IntervalTree()
    itree.insert(Interval(0, 10))
    assert itree.overlap_search(Interval(5, 5))
    bt = b_tree.BTree(t=2)
    bt.insert(1)
    assert bt.search(1)
    for i in range(20):
        bt.insert(i)


def test_trie_and_hashing_edge_themes():
    t = trie.Trie()
    assert not t.search("")
    t.insert("a")
    assert t.search("a")
    t.insert("aa")
    assert t.starts_with("a")
    long_word = "a" * 8
    t.insert(long_word)
    assert t.search(long_word)
    ht = separate_chaining.HashTableChaining()
    ht.put("a", 1)
    ht.put("a", 2)
    assert ht.get("a") == 2
    for i in range(LARGE_N):
        ht.put(str(i), i)
    oa = open_addressing.HashTableOpenAddressing()
    oa.put("k", 1)
    assert oa.get("k") == 1
    bf = bloom_filter.BloomFilter(10, 0.01)
    assert not bf.might_contain("missing")
    bf.add("x")
    assert bf.might_contain("x")


def test_new_trees_strings_dp_edge_themes():
    st = segment_tree.SegmentTree([1, 2, 3])
    assert st.range_sum(0, 2) == 6
    st.update(0, 5)
    assert st.range_sum(0, 0) == 5
    ft = fenwick_tree.FenwickTree(3)
    ft.add(0, 1)
    ft.add(1, 2)
    assert ft.range_sum(0, 1) == 3
    assert z_algorithm.search("abc", "") == 0
    assert rabin_karp.search("abc", "b") == 1
    assert longest_substring_without_repeating.length_of_longest_substring("abc") == 3
    assert lis.length([1, 2, 3]) == 3
    assert lcs.length("ab", "a") == 1
    assert knapsack.max_value([1], [5], 1) == 5
    assert edit_distance.distance("a", "b") == 1
    assert coin_change.min_coins([1], 0) == 0
    assert max_subarray.max_subarray([1, -2, 3]) == 3
    assert monotonic_stack.next_greater_element([1, 2]) == [2, -1]
    assert valid_parentheses.is_valid_parentheses("()") is True
    assert two_sum_ii.two_sum_sorted([1, 2, 3], 3) == [1, 2]
    assert merge_intervals.merge_intervals([[1, 3], [2, 6]]) == [[1, 6]]
    assert trapping_rain_water.trap([1, 0, 1]) == 1
    assert meeting_rooms_ii.min_meeting_rooms([[1, 2]]) == 1
    assert top_k_frequent_elements.top_k_frequent([1, 1, 2], 2) == [1, 2]
    assert number_of_islands.num_islands([["1"]]) == 1
    assert course_schedule.can_finish(2, [[1, 0]]) is True
    assert word_search.word_search([["A"]], "A") is True
    assert level_order_traversal.level_order([1]) == [[1]]
    assert network_delay.network_delay(4, [[1, 0, 1], [1, 2, 1], [2, 3, 1]], 1) == 2
    assert serialize_binary_tree.deserialize(serialize_binary_tree.serialize([1])) == [1]


def test_graph_algorithms_edge_themes():
    g0 = graph.Graph(0, False, False)
    with pytest.raises(IndexError):
        dfs.traverse_recursive(g0, 0)
    g1 = graph.Graph(1, False, False)
    assert len(dfs.traverse_iterative(g1, 0).discovery) == 1
    dag = graph.Graph(3, True, False)
    dag.add_edge(0, 1)
    dag.add_edge(1, 2)
    assert topological_sort.kahn(dag) == [0, 1, 2]
    cyclic = graph.Graph(2, True, False)
    cyclic.add_edge(0, 1)
    cyclic.add_edge(1, 0)
    assert topological_sort.kahn(cyclic) == []
    wg = graph.Graph(3, False, True)
    wg.add_edge(0, 1, 1)
    wg.add_edge(1, 2, 2)
    assert dijkstra.shortest_paths(wg, 0)[2] == 3
    neg = graph.Graph(2, True, True)
    neg.add_edge(0, 1, -1)
    bf = bellman_ford.shortest_paths(neg, 0)
    assert not bf.has_negative_cycle
    assert bf.distances[1] == -1
    assert floyd_warshall.all_pairs_shortest_paths(wg)[0][2] == 3
    mst_g = graph.Graph(3, False, True)
    mst_g.add_edge(0, 1, 1)
    mst_g.add_edge(1, 2, 2)
    mst_g.add_edge(0, 2, 4)
    assert kruskal_mst.total_weight(mst_g) == 3
    assert prim_mst.total_weight(mst_g) == 3
    assert boruvka_mst.total_weight(mst_g) == 3
    gl = graph.Graph(LARGE_N, False, False)
    for i in range(LARGE_N - 1):
        gl.add_edge(i, i + 1)
    with pytest.raises(IndexError):
        dijkstra.shortest_paths(wg, 99)


def test_wave2_catalog_item_edges():
    g = graph.Graph(2, True, True)
    g.add_edge(0, 1, 1)
    assert a_star.shortest_path_length(g, 0, 1) == 1
    scc_g = graph.Graph(3, True, False)
    scc_g.add_edge(0, 1)
    scc_g.add_edge(1, 2)
    scc_g.add_edge(2, 0)
    assert len(tarjan_scc.strongly_connected_components(scc_g)[0]) == 3
    assert len(kosaraju.strongly_connected_components(scc_g)[0]) == 3
    bi = graph.Graph(2, False, False)
    bi.add_edge(0, 1)
    assert bipartite_check.is_bipartite(bi)
    line = graph.Graph(3, False, False)
    line.add_edge(0, 1)
    line.add_edge(1, 2)
    assert articulation_bridges.find(line).articulation_points == [1]
    assert edmonds_karp.max_flow(2, [(0, 1, 5)], 0, 1) == 5
    assert hungarian.min_cost([[1, 2], [3, 4]]) >= 5
    rb = red_black_tree.RedBlackTree()
    rb.insert(1, 1)
    assert rb.search(1) == 1
    assert lca_binary_lifting.LCABinaryLifting([0, 0]).query(1, 0) == 0
    tr = treap.Treap(seed=0)
    tr.insert(2, 2)
    assert tr.search(2) == 2
    assert sparse_table.SparseTable([2, 1]).query(0, 1) == 1
    assert manacher.longest_palindrome_length("aa") == 2
    assert suffix_array.build("ab")[0] == 0
    assert aho_corasick.search("aba", ["a"]) == [0, 2]
    assert matrix_chain.min_multiplications([1, 2, 3]) == 6
    assert longest_palindromic_subsequence.length("a") == 1
    assert partition_equal_subset.can_partition([2, 2])
    assert rod_cutting.max_profit([2], 1) == 2
    assert tsp_bitmask.min_cost([[0, 1], [1, 0]]) == 2
    assert len(reservoir_sampling.sample([1, 2, 3], 2, seed=1)) == 2
    assert sliding_window_maximum.max_sliding_window([1, 2], 1) == [1, 2]
    cache = lru_cache.LRUCache(1)
    cache.put(1, 1)
    assert cache.get(1) == 1

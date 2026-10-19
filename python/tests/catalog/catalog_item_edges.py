"""Per-item edge themes for catalog items not covered in test_edge_case_themes.py."""

from __future__ import annotations

import pytest

from dsa.graphs import (
    bellman_ford,
    boruvka_mst,
    dfs,
    dijkstra,
    floyd_warshall,
    graph,
    kruskal_mst,
    prim_mst,
    topological_sort,
)
from dsa.hashing import bloom_filter, open_addressing, separate_chaining
from dsa.heaps import priority_queue
from dsa.linear import deque, doubly_linked_list, queue, singly_linked_list
from dsa.searching import binary_search
from dsa.sorting import heap_sort, insertion_sort, radix_sort, selection_sort
from dsa.trees import (
    avl_tree,
    b_tree,
    bst,
    interval_tree,
    order_statistic_tree,
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

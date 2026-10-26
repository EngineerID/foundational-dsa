# practice-property-topics: valid-parentheses meeting-rooms-ii top-k-frequent-elements longest-substring-without-repeating lru-cache merge-intervals level-order-traversal word-search serialize-binary-tree sliding-window-maximum kmp trie binary-heap dfs priority-queue monotonic-stack bst stack queue deque rabin-karp segment-tree fenwick-tree graph tarjan-scc kosaraju edmonds-karp dynamic-array z-algorithm manacher aho-corasick avl-tree red-black-tree singly-linked-list doubly-linked-list tree-traversals separate-chaining open-addressing suffix-array treap order-statistic-tree interval-tree b-tree bloom-filter boruvka-mst a-star articulation-bridges hungarian lca-binary-lifting sparse-table reservoir-sampling
"""Practice phase 2 implementations vs brute-force references (seeded, 25 trials)."""

from __future__ import annotations

import pytest

from dsa.practice.aho_corasick_practice import find_hits
from dsa.practice.a_star_practice import path_length as a_star_path_length
from dsa.practice.articulation_bridges_practice import articulation_and_bridges
from dsa.practice.avl_tree_practice import AvlTreePractice
from dsa.practice.binary_heap_practice import extract_order as heap_extract_order
from dsa.practice.bloom_filter_practice import BloomFilterPractice
from dsa.practice.boruvka_mst_practice import mst_total_weight as boruvka_mst
from dsa.practice.bst_practice import BstPractice
from dsa.practice.b_tree_practice import BTreePractice
from dsa.practice.deque_practice import DequePractice
from dsa.practice.dfs_practice import traverse as dfs_traverse
from dsa.practice.doubly_linked_list_practice import DoublyLinkedListPractice
from dsa.practice.dynamic_array_practice import DynamicArrayPractice
from dsa.practice.edmonds_karp_practice import max_flow_value
from dsa.practice.fenwick_tree_practice import FenwickTreePractice
from dsa.practice.graph_practice import build_graph
from dsa.practice.hungarian_practice import assignment_min_cost
from dsa.practice.interval_tree_practice import IntervalTreePractice
from dsa.practice.kmp_practice import first_index as kmp_first
from dsa.practice.kosaraju_practice import component_sizes_sorted as kosaraju_sizes
from dsa.practice.lca_binary_lifting_practice import LcaBinaryLiftingPractice
from dsa.practice.level_order import level_order
from dsa.practice.longest_substring import length_of_longest_substring
from dsa.practice.lru_design import LRUCacheDesign
from dsa.practice.manacher_practice import longest_palindrome_len
from dsa.practice.meeting_rooms import min_meeting_rooms
from dsa.practice.merge_intervals import merge_intervals
from dsa.practice.monotonic_stack_practice import next_greater
from dsa.practice.open_addressing_practice import OpenAddressingPractice
from dsa.practice.order_statistic_tree_practice import OrderStatisticTreePractice
from dsa.practice.priority_queue_practice import extract_order as pq_extract_order
from dsa.practice.queue_practice import QueuePractice
from dsa.practice.rabin_karp_practice import first_index as rabin_first
from dsa.practice.red_black_tree_practice import RedBlackTreePractice
from dsa.practice.reservoir_sampling_practice import reservoir_sample
from dsa.practice.segment_tree_practice import SegmentTreePractice
from dsa.practice.separate_chaining_practice import SeparateChainingPractice
from dsa.practice.singly_linked_list_practice import SinglyLinkedListPractice
from dsa.practice.sliding_window_max import max_sliding_window
from dsa.practice.sparse_table_practice import SparseTablePractice
from dsa.practice.stack_practice import StackPractice
from dsa.practice.suffix_array_practice import suffix_array
from dsa.practice.tarjan_scc_practice import component_sizes_sorted as tarjan_sizes
from dsa.practice.top_k_frequent import top_k_frequent
from dsa.practice.tree_codec import deserialize, serialize
from dsa.practice.tree_traversals_practice import TreeTraversalsPractice
from dsa.practice.treap_practice import TreapPractice
from dsa.practice.trie_practice import TriePractice
from dsa.practice.valid_parentheses import is_valid_parentheses
from dsa.practice.word_search import word_search
from dsa.practice.z_algorithm_practice import find_index as z_find_index, z_values
from practice import practice_bruteforce_phase2 as bf
from practice._practice_property_helpers import (
    PRACTICE_PROPERTY_TRIALS,
    random_int_array,
    random_non_negative,
    random_string,
    seeded_rng,
)


def _random_paren(rng, max_len: int = 10) -> str:
    pool = "()[]{}"
    n = rng.randint(0, max_len - 1) if max_len else 0
    return "".join(rng.choice(pool) for _ in range(n))


def _random_intervals(rng, max_n: int = 6) -> list[list[int]]:
    n = rng.randint(0, max_n)
    out: list[list[int]] = []
    for _ in range(n):
        a = rng.randint(0, 9)
        b = a + 1 + rng.randint(0, 7)
        out.append([a, b])
    return out


def _random_tree_values(rng) -> list[int | None]:
    n = 1 + rng.randint(0, 6)
    vals: list[int | None] = [None if rng.random() < 0.25 else rng.randint(0, 19) for _ in range(n)]
    if vals[0] is None:
        vals[0] = rng.randint(1, 10)
    return vals


def _random_board(rng) -> list[list[str]]:
    rows = 2 + rng.randint(0, 1)
    cols = 2 + rng.randint(0, 1)
    letters = "ABCDEF"
    return [[rng.choice(letters) for _ in range(cols)] for _ in range(rows)]


def _random_parent_tree(rng, n: int) -> list[int]:
    parent = [0] * n
    parent[0] = 0
    for i in range(1, n):
        parent[i] = rng.randint(0, i - 1)
    return parent


def test_valid_parentheses():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        s = _random_paren(rng)
        assert is_valid_parentheses(s) == bf.ref_valid_parentheses(s)


def test_meeting_rooms_ii():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        intervals = _random_intervals(rng)
        assert min_meeting_rooms([x[:] for x in intervals]) == bf.ref_min_meeting_rooms(intervals)


def test_top_k_frequent_elements():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        nums = random_int_array(rng, 12)
        if not nums:
            continue
        k = 1 + rng.randint(0, min(3, len(nums)) - 1)
        assert top_k_frequent(nums, k) == bf.ref_top_k_frequent(nums, k)


def test_longest_substring_without_repeating():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        s = random_string(rng, 10)
        assert length_of_longest_substring(s) == bf.ref_length_of_longest_substring(s)


def test_lru_cache():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        cap = 1 + rng.randint(0, 3)
        ref = bf.RefLRU(cap)
        cache = LRUCacheDesign(cap)
        ops = 4 + rng.randint(0, 7)
        for _ in range(ops):
            if rng.random() < 0.55:
                k = rng.randint(0, 5)
                v = rng.randint(0, 19)
                ref.put(k, v)
                cache.put(k, v)
            else:
                k = rng.randint(0, 5)
                assert cache.get(k) == ref.get(k)


def test_merge_intervals():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        intervals = _random_intervals(rng)
        assert merge_intervals([x[:] for x in intervals]) == bf.ref_merge_intervals(intervals)


def test_level_order_traversal():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        values = _random_tree_values(rng)
        assert level_order(values) == bf.ref_level_order(values)


def test_word_search():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        board = _random_board(rng)
        if rng.random() < 0.5:
            word = board[0][0] + (board[0][1] if len(board[0]) > 1 else "")
        else:
            word = random_string(rng, 4).upper()
        assert word_search([row[:] for row in board], word) == bf.ref_word_search(board, word)


def test_serialize_binary_tree():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        values = _random_tree_values(rng)
        data = serialize(values)
        assert deserialize(data) == bf.ref_serialize_deserialize(values)


def test_sliding_window_maximum():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        nums = random_non_negative(rng, 10)
        if not nums:
            continue
        k = 1 + rng.randint(0, len(nums) - 1)
        assert max_sliding_window(nums, k) == bf.ref_max_sliding_window(nums, k)


def test_kmp():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        text = random_string(rng, 12)
        pattern = random_string(rng, 5)
        assert kmp_first(text, pattern) == bf.ref_kmp_first(text, pattern)


def test_trie():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        words: list[str] = []
        n = rng.randint(0, 5)
        for _ in range(n):
            words.append(random_string(rng, 4))
        trie = TriePractice()
        for w in words:
            trie.insert(w)
        probe = random_string(rng, 3)
        assert trie.search(probe) == bf.ref_trie_search(words, probe)
        assert trie.starts_with(probe) == bf.ref_trie_starts_with(words, probe)


def test_binary_heap():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        inserts = random_int_array(rng, 10)
        assert heap_extract_order(inserts) == bf.ref_binary_heap_extract_order(inserts)


def test_dfs():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 2 + rng.randint(0, 4)
        directed = rng.random() < 0.5
        edges = [[i - 1, i] for i in range(1, n)]
        if rng.random() < 0.3 and n > 2:
            edges.append([0, n - 1])
        source = rng.randint(0, n - 1)
        got = dfs_traverse(n, edges, source, directed)
        want = bf.ref_dfs_times(n, edges, source, directed)
        assert got.discovery == want.discovery
        assert got.finish == want.finish


def test_priority_queue():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        inserts = random_int_array(rng, 10)
        assert pq_extract_order(inserts) == bf.ref_priority_queue_extract_order(inserts)


def test_monotonic_stack():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        nums = random_int_array(rng, 10)
        if not nums:
            continue
        assert next_greater(nums) == bf.ref_next_greater(nums)


def test_bst():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 1 + rng.randint(0, 7)
        inserts = []
        for _ in range(n):
            key = rng.randint(0, 14)
            inserts.append([key, f"v{key}"])
        search_key = rng.randint(0, 14)
        tree = BstPractice()
        for k, v in inserts:
            tree.insert(k, v)
        want = bf.ref_bst_state(inserts, search_key)
        assert tree.in_order_keys() == want["in_order_keys"]
        assert tree.search(search_key) == want["search_value"]


def test_stack():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        push = random_int_array(rng, 8)
        pop_count = min(len(push), rng.randint(0, len(push)))
        want = bf.ref_stack_sim(push, pop_count)
        stack = StackPractice()
        for v in push:
            stack.push(v)
        for expected in want["pops"]:
            assert stack.pop() == expected
        if want["empty"]:
            assert stack.is_empty()
            with pytest.raises(Exception):
                stack.peek()
        else:
            assert stack.peek() == want["peek"]


def test_queue():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        enqueue = random_int_array(rng, 8)
        dequeue_count = min(len(enqueue), rng.randint(0, len(enqueue)))
        want = bf.ref_queue_sim(enqueue, dequeue_count)
        q = QueuePractice()
        for v in enqueue:
            q.enqueue(v)
        for expected in want["dequeues"]:
            assert q.dequeue() == expected
        if want["empty"]:
            assert q.is_empty()
            with pytest.raises(Exception):
                q.peek()
        else:
            assert q.peek() == want["peek"]


def test_deque():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        add_last = random_int_array(rng, 4)
        add_first = random_int_array(rng, 4)
        remove_first = len(add_last) + len(add_first) > 0 and rng.random() < 0.7
        remove_last = len(add_last) + len(add_first) > 1 and rng.random() < 0.7
        want = bf.ref_deque_sim(add_last, add_first, remove_first, remove_last)
        dq = DequePractice()
        for v in add_last:
            dq.add_last(v)
        for v in add_first:
            dq.add_first(v)
        if remove_first:
            assert dq.remove_first() == want["remove_first"]
        if remove_last:
            assert dq.remove_last() == want["remove_last"]
        if want["remaining_value"] is not None:
            assert dq.remove_first() == want["remaining_value"]
        assert dq.is_empty() == want["empty"]


def test_rabin_karp():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        text = random_string(rng, 12)
        pattern = random_string(rng, 5)
        assert rabin_first(text, pattern) == bf.ref_rabin_first(text, pattern)


def test_segment_tree():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        initial = random_int_array(rng, 8)
        if len(initial) < 2:
            continue
        st = SegmentTreePractice(initial)
        queries: list[list[int]] = []
        for _ in range(3):
            l = rng.randint(0, len(initial) - 1)
            r = l + rng.randint(0, len(initial) - 1 - l)
            queries.append([l, r])
        arr = initial[:]
        for l, r in queries:
            assert st.range_sum(l, r) == sum(arr[l : r + 1])
        idx = rng.randint(0, len(arr) - 1)
        val = rng.randint(0, 9)
        st.update(idx, val)
        arr[idx] = val
        for l, r in queries:
            assert st.range_sum(l, r) == sum(arr[l : r + 1])


def test_fenwick_tree():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 2 + rng.randint(0, 7)
        ft = FenwickTreePractice(n)
        adds: list[list[int]] = []
        for _ in range(4):
            adds.append([rng.randint(0, n - 1), rng.randint(0, 4)])
        arr = [0] * n
        for idx, delta in adds:
            ft.add(idx, delta)
            arr[idx] += delta
        for _ in range(3):
            at = rng.randint(0, n - 1)
            assert ft.prefix_sum(at) == sum(arr[: at + 1])
        for _ in range(3):
            l = rng.randint(0, n - 1)
            r = l + rng.randint(0, n - 1 - l)
            assert ft.range_sum(l, r) == sum(arr[l : r + 1])


def test_graph():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 2 + rng.randint(0, 4)
        directed = rng.random() < 0.5
        weighted = rng.random() < 0.5
        edges: list[list[int]] = []
        for i in range(1, n):
            if weighted:
                edges.append([i - 1, i, 1 + rng.randint(0, 2)])
            else:
                edges.append([i - 1, i])
        g = build_graph(n, directed, weighted, edges)
        want = bf.ref_graph_neighbors(n, directed, weighted, edges)
        for v in range(n):
            got = [
                [e.to, e.weight] if weighted else [e.to] for e in g.neighbors(v)
            ]
            exp = [
                [e["to"], e["weight"]] if weighted else [e["to"]] for e in want[v]
            ]
            assert got == exp


def test_tarjan_scc():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 2 + rng.randint(0, 4)
        edges = [[i - 1, i] for i in range(1, n)]
        if rng.random() < 0.35:
            edges.append([n - 1, 0])
        want = bf.ref_kosaraju_component_sizes(n, edges)
        assert tarjan_sizes(n, edges) == want


def test_kosaraju():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 2 + rng.randint(0, 4)
        edges = [[i - 1, i] for i in range(1, n)]
        if rng.random() < 0.35:
            edges.append([n - 1, 0])
        want = bf.ref_kosaraju_component_sizes(n, edges)
        assert kosaraju_sizes(n, edges) == want


def test_edmonds_karp():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 3 + rng.randint(0, 2)
        source = 0
        sink = n - 1
        edges = [[0, 1, 2 + rng.randint(0, 2)]]
        if n > 2:
            edges.append([1, 2, 1 + rng.randint(0, 2)])
        if rng.random() < 0.4:
            edges.append([0, sink, 1 + rng.randint(0, 1)])
        assert max_flow_value(n, edges, source, sink) == bf.ref_max_flow(n, edges, source, sink)


def test_dynamic_array():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        values = random_int_array(rng, 10)
        arr = DynamicArrayPractice()
        for v in values:
            arr.add(v)
        get_pairs = [{"index": rng.randint(0, len(values) - 1)} for _ in range(min(3, len(values)))]
        want = bf.ref_dynamic_array(values, get_pairs)
        assert arr.size() == want["size"]
        for i, pair in enumerate(get_pairs):
            assert arr.get(pair["index"]) == want["gets"][i]


def test_z_algorithm():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        text = random_string(rng, 10)
        pattern = random_string(rng, 4)
        want = bf.ref_z_index(text, pattern)
        assert z_find_index(text, pattern) == want["index"]
        assert z_values(text) == want["z"]


def test_manacher():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        s = random_string(rng, 10)
        assert longest_palindrome_len(s) == bf.ref_longest_palindrome_length(s)


def test_aho_corasick():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        text = random_string(rng, 10)
        pn = 1 + rng.randint(0, 2)
        patterns = [random_string(rng, 3) for _ in range(pn)]
        assert find_hits(text, patterns) == bf.ref_aho_hits(text, patterns)


def test_avl_tree():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        inserts = []
        for _ in range(6):
            key = rng.randint(0, 11)
            inserts.append([key, f"v{key}"])
        search_key = rng.randint(0, 11)
        tree = AvlTreePractice()
        for k, v in inserts:
            tree.insert(k, v)
        want = bf.ref_tree_map_search(inserts, search_key)
        assert tree.in_order_keys() == want["in_order_keys"]
        assert tree.search(search_key) == want["search_value"]


def test_red_black_tree():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        inserts = []
        for _ in range(6):
            key = rng.randint(0, 11)
            inserts.append([key, f"v{key}"])
        tree = RedBlackTreePractice()
        for k, v in inserts:
            tree.insert(k, v)
        for _ in range(3):
            key = rng.randint(0, 11)
            want = bf.ref_tree_map_search(inserts, key)
            assert tree.search(key) == want["search_value"]


def test_singly_linked_list():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        add_last = random_int_array(rng, 6)
        if not add_last:
            continue
        get_index = rng.randint(0, len(add_last) - 1)
        remove_index = rng.randint(0, len(add_last) - 1)
        want = bf.ref_array_list_ops(add_last, [], get_index, remove_index)
        lst = SinglyLinkedListPractice()
        for v in add_last:
            lst.add_last(v)
        assert lst.get(get_index) == want["get_value"]
        assert lst.remove(remove_index) == want["remove_value"]
        assert lst.size() == want["size_after"]


def test_doubly_linked_list():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        add_last = random_int_array(rng, 4)
        add_first = random_int_array(rng, 4)
        if not add_last and not add_first:
            continue
        combined_len = len(add_first) + len(add_last)
        get_index = rng.randint(0, combined_len - 1)
        remove_index = rng.randint(0, combined_len - 1)
        want = bf.ref_array_list_ops(add_last, add_first, get_index, remove_index)
        lst = DoublyLinkedListPractice()
        for v in add_last:
            lst.add_last(v)
        for v in add_first:
            lst.add_first(v)
        assert lst.get(get_index) == want["get_value"]
        assert lst.remove(remove_index) == want["remove_value"]
        assert lst.size() == want["size_after"]


def test_tree_traversals():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        inserts = []
        for _ in range(6):
            key = rng.randint(0, 11)
            inserts.append([key, f"v{key}"])
        tree = TreeTraversalsPractice()
        for k, v in inserts:
            tree.insert(k, v)
        want = bf.ref_tree_traversals(inserts)
        assert tree.in_order() == want["in_order"]
        assert tree.pre_order() == want["pre_order"]
        assert tree.post_order() == want["post_order"]


def test_separate_chaining():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        ops = [["put", rng.randint(0, 7), rng.randint(0, 19)] for _ in range(5)]
        get_key = rng.randint(0, 7)
        remove_key = rng.randint(0, 7)
        table = SeparateChainingPractice()
        for op in ops:
            table.put(str(op[1]), op[2])
        want = bf.ref_hash_map_ops(ops, get_key, remove_key)
        got = table.get(str(get_key))
        if want["get_val"] is None:
            assert got is None
        else:
            assert got == want["get_val"]


def test_open_addressing():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        ops = [["put", rng.randint(0, 5), rng.randint(0, 19)] for _ in range(5)]
        get_key = ops[-1][1] if ops else 0
        remove_key = get_key
        table = OpenAddressingPractice()
        for op in ops:
            table.put(op[1], str(op[2]))
        want = bf.ref_hash_map_ops(ops, get_key, remove_key)
        expected = want["get_val"] if want["get_val"] is None else str(want["get_val"])
        assert table.get(get_key) == expected
        assert table.remove(remove_key) == want["had_remove"]
        assert table.get(get_key) is None


def test_suffix_array():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        s = random_string(rng, 8)
        assert suffix_array(s) == bf.ref_suffix_array(s)


def test_treap():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        seed = rng.randint(0, 999)
        inserts = [[rng.randint(0, 11), rng.randint(0, 999)] for _ in range(6)]
        search_keys = [rng.randint(0, 11), rng.randint(0, 11)]
        treap = TreapPractice(seed)
        for k, v in inserts:
            treap.insert(k, v)
        want = bf.ref_treap_search(inserts, seed, search_keys)
        for key in search_keys:
            assert treap.search(key) == want[key]


def test_order_statistic_tree():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        inserts = [[rng.randint(0, 9), "x"] for _ in range(6)]
        select_k = 1 + rng.randint(0, 4)
        rank_keys = [5, rng.randint(0, 9)]
        tree = OrderStatisticTreePractice()
        for k, v in inserts:
            tree.insert(k, v)
        want = bf.ref_order_statistic(inserts, select_k, rank_keys)
        if want["select_key"] is None:
            with pytest.raises(ValueError):
                tree.select(select_k)
        else:
            assert tree.select(select_k) == want["select_key"]
        for rk in rank_keys:
            assert tree.rank(rk) == want["ranks"][rk]


def test_interval_tree():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        intervals = _random_intervals(rng, 5)
        q_low = rng.randint(0, 7)
        q_high = q_low + rng.randint(0, 5)
        tree = IntervalTreePractice()
        for lo, hi in intervals:
            tree.insert(lo, hi)
        assert tree.overlap_sorted(q_low, q_high) == bf.ref_interval_overlap(
            intervals, q_low, q_high
        )


def test_b_tree():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        tree = BTreePractice(3)
        keys: list[int] = []
        for _ in range(8):
            key = rng.randint(0, 19)
            keys.append(key)
            tree.insert(key)
        search_keys = [keys[0], rng.randint(0, 24)]
        want = bf.ref_b_tree_search(keys, 3, search_keys)
        for key in search_keys:
            assert tree.search(key) == want[key]


def test_bloom_filter():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        added = [f"item{rng.randint(0, 19)}" for _ in range(4)]
        bf_filter = BloomFilterPractice(32, 0.01)
        for item in added:
            bf_filter.add(item)
        for item in bf.ref_bloom_added_keys(added):
            assert bf_filter.might_contain(item)


def test_boruvka_mst():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 2 + rng.randint(0, 4)
        edges = [[i - 1, i, 1 + rng.randint(0, 4)] for i in range(1, n)]
        want = bf.ref_mst_weight(n, edges)
        assert boruvka_mst(n, edges) == want


def test_a_star():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 2 + rng.randint(0, 3)
        edges = [[i - 1, i, 1 + rng.randint(0, 3)] for i in range(1, n)]
        source = 0
        goal = n - 1
        assert a_star_path_length(n, edges, source, goal) == bf.ref_a_star_path_length(
            n, edges, source, goal
        )


def test_articulation_bridges():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 3 + rng.randint(0, 2)
        edges = [[i - 1, i] for i in range(1, n)]
        if rng.random() < 0.4 and n >= 4:
            edges.append([1, 3])
        ap, bridges = articulation_and_bridges(n, edges)
        want = bf.ref_articulation_bridges(n, edges)
        assert ap == want["articulation_points"]
        assert sorted(bridges, key=lambda x: (x[0], x[1])) == want["bridges"]


def test_hungarian():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 2 + rng.randint(0, 2)
        cost = [[rng.randint(1, 9) for _ in range(n)] for _ in range(n)]
        got = assignment_min_cost(cost)
        want = bf.ref_hungarian_min_cost(cost)
        assert (0 if got == 0 else got) == want


def test_lca_binary_lifting():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = 2 + rng.randint(0, 4)
        parent = _random_parent_tree(rng, n)
        lca = LcaBinaryLiftingPractice(parent)
        u = rng.randint(0, n - 1)
        v = rng.randint(0, n - 1)
        assert lca.query(u, v) == bf.ref_lca(parent, u, v)


def test_sparse_table():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        initial = random_int_array(rng, 10)
        if len(initial) < 2:
            continue
        st = SparseTablePractice(initial)
        queries: list[list[int]] = []
        for _ in range(4):
            l = rng.randint(0, len(initial) - 1)
            r = l + rng.randint(0, len(initial) - 1 - l)
            queries.append([l, r])
        want = bf.ref_sparse_table_min(initial, queries)
        for i, (l, r) in enumerate(queries):
            assert st.query(l, r) == want[i]


def test_reservoir_sampling():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        stream = random_int_array(rng, 12)
        k = rng.randint(0, min(4, len(stream))) if stream else 0
        seed = rng.randint(0, 999)
        assert reservoir_sample(stream, k, seed) == bf.ref_reservoir_sample(stream, k, seed)

"""Edge themes phase 2 on practice wrappers (empty, single, duplicate, large, invalid)."""

# practice-edge-theme-topics: two-sum-ii maximum-subarray valid-parentheses meeting-rooms-ii number-of-islands top-k-frequent-elements course-schedule longest-substring-without-repeating coin-change lru-cache merge-intervals level-order-traversal word-search quick-select kruskal-mst trapping-rain-water edit-distance serialize-binary-tree network-delay sliding-window-maximum binary-search knapsack lcs kmp trie bfs union-find binary-heap dijkstra dfs lis merge-sort topological-sort priority-queue monotonic-stack quick-sort bst prim-mst stack heapsort queue deque counting-sort radix-sort rabin-karp bellman-ford segment-tree floyd-warshall fenwick-tree graph bipartite-check tarjan-scc kosaraju edmonds-karp matrix-chain rod-cutting partition-equal-subset longest-palindromic-subsequence dynamic-array linear-search bubble-sort insertion-sort selection-sort z-algorithm manacher aho-corasick avl-tree red-black-tree singly-linked-list doubly-linked-list tree-traversals separate-chaining open-addressing suffix-array treap order-statistic-tree interval-tree b-tree bloom-filter boruvka-mst a-star articulation-bridges hungarian lca-binary-lifting sparse-table tsp-bitmask reservoir-sampling

import json
from pathlib import Path

import pytest

from dsa.practice.coin_change import coin_change
from dsa.practice.course_schedule import can_finish
from dsa.practice.edit_distance_practice import edit_distance
from dsa.practice.kth_largest import kth_largest
from dsa.practice.level_order import level_order
from dsa.practice.longest_substring import length_of_longest_substring
from dsa.practice.lru_design import LRUCacheDesign
from dsa.practice.meeting_rooms import min_meeting_rooms
from dsa.practice.merge_intervals import merge_intervals
from dsa.practice.mst_kruskal import mst_total_weight as kruskal_mst_total_weight
from dsa.practice.network_delay import network_delay
from dsa.practice.num_islands import num_islands
from dsa.practice.sliding_window_max import max_sliding_window
from dsa.practice.top_k_frequent import top_k_frequent
from dsa.practice.trapping_rain_water import trap
from dsa.practice.tree_codec import deserialize, serialize
from dsa.practice.two_sum import two_sum_sorted
from dsa.practice.valid_parentheses import is_valid_parentheses
from dsa.practice.word_search import word_search
from dsa.practice.binary_search_practice import find_index
from dsa.practice.bfs_practice import distances as bfs_distances
from dsa.practice.kmp_practice import first_index
from dsa.practice.knapsack_practice import max_value as knapsack_max_value
from dsa.practice.lcs_practice import lcs_length
from dsa.practice.trie_practice import TriePractice
from dsa.practice.union_find_practice import connected as uf_connected
from dsa.practice.binary_heap_practice import extract_order
from dsa.practice.dijkstra_practice import shortest_distances
from dsa.practice.dfs_practice import traverse as dfs_traverse
from dsa.practice.lis_practice import length as lis_length
from dsa.practice.merge_sort_practice import sort as merge_sort_practice
from dsa.practice.topological_sort_practice import order as topo_order
from dsa.practice.priority_queue_practice import extract_order as pq_extract_order
from dsa.practice.monotonic_stack_practice import next_greater
from dsa.practice.quick_sort_practice import sort_nums as quick_sort_practice
from dsa.practice.bst_practice import BstPractice
from dsa.practice.prim_mst_practice import mst_total_weight
from dsa.practice.stack_practice import StackPractice
from dsa.practice.heapsort_practice import sort_nums as heapsort_practice
from dsa.practice.queue_practice import QueuePractice
from dsa.practice.deque_practice import DequePractice
from dsa.practice.counting_sort_practice import sort_nums as counting_sort_practice
from dsa.practice.radix_sort_practice import sort_nums as radix_sort_practice
from dsa.practice.rabin_karp_practice import first_index as rabin_first_index
from dsa.practice.bellman_ford_practice import shortest_paths_result
from dsa.practice.segment_tree_practice import SegmentTreePractice
from dsa.practice.graph_practice import build_graph
from dsa.practice.floyd_warshall_practice import all_pairs_distances
from dsa.practice.fenwick_tree_practice import FenwickTreePractice
from dsa.practice.bipartite_check_practice import check_bipartite
from dsa.practice.tarjan_scc_practice import component_sizes_sorted as tarjan_component_sizes
from dsa.practice.kosaraju_practice import component_sizes_sorted as kosaraju_component_sizes
from dsa.practice.edmonds_karp_practice import max_flow_value
from dsa.practice.matrix_chain_practice import min_cost as matrix_min_cost
from dsa.practice.rod_cutting_practice import max_revenue as rod_max_revenue
from dsa.practice.partition_equal_subset_practice import can_split_equal_subset
from dsa.practice.longest_palindromic_subsequence_practice import (
    longest_palindromic_subsequence_length,
)
from dsa.practice.dynamic_array_practice import DynamicArrayPractice
from dsa.practice.linear_search_practice import find_index as linear_find_index
from dsa.practice.bubble_sort_practice import sort_nums as bubble_sort_practice
from dsa.practice.insertion_sort_practice import sort_nums as insertion_sort_practice
from dsa.practice.selection_sort_practice import sort_nums as selection_sort_practice
from dsa.practice.z_algorithm_practice import find_index as z_find_index, z_values
from dsa.practice.manacher_practice import longest_palindrome_len
from dsa.practice.aho_corasick_practice import find_hits
from dsa.practice.avl_tree_practice import AvlTreePractice
from dsa.practice.red_black_tree_practice import RedBlackTreePractice
from dsa.practice.singly_linked_list_practice import SinglyLinkedListPractice
from dsa.practice.doubly_linked_list_practice import DoublyLinkedListPractice
from dsa.practice.tree_traversals_practice import TreeTraversalsPractice
from dsa.practice.separate_chaining_practice import SeparateChainingPractice
from dsa.practice.open_addressing_practice import OpenAddressingPractice
from dsa.practice.suffix_array_practice import suffix_array
from dsa.practice.treap_practice import TreapPractice
from dsa.practice.order_statistic_tree_practice import OrderStatisticTreePractice
from dsa.practice.interval_tree_practice import IntervalTreePractice
from dsa.practice.b_tree_practice import BTreePractice
from dsa.practice.bloom_filter_practice import BloomFilterPractice
from dsa.practice.boruvka_mst_practice import mst_total_weight as boruvka_mst_total_weight
from dsa.practice.a_star_practice import path_length as a_star_path_length
from dsa.practice.articulation_bridges_practice import articulation_and_bridges
from dsa.practice.hungarian_practice import assignment_min_cost
from dsa.practice.lca_binary_lifting_practice import LcaBinaryLiftingPractice
from dsa.practice.sparse_table_practice import SparseTablePractice
from dsa.practice.tsp_bitmask_practice import tsp_min_cost
from dsa.practice.reservoir_sampling_practice import reservoir_sample

TOOLS = Path(__file__).resolve().parents[3] / "tools"


def _cases(name: str):
    return json.loads((TOOLS / name).read_text())

LARGE_N = 256


def _sort_copy_battery(sort_fn, *, allow_negative: bool = True) -> None:
    assert sort_fn([]) == []
    assert sort_fn([7]) == [7]
    assert sort_fn([2, 2, 1]) == [1, 2, 2]
    assert sort_fn(list(range(LARGE_N, 0, -1))) == list(range(1, LARGE_N + 1))
    if not allow_negative:
        with pytest.raises(Exception):
            sort_fn([-1])


def test_sorting_edge_themes_phase2():
    _sort_copy_battery(insertion_sort_practice)
    _sort_copy_battery(selection_sort_practice)
    _sort_copy_battery(lambda a: quick_sort_practice(a, False))
    _sort_copy_battery(heapsort_practice)
    _sort_copy_battery(radix_sort_practice)


def test_kruskal_mst_edge_themes_phase2():
    for row in _cases("mst-goldens.json"):
        assert kruskal_mst_total_weight(row["n"], row["edges"]) == row["kruskalWeight"]
        assert mst_total_weight(row["n"], row["edges"]) == row["primWeight"]

def test_two_sum_ii_goldens_json():
    for row in _cases("two-sum-ii-goldens.json"):
        if row.get("expectError"):
            with pytest.raises(Exception):
                two_sum_sorted(row["nums"], row["target"])
        else:
            assert two_sum_sorted(row["nums"], row["target"]) == row["expected"]



def test_valid_parentheses_goldens_json():
    for row in _cases("valid-parentheses-goldens.json"):
        assert is_valid_parentheses(row["s"]) == row["expected"]



def test_meeting_rooms_ii_goldens_json():
    for row in _cases("meeting-rooms-ii-goldens.json"):
        assert min_meeting_rooms(row["intervals"]) == row["expected"]



def test_number_of_islands_goldens_json():
    for row in _cases("number-of-islands-goldens.json"):
        grid = [list(r) for r in row["grid"]]
        assert num_islands(grid) == row["expected"]



def test_top_k_frequent_elements_goldens_json():
    for row in _cases("top-k-frequent-elements-goldens.json"):
        if row.get("expectError"):
            with pytest.raises(Exception):
                top_k_frequent(row["nums"], row["k"])
        else:
            assert top_k_frequent(row["nums"], row["k"]) == row["expected"]



def test_course_schedule_goldens_json():
    for row in _cases("course-schedule-goldens.json"):
        assert can_finish(row["numCourses"], row["prerequisites"]) == row["expected"]



def test_longest_substring_without_repeating_goldens_json():
    for row in _cases("longest-substring-without-repeating-goldens.json"):
        assert length_of_longest_substring(row["s"]) == row["expected"]



def test_coin_change_goldens_json():
    for row in _cases("coin-change-goldens.json"):
        assert coin_change(row["coins"], row["amount"]) == row["expected"]



def test_lru_cache_goldens_json():
    for row in _cases("lru-cache-goldens.json"):
        cache = LRUCacheDesign(row["capacity"])
        for step in row["steps"]:
            if step["op"] == "put":
                cache.put(step["key"], step["value"])
            elif step["op"] == "get":
                assert cache.get(step["key"]) == step["expected"]



def test_merge_intervals_goldens_json():
    for row in _cases("merge-intervals-goldens.json"):
        assert merge_intervals(row["intervals"]) == row["expected"]



def test_level_order_traversal_goldens_json():
    for row in _cases("level-order-traversal-goldens.json"):
        assert level_order(row["values"]) == row["expected"]



def test_word_search_goldens_json():
    for row in _cases("word-search-goldens.json"):
        board = [list(r) for r in row["board"]]
        assert word_search(board, row["word"]) == row["expected"]



def test_quick_select_goldens_json():
    for row in _cases("quick-select-goldens.json"):
        if row.get("expectError"):
            with pytest.raises(Exception):
                kth_largest(row["arr"], row["k"])
        else:
            k_largest = len(row["arr"]) - row["k"] + 1
            assert kth_largest(row["arr"], k_largest) == row["expected"]



def test_trapping_rain_water_goldens_json():
    for row in _cases("trapping-rain-water-goldens.json"):
        assert trap(row["height"]) == row["expected"]



def test_edit_distance_goldens_json():
    for row in _cases("edit-distance-goldens.json"):
        assert edit_distance(row["a"], row["b"]) == row["expected"]



def test_serialize_binary_tree_goldens_json():
    for row in _cases("serialize-binary-tree-goldens.json"):
        assert deserialize(serialize(row["values"])) == row["expected"]



def test_network_delay_goldens_json():
    for row in _cases("network-delay-goldens.json"):
        assert network_delay(row["n"], row["times"], row["source"]) == row["expected"]



def test_sliding_window_maximum_goldens_json():
    for row in _cases("sliding-window-maximum-goldens.json"):
        assert max_sliding_window(row["nums"], row["k"]) == row["expected"]


def test_knapsack_practice_goldens():
    for row in _cases("knapsack-goldens.json"):
        assert (
            knapsack_max_value(row["weights"], row["values"], row["capacity"]) == row["expected"]
        )



def test_lcs_practice_goldens():
    for row in _cases("lcs-goldens.json"):
        assert lcs_length(row["a"], row["b"]) == row["expected"]



def test_kmp_practice_goldens():
    for row in _cases("kmp-goldens.json"):
        assert first_index(row["text"], row["pattern"]) == row["expected"]



def test_trie_practice_goldens():
    for row in _cases("trie-goldens.json"):
        trie = TriePractice()
        for w in row.get("inserts", []):
            trie.insert(w)
        for s in row.get("search", []):
            assert trie.search(s["word"]) == s["expected"]
        for s in row.get("startsWith", []):
            assert trie.starts_with(s["prefix"]) == s["expected"]



def test_bfs_practice_goldens():
    for row in _cases("practice-bfs-goldens.json"):
        assert bfs_distances(row["n"], row["edges"], row["source"]) == row["expected"]



def test_union_find_practice_goldens():
    for row in _cases("union-find-goldens.json"):
        for q in row["connected"]:
            assert uf_connected(row["n"], row["unions"], q["a"], q["b"]) == q["expected"]



def test_dijkstra_practice_goldens():
    for row in _cases("dijkstra-goldens.json"):
        assert shortest_distances(row["n"], row["edges"], row["source"]) == row["distances"]



def test_dfs_practice_goldens():
    for row in _cases("dfs-goldens.json"):
        times = dfs_traverse(row["n"], row["edges"], row["source"], row["directed"])
        assert times.discovery == row["discovery"]
        assert times.finish == row["finish"]



def test_lis_practice_goldens():
    for row in _cases("lis-goldens.json"):
        assert lis_length(row["arr"]) == row["expected"]



def test_topological_sort_practice_goldens():
    for row in _cases("topological-sort-goldens.json"):
        assert topo_order(row["n"], row["edges"]) == row["expectedOrder"]



def test_priority_queue_practice_goldens():
    for row in _cases("priority-queue-goldens.json"):
        assert pq_extract_order(row["inserts"]) == row["extractOrder"]



def test_quick_sort_practice_goldens():
    for row in _cases("quick-sort-goldens.json"):
        three_way = row.get("mode") == "sort3Way"
        assert quick_sort_practice(row["input"], three_way) == row["expected"]



def test_bst_practice_goldens():
    for row in _cases("bst-goldens.json"):
        tree = BstPractice()
        for key, value in row.get("inserts", []):
            tree.insert(key, value)
        assert tree.in_order_keys() == row["inOrderKeys"]
        assert tree.search(row["searchKey"]) == row["searchValue"]



def test_prim_mst_practice_goldens():
    for row in _cases("mst-goldens.json"):
        assert mst_total_weight(row["n"], row["edges"]) == row["primWeight"]



def test_heapsort_practice_goldens():
    for row in _cases("heapsort-goldens.json"):
        assert heapsort_practice(row["input"]) == row["sorted"]



def test_queue_practice_goldens():
    for row in _cases("queue-goldens.json"):
        q = QueuePractice()
        for v in row.get("enqueue", []):
            q.enqueue(v)
        for expected in row.get("dequeueValues", []):
            assert q.dequeue() == expected
        peek = row.get("peek")
        if peek is None or row.get("empty"):
            assert q.is_empty()
            with pytest.raises(RuntimeError):
                q.peek()
        else:
            assert q.peek() == peek



def test_deque_practice_goldens():
    for row in _cases("deque-goldens.json"):
        dq = DequePractice()
        add_last = row.get("addLast", [])
        add_first = row.get("addFirst", [])
        if row.get("empty") and not add_last and not add_first:
            assert dq.is_empty()
            continue
        for v in add_last:
            dq.add_last(v)
        for v in add_first:
            dq.add_first(v)
        if row.get("removeFirst") is not None:
            assert dq.remove_first() == row["removeFirst"]
        if row.get("removeLast") is not None:
            assert dq.remove_last() == row["removeLast"]
        if row.get("remainingValue") is not None:
            assert dq.remove_first() == row["remainingValue"]
        assert dq.is_empty()



def test_radix_sort_practice_goldens():
    for row in _cases("radix-sort-goldens.json"):
        assert radix_sort_practice(row["input"]) == row["sorted"]



def test_rabin_karp_practice_goldens():
    for row in _cases("rabin-karp-goldens.json"):
        assert rabin_first_index(row["text"], row["pattern"]) == row["expected"]



def test_bellman_ford_practice_goldens():
    for row in _cases("bellman-ford-goldens.json"):
        result = shortest_paths_result(row["n"], row["edges"], row["source"])
        assert result.has_negative_cycle == row["hasNegativeCycle"]
        if "distances" in row:
            assert result.distances == row["distances"]



def test_segment_tree_practice_goldens():
    for row in _cases("segment-tree-goldens.json"):
        st = SegmentTreePractice(row["initial"])
        for q in row.get("rangeSum", []):
            assert st.range_sum(q["left"], q["right"]) == q["sum"]
        upd = row["update"]
        st.update(upd["index"], upd["value"])
        for q in row.get("rangeSumAfter", []):
            assert st.range_sum(q["left"], q["right"]) == q["sum"]



def test_graph_practice_goldens():
    for row in _cases("graph-goldens.json"):
        g = build_graph(row["n"], row["directed"], row["weighted"], row["edges"])
        assert g.vertices() == row["vertices"]
        for v_str, count in row["neighborCount"].items():
            assert len(g.neighbors(int(v_str))) == count
        for v_str, expected in row["edgeTo"].items():
            actual = [e.to for e in g.neighbors(int(v_str))]
            assert actual == expected



def test_floyd_warshall_practice_goldens():
    for row in _cases("floyd-warshall-goldens.json"):
        dist = all_pairs_distances(row["n"], row["edges"])
        for i, j, expected in row["pairs"]:
            assert dist[i][j] == expected



def test_fenwick_tree_practice_goldens():
    for row in _cases("fenwick-tree-goldens.json"):
        ft = FenwickTreePractice(row["n"])
        for idx, delta in row.get("adds", []):
            ft.add(idx, delta)
        for check in row.get("checks", []):
            if "prefixAt" in check:
                assert ft.prefix_sum(check["prefixAt"]) == check["expected"]
            if "rangeLeft" in check:
                assert ft.range_sum(check["rangeLeft"], check["rangeRight"]) == check["expected"]



def test_bipartite_check_practice_goldens():
    for row in _cases("bipartite-check-goldens.json"):
        assert check_bipartite(row["n"], row["edges"]) == row["expected"]



def test_tarjan_scc_practice_goldens():
    for row in _cases("tarjan-scc-goldens.json"):
        sizes = tarjan_component_sizes(row["n"], row["edges"])
        assert len(sizes) == row["componentCount"]
        assert sizes == sorted(row["componentSizes"])



def test_kosaraju_practice_goldens():
    for row in _cases("kosaraju-goldens.json"):
        sizes = kosaraju_component_sizes(row["n"], row["edges"])
        assert len(sizes) == row["componentCount"]
        assert sizes == sorted(row["componentSizes"])



def test_edmonds_karp_practice_goldens():
    for row in _cases("edmonds-karp-goldens.json"):
        assert max_flow_value(row["n"], row["edges"], row["source"], row["sink"]) == row["maxFlow"]



def test_matrix_chain_practice_goldens():
    for row in _cases("matrix-chain-goldens.json"):
        assert matrix_min_cost(row["dimensions"]) == row["expected"]



def test_rod_cutting_practice_goldens():
    for row in _cases("rod-cutting-goldens.json"):
        if row.get("expectError"):
            with pytest.raises(ValueError):
                rod_max_revenue(row["prices"], row["length"])
        else:
            assert rod_max_revenue(row["prices"], row["length"]) == row["expected"]



def test_partition_equal_subset_practice_goldens():
    for row in _cases("partition-equal-subset-goldens.json"):
        assert can_split_equal_subset(row["nums"]) == row["expected"]



def test_longest_palindromic_subsequence_practice_goldens():
    for row in _cases("longest-palindromic-subsequence-goldens.json"):
        assert longest_palindromic_subsequence_length(row["s"]) == row["expected"]



def test_insertion_sort_practice_goldens():
    for row in _cases("insertion-sort-goldens.json"):
        assert insertion_sort_practice(row["input"]) == row["sorted"]



def test_selection_sort_practice_goldens():
    for row in _cases("selection-sort-goldens.json"):
        assert selection_sort_practice(row["input"]) == row["sorted"]



def test_z_algorithm_practice_goldens():
    for row in _cases("z-algorithm-goldens.json"):
        assert z_find_index(row["text"], row["pattern"]) == row["index"]
        assert z_values(row["text"]) == row["z"]



def test_manacher_practice_goldens():
    for row in _cases("manacher-goldens.json"):
        assert longest_palindrome_len(row["s"]) == row["expected"]



def test_aho_corasick_practice_goldens():
    for row in _cases("aho-corasick-goldens.json"):
        assert find_hits(row["text"], row["patterns"]) == row["hits"]



def test_avl_tree_practice_goldens():
    for row in _cases("avl-tree-goldens.json"):
        tree = AvlTreePractice()
        for key, value in row.get("inserts", []):
            tree.insert(key, value)
        assert tree.in_order_keys() == row["inOrderKeys"]
        assert tree.search(row["searchKey"]) == row["searchValue"]



def test_red_black_tree_practice_goldens():
    for row in _cases("red-black-tree-goldens.json"):
        tree = RedBlackTreePractice()
        for key, value in row.get("inserts", []):
            tree.insert(key, value)
        for key, value in row.get("searches", []):
            assert tree.search(key) == value
        assert tree.search(row["searchMiss"]) is None



def test_singly_linked_list_practice_goldens():
    for row in _cases("singly-linked-list-goldens.json"):
        lst = SinglyLinkedListPractice()
        add_last = row.get("addLast", [])
        if not add_last:
            assert lst.size() == 0
            continue
        for n in add_last:
            lst.add_last(n)
        assert lst.get(row["getIndex"]) == row["getValue"]
        assert lst.remove(row["removeIndex"]) == row["removeValue"]
        assert lst.size() == row["sizeAfter"]



def test_doubly_linked_list_practice_goldens():
    for row in _cases("doubly-linked-list-goldens.json"):
        lst = DoublyLinkedListPractice()
        add_last = row.get("addLast", [])
        add_first = row.get("addFirst", [])
        if row.get("empty") and not add_last and not add_first:
            assert lst.size() == 0
            continue
        for n in add_last:
            lst.add_last(n)
        for n in add_first:
            lst.add_first(n)
        assert lst.get(row["getIndex"]) == row["getValue"]
        assert lst.remove(row["removeIndex"]) == row["removeValue"]
        assert lst.size() == row["sizeAfter"]



def test_tree_traversals_practice_goldens():
    for row in _cases("tree-traversals-goldens.json"):
        tree = TreeTraversalsPractice()
        for key, value in row.get("inserts", []):
            tree.insert(key, value)
        assert tree.in_order() == row["inOrder"]
        assert tree.pre_order() == row["preOrder"]
        assert tree.post_order() == row["postOrder"]



def test_separate_chaining_practice_goldens():
    for row in _cases("separate-chaining-goldens.json"):
        table = SeparateChainingPractice()
        for op in row.get("ops", []):
            table.put(op[1], op[2])
        expected = row["get"]["value"]
        if expected is None:
            assert table.get(row["get"]["key"]) is None
        else:
            assert table.get(row["get"]["key"]) == expected
        if row.get("getMissing"):
            assert table.get(row["getMissing"]["key"]) is None



def test_open_addressing_practice_goldens():
    for row in _cases("open-addressing-goldens.json"):
        table = OpenAddressingPractice()
        for op in row.get("ops", []):
            table.put(op[1], op[2])
        assert table.get(row["get"]["key"]) == row["get"]["value"]
        assert table.remove(row["remove"]["key"]) == row["remove"]["present"]
        assert table.get(row["getAfterRemove"]["key"]) is None



def test_suffix_array_practice_goldens():
    for row in _cases("suffix-array-goldens.json"):
        assert suffix_array(row["s"]) == row["sa"]



def test_treap_practice_goldens():
    for row in _cases("treap-goldens.json"):
        treap = TreapPractice(row["seed"])
        for key, value in row.get("inserts", []):
            treap.insert(key, value)
        for result in row.get("searchResults", []):
            assert treap.search(result["key"]) == result["value"]



def test_order_statistic_tree_practice_goldens():
    for row in _cases("order-statistic-tree-goldens.json"):
        tree = OrderStatisticTreePractice()
        if not row["inserts"]:
            with pytest.raises(ValueError):
                tree.select(1)
            assert tree.rank(5) == row["rank5"]
            continue
        for key, value in row["inserts"]:
            tree.insert(key, value)
        if "selectK" in row:
            assert tree.select(row["selectK"]) == row["selectKey"]
            assert tree.rank(row["rankKey"]) == 1
            continue
        assert tree.select(3) == row["select3"]
        assert tree.rank(5) == row["rank5"]



def test_interval_tree_practice_goldens():
    for row in _cases("interval-tree-goldens.json"):
        if row.get("expectError"):
            tree = IntervalTreePractice()
            with pytest.raises(ValueError):
                for low, high in row["inserts"]:
                    tree.insert(low, high)
            continue
        tree = IntervalTreePractice()
        for low, high in row.get("inserts", []):
            tree.insert(low, high)
        q = row["query"]
        assert tree.overlap_sorted(q[0], q[1]) == row["overlaps"]



def test_b_tree_practice_goldens():
    for row in _cases("b-tree-goldens.json"):
        if row.get("expectError"):
            with pytest.raises(ValueError):
                BTreePractice(row["t"])
            continue
        tree = BTreePractice(row["t"])
        for key in row.get("inserts", []):
            tree.insert(key)
        for spec in row.get("searches", []):
            assert tree.search(spec["key"]) == spec["found"]



def test_bloom_filter_practice_goldens():
    for row in _cases("bloom-filter-goldens.json"):
        bf = BloomFilterPractice(row["expectedItems"], row["falsePositiveRate"])
        for item in row.get("add", []):
            bf.add(item)
        for q in row.get("queries", []):
            assert bf.might_contain(q["item"]) == q["expected"]



def test_boruvka_mst_practice_goldens():
    for row in _cases("boruvka-mst-goldens.json"):
        assert boruvka_mst_total_weight(row["n"], row["edges"]) == row["totalWeight"]



def test_a_star_practice_goldens():
    for row in _cases("a-star-goldens.json"):
        assert (
            a_star_path_length(row["n"], row["edges"], row["source"], row["goal"]) == row["length"]
        )



def test_articulation_bridges_practice_goldens():
    for row in _cases("articulation-bridges-goldens.json"):
        ap, bridges = articulation_and_bridges(row["n"], row["edges"])
        assert ap == row["articulationPoints"]
        assert bridges == row["bridges"]



def test_hungarian_practice_goldens():
    for row in _cases("hungarian-goldens.json"):
        assert assignment_min_cost(row["cost"]) == row["minCost"]



def test_lca_binary_lifting_practice_goldens():
    for row in _cases("lca-binary-lifting-goldens.json"):
        lca = LcaBinaryLiftingPractice(row["parent"])
        for u, v, expected in row.get("queries", []):
            assert lca.query(u, v) == expected



def test_sparse_table_practice_goldens():
    for row in _cases("sparse-table-goldens.json"):
        st = SparseTablePractice(row["initial"])
        for left, right, expected in row.get("queries", []):
            assert st.query(left, right) == expected



def test_tsp_bitmask_practice_goldens():
    for row in _cases("tsp-bitmask-goldens.json"):
        assert tsp_min_cost(row["dist"]) == row["expected"]



def test_reservoir_sampling_practice_goldens():
    for row in _cases("reservoir-sampling-goldens.json"):
        assert reservoir_sample(row["stream"], row["k"], row["seed"]) == row["expected"]


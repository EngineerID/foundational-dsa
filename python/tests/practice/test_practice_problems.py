from dsa.practice.coin_change import coin_change
from dsa.practice.course_schedule import can_finish
from dsa.practice.edit_distance_practice import edit_distance
from dsa.practice.kth_largest import kth_largest
from dsa.practice.level_order import level_order
from dsa.practice.longest_substring import length_of_longest_substring
from dsa.practice.lru_design import LRUCacheDesign
from dsa.practice.max_subarray import max_subarray
from dsa.practice.meeting_rooms import min_meeting_rooms
from dsa.practice.merge_intervals import merge_intervals
from dsa.practice.mst_kruskal import mst_total_weight
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
from dsa.practice.knapsack_practice import max_value as knapsack_max_value
from dsa.practice.lcs_practice import lcs_length
from dsa.practice.kmp_practice import first_index
from dsa.practice.trie_practice import TriePractice
from dsa.practice.bfs_practice import distances as bfs_distances
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
from dsa.practice.prim_mst_practice import mst_total_weight as prim_mst_total_weight
from dsa.practice.stack_practice import StackPractice
from dsa.practice.heapsort_practice import sort_nums as heapsort_practice
from dsa.practice.queue_practice import QueuePractice
from dsa.practice.deque_practice import DequePractice
from dsa.practice.counting_sort_practice import sort_nums as counting_sort_practice
from dsa.practice.radix_sort_practice import sort_nums as radix_sort_practice
from dsa.practice.rabin_karp_practice import first_index as rabin_first_index
from dsa.practice.bellman_ford_practice import shortest_paths_result
from dsa.practice.segment_tree_practice import SegmentTreePractice
from dsa.practice.floyd_warshall_practice import all_pairs_distances
from dsa.practice.fenwick_tree_practice import FenwickTreePractice
from dsa.practice.graph_practice import build_graph
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
from dsa.practice.z_algorithm_practice import find_index as z_find_index
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


def test_two_sum_sorted():
    assert two_sum_sorted([2, 7, 11, 15], 9) == [1, 2]


def test_max_subarray():
    assert max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6


def test_valid_parentheses():
    assert is_valid_parentheses("()[]{}")
    assert not is_valid_parentheses("(]")


def test_min_meeting_rooms():
    assert min_meeting_rooms([[0, 30], [5, 10], [15, 20]]) == 2


def test_num_islands():
    grid = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ]
    assert num_islands([row[:] for row in grid]) == 3


def test_top_k_frequent():
    assert top_k_frequent([1, 1, 1, 2, 2, 3], 2) == [1, 2]


def test_course_schedule():
    assert can_finish(2, [[1, 0]])
    assert not can_finish(2, [[1, 0], [0, 1]])


def test_longest_substring():
    assert length_of_longest_substring("abcabcbb") == 3


def test_coin_change():
    assert coin_change([1, 2, 5], 11) == 3


def test_lru_design():
    cache = LRUCacheDesign(2)
    cache.put(1, 1)
    cache.put(2, 2)
    assert cache.get(1) == 1
    cache.put(3, 3)
    assert cache.get(2) == -1
    assert cache.get(3) == 3


def test_merge_intervals():
    assert merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]]) == [[1, 6], [8, 10], [15, 18]]


def test_level_order():
    assert level_order([3, 9, 20, None, None, 15, 7]) == [[3], [9, 20], [15, 7]]


def test_word_search():
    board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
    assert word_search([row[:] for row in board], "ABCCED")
    assert not word_search([row[:] for row in board], "ABCD")


def test_kth_largest():
    assert kth_largest([3, 2, 1, 5, 6, 4], 2) == 5


def test_mst_kruskal():
    edges = [[0, 1, 1], [1, 2, 2], [2, 3, 3], [0, 3, 4]]
    assert mst_total_weight(4, edges) == 6


def test_trapping_rain_water():
    assert trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) == 6


def test_edit_distance_practice():
    assert edit_distance("kitten", "sitting") == 3


def test_tree_codec_round_trip():
    values = [3, 9, 20, None, None, 15, 7]
    assert deserialize(serialize(values)) == values


def test_network_delay():
    times = [[1, 0, 1], [1, 2, 1], [2, 3, 1]]
    assert network_delay(4, times, 1) == 2


def test_sliding_window_max_practice():
    assert max_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3) == [3, 3, 5, 5, 6, 7]


def test_binary_search_practice():
    assert find_index([1, 3, 5, 7, 9, 11], 7) == 3
    assert find_index([1, 3, 5, 7, 9, 11], 8) == -1


def test_knapsack_practice():
    assert knapsack_max_value([1, 2, 3], [6, 10, 12], 5) == 22


def test_lcs_practice():
    assert lcs_length("abcde", "ace") == 3


def test_kmp_practice():
    assert first_index("ababcababa", "aba") == 0


def test_trie_practice():
    trie = TriePractice()
    trie.insert("cat")
    trie.insert("car")
    assert trie.search("cat")
    assert not trie.search("ca")
    assert trie.starts_with("ca")


def test_bfs_practice():
    assert bfs_distances(5, [[0, 1], [0, 2], [1, 3]], 0) == [0, 1, 1, 2, -1]


def test_union_find_practice():
    unions = [[0, 1], [2, 3], [1, 2]]
    assert uf_connected(5, unions, 0, 3)
    assert not uf_connected(5, unions, 0, 4)


def test_binary_heap_practice():
    assert extract_order([5, 2, 8, 1, 2]) == [1, 2, 2, 5, 8]


def test_dijkstra_practice():
    edges = [[0, 1, 1], [0, 2, 4], [1, 2, 2], [1, 3, 5], [2, 3, 1]]
    assert shortest_distances(4, edges, 0) == [0, 1, 3, 4]


def test_dfs_practice():
    times = dfs_traverse(4, [[0, 1], [0, 2], [1, 3]], 0, False)
    assert times.discovery == [0, 1, 5, 2]


def test_lis_practice():
    assert lis_length([10, 9, 2, 5, 3, 7, 101, 18]) == 4


def test_merge_sort_practice():
    assert merge_sort_practice([5, 2, 8, 1, 2]) == [1, 2, 2, 5, 8]


def test_topological_sort_practice():
    assert topo_order(4, [[0, 1], [0, 2], [1, 3]]) == [0, 1, 2, 3]


def test_priority_queue_practice():
    assert pq_extract_order([5, 3, 7, 1, 3]) == [1, 3, 3, 5, 7]


def test_monotonic_stack_practice():
    assert next_greater([2, 1, 2, 4, 3]) == [4, 2, 4, -1, -1]


def test_quick_sort_practice():
    assert quick_sort_practice([3, 1, 2]) == [1, 2, 3]


def test_bst_practice():
    tree = BstPractice()
    tree.insert(5, "a")
    tree.insert(2, "b")
    tree.insert(7, "c")
    assert tree.in_order_keys() == [2, 5, 7]
    assert tree.search(2) == "b"


def test_prim_mst_practice():
    edges = [[0, 1, 1], [1, 2, 2], [2, 3, 3], [0, 3, 4]]
    assert prim_mst_total_weight(4, edges) == 6


def test_stack_practice():
    s = StackPractice()
    s.push(1)
    s.push(2)
    assert s.pop() == 2
    assert s.peek() == 1


def test_heapsort_practice():
    assert heapsort_practice([5, 2, 8, 1, 2]) == [1, 2, 2, 5, 8]


def test_queue_practice():
    q = QueuePractice()
    q.enqueue(1)
    q.enqueue(2)
    assert q.dequeue() == 1
    assert q.peek() == 2


def test_deque_practice():
    dq = DequePractice()
    dq.add_last(1)
    dq.add_first(0)
    assert dq.remove_first() == 0
    assert dq.remove_last() == 1
    assert dq.is_empty()


def test_counting_sort_practice():
    assert counting_sort_practice([4, 2, 0, 2, 1, 3, 2, 2]) == [0, 1, 2, 2, 2, 2, 3, 4]


def test_radix_sort_practice():
    assert radix_sort_practice([45, 2, 24]) == [2, 24, 45]


def test_rabin_karp_practice():
    assert rabin_first_index("ababcababa", "aba") == 0


def test_bellman_ford_practice():
    result = shortest_paths_result(3, [[0, 1, 1], [1, 2, -2]], 0)
    assert not result.has_negative_cycle
    assert result.distances == [0, 1, -1]


def test_segment_tree_practice():
    st = SegmentTreePractice([1, 3, 5, 7])
    assert st.range_sum(0, 2) == 9
    st.update(1, 10)
    assert st.range_sum(0, 1) == 11


def test_floyd_warshall_practice():
    dist = all_pairs_distances(3, [[0, 1, 1], [1, 2, 2], [0, 2, 10]])
    assert dist[0][2] == 3


def test_fenwick_tree_practice():
    ft = FenwickTreePractice(5)
    ft.add(1, 3)
    ft.add(3, 2)
    assert ft.prefix_sum(3) == 5


def test_graph_practice():
    g = build_graph(2, True, True, [[0, 1, 1]])
    assert g.vertices() == 2
    assert len(g.neighbors(0)) == 1


def test_bipartite_check_practice():
    assert check_bipartite(4, [[0, 1], [1, 2], [2, 3], [3, 0]])


def test_tarjan_scc_practice():
    assert tarjan_component_sizes(3, [[0, 1], [1, 2], [2, 0]]) == [3]


def test_kosaraju_practice():
    assert kosaraju_component_sizes(3, [[0, 1], [1, 2], [2, 0]]) == [3]


def test_edmonds_karp_practice():
    edges = [[0, 1, 3], [0, 2, 2], [1, 2, 1], [1, 3, 3], [2, 3, 2]]
    assert max_flow_value(4, edges, 0, 3) == 5


def test_matrix_chain_practice():
    assert matrix_min_cost([10, 30, 5, 60]) == 4500


def test_rod_cutting_practice():
    assert rod_max_revenue([1, 5, 8, 9, 10, 17, 17, 20], 4) == 10


def test_partition_equal_subset_practice():
    assert can_split_equal_subset([1, 5, 11, 5])


def test_longest_palindromic_subsequence_practice():
    assert longest_palindromic_subsequence_length("bbbab") == 4


def test_dynamic_array_practice():
    arr = DynamicArrayPractice()
    arr.add(10)
    arr.add(20)
    assert arr.size() == 2
    assert arr.get(0) == 10


def test_linear_search_practice():
    assert linear_find_index([1, 2, 3], 2) == 1


def test_bubble_sort_practice():
    assert bubble_sort_practice([5, 2, 8, 1, 2]) == [1, 2, 2, 5, 8]


def test_insertion_sort_practice():
    assert insertion_sort_practice([5, 2, 8, 1, 2]) == [1, 2, 2, 5, 8]


def test_selection_sort_practice():
    assert selection_sort_practice([5, 2, 8, 1, 2]) == [1, 2, 2, 5, 8]


def test_z_algorithm_practice():
    assert z_find_index("aabaa", "aa") == 0


def test_manacher_practice():
    assert longest_palindrome_len("babad") == 3


def test_aho_corasick_practice():
    assert find_hits("ushers", ["he", "she", "his", "hers"]) == [1, 2]


def test_avl_tree_practice():
    tree = AvlTreePractice()
    tree.insert(5, "a")
    tree.insert(2, "b")
    assert tree.search(2) == "b"


def test_red_black_tree_practice():
    tree = RedBlackTreePractice()
    tree.insert(1, 10)
    assert tree.search(1) == 10


def test_singly_linked_list_practice():
    lst = SinglyLinkedListPractice()
    lst.add_last(2)
    lst.add_last(3)
    assert lst.get(1) == 3


def test_doubly_linked_list_practice():
    lst = DoublyLinkedListPractice()
    lst.add_last(2)
    lst.add_first(1)
    assert lst.get(1) == 2


def test_tree_traversals_practice():
    tree = TreeTraversalsPractice()
    tree.insert(2, "b")
    tree.insert(1, "a")
    assert tree.in_order() == [1, 2]


def test_separate_chaining_practice():
    table = SeparateChainingPractice()
    table.put("a", 1)
    assert table.get("a") == 1


def test_open_addressing_practice():
    table = OpenAddressingPractice()
    table.put(1, "one")
    assert table.get(1) == "one"


def test_suffix_array_practice():
    assert suffix_array("banana") == [5, 3, 1, 0, 4, 2]


def test_treap_practice():
    treap = TreapPractice(0)
    treap.insert(3, 30)
    assert treap.search(3) == 30


def test_order_statistic_tree_practice():
    tree = OrderStatisticTreePractice()
    tree.insert(5, "5")
    tree.insert(2, "2")
    assert tree.select(1) == 2


def test_interval_tree_practice():
    tree = IntervalTreePractice()
    tree.insert(10, 12)
    assert tree.overlap_sorted(11, 11) == [[10, 12]]


def test_b_tree_practice():
    tree = BTreePractice(2)
    tree.insert(6)
    assert tree.search(6) is True


def test_bloom_filter_practice():
    bf = BloomFilterPractice(100, 0.01)
    bf.add("alpha")
    assert bf.might_contain("alpha") is True


def test_boruvka_mst_practice():
    assert boruvka_mst_total_weight(4, [[0, 1, 1], [1, 2, 2], [2, 3, 3], [0, 3, 4]]) == 6


def test_a_star_practice():
    assert (
        a_star_path_length(4, [[0, 1, 1], [0, 2, 4], [1, 2, 2], [1, 3, 5], [2, 3, 1]], 0, 3) == 4
    )


def test_articulation_bridges_practice():
    ap, _ = articulation_and_bridges(5, [[0, 1], [1, 2], [2, 3], [3, 4], [2, 4]])
    assert 1 in ap


def test_hungarian_practice():
    assert assignment_min_cost([[4, 1, 3], [2, 0, 5], [3, 2, 2]]) == 5


def test_lca_binary_lifting_practice():
    lca = LcaBinaryLiftingPractice([0, 0, 0, 1])
    assert lca.query(1, 2) == 0


def test_sparse_table_practice():
    st = SparseTablePractice([1, 3, 5, 7, 9, 2])
    assert st.query(0, 2) == 1


def test_tsp_bitmask_practice():
    assert tsp_min_cost([[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]]) == 80


def test_reservoir_sampling_practice():
    assert reservoir_sample([7], 1, 0) == [7]

"""Scenarios aligned with docs/worked-examples.md interview walkthroughs."""

from dsa.dp import coin_change, knapsack, lcs, max_subarray
from dsa.dp.edit_distance import distance as edit_distance
from dsa.graphs.bfs import distances as bfs_distances
from dsa.graphs.dijkstra import shortest_paths as dijkstra_paths
from dsa.graphs.graph import Graph
from dsa.graphs.course_schedule import can_finish
from dsa.graphs.dfs import traverse_recursive
from dsa.graphs.kruskal_mst import total_weight as kruskal_weight
from dsa.graphs.network_delay import network_delay
from dsa.graphs.number_of_islands import num_islands
from dsa.graphs.word_search import word_search
from dsa.dp import lis
from dsa.searching.quick_select import kth_smallest
from dsa.trees.bst import BST
from dsa.trees.level_order_traversal import level_order
from dsa.trees.serialize_binary_tree import deserialize, serialize
from dsa.graphs.topological_sort import kahn
from dsa.heaps.meeting_rooms_ii import min_meeting_rooms
from dsa.heaps.top_k_frequent_elements import top_k_frequent
from dsa.linear.lru_cache import LRUCache
from dsa.linear.sliding_window_maximum import max_sliding_window
from dsa.linear.valid_parentheses import is_valid_parentheses
from dsa.searching.binary_search import first_occurrence, search
from dsa.searching.trapping_rain_water import trap
from dsa.searching.two_sum_ii import two_sum_sorted
from dsa.sorting.merge_intervals import merge_intervals
from dsa.strings.longest_substring_without_repeating import length_of_longest_substring
from dsa.unionfind.union_find import UnionFind


def test_binary_search_index_of_seven():
    assert search([1, 3, 5, 7, 9, 11], 7) == 3


def test_binary_search_answer_first_index_at_least_seven():
    assert first_occurrence([1, 3, 5, 7, 9, 11], 7) == 3


def test_dijkstra_shortest_distance_to_vertex_two():
    g = Graph(4, directed=True, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(0, 2, 4)
    assert dijkstra_paths(g, 0)[2] == 3


def test_union_find_connectivity_after_merges():
    uf = UnionFind(5)
    uf.union(0, 1)
    uf.union(2, 3)
    uf.union(1, 2)
    assert uf.connected(0, 3) is True
    assert uf.connected(0, 4) is False


def test_lru_cache_capacity_two_eviction_pattern():
    cache = LRUCache(2)
    cache.put(1, 1)
    cache.put(2, 2)
    assert cache.get(1) == 1
    cache.put(3, 3)
    assert cache.get(2) == -1
    cache.put(4, 4)
    assert cache.get(1) == -1
    assert cache.get(3) == 3
    assert cache.get(4) == 4


def test_topological_sort_course_schedule_dag():
    dag = Graph(4, directed=True, weighted=False)
    dag.add_edge(0, 1)
    dag.add_edge(0, 2)
    dag.add_edge(1, 3)
    assert kahn(dag) == [0, 1, 2, 3]


def test_sliding_window_maximum_window_three():
    assert max_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3) == [3, 3, 5, 5, 6, 7]


def test_bfs_unweighted_distances_from_vertex_zero():
    g = Graph(5, directed=False, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    assert bfs_distances(g, 0) == [0, 1, 1, 2, -1]


def test_edit_distance_kitten_to_sitting():
    assert edit_distance("kitten", "sitting") == 3


def test_knapsack_zero_one_classic_capacity_five():
    assert knapsack.max_value([1, 2, 3], [6, 10, 12], 5) == 22


def test_lcs_abcde_and_ace():
    assert lcs.length("abcde", "ace") == 3


def test_two_sum_ii_sorted_pair_target_nine():
    assert two_sum_sorted([2, 7, 11, 15], 9) == [1, 2]


def test_maximum_subarray_kadane_classic():
    assert max_subarray.max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6


def test_valid_parentheses_nested_brackets():
    assert is_valid_parentheses("({[]})") is True


def test_meeting_rooms_ii_overlapping_schedule():
    assert min_meeting_rooms([[0, 30], [5, 10], [15, 20]]) == 2


def test_number_of_islands_classic_grid():
    grid = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ]
    assert num_islands(grid) == 3


def test_top_k_frequent_elements_two_keys():
    assert top_k_frequent([1, 1, 1, 2, 2, 3], 2) == [1, 2]


def test_longest_substring_without_repeating_pwwkew():
    assert length_of_longest_substring("pwwkew") == 3


def test_merge_intervals_overlap_chain():
    assert merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]]) == [
        [1, 6],
        [8, 10],
        [15, 18],
    ]


def test_coin_change_min_coins_eleven():
    assert coin_change.min_coins([1, 2, 5], 11) == 3


def test_trapping_rain_water_classic_heights():
    assert trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) == 6


def test_course_schedule_cycle_not_finishable():
    assert can_finish(2, [[1, 0], [0, 1]]) is False
    assert can_finish(2, [[1, 0]]) is True


def test_word_search_abcced_on_board():
    board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
    ]
    assert word_search(board, "ABCCED") is True
    assert word_search(board, "ABCD") is False


def test_network_delay_max_distance_from_source():
    assert network_delay(4, [[1, 0, 1], [1, 2, 1], [2, 3, 1]], 1) == 2


def test_kruskal_mst_chain_four_vertices():
    g = Graph(4, directed=False, weighted=True)
    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(2, 3, 3)
    g.add_edge(0, 3, 4)
    assert kruskal_weight(g) == 6


def test_level_order_from_heap_style_array():
    assert level_order([3, 9, 20, None, None, 15, 7]) == [[3], [9, 20], [15, 7]]


def test_serialize_binary_tree_round_trip():
    values = [1, 2, 3, None, None, 4, 5]
    assert deserialize(serialize(values)) == values


def test_quick_select_kth_smallest_and_largest_rank():
    nums = [3, 1, 4, 1, 5]
    assert kth_smallest(nums, 2) == 1
    assert kth_smallest(nums, 4) == 4


def test_dfs_discovery_times_from_vertex_zero():
    g = Graph(4, directed=False, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    result = traverse_recursive(g, 0)
    assert result.discovery == [0, 1, 5, 2]
    assert result.finish == [7, 4, 6, 3]


def test_lis_patience_sorting_classic():
    assert lis.length([10, 9, 2, 5, 3, 7, 101, 18]) == 4


def test_bst_in_order_after_inserts():
    tree = BST()
    tree.insert(5, "a")
    tree.insert(2, "b")
    tree.insert(7, "c")
    tree.insert(1, "d")
    assert tree.in_order() == [1, 2, 5, 7]
    assert tree.search(2) == "b"

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

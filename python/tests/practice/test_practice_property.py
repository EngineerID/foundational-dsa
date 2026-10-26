# practice-property-topics: bubble-sort selection-sort insertion-sort merge-sort quick-sort heapsort counting-sort radix-sort linear-search binary-search two-sum-ii trapping-rain-water quick-select bfs union-find dijkstra number-of-islands course-schedule topological-sort kruskal-mst prim-mst bellman-ford floyd-warshall network-delay bipartite-check maximum-subarray coin-change knapsack lcs lis edit-distance matrix-chain rod-cutting partition-equal-subset longest-palindromic-subsequence tsp-bitmask
"""Practice implementations vs brute-force references (seeded, 25 trials)."""

from copy import deepcopy

from dsa.practice.bellman_ford_practice import shortest_paths_result
from dsa.practice.bfs_practice import distances as bfs_distances
from dsa.practice.binary_search_practice import find_index as binary_find
from dsa.practice.bipartite_check_practice import check_bipartite
from dsa.practice.bubble_sort_practice import sort_nums as bubble_sort
from dsa.practice.coin_change import coin_change
from dsa.practice.counting_sort_practice import sort_nums as counting_sort
from dsa.practice.course_schedule import can_finish
from dsa.practice.dijkstra_practice import shortest_distances
from dsa.practice.edit_distance_practice import edit_distance
from dsa.practice.floyd_warshall_practice import all_pairs_distances
from dsa.practice.heapsort_practice import sort_nums as heapsort
from dsa.practice.insertion_sort_practice import sort_nums as insertion_sort
from dsa.practice.knapsack_practice import max_value as knapsack_max_value
from dsa.practice.kth_largest import kth_largest
from dsa.practice.lcs_practice import lcs_length
from dsa.practice.linear_search_practice import find_index as linear_find
from dsa.practice.lis_practice import length as lis_length
from dsa.practice.longest_palindromic_subsequence_practice import (
    longest_palindromic_subsequence_length,
)
from dsa.practice.matrix_chain_practice import min_cost as matrix_min_cost
from dsa.practice.max_subarray import max_subarray
from dsa.practice.merge_sort_practice import sort as merge_sort
from dsa.practice.mst_kruskal import mst_total_weight
from dsa.practice.network_delay import network_delay
from dsa.practice.num_islands import num_islands
from dsa.practice.partition_equal_subset_practice import can_split_equal_subset
from dsa.practice.prim_mst_practice import mst_total_weight as prim_mst
from dsa.practice.quick_sort_practice import sort_nums as quick_sort
from dsa.practice.radix_sort_practice import sort_nums as radix_sort
from dsa.practice.rod_cutting_practice import max_revenue as rod_max_revenue
from dsa.practice.selection_sort_practice import sort_nums as selection_sort
from dsa.practice.topological_sort_practice import order as topo_order
from dsa.practice.trapping_rain_water import trap
from dsa.practice.tsp_bitmask_practice import min_cost as tsp_min_cost
from dsa.practice.two_sum import two_sum_sorted
from dsa.practice.union_find_practice import connected as uf_connected
from _property_helpers import is_permutation, is_sorted
from practice import practice_bruteforce as bf
from practice._practice_property_helpers import (  # noqa: E402
    PRACTICE_PROPERTY_TRIALS,
    random_int_array,
    random_non_negative,
    random_sorted_array,
    random_string,
    seeded_rng,
)

INF = bf.INF

_SORTERS = [
    ("bubble-sort", bubble_sort),
    ("selection-sort", selection_sort),
    ("insertion-sort", insertion_sort),
    ("merge-sort", merge_sort),
    ("quick-sort", quick_sort),
    ("heapsort", heapsort),
    ("counting-sort", counting_sort),
    ("radix-sort", radix_sort),
]


def test_property_sorting():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        original = random_int_array(rng)
        for name, sort_fn in _SORTERS:
            inp = random_non_negative(rng) if name in ("counting-sort", "radix-sort") else original
            got = sort_fn(list(inp))
            want = bf.ref_sorted(inp)
            assert is_sorted(got), name
            assert is_permutation(inp, got), name
            assert got == want


def test_property_linear_search():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        arr = random_int_array(rng)
        key = arr[rng.randint(0, len(arr) - 1)] if arr and rng.random() < 0.5 else 999
        assert linear_find(arr, key) == bf.ref_linear_search(arr, key)


def test_property_binary_search():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        arr = random_sorted_array(rng)
        key = arr[rng.randint(0, len(arr) - 1)] if arr and rng.random() < 0.5 else 999
        assert binary_find(arr, key) == bf.ref_binary_search(arr, key)


def test_property_two_sum_ii():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        arr = random_sorted_array(rng)
        if len(arr) < 2:
            continue
        i, j = rng.randint(0, len(arr) - 1), rng.randint(0, len(arr) - 1)
        while j == i:
            j = rng.randint(0, len(arr) - 1)
        lo, hi = min(i, j), max(i, j)
        target = arr[lo] + arr[hi]
        assert two_sum_sorted(arr, target) == bf.ref_two_sum_sorted(arr, target)


def test_property_trapping_rain_water():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        h = random_non_negative(rng)
        assert trap(h) == bf.ref_trap(h)


def test_property_quick_select():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        nums = random_int_array(rng)
        if not nums:
            continue
        k = rng.randint(1, len(nums))
        assert kth_largest(nums, k) == bf.ref_kth_largest(nums, k)


def test_property_maximum_subarray():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        nums = random_int_array(rng)
        if not nums:
            continue
        assert max_subarray(nums) == bf.ref_max_subarray(nums)


def test_property_coin_change():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        coins = [c for c in random_non_negative(rng, 5) if c > 0]
        if not coins:
            continue
        amount = rng.randint(0, 14)
        assert coin_change(coins, amount) == bf.ref_coin_change(coins, amount)


def test_property_knapsack():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(1, 8)
        weights = [rng.randint(1, 5) for _ in range(n)]
        values = [rng.randint(0, 9) for _ in range(n)]
        cap = rng.randint(1, 12)
        assert knapsack_max_value(weights, values, cap) == bf.ref_knapsack(weights, values, cap)


def test_property_lcs():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        a, b = random_string(rng), random_string(rng)
        assert lcs_length(a, b) == bf.ref_lcs(a, b)


def test_property_lis():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        nums = random_int_array(rng)
        assert lis_length(nums) == bf.ref_lis(nums)


def test_property_edit_distance():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        a, b = random_string(rng), random_string(rng)
        assert edit_distance(a, b) == bf.ref_edit_distance(a, b)


def test_property_matrix_chain():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 5)
        dims = [rng.randint(2, 6) for _ in range(n + 1)]
        assert matrix_min_cost(dims) == bf.ref_matrix_chain(dims)


def test_property_rod_cutting():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(1, 8)
        prices = [rng.randint(0, 9) for _ in range(n)]
        assert rod_max_revenue(prices, n) == bf.ref_rod_cutting(prices, n)


def test_property_partition_equal_subset():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        nums = random_non_negative(rng)
        if not nums:
            continue
        assert can_split_equal_subset(nums) == bf.ref_partition_equal(nums)


def test_property_longest_palindromic_subsequence():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        s = random_string(rng)
        assert longest_palindromic_subsequence_length(s) == bf.ref_lps(s)


def test_property_tsp_bitmask():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 4)
        dist = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                if i != j:
                    dist[i][j] = rng.randint(1, 9)
        assert tsp_min_cost(dist) == bf.ref_tsp(dist)


def test_property_bfs():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 7)
        edges = [[i - 1, i] for i in range(1, n)]
        if rng.random() < 0.3 and n > 2:
            edges.append([0, n - 1])
        src = rng.randint(0, n - 1)
        assert bfs_distances(n, edges, src) == bf.ref_bfs(n, edges, src)


def test_property_union_find():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 7)
        unions = [[rng.randint(0, n - 1), rng.randint(0, n - 1)] for _ in range(n + 2)]
        a, b = rng.randint(0, n - 1), rng.randint(0, n - 1)
        assert uf_connected(n, unions, a, b) == bf.ref_uf_connected(n, unions, a, b)


def test_property_dijkstra():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 6)
        edges = [[i - 1, i, rng.randint(1, 5)] for i in range(1, n)]
        src = rng.randint(0, n - 1)
        assert shortest_distances(n, edges, src) == bf.ref_dijkstra(n, edges, src)


def test_property_number_of_islands():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        rows, cols = rng.randint(1, 4), rng.randint(1, 4)
        grid = [["1" if rng.random() < 0.4 else "0" for _ in range(cols)] for _ in range(rows)]
        assert num_islands(deepcopy(grid)) == bf.ref_num_islands(grid)


def test_property_course_schedule():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 6)
        edges = [[i, i - 1] for i in range(1, n)]
        if rng.random() < 0.2:
            edges.append([0, n - 1])
        assert can_finish(n, edges) == bf.ref_can_finish(n, edges)


def test_property_topological_sort():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 6)
        edges = [[i - 1, i] for i in range(1, n)]
        order = topo_order(n, edges)
        if not bf.ref_can_finish(n, edges):
            assert order == []
        else:
            assert bf.ref_topo_valid(n, edges, order)


def test_property_kruskal_mst_and_prim_mst():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 6)
        edges = [[i - 1, i, rng.randint(1, 5)] for i in range(1, n)]
        want = bf.ref_mst_weight(n, edges)
        assert mst_total_weight(n, edges) == want
        assert prim_mst(n, edges) == want


def test_property_bellman_ford():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 5)
        edges = [[i - 1, i, rng.randint(1, 3)] for i in range(1, n)]
        res = shortest_paths_result(n, edges, 0)
        assert not res.has_negative_cycle
        assert res.distances == bf.ref_dijkstra(n, edges, 0)


def test_property_floyd_warshall():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 4)
        edges = []
        for i in range(n):
            for j in range(i + 1, n):
                if rng.random() < 0.6:
                    edges.append([i, j, rng.randint(1, 4)])
        fw = all_pairs_distances(n, edges)
        for src in range(n):
            assert fw[src] == bf.ref_dijkstra(n, edges, src)


def test_property_network_delay():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 6)
        edges = [[0, i, rng.randint(1, 4)] for i in range(1, n)]
        dist = shortest_distances(n, edges, 0)
        if any(d >= INF for d in dist):
            assert network_delay(n, edges, 0) == -1
        else:
            assert network_delay(n, edges, 0) == max(dist)


def test_property_bipartite_check():
    rng = seeded_rng()
    for _ in range(PRACTICE_PROPERTY_TRIALS):
        n = rng.randint(2, 7)
        edges = [[i - 1, i] for i in range(1, n)]
        if rng.random() < 0.15 and n >= 3:
            edges.append([0, 2])
        assert check_bipartite(n, edges) == bf.ref_bipartite(n, edges)

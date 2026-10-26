import json
from pathlib import Path

import pytest

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

TOOLS = Path(__file__).resolve().parents[3] / "tools"


def _cases(name: str):
    return json.loads((TOOLS / name).read_text())


def test_binary_search_practice_goldens():
    for row in _cases("binary-search-goldens.json"):
        assert find_index(row["arr"], row["key"]) == row["expected"]


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


def test_binary_heap_practice_goldens():
    for row in _cases("binary-heap-goldens.json"):
        if "inserts" not in row:
            continue
        assert extract_order(row["inserts"]) == row["extractOrder"]


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


def test_merge_sort_practice_goldens():
    for row in _cases("merge-sort-goldens.json"):
        assert merge_sort_practice(row["input"]) == row["sorted"]


def test_topological_sort_practice_goldens():
    for row in _cases("topological-sort-goldens.json"):
        assert topo_order(row["n"], row["edges"]) == row["expectedOrder"]


def test_priority_queue_practice_goldens():
    for row in _cases("priority-queue-goldens.json"):
        assert pq_extract_order(row["inserts"]) == row["extractOrder"]


def test_monotonic_stack_practice_goldens():
    for row in _cases("monotonic-stack-goldens.json"):
        if row.get("expectError"):
            with pytest.raises(ValueError):
                next_greater(row["nums"])
        else:
            assert next_greater(row["nums"]) == row["expected"]


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


def test_stack_practice_goldens():
    for row in _cases("stack-goldens.json"):
        stack = StackPractice()
        for v in row.get("push", []):
            stack.push(v)
        for expected in row.get("popValues", []):
            assert stack.pop() == expected
        peek = row.get("peek")
        if peek is None or row.get("empty"):
            assert stack.is_empty()
            with pytest.raises(RuntimeError):
                stack.peek()
        else:
            assert stack.peek() == peek


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


def test_counting_sort_practice_goldens():
    for row in _cases("counting-sort-goldens.json"):
        assert counting_sort_practice(row["input"]) == row["sorted"]


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

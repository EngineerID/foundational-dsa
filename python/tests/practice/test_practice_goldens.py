import json
from pathlib import Path

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

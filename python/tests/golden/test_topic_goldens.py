import json
from pathlib import Path

from dsa.dp import coin_change, edit_distance, knapsack, lcs, lis
from dsa.searching import binary_search, linear_search
from dsa.strings import kmp, rabin_karp, z_algorithm

REPO = Path(__file__).resolve().parents[3]
GOLD_DIR = REPO / "tools" / "goldens"


def _load(item_id: str):
    return json.loads((GOLD_DIR / f"{item_id}.json").read_text())


def test_string_search_goldens():
    for mod, item in ((kmp, "kmp"), (z_algorithm, "z-algorithm"), (rabin_karp, "rabin-karp")):
        data = _load(item)
        for case in data["cases"]:
            assert mod.search(case["text"], case["pattern"]) == case["expected"]


def test_dp_goldens():
    lis_case = _load("lis")["cases"][0]
    assert lis.length(lis_case["arr"]) == lis_case["expected"]
    lcs_case = _load("lcs")["cases"][0]
    assert lcs.length(lcs_case["a"], lcs_case["b"]) == lcs_case["expected"]
    k_case = _load("knapsack")["cases"][0]
    assert (
        knapsack.max_value(k_case["weights"], k_case["values"], k_case["capacity"])
        == k_case["expected"]
    )
    e_case = _load("edit-distance")["cases"][0]
    assert edit_distance.distance(e_case["a"], e_case["b"]) == e_case["expected"]
    c_case = _load("coin-change")["cases"][0]
    assert coin_change.min_coins(c_case["coins"], c_case["amount"]) == c_case["expected"]


def test_search_goldens():
    for case in _load("linear-search")["cases"]:
        assert linear_search.index_of(case["arr"], case["target"]) == case["expected"]
    for case in _load("binary-search")["cases"]:
        assert binary_search.search(case["arr"], case["key"]) == case["expected"]

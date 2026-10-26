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
from dsa.practice.max_subarray import max_subarray
from dsa.practice.meeting_rooms import min_meeting_rooms
from dsa.practice.merge_intervals import merge_intervals
from dsa.practice.network_delay import network_delay
from dsa.practice.num_islands import num_islands
from dsa.practice.sliding_window_max import max_sliding_window
from dsa.practice.top_k_frequent import top_k_frequent
from dsa.practice.trapping_rain_water import trap
from dsa.practice.tree_codec import deserialize, serialize
from dsa.practice.two_sum import two_sum_sorted
from dsa.practice.valid_parentheses import is_valid_parentheses
from dsa.practice.word_search import word_search

TOOLS = Path(__file__).resolve().parents[3] / "tools"


def _cases(name: str):
    return json.loads((TOOLS / name).read_text())


def test_two_sum_ii_goldens_json():
    for row in _cases("two-sum-ii-goldens.json"):
        if row.get("expectError"):
            with pytest.raises(Exception):
                two_sum_sorted(row["nums"], row["target"])
        else:
            assert two_sum_sorted(row["nums"], row["target"]) == row["expected"]


def test_maximum_subarray_goldens_json():
    for row in _cases("maximum-subarray-goldens.json"):
        if row.get("expectError"):
            with pytest.raises(Exception):
                max_subarray(row["nums"])
        else:
            assert max_subarray(row["nums"]) == row["expected"]


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

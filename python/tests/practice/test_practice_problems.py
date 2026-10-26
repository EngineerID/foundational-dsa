from dsa.practice.coin_change import coin_change
from dsa.practice.course_schedule import can_finish
from dsa.practice.longest_substring import length_of_longest_substring
from dsa.practice.lru_design import LRUCacheDesign
from dsa.practice.max_subarray import max_subarray
from dsa.practice.meeting_rooms import min_meeting_rooms
from dsa.practice.num_islands import num_islands
from dsa.practice.top_k_frequent import top_k_frequent
from dsa.practice.two_sum import two_sum_sorted
from dsa.practice.valid_parentheses import is_valid_parentheses


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

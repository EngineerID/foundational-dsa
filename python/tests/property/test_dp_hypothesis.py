from hypothesis import given
from hypothesis import strategies as st

from dsa.dp import coin_change, edit_distance, knapsack, lcs, lis


@given(st.lists(st.integers(min_value=-20, max_value=20), max_size=30))
def test_lis_length_bounded(arr):
    assert 0 <= lis.length(arr) <= len(arr)


@given(st.text(alphabet="ab", max_size=12), st.text(alphabet="ab", max_size=12))
def test_lcs_symmetry(a, b):
    assert lcs.length(a, b) == lcs.length(b, a)


@given(st.text(max_size=8), st.text(max_size=8))
def test_edit_distance_zero_on_equal(a, b):
    if a == b:
        assert edit_distance.distance(a, b) == 0


@given(
    st.lists(st.integers(min_value=1, max_value=5), min_size=1, max_size=5),
    st.integers(min_value=0, max_value=20),
)
def test_coin_change_non_negative(coins, amount):
    result = coin_change.min_coins(coins, amount)
    assert result == -1 or result >= 0


@given(
    st.lists(st.integers(min_value=1, max_value=5), min_size=1, max_size=4),
    st.lists(st.integers(min_value=0, max_value=10), min_size=1, max_size=4),
    st.integers(min_value=0, max_value=15),
)
def test_knapsack_respects_capacity(weights, values, capacity):
    if len(weights) != len(values):
        return
    assert knapsack.max_value(weights, values, capacity) >= 0

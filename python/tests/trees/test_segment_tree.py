import pytest

from dsa.trees.segment_tree import SegmentTree


def test_range_sum_and_update():
    st = SegmentTree([1, 3, 5, 7])
    assert st.range_sum(0, 3) == 16
    st.update(1, 10)
    assert st.range_sum(0, 3) == 23
    assert st.range_sum(1, 1) == 10


def test_empty_and_invalid():
    st = SegmentTree([])
    assert st.range_sum(0, 0) == 0
    st2 = SegmentTree([1])
    with pytest.raises(IndexError):
        st2.range_sum(1, 1)

from dsa.linear.sliding_window_maximum import max_sliding_window


def test_max_sliding_window():
    assert max_sliding_window([1, 2], 1) == [1, 2]

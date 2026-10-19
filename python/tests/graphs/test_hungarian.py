from dsa.graphs import hungarian


def test_min_cost():
    assert hungarian.min_cost([[1, 2], [3, 4]]) == 5

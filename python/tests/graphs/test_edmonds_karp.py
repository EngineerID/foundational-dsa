from dsa.graphs import edmonds_karp


def test_max_flow():
    assert edmonds_karp.max_flow(2, [(0, 1, 5)], 0, 1) == 5

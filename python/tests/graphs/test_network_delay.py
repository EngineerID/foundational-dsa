from dsa.graphs.network_delay import network_delay


def test_network_delay():
    assert network_delay(4, [[1, 0, 1], [1, 2, 1], [2, 3, 1]], 1) == 2

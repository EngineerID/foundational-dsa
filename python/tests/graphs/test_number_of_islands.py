from dsa.graphs.number_of_islands import num_islands


def test_num_islands():
    grid = [["1", "1", "0"], ["0", "1", "0"], ["0", "0", "1"]]
    assert num_islands([row[:] for row in grid]) == 2
    assert grid[0][0] == "1"

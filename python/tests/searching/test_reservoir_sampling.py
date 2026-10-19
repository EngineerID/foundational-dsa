from dsa.searching.reservoir_sampling import sample


def test_sample():
    assert len(sample([1, 2, 3], 2, seed=1)) == 2

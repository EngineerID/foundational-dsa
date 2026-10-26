from dsa.searching.reservoir_sampling import sample


def reservoir_sample(stream: list[int], k: int, seed: int) -> list[int]:
    return sample(stream, k, seed)

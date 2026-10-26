from dsa.hashing.bloom_filter import BloomFilter


class BloomFilterPractice:
    def __init__(self, expected_items: int, false_positive_rate: float) -> None:
        self._filter = BloomFilter(expected_items, false_positive_rate)

    def add(self, item: str) -> None:
        self._filter.add(item)

    def might_contain(self, item: str) -> bool:
        return self._filter.might_contain(item)

"""Property tests: min-heap invariant and extract order (100 trials)."""

from dsa.heaps.binary_heap import BinaryHeap

from _property_helpers import PROPERTY_TRIALS, heap_min_invariant, random_int_array, seeded_rng


def test_heap_property():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        heap = BinaryHeap[int]()
        ops = [rng.randint(-30, 30) for _ in range(rng.randint(0, 40))]
        for x in ops:
            heap.insert(x)
            assert heap_min_invariant(heap._heap)
        extracted = []
        while heap.size() > 0:
            extracted.append(heap.extract_min())
            assert heap_min_invariant(heap._heap)
        assert extracted == sorted(extracted)

"""Property tests: sorts produce sorted permutations (100 seeded trials)."""

from copy import deepcopy

from dsa.sorting.bubble_sort import sort as bubble_sort
from dsa.sorting.insertion_sort import sort as insertion_sort
from dsa.sorting.merge_sort import sort as merge_sort
from dsa.sorting.merge_sort import sort_bottom_up
from dsa.sorting.counting_sort import sort as counting_sort
from dsa.sorting.heap_sort import sort as heap_sort
from dsa.sorting.quick_sort import sort as quick_sort
from dsa.sorting.quick_sort import sort_3way
from dsa.sorting.radix_sort import sort as radix_sort
from dsa.sorting.selection_sort import sort as selection_sort

from _property_helpers import (
    PROPERTY_TRIALS,
    is_permutation,
    is_sorted,
    random_int_array,
    seeded_rng,
)

def _non_negative(arr: list[int]) -> list[int]:
    return [abs(x) for x in arr]


_SORTERS_INPLACE = [
    ("bubble", bubble_sort),
    ("selection", selection_sort),
    ("insertion", insertion_sort),
    ("quick", lambda a: quick_sort(a, False)),
    ("quick_rand", lambda a: quick_sort(a, True)),
    ("quick_3way", sort_3way),
    ("heap", heap_sort),
    ("counting", counting_sort),
    ("radix", radix_sort),
]


def test_inplace_sorts_property():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        original = random_int_array(rng)
        for _name, sorter in _SORTERS_INPLACE:
            if _name in ("counting", "radix"):
                arr = _non_negative(deepcopy(original))
                baseline = list(arr)
            else:
                arr = deepcopy(original)
                baseline = original
            sorter(arr)
            assert is_sorted(arr), _name
            assert is_permutation(baseline, arr), _name


def test_merge_sort_property():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        original = random_int_array(rng)
        for sorter in (merge_sort, sort_bottom_up):
            result = sorter(original)
            assert is_sorted(result)
            assert is_permutation(original, result)

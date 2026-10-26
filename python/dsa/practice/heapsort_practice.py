from dsa.sorting.heap_sort import sort as heapsort


def sort_nums(input_: list[int]) -> list[int]:
    arr = list(input_)
    heapsort(arr)
    return arr

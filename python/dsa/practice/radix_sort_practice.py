from dsa.sorting.radix_sort import sort as radix_sort


def sort_nums(input_: list[int]) -> list[int]:
    arr = list(input_)
    radix_sort(arr)
    return arr

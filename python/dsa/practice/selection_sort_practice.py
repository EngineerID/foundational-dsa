from dsa.sorting.selection_sort import sort as selection_sort


def sort_nums(input_: list[int]) -> list[int]:
    arr = list(input_)
    selection_sort(arr)
    return arr

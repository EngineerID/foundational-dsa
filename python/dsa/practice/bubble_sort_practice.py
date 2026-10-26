from dsa.sorting.bubble_sort import sort as bubble_sort


def sort_nums(input_: list[int]) -> list[int]:
    arr = list(input_)
    bubble_sort(arr)
    return arr

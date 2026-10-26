from dsa.sorting.counting_sort import sort as counting_sort


def sort_nums(input_: list[int]) -> list[int]:
    arr = list(input_)
    counting_sort(arr)
    return arr

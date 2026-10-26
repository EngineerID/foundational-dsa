from dsa.sorting.insertion_sort import sort as insertion_sort


def sort_nums(input_: list[int]) -> list[int]:
    arr = list(input_)
    insertion_sort(arr)
    return arr

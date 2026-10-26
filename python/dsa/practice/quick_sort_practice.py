from dsa.sorting.quick_sort import sort, sort_3way


def sort_nums(input_: list[int], three_way: bool = False) -> list[int]:
    arr = list(input_)
    if three_way:
        sort_3way(arr)
    else:
        sort(arr)
    return arr

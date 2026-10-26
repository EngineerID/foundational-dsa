from dsa.dp.partition_equal_subset import can_partition


def can_split_equal_subset(nums: list[int]) -> bool:
    return can_partition(nums)

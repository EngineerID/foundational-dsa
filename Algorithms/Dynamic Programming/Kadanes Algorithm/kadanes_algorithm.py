# Kadane's Algorithm
# Kadane's Algorithm is a dynamic programming algorithm used to find the maximum sum of a contiguous subarray in an array of integers.
# Input: an array of integers
# Output: the maximum sum of a contiguous subarray
# Example: For the input array [-2, 1, -3, 4, -1, 2, 1, -5, 4], the output is 6 (the subarray [4, -1, 2, 1] has the largest sum).
# The algorithm works by iterating through the array while maintaining two variables:
# It operates in O(n) time complexity and O(1) space complexity.

def kadanes_algorithm(arr):
    if not arr:  # Handle empty array case
        return 0

    max_current = max_global = arr[0]

    for i in range(1, len(arr)):
        max_current = max(arr[i], max_current + arr[i])
        if max_current > max_global:
            max_global = max_current

    return max_global
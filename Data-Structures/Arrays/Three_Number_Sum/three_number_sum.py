# Three Number Sum
# Input: non-empty array of distinct integers and a target sum integer
# Output: all unique triplets in the array that sum up to the target sum,
#         returned as a list of lists (each triplet sorted in ascending order)
# Requirements:
# - Numbers within each triplet must be sorted in ascending order
# - Triplets must also be sorted in ascending order with respect to the values they hold
# - Return an empty array if no such triplets exist
# Time Complexity: O(n^2)
# Space Complexity: O(n)

def threeNumberSum(array, target_sum):
    array.sort()
    triplets = []
    n = len(array)

    for i in range(n - 2):
        # Skip duplicates for i
        if i > 0 and array[i] == array[i - 1]:
            continue
        left, right = i + 1, n - 1
        while left < right:
            current_sum = array[i] + array[left] + array[right]
            if current_sum == target_sum:
                triplets.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
                # Skip duplicates on both ends
                while left < right and array[left] == array[left - 1]:
                    left += 1
                while left < right and array[right] == array[right + 1]:
                    right -= 1
            elif current_sum < target_sum:
                left += 1
            else:
                right -= 1

    return triplets
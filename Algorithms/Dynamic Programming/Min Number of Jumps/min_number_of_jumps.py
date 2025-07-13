# Min Number of Jumps
# Given an array of positive integers where each element represents the maximum number of jumps that can be made forward from that position,
# Input: non-empty array of positive integers
# Output: return minimum number of jumps to reach the end of the array
# Example: [2, 3, 1, 1, 4] -> 2 (jump from index 0 to index 1, then from index 1 to index 4)
# O(n^2) time | O(n) space

def min_number_of_jumps(array):
    if len(array) == 1:
        return 0

    jumps = [float("inf")] * len(array)
    jumps[0] = 0

    for i in range(len(array)):
        if jumps[i] == float("inf"):
            # Can't jump from this index, skip it
            continue
        for j in range(i + 1, min(i + array[i] + 1, len(array))):
            jumps[j] = min(jumps[j], jumps[i] + 1)

    return -1 if jumps[-1] == float("inf") else jumps[-1]

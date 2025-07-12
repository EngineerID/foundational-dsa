# Write a function that takes in two non-empty arrays of integers and returns a boolean representing whether the second array is a subsequence of the first one.

def isValidSubsequence(array, sequence):
    i = 0  # Pointer for the first array
    j = 0  # Pointer for the second array

    while i < len(array) and j < len(sequence):
        if array[i] == sequence[j]:
            j += 1  # Move the pointer for the second array
        i += 1  # Move the pointer for the first array

    return j == len(sequence)

    pass

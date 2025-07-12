from validate_subsequence import isValidSubsequence

# Manual Test
if __name__ == "__main__":
    test_array = [5, 1, 22, 25, 6, -1, 8, 10]
    sequence = [1, 6, -1, 10]
    result = isValidSubsequence(test_array, sequence)
    print("Result:", result)  # Expected: [2, 7]
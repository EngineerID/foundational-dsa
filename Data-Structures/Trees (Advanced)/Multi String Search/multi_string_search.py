# Write a function that checks if a string contains each string in an array as a substring,
# without using any built-in string-matching methods.
#
# Input: 
#   - string: the string to search within
#   - substrings: list of strings to search for
#
# Output:
#   - A list of booleans indicating whether each small string exists in the big string.
#
# Time Complexity: O(n * m * l)
#   - n = length of string
#   - m = number of substrings
#   - l = average length of each small string
#
# Space Complexity: O(m) for the output list

def multi_string_search(string, substrings):
    def is_substring(big, small):
        # Manual sliding window match
        for i in range(len(big) - len(small) + 1):
            match = True
            for j in range(len(small)):
                if big[i + j] != small[j]:
                    match = False
                    break
            if match:
                return True
        return False

    return [is_substring(string, small) for small in substrings]

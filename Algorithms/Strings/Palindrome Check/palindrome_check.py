# Take in a non-empty string.
# Check if the string is a palindrome.
# A palindrome reads the same forwards and backwards.
# Return a boolean representing whether the string is palindrome or not.

def palindrome_check(string: str) -> bool:
    # Initialize two pointers, one at the start and one at the end of the string.
    left, right = 0, len(string) - 1
    
    # Loop until the two pointers meet in the middle.
    while left < right:
        # If characters at both pointers are not equal, return False.
        if string[left] != string[right]:
            return False
        # Move the pointers towards the center.
        left += 1
        right -= 1
    
    # If all characters matched, return True.
    return True
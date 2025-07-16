

# Find the largest range of vaues in an array
# Input: array of integers
# Output: tuple of the largest range (min, max)
# Optimal solution using a set for O(n) time complexity
# Space complexity is O(n)

def largest_range(array):
    if not array:
        return (0, 0)

    num_set = set(array)
    largest_range = (0, 0)
    max_length = 0

    for num in array:
        if num not in num_set:
            continue
        
        num_set.remove(num)
        current_length = 1
        left = num - 1
        right = num + 1

        while left in num_set:
            num_set.remove(left)
            current_length += 1
            left -= 1

        while right in num_set:
            num_set.remove(right)
            current_length += 1
            right += 1

        if current_length > max_length:
            max_length = current_length
            largest_range = (left + 1, right - 1)

    return largest_range
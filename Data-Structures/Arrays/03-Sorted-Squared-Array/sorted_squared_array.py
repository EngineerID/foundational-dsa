# write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

def sortedSquaredArray(array):
    squared_array = [0] * len(array)  # Initialize an array of the same length
    left = 0  # Pointer for the start of the array
    right = len(array) - 1  # Pointer for the end of the array

    for i in range(len(array) - 1, -1, -1):
        left_value = array[left] ** 2
        right_value = array[right] ** 2
        
        if left_value > right_value:
            squared_array[i] = left_value
            left += 1
        else:
            squared_array[i] = right_value
            right -= 1

    return squared_array
# Array of Products
# Input: non-empty array of integers
# Output: return an array of the same length where each element at index i is the product of all the numbers in the input array except the one at i
# Example: [5, 1, 4, 2] -> [8, 40, 10, 20]
# O(n) time | O(n) space

def array_of_products(array):
    if len(array) == 0:
        return []

    n = len(array)
    products = [1] * n

    # Calculate products of elements to the left of each index
    left_product = 1
    for i in range(n):
        products[i] = left_product
        left_product *= array[i]

    # Calculate products of elements to the right of each index
    right_product = 1
    for i in range(n - 1, -1, -1):
        products[i] *= right_product
        right_product *= array[i]

    return products
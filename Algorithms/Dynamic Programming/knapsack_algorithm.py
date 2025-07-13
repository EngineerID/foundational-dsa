# Write a function that returns the maximum combined value of the items 
# you should pick for a knapsack, as well as the list of indices of those items.

# Each item is represented as a list of two integers:
# - The first integer is the item's value.
# - The second integer is the item's weight.

# The input consists of:
#   1. A list of items: [[value1, weight1], [value2, weight2], ...]
#   2. An integer representing the maximum capacity of the knapsack.

# Your goal is to select a subset of the items such that:
#   - The total weight does not exceed the knapsack's capacity.
#   - The total value is maximized.
#   - You may only use each item once.

# Return a tuple:
#   (max_total_value, list_of_selected_item_indices)

# If there are multiple combinations of items that achieve the same maximum value,
# the function can return any one of them.


def knapsack(items, max_weight):
    n = len(items)
    dp = [[0] * (max_weight + 1) for _ in range(n + 1)]

    # Build DP table (value-first format)
    for i in range(1, n + 1):
        value, weight = items[i - 1]
        for w in range(max_weight + 1):
            if weight <= w:
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weight] + value)
            else:
                dp[i][w] = dp[i - 1][w]

    # Backtrack to find selected item indices
    selected_items = []
    w = max_weight
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            selected_items.append(i - 1)
            w -= items[i - 1][1]  # Subtract item's weight

    selected_items.reverse()
    result = (dp[n][max_weight], selected_items)

    # Debug log (optional)
    print(f"INPUT: items={items}, max_weight={max_weight}")
    print(f"OUTPUT: total_value={result[0]}, selected_indices={result[1]}")
    print("-" * 40)

    return result




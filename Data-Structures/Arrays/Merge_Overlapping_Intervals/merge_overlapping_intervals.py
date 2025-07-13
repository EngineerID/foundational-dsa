# Input: non-empty array of intervals
# Merge overallapping itnervals
# Return the new intervals in any order
# O(n log n) time | O(n) space

def merge_overlapping_intervals(intervals):

    if not intervals:  # ✅ Fix: Handle empty list
        return []

    # Sort the intervals by their start time
    intervals.sort(key=lambda x: x[0])
    
    merged_intervals = []
    current_interval = intervals[0]

    for i in range(1, len(intervals)):
        next_interval = intervals[i]
        
        # If the current interval overlaps with the next interval
        if current_interval[1] >= next_interval[0]:
            # Merge them by updating the end time of the current interval
            current_interval[1] = max(current_interval[1], next_interval[1])
        else:
            # No overlap, add the current interval to the result and move to the next
            merged_intervals.append(current_interval)
            current_interval = next_interval

    # Add the last interval
    merged_intervals.append(current_interval)

    return merged_intervals

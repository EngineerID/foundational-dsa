"""
Algorithm Name: Product Sum
Data structure: Arrays
Goal: Take an array with subarray and get a total sum (multiple sum by the depth for nested sub-arrays)

Date: June 12, 2020
Author: EngineerID

Time: O(N) where N is the number of elements including sub elements
Space: O(D) where D is the maximum depth of array
""" 

# Transform productSum method into recursive method
# Want to pass in a multiplier parameter (depth of array)
def productSum(array, multiplier = 1):
	sum = 0
	
	# Loop through the elements in the array
	for i in array:
		
		# If an element is not an integer (meaning its a sub-array)
		if type(i) is not int:
			
			# call the productSum function once again
			sum += productSum(i, multiplier + 1)
		else:
			sum += i
	
    return sum * multiplier

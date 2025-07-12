"""
Algorithm Name: Min Max Stack Construction
Data Structure: Stack
Goal:
	Construct Stack with three standard methods (push, pop, peek)
	Include two additional methods that return min and max from the list 

Date: June 10, 2020
Author: EngineerID

Time Complexity: constant (O(1)) for each method
Space Complexity: constant (O(1)) for each method
""" 

# Feel free to add new properties and methods to the class.
class MinMaxStack:
	
	# Initialize two arrays/lists
	def __init__(self):
		# One list holds minimum and maximum values for any given element in a stack
		self.minMaxStack = []
		
		# second list holds the stack with elements
		self.stack = []
	
	# Finds top value of the stack (head)
	# O(1) time and O(1) space
    
	def peek(self):
		return self.stack[len(self.stack) - 1]
		return 0
	
	# Remove value off the stack
	# O(1) time and O(1) space
    def pop(self):
		# Remember to remove the 2 values from min-max stack as well
		self.minMaxStack.pop()
		
		# Use built-in pop method
    	return self.stack.pop()

	# Insert value to the stack
	# O(1) time and O(1) space
    def push(self, number):
		
		# First scenario is adding the first element
		# Need to update MinMax list
		# Can be reprsented as many hash-tables of two values
		# Use Python dictionary JS object
		newMinMax = {"min": number, "max": number}
		
		# Second scenario is when there are already elements in the stack
		# If "truthy", then compute new Min and Max values
		if len(self.minMaxStack):
			# Create variable for most recent MinMax value in a stack
			lastMinMax = self.minMaxStack[len(self.minMaxStack) - 1]
			# Compare last minimum value with the number being added
			newMinMax["min"] = min(lastMinMax["min"], number)
			# Compare last maximum value with the number being added
			newMinMax["max"] = max(lastMinMax["max"], number)
		
		# Use built-in method to append values to both lists
		self.minMaxStack.append(newMinMax)
		self.stack.append(number)
		
	
	# Return min value from minMaxStack
	# O(1) time and O(1) space
    def getMin(self):
		return self.minMaxStack[len(self.minMaxStack) - 1]["min"]

	# Return max value from minMaxStack
	# O(1) time and O(1) space
    def getMax(self):
        return self.minMaxStack[len(self.minMaxStack) - 1]["max"]

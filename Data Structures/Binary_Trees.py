#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Binary Trees
Goals:
	Calculate sum of each Branch (from root node to leaf node)
	Return array that has a sum for each branch

Date: June 1, 2020
Author: EngineerID

Time Complexity: O(N)    
Space Complexity: O(N)
    

"""

# This is an input class. Do not edit.
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

	# Assign a head node
	# O(1) time | O(1) space
	def setHead(self, node):
		if self.head is None:
			self.head = node
			self.tail = node
			return
        self.insertBefore(self.head, node)
	
	
	# Assigns a tail node
	# O(1) time | O(1) space
    def setTail(self, node):
        if self.tail is None:
			self.setHead(node)
			return
        self.insertAfter(self.tail, node)

	# Inserts new node before a given node (and adjusts pointers)
	# O(1) time | O(1) space
    def insertBefore(self, node, nodeToInsert):
        
		# Check if there is only one node in the list --> nothing to do
        if nodeToInsert == self.head and nodeToInsert == self.tail:
			return
		
		# Remove the node
        self.remove(nodeToInsert)
		
		# Update adjacent nodes
		nodeToInsert.prev = node.prev
		nodeToInsert.next = node
		
		# Update surrounding bindings
		if node.prev is None:
			self.head = nodeToInsert
		else:
			node.prev.next = nodeToInsert
		node.prev = nodeToInsert
        
	# Similar to InsertBefore but insert after a given node
	# O(1) time | O(1) space
    def insertAfter(self, node, nodeToInsert):
		
		# Check edge case: node is the tail node
        if nodeToInsert == self.head and nodeToInsert == self.tail:
			return
        
		# The switcharoo
        self.remove(nodeToInsert)
		nodeToInsert.prev = node
		nodeToInsert.next = node.next
		
		# If we are dealing with the tail, we should overwrite the tail
		if node.next is None:
			self.tail = nodeToInsert
		else:
			node.next.prev = nodeToInsert
		node.next = nodeToInsert

	# Inserts a node at a specific position using other methods
	# O(n) time | O(1) space
    def insertAtPosition(self, position, nodeToInsert):
        
		# If we are first position --> set head method
		if position == 1:
			self.setHead(nodeToInsert)
			return
		node = self.head
		currentPosition = 1
		
		while node is not None and currentPosition != position:
			node = node.next
			currentPosition += 1
		if node is not None:
			self.insertBefore(node, nodeToInsert)
		else:
			self.setTail(nodeToInsert)

	# Removes all nodes with a given value
	# Combination of searching method and removal method
	# O(n) time | O(1) spac
    def removeNodesWithValue(self, value):
        node = self.head
		
		# Loop through the linked list
		while node is not None:
			# remove the node with a given value
			# use the ol' switcheroo to update sequence
			nodeToRemove = node
			node = node.next
			if nodeToRemove.value == value:
				self.remove(nodeToRemove)

	# This remove method can be used to help methods so it is written first
	# O(1) time | O(1) space
    def remove(self, node):
		# Check Head or Tail edge cases
        if node == self.head:
			self.head = self.head.next
		if node == self.tail:
			self.tail = self.tail.prev
		
		# Call sub-method to remove the pointers
		# (i.e., change the pointers of the node)
		self.removeNodeBindings(node)

	# Method tranverses the tree to see if there is a node that matches the given value
	# O(n) time | O(1) space
    def containsNodeWithValue(self, value):
        
        node = self.head
		
		while node is not None and node.value != value:
			node = node.next
        return node is not None

	# Method helper method to remove "bindings" (pointers adjacent to the node)
	def removeNodeBindings(self, node):
		
		# Check that we are not pointing to null values in before and after nodes
		# Order is super important!
		if node.prev is not None:
			node.prev.next = node.next
		if node.next is not None:
			node.next.prev = node.prev
		node.prev = None
		node.next = None
		
		
	
	

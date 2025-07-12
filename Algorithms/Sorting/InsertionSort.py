#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Insertion Sort

Date: May 21, 2020
Author: EngineerID

Time Complexity:
    Best Case (already sorted): O(n)
    Worst Case (inverse sorted): O(n^2)
    
Space Complexity: O(1)
    

"""

def insertionSort(array):
    print(array)
    
    for i in range(1, len(array),1):
        #print("i is: " + str(i))
        j = i;
        
        while ((j > 0) & (array[j] < array [j-1])):
            swap(j, array)
            j -= 1
        

    #print(array)
    return(array)


def swap(j, array):
    key = array[j]
    array[j] = array[j-1]
    array[j-1] = key
    

if __name__ == "__main__":
    array = [32, 53, 7, 40, 51, 90, 64, 52]
    insertionSort(array)




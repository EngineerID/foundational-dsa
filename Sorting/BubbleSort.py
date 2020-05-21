#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed May 20 21:29:54 2020

@author: ivan
"""
    
def bubbleSort():
    array = [8, 5, 2, 9, 5, 6, 3]
    
    Trigger = False
    
    
    while (Trigger == False):
        Trigger = True
        for i in range(len(array) - 1):
            #print("i is: " + str(i))
            #print(array)
            
            if array[i] > array[i + 1]:
                swap(i, array)
                Trigger = False
            
            #print(array)
        
    
    print(array)


def swap(i, array):
    temp = array[i]
    array[i] = array[i+1]
    array[i+1] = temp
    

bubbleSort()
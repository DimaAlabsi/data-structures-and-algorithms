# Challenge Summary

***Quick Sort is an algorithm which implements recursively. And thus we need to add a base case for quickSort function..***

**Quick Sort algorithm follows Divide and Conquer approach. It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.**

* pivot — the element of the array (in our case is the first element) which is compared with other elements in the same array.
* left — is an array that stores elements of the passed array which are less than the pivot.
* right — the same as left, but stores elements greater or equal to the pivot.



***Quick sort is a sorting algorithm that splits up an array into equal parts and sets a pointer to both ends of the array and a pivot in the middle of the array. If the left value is greater than the pivot and the right is less than the pivot they are swapped. This is done recursively until the pointers meet in the middle. It is a very efficient sorting algorithm - O(log n).***


## Whiteboard Process

![whiteBoard](/javascript/QuickSort/img/quicksortWhiteBoard.PNG)

## Approach & Efficiency

* I understood the problem domain

* I'm trying imagine the results 

* I'm trying to draw the visualization  on a white board then trying to writre the code and test it until it give me **passesd**



### test 

* npm run test


![test result](/javascript/QuickSort/img/quickSortTest.PNG)

## Solution

find the "pivot" element in the array,determine pivot as middle element

left pointer the first element in array.

right pointer the last element in array.

Compare the left if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.

Compare the right element and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.

Check if left pointer is less than or equal to right pointer, then swap the elements in locations of these pointers.

Increment the left pointer and decrement the right pointer.

If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.



![visual](/javascript/QuickSort/img/quickSort.png)

### Big O
![big o](/javascript/QuickSort/img/Big0.png)


### code

[code](/javascript/QuickSort/quickSort.js)



- [x] quickStart function


- [x] tests

 - [x] Top-level README “Table of Contents” is updated
 - [x] README for this challenge is complete
       - [x] Summary, Description, Approach & Efficiency, Solution
       - [x] Picture of whiteboard
       - [x] Link to code
 - [x] Feature tasks for this challenge are completed
 - [x] Unit tests written and passing
       - [x] “Happy Path” - Expected outcome
       - [x] Expected failure
       - [x] Edge Case (if applicable/obvious)
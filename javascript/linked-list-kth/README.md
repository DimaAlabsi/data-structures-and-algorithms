 ## challenge Summary

### Node
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

### Linked List
* Create a Linked List class Within your Linked List class, include a head property.

* Upon instantiation, an empty Linked List should be created.
* The class should contain the following methods:
* kth from end
argument: a number, k, as a parameter.

Return the node’s value that is k places from the tail of the linked list.

You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

*  append
arguments: new value
adds a new node with the given value to the end of the list

## Whiteboard Process

![whiteboard2](/javascript/linked-list-kth/images/whiteBoard.png)

![whiteboard1](/javascript/linked-list-kth/images/linked-list-kth.png)



***Testing Results***

![whiteboard2](/javascript/linked-list-kth/images/results-of-testing.png)



## Approach & Efficiency
* I understood the problem domain

* I'm trying imagine the results 

* I', trying to draw the linked list on a white board then trying to writre the code and test it until it give me **passesd**

### test 

* npm run test

## Solution

 * Where k is greater than the length of the linked list
* Where k and the length of the list are the same
* Where k is not a positive integer
* Where the linked list is of a size 1
* “Happy Path” where k is not at the end, but somewhere in the middle of the linked list



***[CODE](/javascript/linked-list-kth)***
# stack-queue-pseudo

* Stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle.

* Queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle

## Challenge
Create a new class called pseudo queue.
Do not use an existing Queue.
Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
Internally, utilize 2 Stack instances to create and manage the queue
Methods:
enqueue
Arguments: value
Inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue
Arguments: none
Extracts a value from the PseudoQueue, using a first-in, first-out approach.h
NOTE: The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Whiteboard Process

![whiteBoard](/javascript/stack-queue-pseudo/img/whiteBoard.png)

#### Tests Results 

![tests](/javascript/stack-queue-pseudo/img/tests-Results.png)

## Approach & Efficiency

* I understood the problem domain

* I'm trying imagine the results 

* I', trying to draw the linked list on a white board then trying to writre the code and test it until it give me **passesd**
*


### test 

* npm run test


##### solution can be 



## API

pop
Arguments: none

Returns: the value from node from the top of the stack

Removes the node from the top of the stack

Should raise exception when called on empty stack

peek

Arguments: none

Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack
is empty

Arguments: none

Returns: Boolean indicating whether or not the stack is empty.
Queue

Create a Queue class that has a front property. It creates an empty Queue when instantiated.

This object should be aware of a default empty value assigned to front when the queue is created.

The class should contain the following methods:
enqueue

Arguments: value

adds a new node with that value to the back of the queue with an O(1) Time performance.

dequeue
Arguments: none

Returns: the value from node from the front of the queue

Removes the node from the front of the queue

Should raise exception when called on empty queue

peek
Arguments: none
Returns: Value of the node located at the front of the queue

Should raise exception when called on empty stack

is empty
Arguments: none
Returns: Boolean indicating whether or not the queue is empty

[code](/javascript/stack-queue-pseudo)



- [x] stack  methods
- [x] pesudoQueue methods



- [x] tests

 [x] Top-level README “Table of Contents” is updated
 - [x] README for this challenge is complete
       - [x] Summary, Description, Approach & Efficiency, Solution
       - [x] Picture of whiteboard
       - [x] Link to code
 - [x] Feature tasks for this challenge are completed
 - [x] Unit tests written and passing
       - [x] “Happy Path” - Expected outcome
       - [x] Expected failure
       - [x] Edge Case (if applicable/obvious)
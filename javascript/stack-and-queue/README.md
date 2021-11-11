# Stacks and Queues

* Stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle.

* Queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle

## Challenge
Stack
Create a Stack class that has a top property. It creates an empty Stack when instantiated.

This object should be aware of a default empty value assigned to top when the stack is created.

The class should contain the following methods:
push

Arguments: value
adds a new node with that value to the top of the stack with an O(1) Time performance.


## Approach & Efficiency

* I understood the problem domain

* I'm trying imagine the results 

* I', trying to draw the linked list on a white board then trying to writre the code and test it until it give me **passesd**
*


### test 

* npm run test


##### solution can be 

* Can successfully push onto a stack

* Can successfully push multiple values onto a stack

* Can successfully pop off the stack 


* Can successfully empty a stack after multiple pops

* Can successfully peek the next item on the stack

* Can successfully instantiate an empty stack

* Calling pop or peek on empty stack raises exception

* Can successfully enqueue into a queue

* Can successfully enqueue multiple values into a queue

* Can successfully dequeue out of a queue the expected value

* Can successfully peek into a queue, seeing the expected value

* Can successfully empty a queue after multiple dequeues

* Can successfully instantiate an empty queue

* Calling dequeue or peek on empty queue raises exception

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

[code](/stack-and-queue)



- [x] stack  methods
- [x] queue methods



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
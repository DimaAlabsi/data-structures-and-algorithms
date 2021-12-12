class Stack {
    constructor() {
      this.data = [];
      this.length = 0;
      this.maxValues = [];
    }
  
    push(element) {
      // if the stack is empty or the element we're pushing is greater than currentMax, add the new element to maxValues
      if (this.length === 0 || element >= this.findMax()) {
        this.maxValues.push(element)
      }
      // otherwise, push the currentMax to maxValues again, to align lengths of arrays and keep currentMax
      else {
        this.maxValues.push(this.findMax())
      }
      // increase the length variable by 1 to keep track of length, and add element to stack
      this.length += 1
      this.data.push(element);
      return this.data
    }
  
    pop() {
      // if the stack isn't empty, decrease the length count and remove element from the end of the stack and maxValue array to keep lengths aligned
      if (this.length > 0) {
        this.length -= 1;
        this.maxValues.pop()
        return this.data.pop()
      }
    }
  
    // this returns the top element in the stack (last element in the array)
    peek() {
      return this.data[this.length - 1]
    }
  
    // this returns the maxValue currently in the stack, by grabbing the last element of the maxValue stack
    findMax() {
      return this.maxValues[this.length - 1]
    }
  }




//   the internal memory of the Stack can be approached in different ways.
// Using a Linked List
// This approach uses O(n) space.
// Using an Array
// This approach can either use O(n) space or O(c) where c is the size of the array in static-size arrays.
// If your language doesn’t support dynamic arrays,Inquire about the candidate’s decision of using a limited amount of storage for the Stack.
// Using a Node class and manually creating connections by maintaining a reference to the ‘top’ of the stack.
// This approach uses O(n) space.
  //time & space O(1)
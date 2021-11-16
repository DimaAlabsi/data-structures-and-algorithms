"use strict";
const Node = require("../lib/Node");
const Queue = require("../lib/Queue");
const Stack = require("../lib/Stack");

describe(' Node & Stack & Queue tests', () => {
  test('Node test', () => {
    let value = 2;
    let newNode = new Node(value);
    expect(newNode.value).toBe(2);
    expect(newNode.next).toBeNull();
  })
  test("isEmpty() ", () => {
    let stack = new Stack();

    expect((stack.isEmpty())).toBe(true)
    stack.push(8)
    expect((stack.isEmpty())).toBe(false)
  });

  test('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
  })
  test('can push into stack', () => {
    let stack = new Stack();
    stack.push(2);
    expect(stack.top.value).toBe(2);
    expect(stack.top.next).toBeNull();
  });
  test("push multiple values into stack", () => {
    let stack = new Stack();
    stack.push(8);
    stack.push(2);
    expect(stack.top.value).toBe(2);
    expect(stack.top.next.value).toBe(8);
  });
  test("Can pop the stack", () => {
    let stack = new Stack();
    stack.push(8);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.top.value).toBe(8);
  });
  test(" empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push(8);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });
  test("peek next top value in  stack", () => {
    let stack = new Stack();
    stack.push(8);
    stack.push(8);

    stack.push(2);
    stack.peek();
    expect(stack.top.value).toBe(2);
  });
  test("Calling pop or peek on empty stack raises exception", () => {
    let stack = new Stack();
    expect((stack.pop())).toBe(false)
  });
  test("enqueue into queue", () => {
    let queue = new Queue();
    queue.enqueue(8);
    expect(queue.front.value).toBe(8);
  });
  test(" empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue(8);
    queue.enqueue(5);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
  });
  test("isEmpty ", () => {
    let queue = new Queue();

    expect((queue.isEmpty())).toBe(true)
    queue.enqueue(1)
    expect((queue.isEmpty())).toBe(false)
  });
  test("enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue(8);
    queue.enqueue(5);
    expect(queue.front.value).toBe(8);
    expect(queue.front.next.value).toBe(5);
  });
  test("dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue(8);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.front.value).toBe(2);
  });
  test("peek into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.peek();
    expect(queue.front.value).toBe(1);
  });
})

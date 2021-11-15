const Node = require("../lib/Node");
const Stack = require("../lib/Stack");
const PesoduQueue = require("../lib/PesoduQueue");
const PesudoQueue = require("../lib/PesoduQueue");

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
  test('enqueue into a pesudoQueue', () => {
    let pesuduQueueTest = new PesudoQueue();
    pesuduQueueTest.enqueue(8);
    expect(pesuduQueueTest.stack1.top.value).toBe(8);

    expect(pesuduQueueTest.stack1.isEmpty()).toEqual(false);
    expect(pesuduQueueTest.stack2.isEmpty()).toEqual(true);
  })
  it(" dequeue from a queue of certain value", () => {
    let pesuduQueueTest = new PesudoQueue();
    pesuduQueueTest.enqueue(8);
    pesuduQueueTest.enqueue(6);
    pesuduQueueTest.enqueue(4);

    expect(pesuduQueueTest.dequeue()).toEqual(8);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    let pesuduQueueTest = new PesoduQueue();
    pesuduQueueTest.enqueue(9);
    pesuduQueueTest.enqueue(1);
    pesuduQueueTest.dequeue();
    pesuduQueueTest.dequeue();
    expect(pesuduQueueTest.stack1.top).toBeNull();
    expect(pesuduQueueTest.stack2.top).toBeNull();
  });
 
  it("peek on empty queue", () => {
    let pesuduQueueTest = new PesoduQueue();
    expect((pesuduQueueTest.dequeue())).toEqual(false);
  });

})
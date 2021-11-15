"use strict";
const Node = require('../lib/Node');
const LinkedList = require('../lib/LinkedList');

describe("Linked List", () => {
  it('node test', ()=> {
    let value = 4;
    let newNode = new Node(value);
    expect(newNode.value).toBe(value);
    expect(newNode.next).toBeNull();
});

  test("Can instantiate an empty linked list", () => {
    const linkedlists = new LinkedList();
    expect(linkedlists).toBeInstanceOf(LinkedList);
    expect(linkedlists.head).toBeNull();
  });
  test("add a new value to the head", () => {
    const linkedlists = new LinkedList();
    linkedlists.insert("test1");
    expect(linkedlists.head.value).toBe("test1");
    expect(linkedlists.head.next).toBeNull();
  });
  test('append()', () => {
    let newLinkedList = new LinkedList();
    let initialValue = 1;
    newLinkedList.append(initialValue);
    expect(newLinkedList.head.value).toEqual(initialValue);

    let anotherValue = 'Second Item';
    newLinkedList.append(anotherValue);
    expect(newLinkedList.head.next.value).toEqual(anotherValue);
    expect(newLinkedList.head.next.next).toBeNull();
    expect(newLinkedList.head.value).toEqual(initialValue);

    // ---
    
  });
  test(" add a node to the end of the linked list", () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append("test1");
    expect(newLinkedList.head.value).toEqual("test1");
    expect(newLinkedList.head.next).toBeNull();
  });

  test("the head point to the first node of ll", () => {
    const linkedlists = new LinkedList();
    linkedlists.insert("test1");
    linkedlists.insert("test2");
    linkedlists.insert("test3");

    expect(linkedlists.head.value).toBe("test3");
    expect(linkedlists.head.next).toBeTruthy();
  });
  test("can insert many nodes into the head of ll", () => {
    const linkedlists = new LinkedList();
    linkedlists.insert("test1");
    linkedlists.insert("test2");
    linkedlists.insert("test3");

    expect(linkedlists.head.value).toBe("test3");
    expect(linkedlists.head.next.value).toBe("test2");
    expect(linkedlists.head.next.next.value).toBe("test1");
    expect(linkedlists.head.next.next.next).toBeNull();
  });
  test("return true when search about value includes at ll", () => {
    const linkedlists = new LinkedList();
    linkedlists.insert("test1");
    linkedlists.insert("test2");
    expect(linkedlists.includes("test2")).toBe(true);
  });
  test("return false when searching about value does'nt include", () => {
    const linkedlists = new LinkedList();
    linkedlists.insert("test1");
    linkedlists.insert("test2");
    expect(linkedlists.includes("test3")).toBe(false);
  });

  test("return all values of ll", () => {
    const linkedlists = new LinkedList();
    linkedlists.insert("test3");
    linkedlists.insert("test2");
    linkedlists.insert("test1");

    expect(linkedlists.toString()).toBe("{ test1 } -> { test2 } -> { test3 } -> NULL");
  });
  test('Can successfully insert a node before a node' ,()=>{
    let newNode=new LinkedList();
    newNode.insert(1);
    newNode.append(2);
    newNode.append(3);
    newNode.insertBefore(3,6);
    expect(newNode.head.value).toBe(1)
    expect(newNode.head.next.next.value).toBe(6)
})

test('Can successfully insert after a node ', ()=>{
    let newNode=new LinkedList();
    newNode.insert(1);
    newNode.append(2);
    newNode.append(3);
    newNode.insertAfter(2,5);
    expect(newNode.head.value).toBe(1)
    expect(newNode.head.next.next.value).toBe(5)
})
test('Returns a string representing all the values in the Linked List', () => {
  let linkedListTest = new LinkedList;
  linkedListTest.insert(1);
  linkedListTest.append(2);
  expect(linkedListTest.toString()).toBe('{ 1 } -> { 2 } -> NULL');
});
test("Can instantiate an empty linked list", () => {
  const linkedlists = new LinkedList();
  expect(linkedlists).toBeInstanceOf(LinkedList);
  expect(linkedlists.head).toBeNull();
});


test(" add multiple nodes to the end of a linked list", () => {
  let newLinkedList = new LinkedList();
  newLinkedList.append("test1");
  newLinkedList.append("test2");
  newLinkedList.append("test3");
  expect(newLinkedList.head.value).toEqual("test1");
  expect(newLinkedList.head.next.value).toEqual("test2");
  expect(newLinkedList.head.next.next.value).toEqual("test3");
  expect(newLinkedList.head.next.next.next).toBeNull();
});  
it("insert a node before a node located in the middle of a linked list", () => {
  let neewLinkedList = new LinkedList();
  neewLinkedList.insert("3");
  neewLinkedList.insert("2");
  neewLinkedList.insert("1");
  neewLinkedList.insertBefore("2", "4");
  expect(neewLinkedList.head.value).toEqual("1");
  expect(neewLinkedList.head.next.value).toEqual("4");
  expect(neewLinkedList.head.next.next.value).toEqual("2");
  expect(neewLinkedList.head.next.next.next.value).toEqual("3");
  expect(neewLinkedList.head.next.next.next.next).toBeNull();
});
it("Can successfully insert after a node in the middle of the linked list", () => {
  let newLinkedList = new LinkedList();
  newLinkedList.insert("3");
  newLinkedList.insert("2");
  newLinkedList.insert("1");
  newLinkedList.insertAfter("2", "4");
  expect(newLinkedList.head.value).toEqual("1");
  expect(newLinkedList.head.next.value).toEqual("2");
  expect(newLinkedList.head.next.next.value).toEqual("4");
  expect(newLinkedList.head.next.next.next.value).toEqual("3");
  expect(newLinkedList.head.next.next.next.next).toBeNull();
});

it("Can successfully insert a node after the last node of the linked list", () => {
  let newLinkedList = new LinkedList();
  newLinkedList.insert("2");
  newLinkedList.insert("1");
  newLinkedList.insertAfter("2", "3");
  expect(newLinkedList.head.value).toEqual("1");
  expect(newLinkedList.head.next.value).toEqual("2");
  expect(newLinkedList.head.next.next.value).toEqual("3");
  expect(newLinkedList.head.next.next.next).toBeNull();
});
it(' Can successfully insert a node before the first node of a linked list', () => {
  testingList.insertBefore(1, 8);
  expect(testingList.toString()).toEqual('{ 8 } -> { 1 } -> { 2 } -> { 8 } -> { 3 } -> { 8 } -> { 4 } -> NULL');
});
// it(' Can successfully insert after a node in the middle of the linked list', () => {
//   testingList.insertAfter(3, 8);
//   expect(testingList.toString()).toEqual('head -> { 8 } -> { 1 } -> { 2 } -> { 8 } -> { 3 } -> { 8 } -> { 4 } -> NULL');
// });
// it(' Can successfully insert a node after the last node of the linked list', () => {
//   testingList.insertAfter(4, 8);
//   expect(testingList.toString()).toEqual('head -> { 8 } -> { 1 } -> { 2 } -> { 8 } -> { 3 } -> { 8 } -> { 4 } -> { 8 } -> NULL');
// });
// it(' Return an exception message when inserting before a non-existing node', () => {
//   expect(testingList.insertBefore(10, 8)).toEqual('No change, method exception');
// });
// it(' Return a message when inserting after a non-existing node', () => {
//   expect(testingList.insertAfter(10, 8)).toEqual('No change, method exception');
// });
});

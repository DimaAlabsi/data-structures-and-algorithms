"use strict";
const Node = require('../lib/Node');
const LinkedList = require("../lib/LinkedList");

describe('test kth Linked linkedListTests', () => {
  it("create a Node", () => {
    const testOne = "test";
    const node = new Node(testOne);
    expect(node.value).toBe(testOne);
    expect(node.next).toBeNull();
  });
  test("Can instantiate an empty linked list", () => {
    const linkedlists = new LinkedList();
    expect(linkedlists).toBeInstanceOf(LinkedList);
    expect(linkedlists.head).toBeNull();
  });

  test('Where k is greater than the length of the linked linkedListTest', () => {
    let linkedListTest = new LinkedList();
    linkedListTest.insert(1);
    linkedListTest.insert(2);
    linkedListTest.insert(3);
    linkedListTest.insert(4);
    linkedListTest.insert(5);


    let k = 7;

    expect(linkedListTest.kthFromEnd(k)).toBe('k is invalid');
  });

  test('Where k and the length of the linkedListTest are the same', () => {
    let linkedListTest = new LinkedList();
    linkedListTest.insert(1);
    //
    linkedListTest.insert(2);
    linkedListTest.insert(3);
    linkedListTest.insert(4);
    linkedListTest.insert(5);
    linkedListTest.insert(6);
    let k = 6;
    expect(linkedListTest.kthFromEnd(k)).toBe('k is invalid');
  });

  test('Where k is not a postestive integer', () => {
    let linkedListTest = new LinkedList();
    linkedListTest.insert(1);
    linkedListTest.insert(2);
    linkedListTest.insert(4);
    linkedListTest.insert(5);



    let k = -1;

    expect(linkedListTest.kthFromEnd(k)).toBe('k is invalid');
  });

  test('Where the linked linkedListTest is of a size 1', () => {
    let linkedListTest = new LinkedList();
    linkedListTest.insert(8);
    let k = 0;

    expect(linkedListTest.kthFromEnd(k)).toBe(8);
  });

  test('Happy Path” where k is not at the end, but somewhere in the middle of the linked linkedListTest', () => {
    let linkedListTest = new LinkedList();
    linkedListTest.insert(1);
    linkedListTest.insert(2);
    linkedListTest.insert(3);
    linkedListTest.insert(4);
    linkedListTest.insert(5);
    linkedListTest.insert(6);
    let k = 2;

    expect(linkedListTest.kthFromEnd(k)).toBe(3);
  });
  test('when linked linkedListTest is empty', () => {
    const linkedListTest = new LinkedList();
    let k = 2;

    expect(linkedListTest.kthFromEnd(k)).toBe('No LINKED LIST here 🤫');
  });
  //   });
});
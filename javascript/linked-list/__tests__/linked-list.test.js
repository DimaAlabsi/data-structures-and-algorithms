"use strict";

const LinkedList = require("../lib/LinkedList");

describe("Linked List", () => {
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
    newList.append(anotherValue);
    expect(newList.head.next.value).toEqual(anotherValue);
    expect(newList.head.next.next).toBeNull();
    expect(newList.head.value).toEqual(initialValue);
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
  
});



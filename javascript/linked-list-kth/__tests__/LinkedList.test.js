"use strict";

const LinkedList = require('../lib/LinkedList');

describe("Linked List", () => {
  test("Can instantiate an empty linked list", () => {
    const linkedlists = new LinkedList();
    expect(linkedlists).toBeInstanceOf(LinkedList);
    expect(linkedlists.head).toBeNull();
  });
  
  test('append()', () => {
    let newLinkedList = new LinkedList();
    let initialValue = 1;
    newLinkedList.append(initialValue);
    expect(newLinkedList.head.value).toBe(initialValue);

    let anotherValue = 'Second Item';
    newLinkedList.append(anotherValue);
    expect(newLinkedList.head.next.value).toBe(anotherValue);
    expect(newLinkedList.head.next.next).toBeNull();
    expect(newLinkedList.head.value).toBe(initialValue);

    // ---
    
  });
  test("returns the value ", () => {
    const list = new LinkedList();
    list.append("1");
    list.append("3");
    list.append("8");
    list.append("2");

    expect(list.kthFromEnd(0)).toBe("2");
    expect(list.kthFromEnd(2)).toBe("3");
    expect(list.kthFromEnd(10)).toBe(
        'the index isnot exist'
    );
    expect(list.kthFromEnd(-5)).toBe('No LINKED LIST here 🤫');
  });

  test("k > length ", () => {
    const list = new LinkedList();
    list.append("1");
    list.append("3");
    list.append("8");
    list.append("2");

    expect(list.kthFromEnd(0)).toBe("2");
    expect(list.kthFromEnd(2)).toBe("3");
    expect(list.kthFromEnd(10)).toBe(
        'the index isnot exist'
    );
    expect(list.kthFromEnd(-5)).toBe('No LINKED LIST here 🤫');
    
  });

 

});
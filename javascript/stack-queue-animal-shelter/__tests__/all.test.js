"use strict";
const Node = require("../lib/Node");
const Queue = require("../lib/Queue");
const AnimalShelter = require("../lib/AnimalShelter");

describe(' Node & Queue & AnimalShelter tests', () => {
    test('Node test', () => {
        let value = 2;
        let newNode = new Node(value);
        expect(newNode.value).toBe(2);
        expect(newNode.next).toBeNull();
    })


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
    test("enqueue cat into cat queue ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal =
            { pref: "cat" };

        expect(animalShelter.enqueue(testAnimal)).toMatchObject(testAnimal);
    });

    test("enqueue a dog into dog queue ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal = { pref: "dog" };
        expect(animalShelter.enqueue(testAnimal)).toMatchObject(testAnimal);
    });

    test("unexpected input 🙃if the input doesn't match dog or cat", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal = { pref: "lion" };

        expect(animalShelter.enqueue(testAnimal)).toBe("unexpected input 🙃");
    });

    test("dequeue a cat ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal = { pref: "cat" };

        animalShelter.enqueue(testAnimal);

        expect(animalShelter.dequeue("cat")).toMatchObject(testAnimal);
    });

    test("dequeue a dog ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal1 = { pref: "dog" };
        let testAnimal2 = { pref: "dog" };

        animalShelter.enqueue(testAnimal1);

        expect(animalShelter.dequeue("dog")).toMatchObject(testAnimal1);
    });

    test("can't dequeue while the queue is empty ", () => {
        const animalShelter = new AnimalShelter();
        let testAnimal =
            { pref: "lion" };
        expect(animalShelter.dequeue("lion")).toBeNull();
    });
})
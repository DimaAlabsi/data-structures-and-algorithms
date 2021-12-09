const HashMap = require("../lib/hashTable");

describe("HashMap", () => {
    it("Adding a key/value to your hashTable results in the value being in the data structure", () => {
        let hashTableTest = new HashMap(88);
        hashTableTest.set("Key1", "value1");

        expect(hashTableTest.contains("Key1")).toBe(true);
        expect(hashTableTest.get("Key1")).toEqual("value1");
    });


    it("Retrieving based on a key returns the value stored", () => {
        let hashTableTest = new HashMap(888);
        hashTableTest.set("hi", "value");


        expect(hashTableTest.contains("hi")).toBe(true);
        expect(hashTableTest.get("hi")).toEqual("value");
        expect(hashTableTest.get("Dima")).toEqual(null);
    });


    it("Successfully returns null for a key that does not exist in the hashTable", () => {
        let hashTableTest = new HashMap(888);
        hashTableTest.set("Key", "value");
        expect(hashTableTest.get("Hi")).toBeNull();
    });
    it('Successfully retrieve a value from a bucket within the hashTable that has a collision', () => {
        let hashTableTest = new HashMap(88);
        hashTableTest.set("hi", "dd");
        hashTableTest.set("hello", "d");
    
        expect(hashTableTest.get("hello")).toBe('d');
    });

    it('Successfully hash a key to an in-range value', () => {
        let hashTableTest = new HashMap(88);
        let LessThanOrEqual = 87;

        let GreaterThanOrEqual = 0;
        let key = 'D';
        expect(hashTableTest.getHash(key)).toBeLessThanOrEqual(LessThanOrEqual);

        expect(hashTableTest.getHash(key)).toBeGreaterThanOrEqual(GreaterThanOrEqual);
    })
});

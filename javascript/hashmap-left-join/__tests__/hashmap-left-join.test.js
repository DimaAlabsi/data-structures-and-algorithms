"use strict";

const HashMap = require('../hashmap-left-join');



describe("left join", () => {
  let leftTable = new HashMap(888);
  let rightTable = new HashMap(888);
  let emptyTable = new HashMap(888);
  let notMatchTable = new HashMap(888);
  beforeAll(() => {
 
//left one
  leftTable.set("fond", "enamored");
  leftTable.set("wrath", "anger");
  leftTable.set("diligent", "employed");
  leftTable.set("outift", "grab");
  leftTable.set("guide", "usher");
//right one
  rightTable.set("fond", "averse");
  rightTable.set("wrath", "delight");
  rightTable.set("diligent", "idle");
  rightTable.set("guide", "follow");
  rightTable.set("flow", "jam");
  });
  it("return the correct left join data ", () => {
      let expectedResult=[
       
        ["wrath","anger","delight",],
        ["diligent", "employed", "idle"],
       ["fond", "enamored", "averse"],
       [
             "guide",
            "usher",
             "follow",
          ],  [ "outift","grab", null,]]

         
 let resuult = new HashMap(888)
    expect(resuult.leftJoin(leftTable, rightTable)).toEqual(expectedResult);
  });

  it("return empty array if the left hash one is empty ", () => {
    let result = new HashMap(888)

    expect(result.leftJoin(emptyTable, rightTable)).toEqual([]);
  });

  it("return null for the second value if no match in the right table", () => {
    let result = new HashMap(888)

    expect(result.leftJoin(leftTable, notMatchTable)[0][2]).toBe(null);
  });
});
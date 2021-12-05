"use strict";
const InsertionSort = require('../InsertionSort');

describe("Insertion Sort function", () => {
  test("empty array", () => {
    let arrayay = [];
    

    expect(InsertionSort(arrayay)).toBe('Empty array 🙃');
  });
  test("sort an arrayay", () => {
    let arrayay = [8, 4, 23, 42, 16, 15];
    let result =  [4, 8, 15, 16, 23, 42];

    expect(InsertionSort(arrayay)).toEqual(result);
  });

  test("reverse-sorted arrayay", () => {
    let array = [20, 18, 12, 8, 5, -2];
    let result = [-2, 5, 8, 12, 18, 20];

    expect(InsertionSort(array)).toEqual(result);
  });

  test("Few uniques", () => {
    let array = [5, 12, 7, 5, 5, 7];
    let result = [5, 5, 5, 7, 7, 12];

    expect(InsertionSort(array)).toEqual(result);
  });

  test("Nearly-sorted:", () => {
    let array = [2, 3, 5, 7, 13, 11];
    let result = [2, 3, 5, 7, 11, 13];

    expect(InsertionSort(array)).toEqual(result);
  });
});
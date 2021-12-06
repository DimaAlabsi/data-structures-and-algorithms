"use strict";

let  slice_Merge = require("./MergeSort");

describe('merge sort testing', () => {

  test(' sort an array', () => {
    let array = [8,4,23,42,16,15];
    let sortedArray = [4,8,15,16,23,42];
expect(slice_Merge(array)).toEqual(sortedArray);
  });

  test('Reverse-sorted: ', () => {
    let arr = [20,18,12,8,5,-2];
    let sortedArray = [-2,5,8,12,18,20];
    expect(slice_Merge(arr)).toEqual(sortedArray);
  });

  test('Few uniques', () => {
    let arr = [5,12,7,5,5,7];
    let sortedArray = [5,5,5,7,7,12];
 expect(slice_Merge(arr)).toEqual(sortedArray);
  });

  test('Nearly-sorted: ', () => {
    let arr = [2,3,5,7,13,11];
    let sortedArray = [2,3,5,7,11,13];
  expect(slice_Merge(arr)).toEqual(sortedArray);
  });

});
"use strict";



  
  const slice_Merge = (array) => {
    if (array.length < 2) return array
    const middle = Math.floor(array.length / 2)
    const leftOne = array.slice(0, middle)
    const rightOne = array.slice(middle, array.length)
    const leftArr = slice_Merge(leftOne)
    const rightArr = slice_Merge(rightOne)
    return _mergeSort(leftArr, rightArr)
  }


  const _mergeSort = (left, right) => {
    const result = []
  
    while (left.length && right.length) {
        result.push(left[0] > right[0] ? right.shift() : left.shift())
    }
  
    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }
  
    return result
  }

  module.exports=slice_Merge;
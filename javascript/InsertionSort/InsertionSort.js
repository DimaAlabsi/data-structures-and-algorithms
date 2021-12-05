"use strict";

let array=[8,4,23,42,16,15];


// SelectionSort(int[] arr)
//     DECLARE n <-- arr.Length;
//     FOR i = 0; i to n - 1  
//         DECLARE min <-- i;
//         FOR j = i + 1 to n
//             if (arr[j] < arr[min])
//                 min <-- j;

//         DECLARE temp <-- arr[min];
//         arr[min] <-- arr[i];
//         arr[i] <-- temp;


function InsertionSort(arr) {
    
    if(arr.length === 0){
        return 'Empty array 🙃';
      }
    for (let i = 1; i < arr.length; i++) {
      let temp = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = temp;
    }
    return arr;
  }

module.exports=InsertionSort;
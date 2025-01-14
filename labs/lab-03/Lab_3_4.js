/**
 * Merge 2 SORTED integer array into one SORTED array
Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]
Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
 */

const {
    createIntegerArr,
    ascSortedArr,
    mergedArrays
} = require ('./UltilMethods');

let arr1 = createIntegerArr();
let sortedArr1 = ascSortedArr(arr1);
let arr2 = createIntegerArr();
let sortedArr2 = ascSortedArr(arr2);
let mergedArr_ = mergedArrays(sortedArr1, sortedArr2);
console.log('3.4_Merged arrays: ', mergedArr_);


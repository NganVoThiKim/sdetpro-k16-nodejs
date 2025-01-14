/**
 * Sort an integer array from min to max
Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
 */

const {
    createIntegerArr,
    ascSortedArr
} = require ('./UltilMethods');

let integerArr = createIntegerArr();
let ascSortedArr_ = ascSortedArr(integerArr);
console.log('3.3_Sorted arr from min to max: ', ascSortedArr_);

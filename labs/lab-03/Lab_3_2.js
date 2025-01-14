/**
 * Finding maximum value/minimum value from an integer array
let intArr = [1, 2, 3, 4, 5];
Minimum: 1
Maximum: 5
 */

const {
    createIntegerArr,
    isMinNum,
    isMaxNum
} = require('./UltilMethods');

let integerArr = createIntegerArr();
let isMinNum_ = isMinNum(integerArr);
let isMaxNum_ = isMaxNum(integerArr);
console.log(`3.2_Min numbers: ${isMinNum_}`);
console.log(`3.2_Max numbers: ${isMaxNum_}`);
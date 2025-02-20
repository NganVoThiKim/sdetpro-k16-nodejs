/**
 * Count how many odd, even number(s) in an integer array
 * let intArr = [1, 2, 3, 4, 5];
 * Even numders: 2
 * Odd numbers: 3
 */

const {
    createIntegerArr,
    isEvenNumber
} = require('./UltilMethods.js');

let countEvent = 0;
let countOdd = 0;
let integerArr = createIntegerArr();

for (let index = 0; index < integerArr.length; index++) {

    if (isEvenNumber(integerArr[index])) {
        countEvent++;
    } else {
        countOdd++;
    }
}
console.log(`3.1_Even numbers: ${countEvent}`);
console.log(`3.1_Odd numbers: ${countOdd}`);









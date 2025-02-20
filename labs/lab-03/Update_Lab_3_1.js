/**
 * pseudo code
 * loop over the array
 *   if element is odd number
 *     oddNumberCount++
 *   else 
 *     evenNumberCount++
 * print out the results
 */

let array = [1,1,3,7,5];
let oddNumCount = 0;
let evenNumCount = 0;
let oddArray = [];
let evenArray = [];


for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if(isOddNumber(value)){
        oddNumCount++;
        oddArray.push(value);
    } else{
        evenNumCount++;
        evenArray.push(value);
    }
    
}
// Handle print odd numbers
if(oddArray.length)

// Handle print even numbers

console.log(`Odd number: ${oddNumCount} number(s) ${sprintArray(oddArray)}`);
console.log(`Even number: ${evenNumCount} numbers(s)${sprintArray(evenArray)}`);


function isOddNumber(value){
    return value %2 !== 0;
}
function sprintArray(array){
    if(array.length === 0){
        return '';
    } else {
        return `--> ${array}`
    }
}
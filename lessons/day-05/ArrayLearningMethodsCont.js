
let myArray = [1, 7, 3, 4];

//DELETE | splice
/*let returnValue = myArray.splice(0, 2); //splice(index, length)
console.log(returnValue);
console.log(myArray);*/

/*let startIndex = 2;
let deleteCount = 1;
let insertValue = 10;
let returnValueDelIns = myArray.splice(startIndex, deleteCount, insertValue); //splice(index, length)
console.log(returnValueDelIns);
console.log(myArray);*/

for (let index = 0; index < myArray.length; index++) {
    if (isOddNumber(myArray[index])) {
        removeElementFromArray(myArray, index);
        index--;
    }
}
console.log(myArray);

// Todo: check is odd number
function isOddNumber(number) {
    return number % 2 !== 0;
}
// Todo: remove element
function removeElementFromArray(array, startIndex) {
    const defaultDeleteCount = 1;
    array.splice(startIndex, defaultDeleteCount);
}






// const NumberSupportFunctions = require('./UtilMethod.js');

// Destructure
const {
    isEventNumber,
    isOddNumber
} = require('./UtilMethod.js');
// . : dot notation
// let isEventNumber_ = isEventNumber(3);
// console.log(`Is 3 even number: ${isEventNumber_}`);

// get an user input then check if it's even or odd num
let userInput = getUserInput();
//let isEventNumber_ = isEventNumber(userInput);
//let isOddNumber_ = isOddNumber(userInput);

if (isOddNumber(userInput)) {
    console.log(`The number ${userInput} is an odd number`);
} else {
    console.log(`The number ${userInput} is an even number`);
}
function getUserInput(){
    return 3;
}
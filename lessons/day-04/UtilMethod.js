// Support function
// Service function - ultility functions

// 3: argument (the real value at executed function )
let isEventNumber_ = isEventNumber(3, 2);
console.log(`Is 3 even number: ${isEventNumber_}`);

// number: parameter
function isEventNumber(number) {
    // Details implementation | implementation 
    return number % 2 === 0;
}
const isOddNumber = function (number) {
    return number % 2 !== 0;
}

// Common JS Module
module.exports = { 
    isEventNumber, 
    isOddNumber
}
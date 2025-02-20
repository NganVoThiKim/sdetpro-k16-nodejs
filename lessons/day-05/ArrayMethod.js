let array = [1, 2, 3, 4, 5];

// Map
// let returnedValues = array.map(myRule);
// console.log(returnedValues);
// console.log(array);


// function myRule(value, index, array) {
//     return value * 2;
// }

// forEach

// let userList = [];
// array.forEach(addAutomationUsername);
// function addAutomationUsername(value, index, array){
//     userList.push(`AutomationUser_${value}`)
// }
// console.log(userList);

// Sort - String

// let strings = ['B','C','A'];
// strings.sort();
// strings.reverse();
// console.log(str);

// Sort - Number | Not approriate

let number = [100, 19, 22];
number.sort(sortNumberASC);
number.sort(sortNumberDESC);
console.log(number);

function sortNumberASC(num1, num2){
    return num1 - num2;
}
function sortNumberDESC(num1, num2){
    return num2 - num1;
}

// Sort character
let mixedContent = ['a','A','1'];
mixedContent.sort();
console.log(mixedContent);





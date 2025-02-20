// slash
let myString = ` Day la chu trong \`nhay don\``;
let myString_1 = `Day la chu trong "nhay don"`;
console.log(myString);
console.log(myString_1);

// Length
console.log(myString.length);

// chartArt
console.log(myString.charAt(0));

// Print each character
for (let index = 0; index < myString.length; index++) {
    console.log(myString.charAt(index));
}

// Eliminate spaces
let trimStr = myString.trim();
console.log(trimStr);

// Hint: Em phai hi sinh
let targetStr = "tMomi mnay gmap mnmhamu 7MH";
//let decodeStr = targetStr.replace("m", "");
//let decodeStr = targetStr.replaceAll("m", "")

// REGEX
let decodeStr = targetStr.replace(/m/gi, "");
// regex: g = global, i = ...
console.log(decodeStr);

let uiStr = "200mins";
let uiStrWithNum = uiStr.replace(/[^0-9]/g, "");
// regex: ^ = not, 0-9 = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log(Number(uiStrWithNum) + 1);

// +, concat() - (concatenating)
let firstStr = "Hello";
let secondStr = ", tui ten Teo";
let combineStr = firstStr + secondStr;
let combineStr_1 = firstStr.concat(secondStr).concat("!") + "!";
console.log(combineStr);
console.log(combineStr_1);

// Sub string
let strToBeCut = "https://sdetpro.com";
// Inclusive
let startIndex = 0;
// Exclusive
let endIndex = 5;

let subString = strToBeCut.substring(startIndex, endIndex);
console.log(subString);

// Split
console.log(strToBeCut.split("://"));

let str = "https://sdetpro.com";



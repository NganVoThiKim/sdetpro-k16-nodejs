/***
 * {
 * "ten":2,
 * "teo anh":2
 * }
 * console.log(obj["teo anh"]) -> undefined
 * --
 * 0. Process the given string 
 * 1. Init an object {}
 * 2. Loop over the givenStringArray
 * 3. For each element in the givenStringArray
 *    if(initObj[word])
 *       initObj[word] = initObj[word] + 1
 *    else
 *       initObj[word] = 1
 *    
 */
const givenString = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";
let indivisualWords = givenString.replace(/,/gi,"").split(" ");
let groupWord = groupWordFromString(indivisualWords);
console.log(groupWord);


function groupWordFromString(indivisualWords) {
    const returnObj = {};
    for (const word of indivisualWords) {
        if (returnObj[word]) {
            returnObj[word] = returnObj[word] + 1;
        } else {
            returnObj[word] = 1;
        }
    }
    returnObj;
}
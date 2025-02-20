
/**
 * let mergedArr = []
 * Method 1:
 *  Loop over 1st array -> push all elements into mergedArr     
 *  Loop over 2nd array then so the same as above 
 *  Use buddlesort in the prev solution
 * Method 2:
 * while 2 arrays still has values: fooIndex < fooLength && barIndex < barLength
 *  if fooValue <= barValue
 *      push fooValue into mergedArr
 *      fooIndex++;
 *  else 
 *      push barValue into mergedArr
 *      barIndex++;
 * 
 * Loop 1st array from fooIndex < fooLength -> push all value into mergedArr
 * Loop 2st array from barIndex < barLength -> push all value into mergedArr
 * 
 *
 */

// Method 1:
// let arr1 = [1, 12, 16, 28, 34];
// let arr2 = [1, 13, 16, 27, 99];
// let mergedArr = [];
// for (let index = 0; index < arr1.length; index++) {
//     mergedArr.push(arr1[index]);
// }
// for (let index = 0; index < arr2.length; index++) {
//     mergedArr.push(arr2[index]);
// }
// console.log(`Merged arr: ${mergedArr}`);



// Method 2
let foo = [1, 12, 16, 28, 34];
let bar = [1, 13, 16, 27, 99];
let merged = [];

const fooLength = foo.length;
const barLength = bar.length;
let fooPosition = 0;
let barPosition = 0;

while (fooArrayStillHaveElement() && barArrayStillHaveElement()) {
    const fooValue = foo[fooPosition];
    const barValue = bar[barPosition];
    if (fooValue <= barValue) {
        merged.push(fooValue);
        fooPosition++;
    } else {
        merged.push(barValue);
        barPosition++;
    }
}
while (fooArrayStillHaveElement()) {
    merged.push(foo[fooPosition]);
    fooPosition++;
}
while (barArrayStillHaveElement()) {
    merged.push(bar[barPosition]);
    barPosition++;
}
function fooArrayStillHaveElement() {
    return fooPosition < fooLength;
}
function barArrayStillHaveElement() {
    return barPosition < barLength;
}

console.log(merged);




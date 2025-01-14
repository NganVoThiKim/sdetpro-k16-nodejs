
const readline = require('readline-sync');
// Create array from keyboard
function createIntegerArr() {
    let integerArr = [];
    let arrLength = Number(readline.question('Input arr length: '));
    for (index = 0; index < arrLength; index++) {
        let element = Number(readline.question(`Input element ${index + 1}: `));
        integerArr.push(element);
    }
    console.log('Created array:', integerArr);
    return integerArr;
}

// Find even number
function isEvenNumber(number) {
    return number % 2 === 0
}

// Find min numberr
function isMinNum(arr) {
    let minNum = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < minNum) {
            minNum = arr[index];
        }
    }
    return minNum;
}
// Find max numberr
function isMaxNum(arr) {
    let maxNum = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > maxNum) {
            maxNum = arr[index];
        }
    }
    return maxNum;
}
// Sort ASC
function ascSortedArr(arr) {
    let sortedArr = [...arr];
    let sortedArrLength = sortedArr.length;
    for (let i = 0; i < sortedArrLength - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < sortedArrLength; j++) {
            if (sortedArr[j] < sortedArr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let stamp = sortedArr[minIndex];
            sortedArr[minIndex] = sortedArr[i];
            sortedArr[i] = stamp;
        } 
    }
    console.log('ASC sorted arr: ', sortedArr);
    return sortedArr;
}
// Merge sorted arrays
function mergedArrays(sortedArr1, sortedArr2) {
    let mergedArr = [];
    let indexArr1 = 0, indexArr2 = 0;
    while (indexArr1 < sortedArr1.length && indexArr2 < sortedArr2.length) {
        if (sortedArr1[indexArr1] < sortedArr2[indexArr2]) {
            mergedArr.push(sortedArr1[indexArr1]);
            indexArr1++;
        } else {
            mergedArr.push(sortedArr2[indexArr2]);
            indexArr2++;
        }
    }
    while (indexArr1 < sortedArr1.length) {
        mergedArr.push(sortedArr1[indexArr1]);
        indexArr1++;
    }
    while (indexArr2 < sortedArr2.length) {
        mergedArr.push(sortedArr2[indexArr2]);
        indexArr2++;
    }
    return mergedArr;
}

module.exports = {
    createIntegerArr,
    isEvenNumber,
    isMinNum,
    isMaxNum,
    ascSortedArr,
    mergedArrays
}

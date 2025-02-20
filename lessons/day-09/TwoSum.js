/**
 * 
 * Two sum
 * [3, 7, 22, 1], target number: 8
 * -> Index [1, 3]
 * 
 */

// Brute force
/**
outer loop index 0 -> 
    firstNum
    inner loop index + 1 -> length -1
        if (firstNum + current === target)
            return [firstIndex, secondIndex]
return []
 */

const givenArray = [3, 7, 22, 1];
const targetNum = 8;
let indices_1 = findIndicesUsingBruteForce(givenArray, targetNum);
console.log(indices_1);
let indices_2 = findIndicesUsingMap(givenArray, targetNum);
console.log(indices_2);
let indices_3 = findIndicesUsingMap_Cody(givenArray, targetNum);
console.log(indices_3);


// Time complexity: Big O notation 0n^2
function findIndicesUsingBruteForce(array, targetNum) {
    for (let firstNumIndex = 0; firstNumIndex < array.length - 1; firstNumIndex++) {
        const firstNum = array[firstNumIndex];
        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < array.length; secondNumIndex++) {
            const secondNum = array[secondNumIndex];
            if (secondNum === targetNum - firstNum) {
                return [firstNumIndex, secondNumIndex];
            }
        }

    }
    return [];
}

// 0(n)
//  [3, 7, 22, 1], target number: 8
function findIndicesUsingMap(array, targetNum) {
    let numMap = new Map();
    for (let currentNumIndex = 0; currentNumIndex < array.length; currentNumIndex++) {
        const firstNum = array[currentNumIndex];
        const lookingNum = targetNum - firstNum;
        if(numMap.has(lookingNum)){
            return[numMap.get(lookingNum), currentNumIndex];
        }
        numMap.set(firstNum, currentNumIndex);
    }
    return [];

}

function findIndicesUsingMap_Cody(numbers, targetSum) {
    const seenNumbers = new Map();
    
    for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
        const currentNumber = numbers[currentIndex];
        const complementNumber = targetSum - currentNumber;
        
        if (seenNumbers.has(complementNumber)) {
            const complementIndex = seenNumbers.get(complementNumber);
            return [complementIndex, currentIndex];
        }
        
        seenNumbers.set(currentNumber, currentIndex);
    }
    
    return [];
}

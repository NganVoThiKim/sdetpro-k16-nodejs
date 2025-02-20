
/**
 * Bubble sort (Time and space complexity)
 * (Time Complexity: Big O notation)
 * Given arr: 12, 1, 15, 28, 34
 */

/**
 * pseudo code
 * unsortedPosition = array[arrLength - 1]
 * while unsortedPosition > 0
    * loop index = 0 -> unsortedPosition - 1
    *     leftValue = array[index]
    *     rightValue = array[index + 1]
    *     if leftValue > rightValue
    *          swap
 *     
 * 
 */

let array = [12, 34, 1, 16, 28];
let unsortedPosition = array.length - 1;

// for (; unsortedPosition > 0; unsortedPosition--) {
//     for (let index = 0; index < unsortedPosition; index++) {
//         const leftValue = array[index];
//         const rightValue = array[index + 1];
//         if (leftValue > rightValue) {
//             swap(array, index);
//         }
//     }
// } 
while(unsortedPosition > 0) {
    for (let index = 0; index < unsortedPosition; index++) {
        const leftValue = array[index];
        const rightValue = array[index + 1];
        if (leftValue > rightValue) {
            swap(array, index);
        }
    }
    unsortedPosition--;
}
console.log(array);

function swap(array, index) {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
}

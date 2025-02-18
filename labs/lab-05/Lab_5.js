/***
 * **
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 * Please solve the excersize for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
 * The program need to allow user to input a sentence, not hard code (optional)
 */

// Allow user input
const readline = require('readline-sync');
let input = readline.question('Your given string: ');
countWords(input);

function countWords(sentence) {
    const words = sentence.split(/\W+/).filter(word => word.length > 0);
    const wordCount = {};
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    // Print the result
    for (const word in wordCount) {
        console.log(`${word}: ${wordCount[word]}`);
    }
}





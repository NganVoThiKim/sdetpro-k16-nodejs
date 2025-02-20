const givenStr = "Hello ban, tui ten Teo, ban cung ten Teo luon ah?";
let indivisualWords = givenStr.replace(/,/gi,"").split(" ");


const groupWords = groupWord(indivisualWords);

console.log(groupWords);


/**
 * 
 * Hello: 1
 * ban: 2
 * 
 * 
 */

function groupWord(indivisualWords) {
    let wordMap = new Map();
    for(const word of indivisualWords) {
        if (!wordMap.has(word)) {
            wordMap.set(word,1);
        } else {
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }
    return wordMap;
}
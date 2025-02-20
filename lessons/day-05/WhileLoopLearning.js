//let index = 0;
// for(;index <5;){
//     console.log(index);
//     index++;
// }

// while (index < 5) {
//     console.log(index);
//     index++;
// }


/**
 * -- LUCKY NUMBER GAME
 * 1. Guess a number
 * 0. Exit!
*/

const readLine = require('readline-sync');
let isStillPlaying = true;
while (isStillPlaying) {
    printGameMenu();
    let userOption = getUserOption();
    if (userOption === 0) {
        // Conditional change trigger
        isStillPlaying = false;
    } else if (userOption == 1) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber);

    } else {
        console.log(`Nhap lui roi Teo oi`);

    }
    //Conditional change trigger
}
console.log(`See you again!`);

function printGameMenu() {
    console.log(`
        /**
 * -- LUCKY NUMBER GAME
 * 1. Guess a number
 * 0. Exit!
*/
        `);

}
function getUserOption(){
    return Number(readLine.question('Please input your option: '));
}

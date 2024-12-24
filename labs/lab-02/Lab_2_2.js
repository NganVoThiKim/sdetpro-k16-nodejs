const readline = require('readline-sync');
let number = Number(readline.question('Your number: '));
if (number % 2 == 0) {
    console.log("Odd number");
} else {
    console.log("Even number");
}
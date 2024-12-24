const readline = require('readline-sync');
let height = Number(readline.question('Your height: '));
let weight = Number(readline.question('Your weight: '));

let BMI = weight / (height * 2);
if (BMI < 18.5) {
    console.log("Need to increase to 18.5");
} else if (BMI > 24.9) {
    console.log("Need to decrease to 24.9");
} else {
    console.log("Perfect");
}

const readline = require('readline-sync');
let height = Number(readline.question('Your height: '));
let weight = Number(readline.question('Your weight: '));

let BMI = weight / (height * 2);
if (BMI < 18.5) {
    console.log("Underweight");
} else if (BMI <= 24.9) {
    console.log("Normal Weight");
} else if (BMI <= 29.9) {
    console.log("Over Weight");
} else {
    console.log("Obesity");
}
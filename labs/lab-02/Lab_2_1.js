const readline = require('readline-sync');

// Assume user input correct numbers - will handle in try... catch later
let height = Number(readline.question('Your height: '));
let weight = Number(readline.question('Your weight: '));

// BMI = weight / (height * height)
const BMI = weight / (height * height);
console.log(`Your BMI: ${BMI}`);
if (BMI < 18.5) {
    console.log(`\t--> Underweight`);
} else if (BMI <= 24.9) {
    console.log(`\t--> Normal Weight`);
} else if (BMI <= 29.9) {
    console.log(`\t--> Over Weight`);
} else {
    console.log(`\t--> Obesity`);
}
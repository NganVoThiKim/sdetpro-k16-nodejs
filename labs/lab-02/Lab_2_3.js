// const readline = require('readline-sync');
// let height = Number(readline.question('Your height: '));
// let weight = Number(readline.question('Your weight: '));

// let BMI = weight / (height * 2);
// if (BMI < 18.5) {
//     console.log("Need to increase to 18.5");
// } else if (BMI > 24.9) {
//     console.log("Need to decrease to 24.9");
// } else {
//     console.log("Perfect");
// }


// CORRECT 

const readline = require('readline-sync');

// Assume user input correct numbers - will handle in try... catch later
let height = Number(readline.question('Your height: '));
let weight = Number(readline.question('Your weight: '));

// BMI = weight / (height * height)
// x = a/b -> a = b * x
const BMI = weight / (height * height);
console.log(`Your BMI: ${BMI}`);
let isUnderW = false;
let isOverW = false;
if (BMI < 18.5) {
    console.log(`\t--> Underweight`);
    isUnderW = true;
} else if (BMI <= 24.9) {
    console.log(`\t--> Normal Weight`);
} else if (BMI <= 29.9) {
    console.log(`\t--> Over Weight`);
    isOverW = true;
} else {
    console.log(`\t--> Obesity`);
    isOverW = true;
}

// Handle for weight suggestion if any
if(isUnderW){
    let ideaW = 18.5 * (height * height);
    let increaseW = ideaW - weight;
    console.log(`\t--> You shouldf increase: ${increaseW}`);

}
if (isOverW){
    let ideaW = 24.9 * (height * height);
    let descreaseW = weight - ideaW;
    console.log(`\t--> You should descrease: ${descreaseW}`);
}

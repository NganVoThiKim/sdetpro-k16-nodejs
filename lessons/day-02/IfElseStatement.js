// = gan
// == operator (EX: console.log("7" == 7) -> true)
// === so sanh luon type cua du lieu (EX: console.log("7" === 7) -> false)

const readline = require ('readline-sync');
let arriavalTime = readline.question ('Arrival Time: ');
// let arriavalTime = 7;
let isHeOnTime = (Number(arriavalTime) === 7);

// >, <, >=, <=, ==, ===, !=, !==
// !true = false
// !: to revert a boolean value

if (isHeOnTime) {
    console.log("Let's talk!"); 
} else {
    console.log("Write a letter...");
}

if (!isHeOnTime) {
    console.log("Write a letter...");
} else {
    console.log("Let's talk!"); 
}

/** 
 * 1. In tthe root dir: npm init -y
 * 2. npm i readline-sync
 * */ 

// Ternary Operator: Toán tử 3 ngôi
let msg = isHeOnTime ? "Let's talk" : "Write a letter...";
console.log(msg);

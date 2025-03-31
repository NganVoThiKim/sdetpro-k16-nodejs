"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount_1 = require("./CheckingAccount");
var SavingAccount_1 = require("./SavingAccount");
// VALID CASES
// const savingAcc = new SavingAccount(1000);
// savingAcc.deposit(500);
// savingAcc.withdraw(200);
// const savingBalance = savingAcc.getBalance();
// console.log(`SavingAcc: Balance = ${savingBalance}`);
// const checkingAcc = new CheckingAccount(1000);
// checkingAcc.deposit(500);
// checkingAcc.withdraw(200);
// const checkingBalance = checkingAcc.getBalance();
// console.log(`CheckingAcc: Balance = ${checkingBalance}`);
// INVALID CASES
var savingAcc = new SavingAccount_1.default(1000);
savingAcc.deposit(500);
savingAcc.withdraw(1501);
var savingBalance = savingAcc.getBalance();
console.log("SavingAcc: Balance = ".concat(savingBalance));
var checkingAcc = new CheckingAccount_1.default(1000);
checkingAcc.deposit(500);
checkingAcc.withdraw(1460);
var checkingBalance = checkingAcc.getBalance();
console.log("CheckingAcc: Balance = ".concat(checkingBalance));

import Account from "./Account";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";


// VALID CASES
const savingAcc = new SavingAccount(1000);
savingAcc.deposit(500);
savingAcc.withdraw(200);
const savingBalance = savingAcc.getBalance();
console.log(`SavingAcc: Balance = ${savingBalance}`);

const checkingAcc = new CheckingAccount(1000);
checkingAcc.deposit(500);
checkingAcc.withdraw(200);
const checkingBalance = checkingAcc.getBalance();
console.log(`CheckingAcc: Balance = ${checkingBalance}`);


// INVALID CASES
// const savingAcc = new SavingAccount(1000);
// savingAcc.deposit(500);
// savingAcc.withdraw(1501);
// const savingBalance = savingAcc.getBalance();
// console.log(`SavingAcc: Balance = ${savingBalance}`);

// const checkingAcc = new CheckingAccount(1000);
// checkingAcc.deposit(500);
// checkingAcc.withdraw(1460);
// const checkingBalance = checkingAcc.getBalance();
// console.log(`CheckingAcc: Balance = ${checkingBalance}`);

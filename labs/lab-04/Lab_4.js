// Data
const readline = require('readline-sync');
const bankAccount1 = {
    accName: "Ti",
    accountNumber: "1234567890",
    routingNumber: "123",
    balance: 1000
};
const bankAccount2 = JSON.parse(JSON.stringify(bankAccount1));
bankAccount2.accName = "Teo";
bankAccount2.accountNumber = "1111999900";
console.log(bankAccount1);
console.log(bankAccount2);
const bankAccounts = [bankAccount1, bankAccount2];

// Usage
let isStillDoing = true;
while (isStillDoing) {
    sprintMenu();
    let userNumber = getUserNumber();
    if (userNumber === 0) {
        isStillDoing = false;
    } else if (userNumber === 1) {
        findAccount();
    } else if (userNumber === 2) {
        updateBalance();
    } else {
        console.log("Please input with 0 or 1 or 2");

    }
}


function findAccount() {
    let accNumberNeedFind = readline.question(`Enter the account number to find: `);

    const accountInfo = isExistAccount(bankAccounts, accNumberNeedFind);
    if (accountInfo) {
        const { accName, balance } = accountInfo;
        console.log(`=> Account found with name = ${accName}, balance = $${balance}`);
    } else {
        console.log(`=> Account isn't exist`);
    }
}

function updateBalance() {
    let accNumberNeedWithdraw = readline.question(`Enter the account number: `);
    const account = isExistAccount(bankAccounts, accNumberNeedWithdraw);
    if (account) {
        let amountNeedWithdraw = readline.question(`Enter the withdraw money: `);
        isWithdrawMoney(account, amountNeedWithdraw);
    }
    else {
        console.log(`=> Account isn't exist`);
    }
}



// Controllers
function isWithdrawMoney(account, amountNeedWithdraw) {
    let currentBalance = account.balance;
    if (amountNeedWithdraw <= 0) {
        console.log(`Withdraw amount must be positive`);
    } else if (amountNeedWithdraw <= currentBalance) {
        currentBalance = currentBalance - amountNeedWithdraw;
        console.log(`Withdraw successfully, new balance: ${currentBalance}`);
    } else {
        console.log(`Invalid balance`);
    }
}
function isExistAccount(bankAccounts, accNumber) {
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === accNumber) {
            return {
                accName: bankAccount.accName,
                balance: bankAccount.balance
            };
        }
    }
    return null;
}
function sprintMenu() {
    console.log(`=== Banking application===
    1. Find an account
    2. Update balance
    0. Exit the program`);
}
function getUserNumber() {
    return Number(readline.question('Please input your option: '));
}




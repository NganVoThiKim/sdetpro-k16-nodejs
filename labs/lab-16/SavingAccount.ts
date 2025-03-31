import Account from "./Account";

export default class SavingAccount extends Account {
    constructor(balance: number) {
        super(balance);
    }
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`SavingAcc: Deposit: ${amount} => Balance = ${this.balance}`);
        
    }
    withdraw(amount: number): void {
        if(amount > this.balance){
            console.log(`SavingAcc: Insufficient balance`);
            return;
        }
        this.balance -= amount;
        console.log(`SavingAcc: Withdraw: ${amount} => Balance = ${this.balance}`);
    }
    getBalance(): number {
        return this.balance;
        
    }

}
import Account from "./Account";

export default class CheckingAccount extends Account {
    private minimumBalance: number = 50;
    constructor(balance: number) {
        super(balance);
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`CheckingAcc: Deposit: ${amount} => Balance = ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (this.balance - amount < this.minimumBalance) {
            console.log(`CheckingAcc: Can't withdraw ${amount} => Minimum balance ${this.minimumBalance} must be maintained.`);
            return;
        }
        this.balance -= amount;
        console.log(`CheckingAcc: Withdraw: ${amount} => Balance = ${this.balance}`);
        
    }

    getBalance(): number {
        return this.balance;
        
    }
}
export default abstract class Account {
    protected balance: number;

    constructor(currentBalance: number) {
        this.balance = currentBalance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;
}
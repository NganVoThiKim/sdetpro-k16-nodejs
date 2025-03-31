"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = require("./Account");
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(balance) {
        var _this = _super.call(this, balance) || this;
        _this.minimumBalance = 50;
        return _this;
    }
    CheckingAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("CheckingAcc: Deposit: ".concat(amount, " => Balance = ").concat(this.balance));
    };
    CheckingAccount.prototype.withdraw = function (amount) {
        if (this.balance - amount < this.minimumBalance) {
            console.log("CheckingAcc: Can't withdraw ".concat(amount, " => Minimum balance ").concat(this.minimumBalance, " must be maintained."));
            return;
        }
        this.balance -= amount;
        console.log("CheckingAcc: Withdraw: ".concat(amount, " => Balance = ").concat(this.balance));
    };
    CheckingAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return CheckingAccount;
}(Account_1.default));
exports.default = CheckingAccount;

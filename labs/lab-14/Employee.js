"use strict";
/***
Create a class Employee with a method salary to return employee’s salary
There are 2 types of employee: Full time employee and contract employee
Full time employee has salary is 50000 and contract employee has salary 40000
Write a method to accept a list of Employee and calculate total salary
Please print out the employee with highest/lowest salary
For example, company has 3 FTE and 2 contractor

Optional:
Research and try to sort employees base on salary, name
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
exports.default = Employee;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControllerEmp = /** @class */ (function () {
    function ControllerEmp() {
    }
    ControllerEmp.prototype.calTotalSalary = function (employeeList) {
        var totalSalary = 0;
        for (var _i = 0, employeeList_1 = employeeList; _i < employeeList_1.length; _i++) {
            var employee = employeeList_1[_i];
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    };
    ControllerEmp.prototype.getMinSalaryEmp = function (employeeList) {
        var minSalaryEmp = employeeList[0];
        for (var _i = 0, employeeList_2 = employeeList; _i < employeeList_2.length; _i++) {
            var employee = employeeList_2[_i];
            if (employee.getSalary() < minSalaryEmp.getSalary()) {
                minSalaryEmp = employee;
            }
        }
        return minSalaryEmp;
    };
    ControllerEmp.prototype.getMaxSalaryEmp = function (employeeList) {
        var maxSalaryEmp = employeeList[0];
        for (var _i = 0, employeeList_3 = employeeList; _i < employeeList_3.length; _i++) {
            var employee = employeeList_3[_i];
            if (employee.getSalary() > maxSalaryEmp.getSalary()) {
                maxSalaryEmp = employee;
            }
        }
        return maxSalaryEmp;
    };
    ControllerEmp.prototype.sortBySalaryASC = function (employeeList) {
        return employeeList.sort(function (a, b) { return a.getSalary() - b.getSalary(); });
    };
    ControllerEmp.prototype.sortBySalaryDES = function (employeeList) {
        return employeeList.sort(function (a, b) { return b.getSalary() - a.getSalary(); });
    };
    return ControllerEmp;
}());
exports.default = ControllerEmp;

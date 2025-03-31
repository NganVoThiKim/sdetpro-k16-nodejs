import Employee from "./Employee";

export default class ControllerEmp {

    calTotalSalary(employeeList: Employee[]) {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }

    getMinSalaryEmp(employeeList: Employee[]): Employee {
        let minSalaryEmp: Employee = employeeList[0];
        for (const employee of employeeList) {
            if (employee.getSalary() < minSalaryEmp.getSalary()) {
                minSalaryEmp = employee;
            }
        }
        return minSalaryEmp;
    }

    getMaxSalaryEmp(employeeList: Employee[]): Employee {
        let maxSalaryEmp: Employee = employeeList[0];
        for (const employee of employeeList) {
            if (employee.getSalary() > maxSalaryEmp.getSalary()) {
                maxSalaryEmp = employee;
            }
        }
        return maxSalaryEmp;
    }

    sortBySalaryASC(employeeList: Employee[]): Employee[] {
        return employeeList.sort((a, b) => a.getSalary() - b.getSalary());
    }

    sortBySalaryDES(employeeList: Employee[]): Employee[] {
        return employeeList.sort((a, b) => b.getSalary() - a.getSalary());
    }
}


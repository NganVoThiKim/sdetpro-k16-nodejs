class SalaryController {

    // FP
    getTotalSalary(employeeList) {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary += employee.salary;
        }
        return totalSalary;
    }
}
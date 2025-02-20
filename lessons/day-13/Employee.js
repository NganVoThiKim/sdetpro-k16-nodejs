class Employee {
    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
}

module.exports = Employee;
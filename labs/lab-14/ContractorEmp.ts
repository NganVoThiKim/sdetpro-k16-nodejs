import Employee from "./Employee";

export default class ContructorEmp extends Employee {

    constructor(name: string) {
        super(name);
        this.salary = Math.floor(Math.random() * 40000);
    }
}
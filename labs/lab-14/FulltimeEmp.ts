import Employee from "./Employee";

export default class FulltimeEmp extends Employee {

    constructor(name: string) {
        super(name);
        this.salary = Math.floor(Math.random() * 50000);
    }
    
}
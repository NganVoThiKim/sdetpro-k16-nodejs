import FulltimeEmp from "./FulltimeEmp";
import ContructorEmp from "./ContractorEmp";
import ControllerEmp from "./ControllerEmp";


let Teo = new FulltimeEmp("Teo");
console.log(`Teo Salary: ${Teo.getSalary()}`);
let Ti = new FulltimeEmp("Ti");
console.log(`Ti Salary: ${Ti.getSalary()}`);

let Tun = new FulltimeEmp("Tun");
console.log(`Tun Salary: ${Tun.getSalary()}`);


let Dao = new ContructorEmp("Dao");
console.log(`Dao Salary: ${Dao.getSalary()}`);

let Mai = new ContructorEmp("Mai");
console.log(`Mai Salary: ${Mai.getSalary()}`);


const totalSalary = new ControllerEmp().calTotalSalary([Teo, Ti, Tun, Dao, Mai]);
console.log(`Total salary: ${totalSalary}`);
const minSalaryEmp = new ControllerEmp().getMinSalaryEmp([Teo, Ti, Tun, Dao, Mai]);
console.log(`${minSalaryEmp.getName()} with min salary: ${minSalaryEmp.getSalary()}`);
const maxSalaryEmp = new ControllerEmp().getMaxSalaryEmp([Teo, Ti, Tun, Dao, Mai]);
console.log(`${maxSalaryEmp.getName()} with max salary: ${maxSalaryEmp.getSalary()}`);;

console.log("Sort by salary ASC");
const sortedEmp = new ControllerEmp().sortBySalaryASC([Teo, Ti, Tun, Dao, Mai]);
console.log(sortedEmp);

console.log("Sort by salary DES");
const sortBySalaryDES = new ControllerEmp().sortBySalaryDES([Teo, Ti, Tun, Dao, Mai]);
console.log(sortBySalaryDES);

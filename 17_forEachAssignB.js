

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const mapOfEmployee = new Map();
mapOfEmployee.set(22, emp_anil);
mapOfEmployee.set(33, emp_radha);
mapOfEmployee.set(55, emp_rishi);
mapOfEmployee.set(66, emp_sonali);
mapOfEmployee.set(77, emp_monika);
mapOfEmployee.set(88, emp_viny);
mapOfEmployee.set(99, emp_mahi);

console.log(`-------------------TCS employee name and company------------------------`)
mapOfEmployee.forEach((employee, id) => {
    if (employee.emp_company == "TCS") {
        console.log(employee.emp_name, employee.emp_company);
    }

});
console.log(`-------------------Salary is greater than or equal to 50k------------------------`)
mapOfEmployee.forEach((employee, id) => {
    if (employee.emp_salary > 50000) {
        console.log(employee);
    }
});
console.log(`-------------------Find the sum of all employee salary------------------------`)
var emptotalSal = 0;
var totalEmp = 0;
mapOfEmployee.forEach((employee, id) => {
    emptotalSal = emptotalSal + employee.emp_salary;
    totalEmp++;

});
console.log(`Total salary of all employees=>${emptotalSal}`)
console.log(`Total employee count is : ${totalEmp}`)

var avgSal = emptotalSal / totalEmp;
console.log(`-------------------Find the Avg salary of all employee ------------------------`)
console.log(`Average salary of employee is =>${avgSal}`)


console.log(`-------------------Find the IT OR HRdept employees whose salary>=75k------------------------`)
mapOfEmployee.forEach((employee, id) => {
    if (employee.emp_dept == "IT" || employee.emp_dept == "HR") {
        if (employee.emp_salary >= 75000) {
            console.log(employee);
        }
    }
});

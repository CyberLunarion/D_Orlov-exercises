function myFunction() {
    const filtered = [];
    for (let x in employees) {
        if (employees[x].salary > 2250) {
            filtered.push(employees[x])
        }
    }
    return filtered;
}

function resultConsole() { 
    for (let i in filteredEmployees) {
        console.log(filteredEmployees[i].fullName())
    } 
}

const employees = [
    {firstName:"John", lastName:"Doe", age:38, fullName: function() {return this.firstName + " " + this.lastName;}, salary: 3000},
    {firstName:"Jane", lastName:"Doe", age:37, fullName: function() {return this.firstName + " " + this.lastName;}, salary: 2500},
    {firstName:"Johnny", lastName:"Doe", age:18, fullName: function() {return this.firstName + " " + this.lastName;}, salary: 2000}
]
console.log("Employee list:")
console.log(employees)

const filteredEmployees = myFunction()
console.log("Employees with a salary higher than 2250:")
resultConsole();
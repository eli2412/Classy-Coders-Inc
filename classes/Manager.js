const { Employees} = require("./Employees")
class Manager extends Employees{
        #employeesManaged = []
constructor(department,employeesManaged){
    this.department = department;
    this.#employeesManaged = employeesManaged;
}
getEmployeeManaged(){
    return this.#employeesManaged
}
setEmployeeManaged(employee){
    return this.#employeesManaged = employee;
}

    
}

module.exports = {
    Manager,
}
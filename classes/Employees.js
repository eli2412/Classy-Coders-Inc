class Employees {
    #salary;
    #isHired;
    constructor (name,position,salary,isHired){
        this.#salary=salary;
        this.#isHired=true;
        this.name=name;
        this.position=position;
    }
    getSalary(){
        return this.#salary;
    }
    setSalary(amount){
        return this.#salary = amount;
    }
    getStatus(){
        return this.#isHired;
    }
    setStatus(command){
        if(command === 'hire'){
            return this.#isHired= true;
        }else if(command === 'fire'){
            return this.#isHired=false;
        }
    }

    
}

module.exports = {
    Employees,
}
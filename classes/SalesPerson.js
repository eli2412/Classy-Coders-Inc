const { Employees } = require("./Employees");

class SalesPerson extends Employees {
    #totalSales;
    constructor(clients,totalSales,name,position,salary,isHired){
        super(name,position,salary,isHired);
        this.clients=clients;
        this.#totalSales=0
    }
    getSalesNumbers(){
        return this.#totalSales;
    }
    makeSale(amount){
        return this.#totalSales= amount;
    }


    
}

module.exports = {
    SalesPerson,
}
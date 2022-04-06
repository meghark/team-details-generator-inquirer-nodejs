const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id , email, onum){
        super(name, id, email);

        this.onum = onum;
    }
}

module.exports = Manager;
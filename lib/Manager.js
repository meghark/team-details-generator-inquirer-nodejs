const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id , email, onum){
        super(name, id, email);

        this.onum = onum;
    }
    
    getOfficeNum(){
        return this.onum;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
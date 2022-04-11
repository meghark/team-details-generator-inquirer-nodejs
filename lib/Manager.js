const Employee = require('./Employee.js');

//This class extends the empployee class. And additonal office number is part of the class.
//Access methods to print the office number and manager role are available.
class Manager extends Employee{
    constructor(name, id , email, onum){
        if(!onum)
        {
            throw new Error("Please provide officenumber for manager");
        }

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
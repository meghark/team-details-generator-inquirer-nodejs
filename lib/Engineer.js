const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id , email, onum)
    {
        super(name, id, email);

        this.officeNumber = onum;
    }
};

module.exports = Engineer;
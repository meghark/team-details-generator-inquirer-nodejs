const Employee = require('./Employee');

class Intern{
    constructor(name, id , email, school){
        super(name, id, email);

        this.school = school;

    }
}


module.exports = Intern;
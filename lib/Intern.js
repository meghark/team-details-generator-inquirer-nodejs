const Employee = require('./Employee');

//This class extends the empployee class. And additonal school name is part of the class.
//Access methods to print the school name and intern role are available.
class Intern extends Employee{
    constructor(name, id , email, school){
        super(name, id, email);
        this.school = school; 
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;
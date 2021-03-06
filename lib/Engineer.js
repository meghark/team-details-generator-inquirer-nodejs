const Employee = require("./Employee");

//This class extends the empployee class. And additonal github username is part of the class.
//Access methods to print the github name and engineer role are available.
class Engineer extends Employee{
    
    constructor(name, id , email, github)
    {   
        if(!github.length)
        {
            throw new Error("Provide github user name to add engineer");
        }
        //Call employee class constructor.
        super(name, id, email);        

        this.github = github;
    }

    
    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }

};

module.exports = Engineer;
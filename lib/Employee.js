//The base employee class , can be used to create an employee with name, id and email.
//The class also provides access functions to retrieve the above variable values.
class Employee
{
    constructor (name, id, email){
        this.name = name,
        this.id = id,
        this.email = email
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;s 
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;
//The base employee class , can be used to create an employee with name, id and email.
//The class also provides access functions to retrieve the above variable values.
//The class also has validations to check for input parameters. They are also part of inquirer validations
//but they are also added here to prevent invalid employee creation if used outside inquirer.
class Employee
{
    //Static variable to keep track of all employee id's.
    static listOfIds=[];
    constructor (name, id, email){

        if(!name.length)
        {
            throw new Error("Provide name to add employee");
        }        
        if(id <=0 || isNaN(id) || !id || (id - Math.floor(id) != 0))
        {
            throw new Error("Provide a valid non-negative whole number as id");
        }

        if(!email.length)
        {
            throw new Error("Provide email to add employee");
        }

        if(email.length && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email))
        {
            throw new Error("Please provide an email address in format string@string.com");
        }

        

        this.name = name,
        this.id = id,
        this.email = email
        
        //Every time a new employee is added push the id into static array.
        //This array will be used to prevent addition for duplicate id values.
        if(!Employee.listOfIds.includes(this.id))
        {
            Employee.listOfIds.push(this.id);
        }        
        else
        {
            //Inquirer validation already takes care of duplicate id validation.
            //But handling this in class as well in case called from a different route than inquirer in future.
            throw new Error("Employee id already in use choose a new one.");
        }
    }

    //Method to return list of ids. Can be used instead of directly accessing the class variable.
    static getIdList()
    {
        return this.listOfIds;
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
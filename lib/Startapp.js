const Manager = require("./Manager")
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const generatePage = require("../src/generatePage");
const fs = require('../src/file-operations');
const Employee = require("./Employee");


class StartApp{
    constructor(){
        
        //Intialize arrays to add managers, interns and employees.
        this.manager=[];
        this.intern=[];
        this.engineer=[];     
        
        // For all employee types the following questions are common. They are stored in an array.
        this.commonQuestions =[
                        {type: 'input',
                        name: 'name',
                        message: "What is the employee Name (Required) ?",
                        validate: name => {
                            if(name)
                                {
                                    return true;
                                }
                                else{
                                      return "Please provide a employee name";
                                }
                            }                        
                        },
                        {
                        type: 'input',
                        name: 'id',
                        message: 'What is the employee id (Required) ?',
                        
                        //Pass the list of ids added so far using the static method.
                        validate: (answers) => this.validateIdInput(answers, Employee.getIdList())
                        },
                        {
                        type: 'input',
                        name: 'email',
                        message: 'What is the employee email (Required) ?',
                        validate: this.validateEmail
                    }];
                                     
    };  
   
    //Employee Id input validation method.
    //This method returns a false if the user enters an invalid entry (empty, text, decimal, negative numbers etc).
    //The functions also checks if the id's are unique.
    //When the validation fails the user is provided the option to renter the id.
   
    validateIdInput(idinput, uid){
      
        if(idinput <=0 || isNaN(idinput) || !idinput || (idinput - Math.floor(idinput) != 0))
        {
            //console.log( "Please enter a valid employee id");
            return "Please enter a valid employee id";
        }
       if(uid && uid.includes(idinput))
        {   
            return `The employee id ${idinput} is in use , please provide a new one `;
        }
        return true;
    }   

    //This function runs a validation on an email input.
    //This is basically a format validation to check that the user input matches the expression string@string.com
    validateEmail(email)
    {
        const regExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email || !regExpression.test(email))
        {
            return "Please provide a valid email address in format string@string.com";
        }
        return true;
    }


    //The following three async functions will create a copy of the common questions and the extra required question based on employee role.
    async promptEngineer(){
        let questions =  [...this.commonQuestions];
        questions.push({type: 'input',
                        name: 'github',
                        message: "What is the engineer's github username (Required) ?" ,
                        validate: github => {
                            if(github)
                                {
                                    return true;
                                }
                                else{                                  
                                    return "Please provide a github username";
                                }
                            } });
        return  inquirer.
                prompt(questions);
    }

    async promptManager(){
        
        let questions = [...this.commonQuestions];
        questions.push({type: 'input',
                name: 'officenum',
                message: 'What is the mananger office number (Required) ?',
                validate: officenum => {
                    if(officenum)
                        {
                            return true;
                        }
                        else{
                              return "Please provide a office number";
                        }
                    }
             });
        return  inquirer.
                prompt(questions);};

    async promptIntern() {
        let questions = [...this.commonQuestions];
        questions.push({type: 'input',
                        name: 'school',
                        message: 'What is the school name (Required) ?' ,
                        validate: school => {
                            if(school)
                                {
                                    return true;
                                }
                                else{
                                     return "Please provide a school name";
                                }
                            }});
        return inquirer.prompt(questions);
    }

    //User can add multiple engineers and interns. The following function  will provide the user with the choices and based on them show the relevant questions.
    async addTeamMembers(){
            let {role} = await inquirer.prompt({
            type: 'list',
            name: 'role',
            message: 'Choose member role',
            choices: ['Engineer', 'Intern', 'Team Complete', new inquirer.Separator()]});

        if(role == 'Team Complete')
        {
            console.log('Generating team page!');         
        }
        else if(role == 'Engineer'){
            console.log("Enter Engineer details");
            let newEngineer = await this.promptEngineer();
            this.engineer.push(new Engineer(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.github));
            return this.addTeamMembers();   
        }
        else if(role == 'Intern'){
            console.log("Enter intern details");
            let newIntern = await this.promptIntern();
            this.intern.push(new Intern(newIntern.name, newIntern.id, newIntern.email, newIntern.school));
            return this.addTeamMembers(); 
        };     
    }

    //This function will start the application by showing the manager creation questions.
    //It will provide the users to add additional engineers and interns.
    //Once the user marks the team as complete and indext.html page will be created in dist folder.
    async intializeApp(){
        console.log("Start building your team!");
        console.log("Add manager details:");

        //Enclosing all function calls involving inquirer in try catch to capture and log errors.
        try{
            const newManager = await this.promptManager()  ;
            this.manager.push(new Manager(newManager.name, newManager.id, newManager.email, newManager.officenum));

            await this.addTeamMembers();  
        }
        catch (e)
        {
            console.error(e);
        }

        const pageHtml = await generatePage(this.manager, this.engineer, this.intern);

        const results= await fs(pageHtml, './dist/index.html');       
        console.log(results);
    }
};

module.exports = StartApp;

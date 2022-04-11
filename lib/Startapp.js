const Manager = require("./Manager")
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const generatePage = require("../src/generatePage");
const fs = require('fs');


class StartApp{
    constructor(){
        
        //Intialize arrays to add managers, interns and employees.
        this.manager=[];
        this.intern=[];
        this.engineer=[];

        //This array will be used to keep track of employee ids and will be used to check for duplicates in a validate function below.
        this.userId =[];
        
        // For all employee types the following questions are commnon. They are stored in an array.
        this.commonQuestions =[
                        {type: 'input',
                        name: 'name',
                        message: "Enter employee Name (Required)",
                        validate: name => {
                            if(name)
                                {
                                    return true;
                                }
                                else{
                                    console.log("Please provide a employee name");
                                    return false;
                                }
                            }                        
                        },
                        {
                        type: 'input',
                        name: 'id',
                        message: 'Enter employee id (Required)',
                        validate: (answers) => this.validateIdInput(answers, this.userId)
                        },
                        {
                        type: 'input',
                        name: 'email',
                        message: 'Enter employee email (Required)',
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
            console.log( "Please enter a valid id input");
            return false;
        }
       if(uid && uid.includes(idinput))
        {   
            console.log("This id is taken , enter a new id")
            return false;
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
            console.log("Please provide an email address");
            return false;
        }
        return true;
    }


    //The following three async prompt functions will create a copy of the common questions and the extra required question based on employee role.
    async promptEngineer(){
        let questions =  [...this.commonQuestions];
        questions.push({type: 'input',
                        name: 'github',
                        message: 'Enter github link (Required)' ,
                        validate: github => {
                            if(github)
                                {
                                    return true;
                                }
                                else{
                                    console.log("Please provide a github user name");
                                    return false;
                                }
                            } });
        return  inquirer.
                prompt(questions);
    }

    async promptManager(){
        
        let questions = [...this.commonQuestions];
        questions.push({type: 'input',
                name: 'officenum',
                message: 'Enter office number (Required)',
                validate: officenum => {
                    if(officenum)
                        {
                            return true;
                        }
                        else{
                            console.log("Please provide a office number name");
                            return false;
                        }
                    }
             });
        return  inquirer.
                prompt(questions);};

    async promptIntern() {
        let questions = [...this.commonQuestions];
        questions.push({type: 'input',
                        name: 'school',
                        message: 'Enter school (Required)' ,
                        validate: school => {
                            if(school)
                                {
                                    return true;
                                }
                                else{
                                    console.log("Please provide a school name");
                                    return false;
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
            this.userId.push(newEngineer.id);
            this.engineer.push(new Engineer(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.github));
            return this.addTeamMembers();   
        }
        else if(role == 'Intern'){
            console.log("Enter intern details");
            let newIntern = await this.promptIntern();
            this.userId.push(newIntern.id);
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

        const newManager = await this.promptManager()  ;
        this.userId.push(newManager.id);
        this.manager.push(new Manager(newManager.name, newManager.id, newManager.email, newManager.officenum));

        await this.addTeamMembers();  
        const pageHtml = await generatePage(this.manager, this.engineer, this.intern);

        fs.writeFile('./dist/index.html',pageHtml, err => {
            if(err)
            {
                console.log(err);
                return;
            }
            console.log("File saved");
        });       
    }
};

module.exports = StartApp;

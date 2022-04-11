const Manager = require("./Manager")
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const generatePage = require("../src/generatePage");
const fs = require('fs');


class StartApp{
    constructor(){
        this.manager=[];
        this.intern=[];
        this.engineer=[];
        this.userId =[];
        this.commonQuestions =[
                        {type: 'input',
                        name: 'name',
                        message: "Enter employee Name"                        
                        },
                        {
                        type: 'input',
                        name: 'id',
                        message: 'Enter employee id',
                        validate: (answers) => this.validateIdInput(answers, this.userId)
                        },
                        {
                        type: 'input',
                        name: 'email',
                        message: 'Enter employee email'}];
                                     
    };  
   
   
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

    async promptEngineer(){
        let questions =  [...this.commonQuestions];
        questions.push({type: 'input',
                        name: 'github',
                        message: 'Enter github link' });
        return  inquirer.
                prompt(questions);
    }

    async promptManager(){
        
        let questions = [...this.commonQuestions];
        questions.push({type: 'input',
                name: 'officenum',
                message: 'Enter office number' });
        return  inquirer.
                prompt(questions);};

    async promptIntern() {
        let questions = [...this.commonQuestions];
        questions.push({type: 'input',
                        name: 'school',
                        message: 'Enter school' });
        return inquirer.prompt(questions);
    }

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

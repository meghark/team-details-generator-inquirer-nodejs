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
        this.engQuestions = [
                            {type: 'input',
                            name: 'EngineerName',
                            message: "Enter Engineer Name"
                            },
                            {
                            type: 'input',
                            name: 'id',
                            message: 'Enter engineer id'
                            },
                            {type: 'input',
                            name: 'email',
                            message: 'Enter email'},
                            {type: 'input',
                            name: 'github',
                            message: 'Enter github link' } ];
        this.managerQuestions = [{type: 'input',
                                name: 'ManagerName',
                                message: "Enter Manager Name"},
                                {
                                    type: 'input',
                                    name: 'id',
                                    message: 'Enter Manager id'
                                },
                                {type: 'input',
                                name: 'email',
                                message: 'Enter email'},
                                {type: 'input',
                                name: 'officenum',
                                message: 'Enter office number' } ];
                            
         this.internQuestions =  [{type: 'input',
                                    name: 'InternName',
                                    message: "Enter Intern Name"},
                                    {
                                        type: 'input',
                                        name: 'id',
                                        message: 'Enter Intern id'
                                    },
                                    {type: 'input',
                                    name: 'email',
                                    message: 'Enter email'},
                                    {type: 'input',
                                    name: 'school',
                                    message: 'Enter school' } ] ;                 
    };  

    

    promptEngineer(){
        return  inquirer
        .prompt(this.engQuestions);
    }

    promptManager(){
        return  inquirer.
                prompt(this.managerQuestions);};

    promptIntern() {
        return inquirer
        .prompt(this.internQuestions);
    }

    addTeamMembers(){
        return  inquirer.prompt({
                     type: 'list',
                     name: 'role',
                     message: 'Choose member role',
                     choices: ['Engineer', 'Intern', 'Team Complete']
            })
            .then(({role})=>
            {
                if(role == 'Team Complete')
                {
                    console.log('Generating team page!');                    
                }
                else if(role == 'Engineer')
                {   
                    let newEngineer = await this.promptEngineer();
                    this.engineer.push(new Engineer(newEngineer.EngineerName, newEngineer.id, newEngineer.email, newEngineer.github));
                    return this.addTeamMembers();                                            
                }
                else if(role == 'Intern')
                {
                    let newIntern = await this.promptIntern();
                    this.intern.push(new Intern(newIntern.InternName, newIntern.id, newIntern.email, newIntern.school));
                    return this.addTeamMembers();                   
                }
            });
    }

    intializeApp(){
        console.log("Start building your team!");

        const newManager = await this.promptManager()  ;
        this.manager.push(new Manager(newManager.ManagerName, newManager.id, newManager.email, newManager.officenum));

        await this.addTeamMembers();  
        const pageHtml = await generatePage(this.manager, this.engineer, this.intern);

        fs.writeFile('../dist/index.html',pageHtml);       
    }
};

module.exports = StartApp;

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
    };  

    promptEngineer(){
        return  inquirer
        .prompt([
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
                message: 'Enter github link' } 
                ]);
    }

    promptManager(){
        return  inquirer.
                prompt([{type: 'input',
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
                        message: 'Enter office number' } ]
                    );
    };

    promptIntern() {
        return inquirer
        .prompt([{type: 'input',
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
        message: 'Enter school' } ]);
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
                    this.promptEngineer()
                        .then(eng => {
                            this.engineer.push(new Engineer(eng.EngineerName, eng.id, eng.email, eng.github));
                            return this.addTeamMembers();
                        })                                
                }
                else if(role == 'Intern')
                {
                    this.promptIntern()
                    .then(inte => {
                        this.intern.push(new Intern(inte.InternName, inte.id, inte.email, inte.school));
                        return this.addTeamMembers();
                    })
                }
            });
    }

    intializeApp(){
        console.log("Start building your team!");
      
        this.promptManager()
            .then((answers) => {
                this.manager.push(new Manager(answers.ManagerName, answers.id, answers.email, answers.officenum));
              })
            .then(() => {
                console.log("Add more team members");
                this.addTeamMembers();                   
            })
            .then(()=> {
                generatePage(this.manager, this.engineer, this.intern);
            }) 
            .then((pageHtml)=> {
                fs.writeFile('../dist/index.html',pageHtml);
            });
    }
};

module.exports = StartApp;

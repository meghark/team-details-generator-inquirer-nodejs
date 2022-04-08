const Manager = require("./Manager")
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");


class StartApp{
    constructor(){
        this.manager=[];
        this.intern=[];
        this.engineer=[];
    };

   addTeamMembers(){
           inquirer.
            prompt({
                     type: 'list',
                     name: 'role',
                     message: 'Choose member role',
                     choices: ['Engineer', 'Intern', 'Team Complete']
            })
            .then(({role})=>{
                if(role == 'Team Complete')
                {
                    console.log(this.manager);
                    console.log(this.intern);
                    console.log(this.engineer);
                }
                else if(role == 'Engineer')
                {   
                    inquirer
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
                                ])
                        .then(eng => {
                            this.engineer.push(new Engineer(eng.EngineerName, eng.id, eng.email, eng.github));
                            this.addTeamMembers();
                        })                                
                }
                else if(role == 'Intern')
                {
                    inquirer
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
                        message: 'Enter school' } ]
                    )
                    .then(inte => {
                        this.intern.push(new Intern(inte.InternName, inte.id, inte.email, inte.school));
                        this.addTeamMembers();
                    })
                }

            } );
   }

    intializeApp(){
        console.log("Start building your team!");
      
        inquirer.
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
                )
            .then((answers) => {
                this.manager.push(new Manager(answers.ManagerName, answers.id, answers.email, answers.officenum));
              })
            .then(() => {
                console.log("Add more team members");
                this.addTeamMembers();                   
            })   ;       

    }
};

module.exports = StartApp;

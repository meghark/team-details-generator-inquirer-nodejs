const Manager = require("./Manager")
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");


class StartApp{
    constructor(){};

    intializeApp(){
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
            .then((answers) => {console.log(answers)});
    }
};

module.exports = StartApp;

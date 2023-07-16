function init() {

    const path = require('path');
    const inquirer = require('inquirer');
    const fs = require('fs');
    const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
       type: 'input',
       message: 'What is the title of your project?',
       name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project?',
        name: 'description'
     },
     {
        type: 'input',
        message: 'What is the installation process?',
        name: 'installation'
     },
     {
        type: 'input',
        message: 'How do you use your application?',
        name: 'usage'
     },
     {
        type: 'input',
        message: 'Who is accredited with building this project?',
        name: 'credit'
     },
     {
        type: 'input',
        message: 'How do I/others contribute to this application?',
        name: 'contributions'
     },
     {
        type: 'list',
        message: 'What licence are you using for your repository?',
        choices: ['MIT', 'GNU General Public License 2.0', 'Apache License 2.0', 'GNU General Public License 3.0', 'Mozilla Public Licence 2.0', 'Unlicense'],
        name: 'licence'
     },
     {
        type: 'input',
        message: 'How do I/others update the tests for this application?',
        name: 'tests'
     },
     {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github'
     },
     {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
     }]

     inquirer.prompt(questions)
     .then((response) => {
        return fs.writeFileSync(path.join (process.cwd(), "README.md"), generateMarkdown(response));
     });

};

init();

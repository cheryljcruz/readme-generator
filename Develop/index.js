// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
// include project title, sections: description, installation, usage, license, contributions, tests, and questions

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process for your project: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How could this project be used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license did you use for your project?',
        choices: ['Apache', 'MIT', 'GNU', 'Mozilla', 'Unlicense', 'Boost', 'BSD', 'Zlib', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the guidelines to contribute?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How does the user test this application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];


//  Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then((resp) => {
            const generateRead = generateMarkdown(resp);
            fs.writeFile('./README.md', generateRead, err => {
                if (err) throw new Error(err);
                console.log('ReadMe Created!')
            });
        });
};

// Function call to initialize app
init();



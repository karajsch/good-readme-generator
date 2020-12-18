const inquirer = require('inquirer');
const fs = require('fs');

const questions = [{
        type: 'input',
        message: "What is your username on GitHub?",
        name: 'username'
    },
    {
        type: 'input',
        message: "What is your preferred contact email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },

    {
        type: 'input',
        message: "Please write a description of the project here. What was your motivation? What problems are being solved?",
        name: 'description'
    },

    {
        type: 'input',
        message: "Please describe the steps required for successful installation.",
        name: 'install'
    },

    {
        type: 'input',
        message: "Please provide instructions and examples for use.",
        name: 'usage'
    },

    {
        type: 'input',
        message: "Please credit any collaborators if any, or write 'sole author'.",
        name: 'credits'
    },

    {
        type: 'list',
        message: "Which option is the best license for your project?",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];


function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));

        const readme = `
# Project Title 
## ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Collaborators](#credits)
- [Feedback](#feedback)

## Project Description 
${answers.description}

## Installation 
${answers.install}

## Usage 
${answers.usage}

## Collaborators
${answers.credits}

## License
This project is licensed under ${answers.license}

## Feedback
For all inquiries about this project, please contact me on Github - @[${answers.username}](https://github.com/${answers.username}) - or you can email me at ${answers.email}.
`

        fs.writeFile('generated/README.md', readme, (err) =>
            err ? console.error(err) : console.log('Hooray')
        );
    });
}


init();
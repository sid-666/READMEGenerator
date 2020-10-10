const inquirer = require("inquirer");
const fs = require("fs")
const util = require("util")
const writetofileAsync = util.promisify(fs.writeFile)
// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe it?",
        name: "description"
    },
    {
        type: "input",
        message: "insatallation method:",
        name: "installation"
    },
    {
        type: "input",
        message: "Use case of app:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contributing:",
        name: "contributing"
    },
    {
        type: "checkbox",
        message: "Select license:",
        choices: [
            "Apache",
            "MIT",
            "ISC",
            "GNU GPLv3"
        ],
        name: "license"
    },
    {
        type: "input",
        message: "Tests:",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your github link?",
        name: "myLink"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
];
function promptuser() {
    return inquirer.prompt(questions)
}
function generateReadMe(response) {
    return `# ${response.title}
## Description 
![License](http://img.shields.io/badge/License-${response.license}-blue.svg "License badge")

${response.description}
## Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${response.installation}
## Usage
${response.usage}
## License
    For more information on the License clink on the link below
[License](https://opensource.org/licenses/${response.license})
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
Follow the Github link here
${response.myLink}
My Email is here for additional questions
${response.email}
`
}
// function to initialize program
function init() {
    promptuser()
        .then(function (answer) {
            const readme = generateReadMe(answer)
            return writetofileAsync("README.md", readme)
        })
        .catch(function (err) {
            console.log(err)
        })
}

// function call to initialize program
init();



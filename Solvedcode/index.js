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
        message: "Credit:",
        name: "credit"
    },
    {
        type: "input",
        message: "License:",
        name: "license"
    },
];


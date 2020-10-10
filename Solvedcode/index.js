const inquirer = require("inquirer");
const fs = require("fs")
const util = require("util")
const writetofileAsync = util.promisify(fs.writeFile)


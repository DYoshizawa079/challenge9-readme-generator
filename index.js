// Include the packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What is the name of the project/application?"
    },
    {
        type: "input",
        name: "Description",
        message: "Give a description of your project/application."
    },
    {
        type: "input",
        name: "Installation",
        message: "Give a description of how your project/application will be installed."
    },
    {
        type: "input",
        name: "Usage",
        message: "Give an example of how your project/applicaiton will be used."
    },
    {
        type: "input",
        name: "Credits",
        message: "Give names of people or organizations who were involved in the creation of this project/application."
    },
    {
        type: "checkbox",
        name: "License",
        message: "Indicate how other developers can use your project (licensing).",
        choices: ["MIT", "ISC", "Mozilla Public License 2.0", "GNU General Public v2.0", "GNU General Public v3.0",]
    },
    {
        type: "input",
        name: "Testing",
        message: "How would someone test your project/application."
    },
])
.then(response => fs.writeFile("README.md", `#${response.Title}
##Description
${response.description}
`, error => {
    if (error) throw error
}))

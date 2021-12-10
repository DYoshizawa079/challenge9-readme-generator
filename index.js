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
        name: "Deployment",
        message: "Give the URL of the deployed application. Please ensure it starts with 'https://'."
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
        name: "Usage_screenshot",
        message: "Give a URL that shows a screenshot of the project."
    },
    {
        type: "checkbox",
        name: "License",
        message: "Indicate how other developers can use your project (licensing).",
        choices: ["MIT", "ISC", "Mozilla Public License 2.0", "GNU General Public v2.0", "GNU General Public v3.0",]
    },
    {
        type: "input",
        name: "Credits",
        message: "Give names of people or organizations who were involved in the creation of this project/application."
    },
    {
        type: "input",
        name: "Testing",
        message: "How would someone test your project/application."
    },
    {
        type: "input",
        name: "Github_name",
        message: "What's the name of the Github user that should be contacted for further information?"
    },
    {
        type: "input",
        name: "Email",
        message: "What's the email address that should be contacted for further information?"
    }
])
.then(response => fs.writeFile("README.md", `# ${response.Title}
## Description
${response.Description}

Deplyoment URL: [${response.Deployment}](${response.Deployment})
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits/Contributors](#credits)
* [Testing](#testing)
* [Questions](#questions)
## Installation
${response.Installation}
## Usage
${response.Usage}

![The app in use](${response.Usage_screenshot})
## License
${response.License}
## Credits/Contributors
${response.Credits}
## Testing
${response.Testing}
## Questions
If you have any further questions, please contact the author at:
- Email: [${response.Email}](mailto:${response.Email})
- Github URL: [https://github.com/${response.Github_name}](https://github.com/${response.Github_name})
`, error => {
    if (error) throw error
}))
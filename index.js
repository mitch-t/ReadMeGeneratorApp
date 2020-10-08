const inquirer = require("inquirer");
const fs = require ("fs");

inquirer.prompt([
    {
        type: "input",
        message: "Enter your repo name.",
        name: "reponame"
    },
    {   type: "input",
        message: "Enter your email address.",
        name: "email"  
    },
    {   type: "input",
        message: "Enter your Github username?",
        name: "github"  
    },
    {   type: "input",
        message: "What is the name of your project?",
        name: "projectname"
    },
    {   type: "input",
        message: "Briefly describe your project.",
        name: "description"
    },
    {   type: "input",
        message: "Describe how to use your application.",
        name: "usage"
    },
    {   type: "input",
        message: "Describe how to install your application.",
        name: "install"
    },
    {   type: "input",
        message: "Provide instructions for contributing to this project.",
        name: "contributing"
    },
    {   type: "input",
        message: "Explain how this project can be tested.",
        name: "test"   
    },
    {   type: "list",
        message: "Select a license for your application. Use the arrow keys and press enter to select",
        name: "license",
        choices: ["MIT","ISC","GNU","Apache"]
    },
]).then(function(data) {
const readMestring = `# ${data.projectname}

<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->
![GitHub repo size](https://img.shields.io/github/repo-size/${data.github}/${data.reponame})



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions) 

## About ${data.projectname}
${data.projectname} - ${data.description}

## Installing ${data.projectname}
To install ${data.projectname}, follow these steps: ${data.install}

## Using ${data.projectname}
${data.usage}

## Contributing to ${data.projectname}
Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Tests on ${data.projectname}
How and what to test

## Questions
If you have any questions you can contact me at ${data.email}.
Github: https://github.com/${data.github}

## License
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [${data.license}](<link>).`
    
    fs.writeFile("README.md", readMestring, function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });
  
 // [license-shield]: (https://img.shields.io/github/${data.license}/${data.github}/repo.svg?style=flat-square)
//  [license-url]: (https://github.com/${data.github}/${data.reponame}//blob/master/LICENSE.txt)
//  [![MIT License][license-shield]][license-url]
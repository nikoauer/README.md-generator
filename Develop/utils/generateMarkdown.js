// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # <${data.title}>

  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Github](#github)
  - [Email](#email)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## Credits

  ${data.credit}
  
  ## License

  ${data.licence}

  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  
  ## How to Contribute

  ${data.contributions}
  
  ## Tests

  ${data.tests}

  ## Github

  ${data.github}
    
  ## Email

  ${data.email}

`;
}

module.exports = generateMarkdown;

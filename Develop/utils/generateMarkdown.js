// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function Licences (data) {
  const lincenceInput = data.licence[0];
  let licenceBadge = " ";
  let licenceLink = " ";

  if (lincenceInput === 'MIT') {
    licenceBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    licenceLink = 'https://opensource.org/licenses/MIT'
  }
  if (lincenceInput === 'GNU General Public License 2.0') {
    licenceBadge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
    licenceLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  }
  if (lincenceInput === 'Apache License 2.0') {
    licenceBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    licenceLink = 'https://opensource.org/licenses/Apache-2.0'
  }
  if (lincenceInput === 'GNU General Public License 3.0') {
    licenceBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    licenceLink = 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if (lincenceInput === 'Mozilla Public Licence 2.0') {
    licenceBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
    licenceLink = 'https://opensource.org/licenses/MPL-2.0'
  }
  if (lincenceInput === 'Unlicense') {
    licenceBadge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
    licenceLink = 'http://unlicense.org/'
  }
  return licenceBadge, licenceLink;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# <${data.title}>

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
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

  ${Licences(data)}

  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  
  ## How to Contribute

  ${data.contributions}
  
  ## Tests

  ${data.tests}

  ## Github

  ${data.github}
    
  ## Email

  ${data.email}`
}

module.exports = generateMarkdown;

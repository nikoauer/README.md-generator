//this function takes the data from the CLI response for the licences and badges
function Licences (data) {
  const lincenceInput = data.licence;
  let licenceBadge = ' ';
  let licenceLink = ' ';
//it checks if the chosen licence was selected and then returns the variables above to store the link and badge for each licence
// the licence link and badge is then displayed in the generateMarkdown function in their respective sections.
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
  return {badge: licenceBadge, link : licenceLink};
}

//this function writes the response data from CLI to this template readme.md file structure so it can be displayed once written in the index.html
function generateMarkdown(data) {

    const { badge, link } = Licences(data); // Extract the badge and link from the returned object
  return `# <${data.title}>

  ## Badge licence
  ${badge}

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
  
  ## Licence
  ${link}

  ## Contributions
  ${data.contributions}
  
  ## Tests
  ${data.tests}

  ## Github
  https://github.com/${data.github}
    
  ## Email
  Contact me through this email:${data.email}`
}

module.exports = generateMarkdown;
